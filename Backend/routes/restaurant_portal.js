var express = require('express')
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var ObjectId = require('mongoose').Types.ObjectId; 
let jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
let middleware = require('./jwtverification');
var router = express.Router()
mongoose.connect('mongodb://localhost:27017/foodoholics', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;


router.post('/menu', middleware.checkToken, function(req, res){
    var id = req.body.id
    console.log(id)

    db.collection('restaurant_data').update({_id: ObjectId(id)},
    {
        
        $push: {menu:{
            name: req.body.name,
            cost: req.body.cost,
            description: req.body.description,
            image: req.body.image
        }}
    }, function(err, data){
        if (err){
                console.log("Fail")
                res.send("Fail")
           
            return;
        }
        else{
                console.log("Success")
                res.send("Success")
           
            return;
        }
    })
   
});



router.delete('/delete', middleware.checkToken, function(req, res){
    db.collection('restaurant_data').updateMany({
        _id: ObjectId(req.body._id)
    },
    {
        $pull: {
            menu: {
                name: req.body.name
            }
        }
    }
    , function(err, data){
        if (err){
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

router.post('/restaurant_details',  function(req, res){
    var id = req.body.id
    console.log(id)

    db.collection('restaurant_data').update({_id: ObjectId(id)},
    {
        $push: {restaurant_details:{
            name: req.body.name,
            location: req.body.location,
            food_category: req.body.food_category,
            res_image: req.body.res_image,
            contact:req.body.contact,
            working_hours:req.body.working_hours

        }}
    }, function(err, data){
        if (err){
            console.log("Fail")
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
    //res.send("done")
});


module.exports = router
