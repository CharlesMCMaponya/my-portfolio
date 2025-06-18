require('dotenv').config();
const nodemailer = require('nodemailer');

const formatAppPassword = (password) => password.replace(/\s+/g, '');

console.log('Testing with email:', process.env.EMAIL_USER);
console.log('Raw password from .env:', process.env.EMAIL_PASS);
console.log('Formatted password:', formatAppPassword(process.env.EMAIL_PASS));

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: formatAppPassword(process.env.EMAIL_PASS)
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: 'Final Test',
  text: 'This is the final test email'
};

console.log('Sending test email...');

transporter.sendMail(mailOptions)
  .then(info => {
    console.log('✅ Test succeeded!');
    console.log('Response:', info.response);
  })
  .catch(error => {
    console.error('❌ Test failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n🔑 Verify your app password at:');
      console.log('https://security.google.com/settings/security/apppasswords');
      console.log('Formatted password used:', formatAppPassword(process.env.EMAIL_PASS));
    }
  });