const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path')
const nodemailer = require('nodemailer');
const env = require('dotenv')

env.config()

const app = express();

// View Engine Setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Static Folder
app.use(express.static(__dirname, '/client/dist')
)

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://gz-portfolio.herokuapp.com/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + 'client/dist/index.html'));
});


app.listen(process.env.PORT || 4040 , () =>
    console.log('Up and Running')
);

app.post('/send', (req,res)=>{
    const output= `
    <h1>You have a new message</h1>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
    <h4>Message:</h4>
    <p>${req.body.message}</p>`

    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false, 
            auth: {
                user: process.env.DB_USER,
                pass: process.env.DB_PASS
            },
        });
    
       
        let mailOptions = {
            from: '"Node Mail Contact" <gregdev28@outlook.com>', 
            to: 'Greg Zucchero, gzucchero24@gmail.com', 
            subject: 'New message from Portfolio Site', 
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

