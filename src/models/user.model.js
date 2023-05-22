const mongoose = require("mongoose");

const User = mongoose.model("User", {
  userName: String,
  eMail: String,
  password: String,
});

module.exports = User;