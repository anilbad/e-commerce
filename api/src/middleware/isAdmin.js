const jwt = require("jsonwebtoken");
const config = require("../config");

const isAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const payload = jwt.verify(token, config.jwt.secret);
    console.log(payload);
  } catch (e) {}

  next();
};

module.exports = isAdmin;
