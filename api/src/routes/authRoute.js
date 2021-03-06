const express = require("express");
const authController = require("../controllers/authController");
const validate = require("../middleware/validate");
const authValidation = require("../validations/authValidation");

const router = express.Router();

router.post(
  "/register",
  validate(authValidation.register),
  authController.register
);
router.post("/login", validate(authValidation.login), authController.login);

module.exports = router;
