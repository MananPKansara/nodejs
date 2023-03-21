const express = require('express');
const router = express.Router();
const path = require('path');

const findUserById = require('../controller/db/findUserById');
const getAllUsers = require('./../controller/db/getAllUsers');

router.get('/', async (req, res) => {
    let data = await getAllUsers();
    res.render('userList', {data})
    console.log("display all user details.");
});

router.use(express.static(path.join(__dirname, './../')));
router.get('/:id', async (req, res) => {
    let user = await findUserById(req.params.id);
    res.render('user', {user});
    console.log("display one user details.");
});

module.exports = router;