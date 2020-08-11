const User = require("../models/userModal");
const userService = require("./userService");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const login = async (bodyData) => {
  const user = await userService.getUserByEmail(bodyData.email);
  if (!user || !(await user.isPasswordMatch(bodyData.password))) {
    throw new ApiError(
      httpStatus.UNPROCESSABLE_ENTITY,
      "Incorrect email or password"
    );
  }
  return user;
};

module.exports = {
  login,
};
