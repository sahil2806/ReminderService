const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

const {sendBasicEmail} = require('./service/email-service')

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    app.listen(PORT, async () =>{
        console.log(`Server started at port ${PORT}`);
        await sendBasicEmail(
            'sahusahil2226@gmail.com',
            'bt22cse101@iiitn.ac.in',
            'Testing message',
            'How are you'
        );
        
    })
}



setupAndStartServer();