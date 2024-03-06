// // server.js (Backend)
// const express = require('express');
// const multer = require('multer');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const app = express();
// const port = 5000;

// const storage = multer.memoryStorage();
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
//   fileFilter: (req, file, cb) => {
//     if (['.doc', '.txt', '.pdf'].includes(file.originalname.slice(-4))) {
//       cb(null, true);
//     } else {
//       cb(new Error('Invalid file type'));
//     }
//   }
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/send-email', upload.single('resume'), async (req, res) => {
//   try {
//     const { name, email, qualification, message } = req.body;
//     const resume = req.file;

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS
//       }
//     });

//     const mailOptionsCompany = {
//       from: process.env.SMTP_USER,
//       to: process.env.COMPANY_EMAIL,
//       subject: 'New Job Application',
//       html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Qualification: ${qualification}</p><p>Message: ${message}</p>`
//     };

//     const mailOptionsSender = {
//       from: process.env.SMTP_USER,
//       to: email,
//       subject: 'Thank you for applying',
//       html: `<p>Dear ${name},<br/>Thank you for your application. We will review your details and contact you shortly.</p>`
//     };

//     // Send emails only in the server-side code
//     if (typeof window === 'undefined') {
//       // Import DKIM module only in the server-side code
//       const { DKIM } = await import('nodemailer/lib/dkim');

//       // Add DKIM signature to the email
//       const dkim = new DKIM({
//         domainName: 'your_domain.com',
//         keySelector: 'your_key_selector',
//         privateKey: 'your_private_key'
//       });
//       dkim.sign(mailOptionsCompany);

//       await transporter.sendMail(mailOptionsCompany);
//       await transporter.sendMail(mailOptionsSender);
//     }

//     res.sendStatus(200);
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.sendStatus(500);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
