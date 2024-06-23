const { where } = require('sequelize');
const {NotificationTicket} = require('../models/index')

const {op} = require('sequelize');

class TicketRepository {

    async getAll(){
        try {
            const ticket = await NotificationTicket.findAll();
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async create(data){
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async get(filter){
        try {
            const ticket = await NotificationTicket.findAll({
                where:{
                    status:filter.status
                }
            })
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async update(ticketId, data){
        try {
            console.log("data",data);
            const ticket = await NotificationTicket.update(data,{
                where:{
                    id:ticketId
                }
            });
            
            return ticket;
        } catch (error) {
            throw error;
        }
    }


}

module.exports = TicketRepository;
















