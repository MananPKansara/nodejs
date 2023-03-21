const express = require('express');
const router = express.Router();
const path = require('path');

const signupValidation = require('./../controller/signupValidation')
const uploads = require('./../controller/fileUpload');
const addUser = require('./../controller/db/addUser');
const validateUser = require('./../controller/validateUser')

// login form display
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
    console.log("Login form");
})

router.post('/', express.urlencoded({extended : true}), validateUser, (req, res) => {

    console.log("Login form handle");
})

// signup form display
router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/signup.html'));
    console.log("Signup form");
})

router.post('/signup', uploads, signupValidation, addUser)

module.exports = router;