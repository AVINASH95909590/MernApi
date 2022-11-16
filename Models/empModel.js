const mongoose = require("mongoose");

const empModel = mongoose.model("employees", {
  fname: { type: String },
  lname: { type: String },
  email: { type: String },
  gender: { type: String },
  empId:{type:String}
});
module.exports = empModel;
