const express = require("express");
const userController = require("../controllers/admin/userController");

const router = express.Router();

router.get("/users", userController.getUsers);

module.exports = router;
