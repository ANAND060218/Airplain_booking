const TicketSchema = require('../models/TicketModel');
const {db} = require('../db/db');

exports.addTicket = async(req, res) => {
    db();
    const {from, to, flightName, flightNo, seats, time, category, ticketfare} = req.body;
    const flight = TicketSchema({
        from,
        to, 
        flightName, 
        flightNo, 
        seats, 
        time,
        category,
        ticketfare
    });
    console.log(flight);
    try{
        if(!from || !to || !flightName || !flightNo || !seats || !time || !category || !ticketfare){
            return res.status(400).json({message: 'All fields are required'});
        }
        await flight.save();
        res.status(200).json({message:'Ticket Added'});
    }catch(error){
        res.status(500).json({message:'Server Error'});
    }
}



exports.deleteTickets = async(req,res) => {
    db();
    const id = req.params.id;
    TicketSchema.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json({message:'Ticket Deleted'});
    })
    .catch((err) => {
        res.status(500).json({message:'Ticket Cannot Be Deleted'});
    })
}

exports.getTickets = async(req,res) => {
    db();
    try{
        const tickets = await TicketSchema.find().sort({createdAt: -1});
        res.status(200).json(tickets);
    }catch(error){
        res.status(500).json({message:'Server Error'});

    }
}
exports.updateTickets = async(req,res) => {
    db();
    try {
        // Extract ticket ID from URL params and time from query params
        const id = req.query.id; // Ticket ID from query parameter
        const time = req.query.time; // New time from query parameter

        if (!id || !time) {
            return res.status(400).json({ message: 'Ticket ID and time are required' });
        }

        // Update the ticket's time field by its ID
        const result = await TicketSchema.findByIdAndUpdate(
            id,
            { $set: { time: new Date(time) } }, // Ensure time is a Date object
            { new: true } // Return the updated document
        );

        if (!result) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        res.status(200).json({ message: 'Ticket updated successfully', ticket: result });
    } catch (error) {
        console.error('Error updating ticket:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
