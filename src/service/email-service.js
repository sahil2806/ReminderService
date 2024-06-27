const sender = require('../config/emailConfig')
const TicketRepository = require('../repository/ticket-repository');


const sendBasicEmail =  async ({from,to,subject,text}) => {
    try {
      
        return   await sender.sendMail({
            from: from ,
            to: to ,
            subject: subject,
            text: text
        });
    } catch (error) {
        console.log(error);
    }
}

const updateTicket  = async (ticketId,data) =>{
    try {
        const repo = new TicketRepository();
        const response = repo.update(ticketId,data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const fetchPendingEmails = async ( ) =>{
    try {
        const repo = new TicketRepository();
        const response = repo.get({status:"PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createNotification = async (data) => {
    try {
        const repo = new TicketRepository();
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const subscribeEvents = async (payload) =>{
    let service = payload.service;
    let data = payload.data;
    switch(service){
        case 'CREATE_TICKET':
            await createNotification(data);
        case 'SEND_BASIC_MAIL':
            await sendBasicEmail(data);
        default:
            console.log('No valid event received');
            break;
    }
}



module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket,
    subscribeEvents
}
