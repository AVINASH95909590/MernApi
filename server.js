const express = require("express");
const { json } = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const empModel= require("./Models/empModel")
const userModel= require("./Models/userModel")
const jwt =require("jsonwebtoken")
const jwt_token=require("jwt-decode")
const app = express();
app.use(json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/employeedb")
  .then(() => console.log("DB connected..."))
  .catch((er) => console.log(er));

app.get("/", async (req, res) => {
  const result = await empModel.find({});
  res.json(result);
});
app.listen(4040, () => console.log("server is up..."));

app.post("/addemp", (req, res) => {
  const result = new empModel(req.body);
  result.save();
  res.send("new card added successfully!");
});
app.post("/updateemp", async (req, res) => {
  const result = await empModel.updateOne(
    { empId: req.body.empId },
    req.body
  );
  res.json(result);
});
app.post("/deleteemp", async (req, res) => {
  const result = await empModel.findOneAndDelete(req.body);
  console.log(result);
  res.send(`new card delete sucessfully ${req.fname}`);
});



app.post("/user", async (req, res) => {
  const result = await userModel.find(req.body);
  const {username,password}=req.body
  if (result[0].username===username && result[0].password===password){
    const securitykey="avinash";
    const payload={username,password};
    const jwttoken= jwt.sign(payload,securitykey);
    res.json({jwttoken,auth:true})
    // res.send(`login is successful ${req.body.us.ername}`);
  }else{
    res.send(`login is not successful ${req.body.username}`);
  }
  

});
