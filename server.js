const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser');
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production' ) require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

let CORS_OriginURL = process.env.NODE_ENV === 'production' ? 'https://codesikal.herokuapp.com' : 'http://localhost:3000';

app.use(cors({origin: CORS_OriginURL}))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
if (process.env.NODE_ENV === 'production' ) app.use(enforce.HTTPS({trustProtoHeader: true}));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.get('/', (req, res) => {
    console.log('GET request in place')
    res.send({message: 'it works'})
})

app.listen(port, err => {
    if (err) throw err;
    console.log('Server running on port ' + port)
});

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
});

app.post('/send', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let subject = `Message from ${name}, through CodeSikal`;
    let message = req.body.message;
    let content = `name: ${name} \n email: ${email} \n message: ${message}`;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: `${process.env.USER_EMAIL}`,
            pass: `${process.env.USER_PASS}`
        }
    });

    let mail = {
        from: name,
        to: `${process.env.USER_EMAIL}`,
        subject: subject,
        text: content
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            res.json({
                msg: 'fail',
                err
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    });
});
