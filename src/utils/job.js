const cron = require('node-cron')
const emailService = require('../service/email-service');


/**
 * 10:00 am
 * Every 5 minutes
 * We will check are their any pending emails which was expected to sent
 * By now and is pending
*/

const setupJobs = () =>{
    cron.schedule('*/2 * * * *', async()=>{
        const response =  await emailService.fetchPendingEmails();
        response.forEach(async (email) => {
            emailService.sendBasicEmail({
                from: "ReminderService@airline.com",
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            })
            await emailService.updateTicket(email.id, {status: "SUCCESS"});
        });
    });

}

module.exports = setupJobs;