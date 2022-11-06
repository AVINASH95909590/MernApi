const mongoose = require("mongoose");

const crtCardModel = mongoose.model("crtcards", {
  name: { type: String },
  price: { type: Number },
  img: { type: String },
  pdId: { type: String },
});
console.log(crtCardModel);

module.exports = crtCardModel;
