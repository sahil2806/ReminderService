const dotenv = require('dotenv')
dotenv.config();

module.exports = {
    PORT:process.env.PORT,
    EMAIL_PASS: process.env.EMAIL_PASS,
    EMAILID:process.env.EMAILID
}

