const express = require('express');
const reserve = require('./routes/reserve');
const app = express();

const authMiddleWare = require('./controllers/authMiddleware');
const UserSchema = require('./models/UserSchema');
const {BookTicket} = require('./controllers/BookTicket');

const PORT = 3000;
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const cors = require('cors');
require('dotenv').config() 

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/reserve'));

// readdirSync('./routes').map((route) => app.use('/admin', require('./routes/' + route)));
app.post('/api/book-ticket', authMiddleWare, BookTicket);

app.use(cors());

app.get('/', (req, res) => {
    db();
    res.send('Hello World by sameer');
})


app.listen(PORT, () => {
    console.log("You're listening on port 3000");
})

app.get('/home', authMiddleWare, async (req, res) => {
    db();
    const userId = req.user.userId;
    const user = await UserSchema.findById(userId);
    console.log(user);
    if(user.type === 'user'){
        res.send('Welcome User');
    }else{
        res.send('Welcome Admin')
    }
    
});