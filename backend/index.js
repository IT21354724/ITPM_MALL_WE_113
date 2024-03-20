const port =4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json());
app.use(cors());

//Database connection with MongoDB
mongoose.connect("mongodb+srv://mall_app113:mayuran123@cluster0.ffs72pv.mongodb.net/mall_app");

//Api Creation

app.get("/",(req,res)=>{
    res.send("Express App is running")
})

//creating schema 

const Feedback = mongoose.model("Feedback",{
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },

})
app.post('/addfeedback',async (req,res) =>{
    let feedbacks =await Feedback.find({});
  const feedback = new Feedback({
     name:req.body.name,
     email:req.body.email,
     message:req.body.message,
  });
  console.log(feedback);
  await feedback.save();
  console.log("Saved");
  res.json({
    success:true,
    name:req.body.name,
  })

})

//Creating API For getting all products
app.get('/allfeedbacks',async (req,res)=>{
     let feedbacks = await Feedback.find({});
     console.log("All Feedbacks Fetched");
     res.send(feedbacks);
})

app.listen(port,(error) =>{
     if(!error){
        console.log("Server Running on Port"+port)
     }
     else{
        console.log("Error:" +error)
     }


})
