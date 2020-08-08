const Joi = require("@hapi/joi");
const { password } = require("./customValidation");


const register = Joi.object({
        fname: Joi.string().required(),
        lname: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().custom(password)
    })


module.exports = {
    register
}