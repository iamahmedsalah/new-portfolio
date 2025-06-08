import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';


// Animation variant
import {containerVariants ,itemVariants} from '../../variants'


const socialLinks = [
  { name: 'Email', icon: FaEnvelope, url: 'mailto:iamahmedslahios@gmail.com', color: '#EA4335' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/iamahmedsalah', color: '#2b3137' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/iamahmedsoliman', color: '#0A66C2' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Honeypot field for spam prevention
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    try {
      // Send form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Success
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setFormError(error.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-info mb-4">
            Get in <span className='text-accent mx-1 animate-pulse'>Touch.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
            Fill out the form below or reach out through my social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center col-reverse">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-base-300/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div 
                  className="w-20 h-20 bg-accent/20 rounded-full mx-auto flex items-center justify-center mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaPaperPlane className="text-accent text-3xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you as soon as possible, typically within 24-48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl font-bold text-primary mb-6"
                >
                  Send Me a Message
                </motion.h2>
                
                {formError && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500"
                  >
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {formError}
                    </div>
                  </motion.div>
                )}
                
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="name" className="block text-primary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full p-3 text-primary bg-transparent outline-2 outline-accent/50 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="email" className="block text-primary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full p-3  text-primary bg-transparent outline-2 outline-accent/50 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="subject" className="block text-primary mb-2">Subject (Optional)</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full p-3 text-primary bg-transparent outline-2 outline-accent/50 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="message" className="block text-primary mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    className="w-full p-3  text-primary bg-transparent outline-2 outline-accent/50 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    required
                  ></textarea>
                </motion.div>
                
                {/* honeypot field to catch bots */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-accent text-base-100 rounded-lg shadow-lg hover:bg-accent/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-base=-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-first md:order-last"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-primary mb-6"
            >
              Connect With Me
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-gray-400 mb-8"
            >
              I&apos;m currently available for freelance work, collaborations, and interesting projects.
              Feel free to reach out through any of these platforms:
            </motion.p>
            
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-base-300/50 backdrop-blur-sm rounded-full hover:bg-accent/10 transition-all duration-300"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${link.color}20` }} 
                  >
                    <link.icon size={24} style={{ color: link.color }} />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">{link.name}</h3>
                    <p className="text-sm text-gray-400">
                      {link.url.replace('mailto:', '').replace('https://', '')}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <motion.div
              variants={itemVariants}
              className="mt-12 p-6 bg-accent/10 rounded-xl border border-accent/20"
            >
              <h3 className="font-semibold text-primary mb-2">
                ⚡ Response Time
              </h3>
              <p className="text-gray-400">
                I typically respond to inquiries within 24-48 hours. For urgent matters, 
                please mention it in your message.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;