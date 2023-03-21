const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req, res) => {
    console.log("Home");
    res.send();
})

router.get('/users', (req, res) => {
    console.log("Users");
    res.send();
})

app.use('/manan', router);

app.listen(8080);

// http://localhost:8080/manan/users
// http://localhost:8080/manan