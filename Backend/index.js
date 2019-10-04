const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var nodemailer = require('nodemailer');
const Bcrypt = require("bcryptjs");

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


app.post('/login', function(req, res){
    const pass = Bcrypt.hashSync(req.body.password, 10)
    // var pass = req.body.password;
    // console.log(req.body)
    // const query = {
    //     $and: [
    //         {email: req.body.email},
    //         {password: req.body.pass}
    //     ]
    // }
    console.log(pass)
    db.collection('user_data').findOne({email: req.body.email}, {projection:{ name: 1, password: 1}}, function(err, data){
        if (err || data == null){
            res.send("User does not exist");
        }
        else{
            db.collection('user_data').findOne({email: req.body.email}, {projection:{ name: 1, password: 1}}, function(err, data){
                if(Bcrypt.compareSync("1234", data.password)){
                    res.send(data.name + " authenticated")
                }
                else{
                    res.send("Authentication failed")
                }
                
                
                
            });
        }
        
    });
    
    
})


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
    db.collection('user_data').findOne({email: req.body.email}, {projection:{ email: 1}}, function(err, data){
        if (err || data == null){
            var token = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
            var data_to_be_inserted = {
                "name": req.body.name,
                "email": req.body.email,
                "password": Bcrypt.hashSync(req.body.password, 10),
                "token": token,
                "is_verified": false
            }
            console.log(Bcrypt.hashSync(req.body.password, 10))
            db.collection('user_data').insertOne(data_to_be_inserted, function (error, collection){
                if (error){
                    console.log("error here")
                    throw error;
                    
                }
                console.log("User Signer up successfully")
            });

            var receiver = req.body.email
            var email_text = "Click on the link to verify your account " + "localhost:3000/verify/" + req.body.email + '/' + token;
            
            var mailOptions = {
                from: 'rajnandu2711@gmail.com',
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
        }
        else{
            res.send(data.email + " already exists");
        }
        
    });
    

});

app.listen(3000, function(){
    console.log("Server listening at port 3000");
    console.log(this.address().address)
})