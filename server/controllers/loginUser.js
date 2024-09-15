const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');
const {db} = require('../db/db');


exports.login = async (req, res) => {
    db();
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('Invalid credentials');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.findUsers = async(req, res) => {
    db();
    try{
        const users = await User.find().sort({createdAt: -1});
        console.log(users);
    }catch(error){
        res.status(500).json({message:'Server Error'});
    }
}