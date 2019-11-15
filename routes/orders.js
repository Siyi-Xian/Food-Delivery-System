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

router.post('/order_list', middleware, function(req, res){
    var id = req.body.id;
    var data_update = {
        $set: {
            restaurant_id: req.body.restaurant_id,
            customer_id: req.body.customer_id,
            delivery_id: req.body.delivery_id,
            items: req.body.items,
            address: req.body.address,
            status: req.body.status
        }
    }
    db.collection('order').updateOne({_id: ObjectId(id)}, data_update, function(err, data){
        if(err){
            console.log(err)
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            console.log("Success")
            res.json({
                message: "Success"
            })
            return;
        }
    })
})

router.get('/current_orders:customer_id', middleware.checkToken, function(req, res){
    var customer_id = req.params.customer_id;
    var projection = {
        projection: {
            restaurant_id: 1,
            delivery_id: 1,
            items: 1,
            address: 1,
            status: 1
        }
    }
    db.collection('order').find({_id: new ObjectId(customer_id)}, projection).toArray(function(err, data){
        if(err){
            console.log("error")
            res.json({
                message: "No Orders"
            })
        }
        else{
            res.json(data)
        }
    })
})

module.exports = router