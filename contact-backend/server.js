require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

// Function to format Google app password
const formatAppPassword = (password) => {
  return password.replace(/\s+/g, '');
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: formatAppPassword(process.env.EMAIL_PASS) // Auto-remove spaces
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ SMTP Connection Failed:', error);
  } else {
    console.log('✅ SMTP Connection Successful');
    console.log('📧 Using email:', process.env.EMAIL_USER);
    console.log('🔑 Using formatted password:', formatAppPassword(process.env.EMAIL_PASS));
  }
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('📬 Email sent:', info.response);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Email error:', error);
    
    let errorMessage = 'Failed to send email';
    if (error.code === 'EAUTH') {
      errorMessage = `Authentication failed. Verify app password: ${formatAppPassword(process.env.EMAIL_PASS)}`;
    }
    
    res.status(500).json({ error: errorMessage });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});