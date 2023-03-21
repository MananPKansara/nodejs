const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

app.use(express.urlencoded({extended : true}));

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    let token = jwt.sign({username}, 'Secret_Key', { expiresIn : '1h' });
    res.cookie('jwt', token, { httpOnly: true });
    res.send(token);
});

app.get('/', authenticateToken, (req, res) => {
    res.send("sent");
})

function authenticateToken(req, res, next)
{
    const token = req.headers['cookie'].split('=')[1];
    if(token == null) return res.sendStatus(401);
    
    jwt.verify(token, 'Secret_Key', (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
    });
    next();
}

app.listen(5000);