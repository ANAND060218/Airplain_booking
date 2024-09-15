const Ticket = require('../models/TicketModel');
const User = require('../models/UserSchema');
const {db} = require('../db/db');


exports.BookTicket = async (req, res) => {
    const ticketId = req.body.ticketId;
    db();
    const userId = req.user.userId;
    const user = await User.findById(userId);
    const ticket = await Ticket.findById(ticketId);
    if(ticket.seats > 0){
        user.ticketsBooked.push(ticketId);
        ticket.seats -= 1;
        console.log(ticket);
        console.log(user);
        res.send('Ticket Booked Successfully');

    }else{
        res.send('Ticket is not available');
    }
    
}