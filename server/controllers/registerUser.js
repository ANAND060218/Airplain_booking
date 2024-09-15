const express = require('express');
const bcrypt = require('bcrypt');
const {db} = require('../db/db');

const User = require('../models/UserSchema');



exports.register = async(req, res) => {
    db();
    const { username, email, password } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).send('User already exists');
        
        // Create new user
        user = new User({ username, email, password });
        await user.save();

        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
};
