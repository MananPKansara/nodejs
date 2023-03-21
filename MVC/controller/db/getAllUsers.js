const User = require('./../../model/model');

async function getAllUsers()
{
    return await User.find();
}

module.exports = getAllUsers;