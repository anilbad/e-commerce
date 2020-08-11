const userService = require("../services/userService");
const catchAsync = require("../utils/catchAsync");
const authService = require("../services/authService");
const tokenService = require("../services/tokenService");

const register = catchAsync(async (req, res) => {
  try {
    await userService.createUser(req.body);
    res.send({
      message: "User registered successfully!",
    });
  } catch (e) {
    res.status(e.statusCode).send({
      errors: [
        {
          message: e.message,
        },
      ],
    });
  }
});

const login = catchAsync(async (req, res) => {
  try {
    const user = await authService.login(req.body);
    const token = await tokenService.generateAuthTokens(user);
    res.send({
      message: "Logged In successfully!",
      token,
    });
  } catch (e) {
    res.status(e.statusCode).send({
      errors: [
        {
          message: e.message,
        },
      ],
    });
  }
});

module.exports = {
  register,
  login,
};
