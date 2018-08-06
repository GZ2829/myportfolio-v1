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
app.use('../client/src/app/components/contact/contact.component.html', express.static(path.join(__dirname, 'contact')))


app.listen(4040, () =>
    console.log('Up and Running on 4200')
);

app.post('/send', (req,res)=>{
    const output= `
    <h1>You have a new message</h1>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.contactName}</li>
    <li>Email:${req.body.contactEmail}</li>
    </ul>
    <h4>Message:</h4>
    <p>${req.body.contactMessage}</p>`

    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
       
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Node Mail Contact" <gregdev28@outlook.com>', 
            to: 'Greg Zucchero, gzucchero24@gmail.com', 
            subject: 'New message from portfolio site', 
            text: '', 
            html: output 
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            res.render('contact', {Msg: 'Email Has Been Sent'})
            
        });
    });
    
})

