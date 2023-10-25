const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000; // Set your desired port

app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
