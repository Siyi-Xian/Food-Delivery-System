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


const customer_image_storage = multer.diskStorage({
    destination: (req, file, callBack)=>{
        callBack(null, "customer_images")
    },
    filename: (req, file, callBack)=>{
        callBack(null, file.originalname)
    }
})
var upload_customer = multer({storage: customer_image_storage})

router.post('/details', [middleware.checkToken, upload_customer.single('image')], function(req, res){
    var id = req.body.id
    console.log(id)
    pass = req.body.password
    console.log(pass)
    pass = Bcrypt.hashSync(pass, 10)
    var data_update = {
        $set: {
            name: req.body.name,
            contact: req.body.contact,
            email: req.body.email,
            street1: req.body.street1,
            street2: req.body.street2,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            password: pass,
            preference: req.body.preference.toLowerCase()
        }
    }
    db.collection('user_data').updateOne({_id: ObjectId(id)}, data_update, function(err, data){
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

// router.post("/order_item", middleware.checkToken, function(req, res){
//     var price = 0
//     var query = {
//         _id: new ObjectId(req.body.restaurant_id)
//     }
    
//     var projection = {
//         projection:{
//             menu: {
//                 $elemMatch: {
//                     name: req.body.name_of_item
//                 }
//             }
//         }
//     }
    
//     db.collection("restaurant_data").findOne(query, projection, function(err, data){
//         console.log(data)
//         price = data.menu[0].cost
//         console.log(price)
//         data_to_be_inserted = {
//             restaurant_id: req.body.restaurant_id,
//             user_id: req.body.user_id,
//             name_of_item: req.body.name_of_item,
//             price: price,
//             status: "In progress"
//         }
//         db.collection('order').insertOne(data_to_be_inserted, function (error, result){
//             if (error){
//                 console.log("error here")
//                 res.json({
//                     message: "error"
//                 })
                
//             }
//             else{
//                 console.log("Order Placed")
//                 res.json({
//                     message:"Order Placed"
//                 })
//             }
            
//         })
//     })
    
// })


router.get("/order_history/:user_id", middleware.checkToken, function(req, res){
    var id = req.params.user_id
    db.collection("order").find({user_id: id, status: "Delivered"}).toArray(function(err, data){
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
router.get("/current_orders/:user_id", middleware.checkToken, function(req, res){
    var id = req.params.user_id
    var query = {
        user_id: id,
        $or:[
            {status: "On the way!"},
            {status: "In progress"}
        ]
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
router.get("/display_details/:id", middleware.checkToken, function(req, res){
    var id = req.params.id
    console.log(id)
    var d = {
        projection:{
            _id: 1,
            name: 1,
            email: 1,
            street1: 1,
            contact: 1,
            street2: 1,
            city: 1,
            state: 1,
            zip_code: 1,
            preference: 1
        }

    }
    db.collection("user_data").findOne({_id: ObjectId(id)}, d, function(err, result){
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

router.get("/order_history/:customer_id", middleware.checkToken, function(req, res){
    var id = req.params.customer_id
    db.collection("order").find({customer_id: id, status: "1"}).toArray(function(err, data){
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

router.get("/current_orders/:customer_id", middleware.checkToken, function(req, res){
    var id = req.params.customer_id
    db.collection("order").find({customer_id: id, status: "In progress"}).toArray(function(err, data){
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