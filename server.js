const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-code', async (req, res) => {
  const { email } = req.body;
  const code = generateRandomCode(); // Функція для генерації випадкового коду

  // Надіслати код на електронну пошту
  try {
    await sendEmail(email, code);
    res.status(200).send({ message: 'Verification code sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ error: 'Failed to send verification code.' });
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password',
  },
});

const sendEmail = async (toEmail, code) => {
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: toEmail,
    subject: 'Verification Code for Password Reset',
    text: `Your verification code is: ${code}`,
  };

  return await transporter.sendMail(mailOptions);
};

const generateRandomCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Генеруємо шестизначний код
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
