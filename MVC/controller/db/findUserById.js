const User = require('./../../model/model');

async function findUserById(id)
{
    return User.findById(id);
} 

module.exports = findUserById;