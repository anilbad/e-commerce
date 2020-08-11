const config = require("../config");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const generateToken = (user, expires, secret = config.jwt.secret) => {
  const { fname, lname, email, role } = user;
  const payload = {
    user: { fname, lname, email, role },
  };
  return jwt.sign(payload, secret);
};

const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(
    config.jwt.accessExpirationMinutes,
    "minutes"
  );
  const accessToken = generateToken(user.id, accessTokenExpires);
  // const refreshTokenExpires = moment().add(
  //   config.jwt.refreshExpirationDays,
  //   "days"
  // );
  // const refreshToken = generateToken(user.id, refreshTokenExpires);
  return accessToken;
};

module.exports = {
  generateAuthTokens,
};
