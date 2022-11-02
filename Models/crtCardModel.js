const mongoose = require("mongoose");

const crtCardModel = mongoose.model("crtcards", {
  name: { type: String },
  price: { type: Number },
  img: { type: String },
});

module.exports = crtCardModel;
