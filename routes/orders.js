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
        time: new Date().toLocaleString()
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
    db.collection('order').find({_id: new ObjectId(customer_id)}, projection, function(err, data){
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


router.get('/current_orders:restaurant_id', middleware.checkToken, function(req, res){
    var customer_id = req.params.restaurant_id;
    var projection = {
        projection: {
            customer_id: 1,
            delivery_id: 1,
            items: 1,
            address: 1,
            status: 1
        }
    }
    db.collection('order').find({_id: new ObjectId(restaurant_id)}, projection, function(err, data){
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


router.get('/current_orders:delivery_id', middleware.checkToken, function(req, res){
    var customer_id = req.params.delivery_id;
    var projection = {
        projection: {
            restaurant_id: 1,
            customer_id: 1,
            items: 1,
            address: 1,
            status: 1
        }
    }
    db.collection('order').find({_id: new ObjectId(delivery_id)}, projection, function(err, data){
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


router.get('/order_list', middleware.checkToken, function(req, res){
    // console.log(req)
    var projection = {
        projection: {
            _id: 1,
            restaurant_id: 1,
            customer_id: 1,
            delivery_id: 1,
            items: 1,
            address: 1,
            status: 1
            
        }
    }
    var query = {
        restaurant_id: {
            restaurant_id
        },
        customer_id: {
            customer_id
        },
        delivery_id: {
            delivery_id
        }
    }
    console.log(query)
    db.collection('order').find(query).toArray(function(err, result){
        if (err){
            res.json({
                message: "Failed to load"
            })
        }
        else{

            res.json(result)
            
        }
    })
})


module.exports = router