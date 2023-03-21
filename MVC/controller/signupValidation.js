const joi = require('joi');

async function signupValidation(req, res, next)
{
    let schema = joi.object({
        firstname : joi.string().required().min(3).max(30),
        lastname : joi.string().required().min(3).max(30),
        gender : joi.string().required(),
        email : joi.string().email().required(),
        number : joi.number().integer().min(1000000000).max(9999999999),
        password : joi.string().required().min(3).max(20),
        image : joi.string().required()
    })

    try{
        req.validate = await schema.validateAsync(req.body);
        next();
    }catch(err){
        console.log(err);
        res.send(`<script>alert("Enter proper data");</script>`);
    }
}

module.exports = signupValidation;
