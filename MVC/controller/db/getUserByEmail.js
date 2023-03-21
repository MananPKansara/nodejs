const User = require('./../../model/model');

async function getUserByEmail(email)
{
    return User.find({email : email});
}

module.exports = getUserByEmail;