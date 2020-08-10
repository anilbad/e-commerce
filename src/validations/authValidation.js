const Joi = require("joi");
const { password } = require("./customValidation");

const register = Joi.object({
  fname: Joi.string().required().min(3).max(15),
  lname: Joi.string().required().min(1).max(15),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).custom(password),
});

const login = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).custom(password),
});

module.exports = {
  register,
  login,
};
