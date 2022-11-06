const express = require("express");
const { json } = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const crtCardModel = require("./Models/crtCardModel");
const { db } = require("./Models/crtCardModel");
const app = express();
app.use(json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/mernpractice")
  .then(() => console.log("DB connected..."))
  .catch((er) => console.log(er));

app.get("/", async (req, res) => {
  const result = await crtCardModel.find({});
  res.json(result);
});
app.listen(4040, () => console.log("server is up..."));

app.post("/addcards", (req, res) => {
  const result = new crtCardModel(req.body);
  result.save();
  // res.json(result);
  res.send("new card added successfully!");
});
app.post("/updatecards", async (req, res) => {
  const result = await crtCardModel.updateOne(
    { pdId: req.body.pdId },
    req.body
  );
  res.json(result);
});
app.post("/deleteCard", async (req, res) => {
  const result = await crtCardModel.findOneAndDelete(req.body);
  res.send(`new card delete sucessfully ${req.pdId}`);
});
