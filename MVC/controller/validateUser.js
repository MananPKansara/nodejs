const getUserByEmail = require('./db/getUserByEmail');
const crypto = require('crypto');

async function validateUser(req, res, next)
{
    let recieved = req.body;
    let user = await getUserByEmail(recieved.email);

    if(user == [])
    {
        res.send(`<script>alert('Email is not correct')</script>`);
    }

    const hmac = crypto.createHmac('sha-256', 'bf97768dc1d6a0f07bacb597c842668929110695ed43e7248ef37d5f0caa7aa2');
    hmac.update(recieved.password);
    const digest = hmac.digest('hex');

    if(digest == user[0].password)
    res.send("Successfully logged in");
    else
    res.send(`<script>alert('Password is not correct')</script>`);
    next();
}

module.exports = validateUser;