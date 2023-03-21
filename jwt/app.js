const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const secretkey  = "secretkey";

app.get('/', (req, res) => {
    res.send("Yes")
})

app.post('/login', (req, res) => {
    let user = {
        id : 1,
        username : "Manan",
        email : "mananpk2002@gmail.com"
    }
    jwt.sign({user}, secretkey, {expiresIn : '300s'}, (err, token) => {
        res.send(token);
    })
})

app.post('/profile', verifyToken, (req, res) => {
    jwt.verify(req.token, secretkey, (err, auth) => {
        if (err) throw res.send("Invalid token");
        res.send(auth);
    })
})

function verifyToken(req, res, next){
    req.token = req.headers['authorization'];
    next();
}

app.listen(9000);