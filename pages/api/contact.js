import nodemailer from 'nodemailer';
import validator from 'validator';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { CONTACT_EMAIL_TEMPLATE } from './emailContactTemp';

// Configure rate limiter: maximum 5 requests per IP per 15 minutes
const rateLimiter = new RateLimiterMemory({
    points: 5, // 5 requests
    duration: 15 * 60, // per 15 minutes
});

export default async function handler(req, res) {
    // Only allow POST method
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Apply rate limiting based on IP
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        await rateLimiter.consume(ip);
    } catch (error) {
        return res.status(429).json({
            error: 'Too many requests, please try again later'
        });
    }

    // Get form data from request body
    const { name, email, subject, message, honeypot } = req.body;

    // Honeypot check (if field is filled, it's likely a bot)
    if (honeypot) {
        // Return success to the bot without actually sending email
        return res.status(200).json({ success: true });
    }

    // Validate inputs
    if (!name || !email || !message) {
        return res.status(400).json({
            error: 'Please complete all required fields'
        });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({
            error: 'Please enter a valid email address'
        });
    }

    if (name.length < 2 || name.length > 50) {
        return res.status(400).json({
            error: 'Name must be between 2 and 50 characters'
        });
    }

    if (message.length < 10 || message.length > 1000) {
        return res.status(400).json({
            error: 'Message must be between 10 and 1000 characters'
        });
    }

    // Sanitize inputs (basic sanitization)
    const sanitizedName = validator.escape(name);
    const sanitizedSubject = validator.escape(subject || 'New Contact Form Message');
    const sanitizedMessage = validator.escape(message);

    try {
        // Configure mail transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_PORT === '465', // Auto-determine based on port
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: true // Prevents man-in-the-middle attacks
            }
        });

        // Format current date
        const formattedDate = new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Prepare email content with template
        const emailContent = CONTACT_EMAIL_TEMPLATE
            .replace('{name}', sanitizedName)
            .replace('{email}', email)
            .replace('{subject}', sanitizedSubject)
            .replace('{message}', sanitizedMessage.replace(/\n/g, '<br>'))
            .replace('{date}', formattedDate);

        // Compose email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `Portfolio Contact: ${sanitizedSubject}`,
            html: emailContent,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Return success response
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({
            error: 'Failed to send message. Please try again later.'
        });
    }
}