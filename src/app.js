const express = require('express');
const evn = require("dotenv");

const routes = require("./routes");

evn.config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/v1', routes);

module.exports = app;