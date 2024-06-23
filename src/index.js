const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
var cron = require('node-cron');
const {sendBasicEmail} = require('./service/email-service')

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    app.listen(PORT, async () =>{
        console.log(`Server started at port ${PORT}`);
        // await sendBasicEmail(
        //     'sahusahil2226@gmail.com',// sender
        //     'bt22cse101@iiitn.ac.in',// receiver
        //     'Testing message', // title
        //     'How are you' // body
        // );
        // cron.schedule('* * * * *', () => {
        //     console.log('running a task every minute');
        // });
        
    })
}



setupAndStartServer();