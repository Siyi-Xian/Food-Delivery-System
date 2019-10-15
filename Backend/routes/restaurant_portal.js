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
    var id = req.body._id

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
    res.send("done")
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




module.exports = router
