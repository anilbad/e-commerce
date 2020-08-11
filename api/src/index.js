const app = require("./app");
const mongoose = require("mongoose");
const config = require("./config");

let server;
mongoose.connect(config.mongoDBUrl, config.mongoDBOptions);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected to db!");
  server = app.listen(config.port, () => {
    console.log("Listning on port 4000");
  });
});

const exithandler = () => {
  if (server) {
    console.log("Server closed");
    process.exit(1);
  } else {
    process.exit(1);
  }
};
const unexpectedErrorHandler = (error) => {
  console.log(error);
  exithandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  if (server) {
    server.close();
  }
});
