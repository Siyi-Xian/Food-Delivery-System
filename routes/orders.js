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

router.get('/current_orders:restuarnt_id', middleware.checkToken, function(req, res){
    var restaurant_id = req.params.restaurant_id;
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
        customer_id: {
            $regex:req.query.customer_id
        },
        delivery_id: {
            $regex:req.query.delivery_id
        },
        items: {
            $regex:req.query.items
        },
        status: {
            $regex:req.query.status
        }
    }
    db.collection('order').find(query, projection).toArray(function(err, result){
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