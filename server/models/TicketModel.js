const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    from:{
        type:String, 
        require:true,
        trim:true,
        maxLength:50
    },
    to:{
        type:String, 
        require:true,
        trim:true,
        maxLength:50
    },
    flightName:{
        type:String, 
        require:true,
        trim:true,
        maxLength:50
    },
    flightNo:{
        type:Number, 
        require:true,
        maxLength:10,
        trim:true
    },
    seats:{
        type:Number, 
        require:true,
        maxLength:10,
        trim:true
    },
    type:{
        type:String,
        default:"ticket"
    },
    time: {
        type: Date,  // Date will store both date and time
        required: true,
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    ticketfare:{
        type:Number,
        required: true,
        maxLength:10,
        trim:true
    }
}, {timestamps:true})

module.exports = mongoose.model('Ticket', TicketSchema);