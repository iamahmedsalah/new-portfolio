const CONTACT_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>New Contact Form Submission</title>
  <style>
   @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
    
    body {
      font-family: 'Poppins', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 0;
      background-color: #f0f0f0;
    }
    
    .container {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      overflow: hidden;
      margin: 20px;
    }
    
    .header {
      background: linear-gradient(135deg, #d97706, #f59e0b);
      padding: 30px 20px;
      text-align: center;
      position: relative;
    }
    
    .logo-container {
      background-color: #ffffff;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 0 auto 15px;
      padding: 5px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .logo {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    
    .header h1 {
      color: white;
      margin: 0;
      font-size: 24px;
      font-weight: 600;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .content {
      background-color: #ffffff;
      padding: 30px;
    }
    
    .message-box {
      background-color: #f8f9fa;
      border-left: 4px solid #f59e0b;
      padding: 15px;
      margin: 20px 0;
      border-radius: 0 8px 8px 0;
    }
    
    .detail-row {
      display: flex;
      margin-bottom: 12px;
    }
    
    .detail-label {
      font-weight: 600;
      width: 90px;
      color: #d97706;
    }
    
    .detail-value {
      flex: 1;
      color: #333;
    }
    
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #d97706, #f59e0b);
      color: white;
      text-decoration: none;
      padding: 12px 25px;
      border-radius: 50px;
      font-weight: 500;
      margin-top: 15px;
      text-align: center;
      box-shadow: 0 4px 10px rgba(245, 158, 11, 0.3);
      transition: all 0.3s ease;
    }
    
    .footer {
      text-align: center;
      padding: 20px;
      color: #666;
      font-size: 13px;
      background-color: #f8f9fa;
      border-top: 1px solid #eee;
    }
    
    .social-icons {
      margin: 15px 0;
    }
    
    .social-icon {
      display: inline-block;
      margin: 0 8px;
      background-color: #f0f0f0;
      padding: 8px;
      border-radius: 50%;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        <img class="logo" src="" alt="Logo" />
      </div>
      <h1>New Message Received</h1>
    </div>
    
    <div class="content">
      <p>You've received a new message from your portfolio contact form.</p>
      
      <div class="detail-row">
        <div class="detail-label">From:</div>
        <div class="detail-value">{name}</div>
      </div>
      
      <div class="detail-row">
        <div class="detail-label">Email:</div>
        <div class="detail-value">{email}</div>
      </div>
      
      <div class="detail-row">
        <div class="detail-label">Subject:</div>
        <div class="detail-value">{subject}</div>
      </div>
      
      <div class="detail-row">
        <div class="detail-label">Date:</div>
        <div class="detail-value">{date}</div>
      </div>
      
      <p><strong>Message:</strong></p>
      <div class="message-box">
        {message}
      </div>
      
      <a href="mailto:{email}" class="button">Reply to {name}</a>
    </div>
    
    <div class="footer">
      <p>This email was sent to you because someone submitted the contact form on your portfolio website.</p>
      <div class="social-icons">
        <a href="https://github.com/yourusername" class="social-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="24" height="24">
        </a>
        <a href="https://linkedin.com/in/yourusername" class="social-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="24" height="24">
        </a>
        <a href="https://twitter.com/yourusername" class="social-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" width="24" height="24">
        </a>
      </div>
      <p>© ${new Date().getFullYear()} Ahmed Soliman. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

// Make sure to export the template correctly
export { CONTACT_EMAIL_TEMPLATE };