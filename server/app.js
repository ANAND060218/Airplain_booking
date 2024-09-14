const express = require('express');
const app = express();

const PORT = 3000;

const {db} = require('./db/db');
const {readdirSync} = require('fs');
const cors = require('cors');

app.get('/', (req, res) => {
    db();
    res.send('Hello World by sameer');
})


app.listen(PORT, () => {
    console.log("You're listening on port 3000");
})