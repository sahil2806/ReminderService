const TicketService = require('../service/email-service');

const create = async (req,res) =>{
    try {
        const response = await TicketService.createNotification(req.body);
        console.log('response',response);
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'Successfully registered for an email reminder'
        })
    } catch (error) {
        return res.status(201).json({
            success:false,
            data:{},
            err: error,
            message:'unable to  registered for an email reminder'
        })
    }
}

module.exports = {
    create,
}