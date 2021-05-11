"use strict";
const nodemailer = require("nodemailer");

//Use any email credentials with Gmail or Yandex
async function sendEmail(to, body) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sender@email',
            pass: 'password'
        }
    });

    try {
        let info = await transporter.sendMail({
            from: 'sender@email',
            to: to,
            subject: "Vaccine slots opened",
            text: body,
        });
        if (info.accepted.includes(to)) {
            console.log('Email sent successfully!')
        } else {
            console.log('Unsuccesfull', info)
        }
    } catch (e) {
        console.log('Something went wrong in sending email notification', info)
    }

}

module.exports = {
    sendEmail,
}