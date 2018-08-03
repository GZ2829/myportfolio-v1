const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path')
const nodemailer = require('nodemailer');

const app = express();

// View Engine Setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Static Folder
app.use('../client', express.static(path.join(__dirname, 'client')))


app.listen(4540, () =>
    console.log('Up and Running on 4040')
);