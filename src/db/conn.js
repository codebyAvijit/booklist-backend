const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.monogoDbUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection is Successfull");
  })
  .catch(() => {
    console.log("Connection was Terminated");
  });

module.exports = mongoose;
