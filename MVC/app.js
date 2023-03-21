const express = require('express');
const app = express();
const formRouter = require('./router/formRouter.js');
const userRouter = require('./router/userRouter.js');
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.use('/', formRouter);
app.use('/user', userRouter);

// app.all('*', (req,res) => {
//     res.status(500).json({status : 'fail', error : 'Server error'})
// })

app.listen(3000, () => {
    console.log("Listening to port 3000");
})
 