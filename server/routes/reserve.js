const router = require('express').Router();

const {addTicket, getTickets, deleteTickets, updateTickets} = require('../controllers/ticket');
const {register} = require('../controllers/registerUser');
const {login, findUsers} = require('../controllers/loginUser');
const authMiddleWare = require('../controllers/authMiddleware');
const {searchTicket} = require('../controllers/searchTicket');

router.post('/add-ticket', addTicket)
.get('/get-ticket', getTickets)
.delete('/delete-tickets/:id', deleteTickets)
.put('/update-time', updateTickets)
.post('/register', register)
.post('/login', login)
.get('/getUsers', findUsers)
.post('/search-ticket', searchTicket);

module.exports = router;