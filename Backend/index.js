const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var nodemailer = require('nodemailer');
const Bcrypt = require("bcryptjs");

var cors = require('cors')

mongoose.connect('mongodb://localhost:27017/foodoholics', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
    extended: true
}));

app.use(cors())


var mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'foodoholics4@gmail.com',
        pass: 'deliciousfood'
    }
})










app.post('/login/:collection_name', function(req, res){
    // const pass = Bcrypt.hashSync(req.body.password, 10)
    // console.log(pass)
    var collection_name = req.params.collection_name;
    if(collection_name == 'user'){
        collection_name = 'user_data';
    }
    else if(collection_name == 'restaurant'){
        collection_name = 'restaurant_data'
    }
    else{
        res.status(404).error("Page Not Found");
    }
    db.collection(collection_name).findOne({email: req.body.email}, {projection:{ name: 1, password: 1}}, function(err, data){
        if (err || data == null){
            // console("Inside null condition")
            // res.send("User does not exist");
            res.json({auth: false})
        }
        else{
            db.collection(collection_name).findOne({email: req.body.email}, {projection:{ name: 1, password: 1}}, function(err, data){
                if(Bcrypt.compareSync(req.body.password, data.password)){
                    console.log("Inside verifieed")
                    console.log(data)
                    // res.send("authenticated")
                    res.json({auth: true})
                }
                else{
                    console.log("Auth Failed")
                    res.json({auth: false})
                    // res.send("Authentication failed")
                }  
            });
        }
    });
})

// edit here
app.get('/verify/:email/:token/:collection_name', function(req, res){

    console.log(req.body)
    var collection_name = req.params.collection_name;
    if(collection_name == 'user'){
        collection_name = "user_data"
    }
    else if(collection_name == 'restaurant'){
        collection_name = "restaurant_data"
    }
    else{
        res.status(404).send("Page Not Found");
    }


    const new_vals = {
        $set: {
            is_verified: true
        }
    }
    db.collection('user_data').findOneAndUpdate({email: req.params.email, token: parseInt(req.params.token)}, new_vals, function(err, data){
        if(err){
            console.log(err);
            res.json({message: "Invalid URL"});
        }
        else{
            console.log(data);
            res.json({message:"Hii! You're verified"});
        }
    })    
});




app.post('/sign_up/:collection_name', function(req, res){
    console.log(req.body)
    var collection_name = req.params.collection_name;
    if(collection_name == 'user'){
        collection_name = 'user_data';
        var token = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
        var data_to_be_inserted = {
            "name": req.body.name,
            "email": req.body.email,
            "password": Bcrypt.hashSync(req.body.password, 10),
            "token": token,
            "is_verified": false
        }
    }
    else if(collection_name == 'restaurant'){
        collection_name = "restaurant_data";
        var token = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
        var data_to_be_inserted = {
            "manager_name": req.body.name,
            "email": req.body.email,
            "password": Bcrypt.hashSync(req.body.password, 10),
            "token": token,
            "is_verified": false,
            "Restaurant_name": req.body.restaurant_name
        }
    }
    else{
        res.status(404).send("Page Not Found");
    }
    db.collection(collection_name).findOne({email: req.body.email}, {projection:{ email: 1}}, function(err, data){
        if (err || data == null){
            
            console.log(Bcrypt.hashSync(req.body.password, 10))
            db.collection(collection_name).insertOne(data_to_be_inserted, function (error, collection){
                if (error){
                    console.log("error here")
                    throw error;
                    
                }
                console.log("User Signer up successfully")
            });

            var receiver = req.body.email
            var email_text = "Click on the link to verify your account " + "localhost:3000/verify/" + req.body.email + '/' + token + '/'+collection_name;
            
            var mailOptions = {
                from: 'foodoholics4@gmail.com',
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

            res.json({message: "User Registered and a verification email has been sent"})
        }
        else{
            res.json({message: data.email + " already exists"})
        }
        
    });
    

});

app.listen(3000, function(){
    console.log("Server listening at port 3000");
    console.log(this.address().address)
})