var express = require('express')
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var ObjectId = require('mongoose').Types.ObjectId; 
let jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
let middleware = require('./jwtverification');
const multer = require('multer')
var fs = require('fs')
const Bcrypt = require("bcryptjs");

var router = express.Router()
mongoose.connect('mongodb://heroku_wr9z45km:4qlbddem2aer4k5djhcrp5ph3s@ds243717.mlab.com:43717/heroku_wr9z45km', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
const menu_image_storage = multer.diskStorage({
    destination: (req, file, callBack)=>{
        callBack(null, "menu_images")
    },
    filename: (req, file, callBack)=>{
        callBack(null, file.originalname)
    }
})

const restaurant_image_storage = multer.diskStorage({
    destination: (req, file, callBack)=>{
        callBack(null, "restaurant_images")
    },
    filename: (req, file, callBack)=>{
        callBack(null, req.body.id + ".png")
    }
})

var upload_menu = multer({storage: menu_image_storage})
var upload_restaurant = multer({storage: restaurant_image_storage})


function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

router.get("/display_menu/:restaurant_id", middleware.checkToken, function(req, res){
    var restaurant_id = req.params.restaurant_id
    var projection = {
        projection: {
            menu: 1
        }   
    }
    db.collection('restaurant_data').findOne({_id: new ObjectId(restaurant_id)}, projection, function(err, data){
        if(err){
            console.log("error")
            res.json({
                message: "No items"
            })
        }
        else{
            res.json(data)
        }
    })
})
router.get('/restaurants_list', function(req, res){



    // console.log(req)
    var projection = {
        projection: {
            _id: 1,
            name: 1,
            contact: 1,
            food_category: 1,
            location: 1,
            working_hours: 1,
            res_image: 1,
            ratings: 1,
            num_ratings: 1,
            description: 1,
            street1: 1,
            street2: 1,
            state: 1,
            zip_code: 1
            
        }
    }
    var query = {
        name: {
            $regex:req.query.restaurant_name.toLowerCase()
        },
        food_category: {
            $regex:req.query.food_category.toLowerCase()
        },
        location: {
            $regex:req.query.location.toLowerCase()
        }
    }
    // console.log(query)
    db.collection('restaurant_data').find(query, projection).toArray(function(err, result){
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

router.get("/restaurant_image/:restaurant_id", middleware.checkToken, function(req, res){
    var id = req.params.restaurant_id
    fs.readFile('restaurant_images/' + id + ".png", function(err, content){
        if(err){
            // res.writeHead(400, {'Content-type':'text/html'})
            console.log(err);
            res.json({
                message: "Picture not found"
            }); 
            return
        }
        else {
            //specify the content type in the response will be an image
            // res.writeHead(200,{'Content-type':'image/jpg'});
            res.json(content);
            return
        }
    })
})


router.get("/menu_image", middleware.checkToken, function(req, res){
    var id = req.query.restaurant_id
    fs.readFile('menu_images/' + id + req.query.name + ".png", function(err, content){
        if(err){
            // res.writeHead(400, {'Content-type':'text/html'})
            console.log(err);
            res.json({
                message: "Picture not found"
            }); 
            return
        }
        else {
            //specify the content type in the response will be an image
            // res.writeHead(200,{'Content-type':'image/jpg'});
            res.json(content);
            return
        }
    })
})


router.post('/menu', upload_menu.single('image'), function(req, res){
    var id = req.body.id

    db.collection('restaurant_data').update({_id: ObjectId(id)},
    {
        
        $push: {menu:{
            name: req.body.name,
            cost: req.body.cost,
            description: req.body.description,
            image: id + req.body.name + ".png"
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
   
});



router.delete('/delete', middleware.checkToken, function(req, res){
    db.collection('restaurant_data').updateMany({
        _id: ObjectId(req.query.id)
    },
    {
        $pull: {
            menu: {
                name: req.query.name
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

router.post('/restaurant_details', upload_restaurant.single('image'), function(req, res){
    var id = req.body.id
    console.log(req.body)
    pass = req.body.password
    pass = Bcrypt.hashSync(pass, 10)
    var data_update = {
        $set: {
            name: req.body.name.toLowerCase(),
            street1: req.body.street1,
            street2: req.body.street2,
            //city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            location: req.body.location.toLowerCase(),
            food_category: req.body.food_category.toLowerCase(),
            res_image: id+'.png',
            contact:req.body.contact,
            working_hours:req.body.working_hours,
            Rating: 0,
            Number_of_ratings: 0,
            description: req.body.description,
            password: pass
        }
    }
    
    
    db.collection('restaurant_data').updateOne({_id: ObjectId(id)}, data_update, function(err, data){
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
    //res.send("done")
});

router.post("/add_restaurant_rating/:restaurant_id", middleware.checkToken, function(req, res){
    var id = req.params.restaurant_id
    var data_update = {
        $inc: {
            ratings: req.body.ratings,
            num_ratings: 1
        }
    }
    var order_rate_update = {
        $set: {
            ratings: req.body.ratings
        }
    }
    db.collection("order").updateOne({_id: ObjectId(req.body.order_id)}, order_rate_update, function(req, res){
        
    })
    db.collection('restaurant_data').updateOne({_id: ObjectId(id)}, data_update, function(err, data){
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
            res.json({
                message: "Success"
            })
            return;
        }
    })

})

router.get("/restaurant_rating/:restaurant_id", middleware.checkToken, function(req, res){
    var id = req.params.restaurant_id
    var d = {
        projection:{
                Rating: 1
            }
        }

    db.collection("restaurant_data").findOne({_id: ObjectId(id)}, d, function(err, result){
        if (err){
            console.log(err)
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            console.log("Success")
            // console.log(result)
        
            res.json(result)
            return;
        }
    })
})

router.get("/order_history/:restaurant_id", middleware.checkToken, function(req, res){
    var id = req.params.restaurant_id
    db.collection("order").find({restaurant_id: id, status: "On the way!"}).toArray(function(err, data){
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

router.post("/fullfillorder", middleware.checkToken, function(req, res){
    var id = req.body.id
    

    proj = {
        projection:{
            _id: 1
        }
    }
    db.collection("delivery_data").find({}, proj).toArray(function(err, data){
        console.log(data.length)
        var index = Math.floor(data.length*Math.random())
        delivery_id = data[index]["_id"]
        delivery_id = delivery_id.toHexString()
        const new_vals = {
            $set: {
                status: "On the way!",
                delivery_id: delivery_id

            }
        }
        db.collection("order").findOneAndUpdate({_id: new ObjectId(id)}, new_vals, function(err, data){
            if(err){
                console.log(err);
                res.json({message: "Error"});
            }
            else{
                // console.log(data);
                res.json({message:"success"});
            }
        })
    })


    
    // res.json("hello")
    

    // Add code to assign order to delivery person

})

router.get("/current_orders/:restaurant_id", middleware.checkToken, function(req, res){
    var id = req.params.restaurant_id
    db.collection("order").find({restaurant_id: id, status: "In progress"}).toArray(function(err, data){
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

router.get('/display_details/:restaurant_id', middleware.checkToken, function(req, res){
    var id = req.params.restaurant_id
    // console.log(id)
    var d = {
        projection:{
            name:1,
            location: 1,
            food_category: 1,
            res_image: 1,
            contact: 1,
            working_hours: 1,
            Rating: 1,
            description: 1,
            street1: 1,
            street2: 1,
            state: 1,
            zip_code: 1
        }
    }
    // db.collection('restaurant_data'). find({_id: ObjectId(id)}, d).toArray(function(err, result) {
    db.collection('restaurant_data'). findOne({_id: ObjectId(id)}, d, function(err, result) {
        if (err){
            console.log(err)
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            // console.log("Success")
            // console.log(result)
            result['name'] = toTitleCase(result['name'])
            result['location'] = toTitleCase(result['location'])
            result['food_category'] = toTitleCase(result['food_category'])
            res.json(result)
            return;
        }
    })
});
module.exports = router
