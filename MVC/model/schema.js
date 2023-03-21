const mongoose = require('mongoose');
const connection = require('./../controller/db/connection');
const crypto = require('crypto');
require('dotenv').config();

let schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        enum: ['male', 'female'],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    number: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true,
        validator: {
            function(v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    image : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
})

schema.pre('save', function () {
    const hmac = crypto.createHmac('sha-256', 'bf97768dc1d6a0f07bacb597c842668929110695ed43e7248ef37d5f0caa7aa2');
    hmac.update(this.password);
    const digest = hmac.digest('hex');
    this.password = digest;
})
module.exports = schema;