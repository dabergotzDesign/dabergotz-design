const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5500;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res)=>{
    res.sendFile('D:/Development/Web_Dev/Projects/dabergotz-design/contact.html');
});

app.post('/', (req, res)=>{
    console.log(req.body);

    /* const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "4fc17af49c1f2a",
            pass: "38071bc7f1bd44"
        } */
    });

    //send mail with defined transport object
    /*
    const mailOptions = {
        from: req.body.email, // sender address
        to: "herooftime1989@gmail.com, smtp.mailtrap.io", // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.message, // plain text body
        //html: "<b>Hello world?</b>", // html body
      };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});
*/

app.listen(PORT, ()=>{
    console.log(`Server running:${PORT}`)
});