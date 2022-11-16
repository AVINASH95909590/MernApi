const mongoose = require("mongoose");

const userModel = mongoose.model("users", {
  username: { type: String },
  password: { type: String },
});
module.exports = userModel;
