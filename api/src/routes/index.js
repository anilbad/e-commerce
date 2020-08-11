const express = require("express");

const authRoute = require("./authRoute");
const adminRoute = require("./adminRoute");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();

router.use("/auth", authRoute);
router.use("/admin", isAdmin, adminRoute);

module.exports = router;
