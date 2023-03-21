const mongoose = require('mongoose');
let url = 'mongodb+srv://Manan:Manan@manan.dflg9s3.mongodb.net/mvc?retryWrites=true&w=majority';

(async () => {
    return await mongoose.connect(url);
})();


let schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        enum: ['male', 'female'],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    number: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true,
        validator: {
            function(v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    image : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
})

let User = mongoose.model('User', schema);

// console.log(User);

module.exports = User;