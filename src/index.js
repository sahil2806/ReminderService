const express = require('express');
const bodyParser = require('body-parser');
const {PORT, REMINDER_BINDING_KEY} = require('./config/serverConfig');
 
const TicketController = require('./controllers/ticket-controller');
const jobs = require('./utils/job');
const {createChannel ,subscribeMessage } = require('./utils/messageQueue')
const  EmailService = require('./service/email-service');

const setupAndStartServer = async  () => {
    const app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    
    app.post('/api/v1/tickets', TicketController.create);

    const channel = await createChannel();
    subscribeMessage(channel,EmailService.subscribeEvents ,REMINDER_BINDING_KEY);


    app.listen(PORT, async () =>{
        console.log(`Server started at port ${PORT}`);
        // jobs();
    })

}

setupAndStartServer();