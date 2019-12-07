var express = require('express')
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var ObjectId = require('mongoose').Types.ObjectId; 
let jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
let middleware = require('./jwtverification');
const multer = require('multer')
const Bcrypt = require("bcryptjs");

var router = express.Router()
mongoose.connect('mongodb://heroku_wr9z45km:4qlbddem2aer4k5djhcrp5ph3s@ds243717.mlab.com:43717/heroku_wr9z45km', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

const delivery_image_storage = multer.diskStorage({
    destination: (req, file, callBack)=>{
        callBack(null, "delivery_images")
    },
    filename: (req, file, callBack)=>{
        callBack(null, file.originalname)
    }
})
var upload_delivery = multer({storage: delivery_image_storage})

router.post('/details', [middleware.checkToken, upload_delivery.single('image')], function(req, res){
    var id = req.body.id
    pass = req.body.password
    pass = Bcrypt.hashSync(pass, 10)
    var data_update = {
        $set: {
            name: req.body.name,
            contact: req.body.contact,
            email: req.body.email,
            password: pass
            // street2: req.body.street2,
            // city: req.body.city,
            // state: req.body.state,
            // zip_code: req.body.zip_code,
            // isBusy: false
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


router.post("/fullfillorder", middleware.checkToken, function(req, res){
    var id = req.body.id
    const new_vals = {
        $set: {
            status: "Delivered",
            time: new Date().toLocaleString()
        }
    }
    db.collection("order").findOneAndUpdate({_id: new ObjectId(id)}, new_vals, function(err, data){
        if(err){
            console.log(err);
            res.json({message: "Error"});
        }
        else{
            res.json({message:"success"});
        }
    })
})


router.get("/display_details/:id", middleware.checkToken, function(req, res){
    var id = req.params.id
    console.log(id)
    var d = {
        projection:{
            _id: 1,
            name: 1,
            email: 1,
            contact: 1,
        }

    }
    db.collection("delivery_data").findOne({_id: ObjectId(id)}, d, function(err, result){
        if (err){
            console.log(err)
            res.json({
                message: "Failed"
            })
            return
        }
        else{
            res.json({
                result
            })
            return
        }
    })
});


router.get("/order_history/:delivery_id", middleware.checkToken, function(req, res){
    var id = req.params.delivery_id
    console.log(req.params.delivery_id)
    db.collection("order").find({delivery_id: id, status: "Delivered"}).toArray(function(err, data){
        if (err){
            console.log(err)
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            res.json(data)
            return;
        }
    })
})

router.get("/current_orders/:delivery_id", middleware.checkToken, function(req, res){
    var id = req.params.delivery_id
    var query = {
        delivery_id: id,
        status: "On the way!"
    }
    db.collection("order").find(query).toArray(function(err, data){
        if (err){
            console.log(err)
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            console.log("Success")
            console.log(data)
            res.json(data)
            return;
        }
    })
})

module.exports = router

