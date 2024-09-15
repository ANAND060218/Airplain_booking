const Ticket = require('../models/TicketModel');
const {db} = require('../db/db');

exports.searchTicket = async(req,res) => {
    db();
    try {
        const from = req.body.from;
        const to = req.body.to;
        const date2 = new Date(req.body.date).toISOString().split('T')[0];  // Ensure that the date format in the request matches what's stored in MongoDB

        // Find a ticket that matches 'from', 'to', and 'date'
        const ticket = await Ticket.find({ from: from, to: to });
        const reqTickets = ticket.filter((item) => {
            return new Date(item.time).toISOString().split('T')[0] === date2;
        })


        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        // Return the found ticket
        res.status(200).json(reqTickets);
    } catch (error) {
        res.status(500).json({ message: 'Error finding ticket', error: error.message });
    }
}