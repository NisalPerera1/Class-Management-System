const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// parse application/json
app.use(bodyParser.json());

// enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// send email endpoint
app.post('/send-email', (req, res) => {
  const { name,email, subject, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // replace with your SMTP server hostname
    port: 587, // replace with your SMTP server port
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'nisaldilesh14@gmail.com', // replace with your SMTP server username
      pass: 'xfxhrzyampkdkpzq' // replace with your SMTP server password
    }
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: 'nisaldilesh14@gmail.com', // replace with your email address
    to: 'theimmortal875@gmail.com',
    name:name,
    email:email,
    subject: subject,
    message: message,
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent');
    }
  });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
module.exports=Mail;