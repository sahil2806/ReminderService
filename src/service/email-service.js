const sender = require('../config/emailConfig')

const sendBasicEmail =  async (fromEmail,toEmail,title,body) => {
    try {
         
        return   await sender.sendMail({
            from: fromEmail ,  
            to: toEmail ,  
            subject: title,  
            text: body, 
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail,
}
