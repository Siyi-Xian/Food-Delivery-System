const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var nodemailer = require('nodemailer');
var ObjectId = require('mongoose').Types.ObjectId; 
const Bcrypt = require("bcryptjs");
let jwt = require('jsonwebtoken');
var path = require('path')
var http = require('http')
const cookieParser = require('cookie-parser');
const cors = require('cors')

var Pusher = require('pusher');
require('dotenv').config()
const shortId = require('shortid');
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const pusher = new Pusher({
  appId: '914053',
  key: 'a2dc9ba2d47e27762a7f',
  secret: '2340f0bba22c0480cd2e',
  cluster: 'us2',
  encrypted: true
})

app.post('/message', async (req, res) =>{
  const chat = {
    ...req.body,
    id: shortId.generate(),
    createdAt: new Date().toISOString()
  }
  pusher.trigger('chat-group', 'chat', chat)
  res.send(chat)
})

app.post('/join', (req, res) =>{
  const chat = {
    ...req.body,
    id: shortId.generate(),
    type: 'joined',
    createdAt: new Date().toISOString()
  }
  pusher.trigger('chat-group', 'chat', chat)
  res.send(chat)
})
app.listen(process.env.PORT || 2000, () => console.log('listening at 2000'))


var authentication = require('./routes/authenticate')
var restaurant_portal = require('./routes/restaurant_portal')
var customer_portal = require('./routes/customer_portal')
var delivery_portal = require('./routes/delivery_portal')
var orders = require('./routes/orders')
var chats=require('./routes/chat')
var port = process.env.PORT || 8080


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
    extended: true
}));
app.use(cookieParser());


app.use(cors())


app.use(express.static('dist/fooddeliverysystem'))
// app.use(express.static(__dirname + '/menu_images'));
app.use('/restaurant_images', express.static(__dirname + '/restaurant_images'));
app.use('/menu_images', express.static(__dirname + '/menu_images'))
app.use('/customer_images', express.static(__dirname + '/customer_images'))
app.use('/delivery_images', express.static(__dirname + '/delivery_images'))

// const server = 
app.use('/restaurant', restaurant_portal);
app.use('/authentication', authentication);
app.use('/customer', customer_portal);
app.use('/delivery', delivery_portal);
app.use('/orders', orders);
app.use('/chat',chats);
app.get("/*", function(req, res){
    res.sendFile(path.join(__dirname+ '/dist/fooddeliverysystem/index.html'))
})
// app.get('*', function(req, res){
//     res.status(404).send("Page Not Found")
// })

//Adding recaptcha to backend
var pub = __dirname + 'login.component.html';
var Recaptcha = require('express-recaptcha').RecaptchaV3;
var recaptcha = new Recaptcha('6LdhGcMUAAAAAJ2eG5TNInZtPqRfS2MJE-CVeptA', '6LdhGcMUAAAAAB_GwLXNAI6sd-VhQiasNiXwIctE', {callback: 'cb'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(pub));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('login', { captcha:recaptcha.render() });
  });


//Adding recaptcha to backend for restaurant
var pub2 = __dirname + 'restaurantlogin.component.html';
var Recaptcha = require('express-recaptcha').RecaptchaV3;
var recaptcha = new Recaptcha('6LdhGcMUAAAAAJ2eG5TNInZtPqRfS2MJE-CVeptA', '6LdhGcMUAAAAAB_GwLXNAI6sd-VhQiasNiXwIctE', {callback: 'cb'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(pub2));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('restaurantlogin', { captcha:recaptcha.render() });
  });

//Adding recaptcha to backend for restaurant
var pub3 = __dirname + 'deliverylogin.component.html';
var Recaptcha = require('express-recaptcha').RecaptchaV3;
var recaptcha = new Recaptcha('6LdhGcMUAAAAAJ2eG5TNInZtPqRfS2MJE-CVeptA', '6LdhGcMUAAAAAB_GwLXNAI6sd-VhQiasNiXwIctE', {callback: 'cb'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(pub3));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('deliverylogin', { captcha:recaptcha.render() });
  });





app.listen(port, function(){
    console.log("Server listening at port " + port);
    console.log(this.address().address)
})

app.get('/fr', function(req, res){
    res.render('login', { captcha:recaptcha.renderWith({'hl':'fr'}) });
  });

  app.post('/', function(req, res){
    recaptcha.verify(req, function(error, data){
      if (!req.recaptcha.error) {
        this.router.navigate['/customer_dashbord'];
      } else {
        alert("Recaptcha has failed! try again")
      }
    });
  });