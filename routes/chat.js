const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var ObjectId = require('mongoose').Types.ObjectId; 
let jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
let middleware = require('./jwtverification');
mongoose.connect('mongodb://heroku_wr9z45km:4qlbddem2aer4k5djhcrp5ph3s@ds243717.mlab.com:43717/heroku_wr9z45km', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var router = express.Router()
const  Schema  =  mongoose.Schema;

//const socket = io(http);

// socket.on(“connection”, (socket)=>{
//     console.log(“user connected”);
//     });

io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })

    socket.on("chat message", function(msg) {
        console.log("message: "  +  msg);
        //broadcast message to everyone in port:5000 except yourself.
        socket.broadcast.emit("received", { message: msg  });

        //save chat to the database
        connect.then(db  =>  {
        console.log("connected correctly to the server");
    
        let  chatMessage  =  new Chat({ message: msg, sender: "Anonymous"});
        chatMessage.save();
        });



        });


        });
        

    const  chatSchema  =  new Schema(
        {
        message: {
        type: String
        },
        sender: {
        type: String
            }
        },
            {
        timestamps: true
    });

let  Chat  =  mongoose.model("Chat", chatSchema);


router.route("/").get((req, res, next) =>  {
    res.setHeader("Content-Type", "application/json");
    res.statusCode  =  200;
    connectdb.then(db  =>  {
        Chats.find({}).then(chat  =>  {
        res.json(chat);
    });
});
});



module.exports = router