const express = require('express');
const app = express();

const User = require('./../../model/model');

console.log(User);
async function addUser(req, res, next)
{
    console.log(req.validate);
    let newUser = new User(req.body);
    try{
        let result = await newUser.save();
        res.send("Data inserted successfully");
    }catch(err){
        res.status(400).send(err);
    }
}

module.exports = addUser;
