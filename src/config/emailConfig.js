const nodemailer = require("nodemailer");
const {EMAILID,EMAIL_PASS} = require('./serverConfig');

const sender = nodemailer.createTransport({
    service :'Gmail',
    auth: {
        user: EMAILID ,
        pass: EMAIL_PASS,
    },
});

module.exports = sender;