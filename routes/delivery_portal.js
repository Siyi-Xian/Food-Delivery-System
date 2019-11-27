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

router.post('/details', middleware.checkToken, function(req, res){
    var id = req.body.id
    var data_update = {
        $set: {
            name: req.body.name,
            contact: req.body.contact,
            street1: req.body.street1,
            street2: req.body.street2,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            isBusy: false
        }
    }
    db.collection('delivery_data').updateOne({_id: ObjectId(id)}, data_update, function(err, data){
        if (err){
            console.log(err)
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            console.log("Success")
            // console.log(data)
            res.json({
                message: "Success"
            })
            return;
        }
    })
})




module.exports = router

