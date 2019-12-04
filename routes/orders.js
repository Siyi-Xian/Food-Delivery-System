var express = require('express')
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var ObjectId = require('mongoose').Types.ObjectId; 
let jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
let middleware = require('./jwtverification');

var router = express.Router()
mongoose.connect('mongodb://heroku_wr9z45km:4qlbddem2aer4k5djhcrp5ph3s@ds243717.mlab.com:43717/heroku_wr9z45km', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

router.post('/add_order', middleware.checkToken, function(req, res){
    var data = {
        restaurant_id: req.body.restaurant_id,
        user_id: req.body.user_id,
        delivery_id: "null",
        status: "In progress",
        price: req.body.price,
        name_of_item: req.body.name_of_item,
        time: new Date().toLocaleString(),
        ratings: 0
    }
    db.collection("order").insertOne(data, function(err, data){
        if(err){
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            res.json({
                message: "Success"
            })
            return;
        }

    })
});
module.exports = router