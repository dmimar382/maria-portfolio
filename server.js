require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

const DOMAIN = process.env.REACT_APP_MAILGUN_DOMAIN;
const mg = mailgun({apiKey: process.env.REACT_APP_MAILGUN_API_KEY, domain: DOMAIN});
const myEmail = process.env.MY_EMAIL;


app.post('/send', (req, res) => {
    const { name, email, subject, message } = req.body;
    const data = {
      from: myEmail,  
      to: myEmail,    
      subject: subject,
      text: `Message from: ${name} <${email}>\nSubject: ${subject}\nMessage: ${message}`
    };
  
    mg.messages().send(data, function (error, body) {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({error: error.message});
      }
      res.json({message: 'Email sent successfully'});
    });
  });

app.listen(PORT, () => {
  console.log(`Server running`);
});
