const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "e8535736dc9c75",
        pass: "a8a5a5c1ec3b43"
    }
})


let mailOptions = {
    from: 'zhaniimen6@gmail.com',
    to: 'zhaniimen5@gmail.com',
    subject: 'Sending Email using Node.js ',
    text: 'That was easy!'
}


transporter.sendMail(mailOptions, function(err,info){
    if(err){
        console.log('Error')
    }else{
        console.log('Email sent',info.response);
    }
})