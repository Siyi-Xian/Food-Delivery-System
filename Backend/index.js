const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var nodemailer = require('nodemailer');

var mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
})




mongoose.connect('mongodb://localhost:27017/foodoholics', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
var app = express();
app.use(bodyParser.urlencoded({ 
    extended: true
}));
app.use(bodyParser.json());


app.get('/verify/:email/:token', function(req, res){
    const new_vals = {
        $set: {
            is_verified: true
        }
    }
    db.collection('user_data').findOneAndUpdate({email: req.params.email, token: parseInt(req.params.token)}, new_vals, function(err, data){
        if(err){
            console.log(err);
            res.send("Invalid URL");
        }
        else{
            console.log(data);
            res.send("Hii! You're verified");
        }
    })    
});




app.post('/sign_up', function(req, res){
    console.log(req.body)

    var token = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    var data = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "token": token,
        "is_verified": false
    }
    db.collection('user_data').insertOne(data, function (error, collection){
        if (error){
            console.log("error here")
            throw error;
            
        }
        console.log("User Signer up successfully")
    });

    var receiver = req.body.email
    var email_text = "Click on the link to verify your account " + "localhost:3000/verify/" + req.body.email + '/' + token;
    
    var mailOptions = {
        from: '',
        to: receiver,
        subject: "Food-o-Holic User Verification",
        text: email_text
    }
    mailer.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error)
        }
        else{
            console.log('Email sent: ' +  info.response)
        }
    })

    res.send("User Registered and a verification email has been sent")

});

app.listen(3000, function(){
    console.log("Server listening at port 3000");
    console.log(this.address().address)
})