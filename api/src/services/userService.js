const User = require("../models/userModal");
const ApiError = require("../utils/ApiError");
const status = require("http-status");

const createUser = async (bodyData) => {
  if (await User.isEmailTaken(bodyData.email)) {
    throw new ApiError(status.UNPROCESSABLE_ENTITY, "Email already exist.");
  }
  const user = await User.create(bodyData);
  return user;
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

const getUsers = async () => {
  const users = await User.find({});
  return users;
};

module.exports = {
  createUser,
  getUserByEmail,
  getUsers,
};
