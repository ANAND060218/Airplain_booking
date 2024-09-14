const mongoose = require('mongoose');

const mongo_url = 'mongodb+srv://sameer_2005:sameer_mohamed@flightbooking.ioipj.mongodb.net/';

const db = async() => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongo_url);
        console.log('DB connected');
    }catch(error){
        console.log('DB connection error');
    }
}

module.exports = {db}