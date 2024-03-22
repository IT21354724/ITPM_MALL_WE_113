const port =4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { WordTokenizer } = require('natural');
const { removeStopwords } = require('stopword');
const Sentiment = require('sentiment');

app.use(express.json());
app.use(cors());
const tokenizer = new WordTokenizer();
const sentiment = new Sentiment();
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
app.post('/addfeedback', async (req, res) => {
    try {
        const feedback = new Feedback({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
        console.log(feedback);
        await feedback.save();
        console.log("Saved");
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ success: false, error: 'Failed to save feedback' });
    }
});

 
  

//Creating API For getting all products
app.get('/allfeedbacks', async (req, res) => {
    let feedbacks = await Feedback.find({});
    let feedbacksWithSentiment = [];
        feedbacks.forEach(feedback => {
            let text = feedback.message.toLowerCase();

            const cleanedText = text.replace(/[^\w\s]/g, '');
            const tokenizedText = tokenizer.tokenize(cleanedText);
            const filteredText = removeStopwords(tokenizedText);

            const finalText = filteredText.join(' ');
            
            const result = sentiment.analyze(finalText);

            let sentimentLabel;
            if (result.score > 0) {
                sentimentLabel = 'positive';
            } else if (result.score <= 0) {
                sentimentLabel = 'negative';
            }
            feedbacksWithSentiment.push({ text: text, sentiment: sentimentLabel });
        });
    
        res.json(feedbacksWithSentiment);
});
app.listen(port,(error) =>{
     if(!error){
        console.log("Server Running on Port"+port)
     }
     else{
        console.log("Error:" +error)
     }


})
