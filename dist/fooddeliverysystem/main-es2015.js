(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>admin works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatfeature/chatfeature.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatfeature/chatfeature.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n       \r\n\r\n<head>\r\n\r\n        <title>\r\n                Chat Board\r\n         </title>\r\n\r\n    <script src=\"https://js.pusher.com/5.0/pusher.min.js\"></script>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n    <script>\r\n\r\n    // Enable pusher logging - don't include this in production\r\n    Pusher.logToConsole = true;\r\n\r\n    var pusher = new Pusher('49096276b737a48a5ba1', {\r\n      cluster: 'us2',\r\n      forceTLS: true\r\n    });\r\n\r\n    var channel = pusher.subscribe('my-channel');\r\n    channel.bind('my-event', function(data) {\r\n      alert(JSON.stringify(data));\r\n    });\r\n  </script>\r\n\r\n</head>\r\n    <body>\r\n\r\n        <label for=\"userName\">Username</label>\r\n        <input type=\"text\" id=\"userName\" [(ngModel)]=\"userName\">\r\n        \r\n        <label for=\"message\">Message</label>\r\n        <input type=\"text\" id=\"message\" [(ngModel)]=\"messageText\">\r\n        \r\n        <button (click)=\"sendMessage(userName, messageText)\">Send</button>\r\n\r\n\r\n    \r\n    <div *ngFor=\"let message of messages\">\r\n        <b>{{ message.user }}</b>: {{ message.text }}\r\n    </div>\r\n      \r\n   </body> \r\n\r\n   </html>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-current-orders/customer-current-orders.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-current-orders/customer-current-orders.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    customer dashboard\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"customerdashboard.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-customerdropdown></app-customerdropdown>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <strong> Order Number </strong>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <strong> Price </strong>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <strong> Name of Item </strong>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <strong> Status </strong>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <strong> Time </strong>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div *ngIf=\"orders\">\r\n        <ul>\r\n            <div *ngFor=\"let order of orders; index as i\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                    {{i + 1}}\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                    $ {{order.price}}\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                    {{ order.name_of_item }}\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                    {{ order.status }}\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                    <!-- <button (click)=\"fullfillOrder(order._id, i)\">Completed</button> -->\r\n                    {{order.time}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n    \r\n    \r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-order-history/customer-order-history.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-order-history/customer-order-history.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    customer dashboard\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"customerdashboard.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-customerdropdown></app-customerdropdown>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <strong> Order Number </strong>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <strong> Price </strong>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <strong> Name of Item </strong>\r\n        </div>\r\n        <!-- <div class=\"col-md-2\">\r\n            <strong> Status </strong>\r\n        </div> -->\r\n        <div class=\"col-md-2\">\r\n            <strong> Time </strong>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <strong> Rate out of 5 </strong>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div *ngIf=\"orders\">\r\n        <ul>\r\n            <div *ngFor=\"let order of orders; index as i\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                    {{i + 1}}\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                    $ {{order.price}}\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                    {{ order.name_of_item }}\r\n                    </div>\r\n                    <!-- <div class=\"col-md-2\">\r\n                    {{ order.status }}\r\n                    </div> -->\r\n                    <div class=\"col-md-2\">\r\n                    <!-- <button (click)=\"fullfillOrder(order._id, i)\">Completed</button> -->\r\n                    {{order.time}}\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        {{order.ratings}}\r\n                        <form mehtod=\"post\" [formGroup]=\"ratingForm\" (ngSubmit)=\"onRate(ratingForm.value, order)\">\r\n                            <input type=\"number\" required=\"required\" formControlName=\"ratings\" value=\"{{ order.ratings }}\">\r\n                            <br>\r\n                            <button type=\"submit\" value=\"submit\"\r\n                                    class=\"btn btn-primary btn-lg btn-block pull-right\" style=\"width: 100px; margin-right: 20px\">Rate\r\n                            </button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ul>\r\n        <br>\r\n        <br>\r\n    </div>\r\n</div>\r\n\r\n    \r\n    \r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerdashboard/customerdashboard.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerdashboard/customerdashboard.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    customer dashboard\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"customerdashboard.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-customerdropdown></app-customerdropdown>\r\n\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Welcome back</h3>\r\n    <a routerLink=\"/chatfeature\">Chat Board</a>\r\n    <p style=\"font-size: 18px\">Search for restaurants below</p>\r\n  </div>\r\n  <br>\r\n  <div class=\"search-container\">\r\n    <form action=\"get\" [formGroup]=\"userSearchForm\" (ngSubmit)=\"onSubmit(userSearchForm.value)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 col-md-offset-2\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" placeholder=\"Restaurant Name\" formControlName=\"restaurant_name\">\r\n            <div class=\"fa fa-microphone\" (click) = \"voiceSearchName()\">\r\n            \r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" placeholder=\"Location\" formControlName=\"location\">\r\n            <div class=\"fa fa-microphone\" (click) = \"voiceSearchLocation()\">\r\n            \r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" placeholder=\"Category\" formControlName=\"food_category\">\r\n            <div class=\"fa fa-microphone\" (click) = \"voiceSearchCategory()\">\r\n            \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button class=\"btn btn-primary\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <hr>\r\n</div>\r\n\r\n<!-- placeholder for results from search query -->\r\n<div #result>\r\n  <div *ngIf=\"results\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-md-offset-1\">\r\n          <h4> Searching Result: </h4>\r\n        </div>\r\n        <div class=\"col-md-2 col-md-offset-4\">\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\"\r\n                    aria-expanded=\"false\">\r\n              <span class=\"glyphicon glyphicon-th-list\"></span>\r\n              Sort By\r\n            </button>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a class=\"dropdown-item\" (click)=\"updateToRatings()\">Ratings</a></li>\r\n              <!-- <li><a class=\"dropdown-item\" (click)=\"updateToLocation()\">Location</a></li>\r\n              <li><a class=\"dropdown-item\" (click)=\"updateToResName()\">Restaurant Name</a></li>\r\n              <li><a class=\"dropdown-item\" (click)=\"updateToFoodCat()\">Restaurant Category</a></li> -->\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\" style=\"margin-left: 0; margin-right: 20px\">\r\n        <ul *ngFor=\"let result of results\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <img [src]=\"'/restaurant_images/'+result.res_image\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n               \r\n              <a [routerLink]=\"['/displaymenu', result._id]\" >{{result.name | titlecase}}</a>\r\n              <li><strong> Food Category: </strong>{{result.food_category | titlecase}}</li>\r\n              <li><strong> Location: </strong> \r\n                <a href=\"http://maps.google.com/?q={{result.location.replace(' ', '+')}}\">{{result.location | titlecase}}</a>\r\n              </li>\r\n              <li><strong> Working Hours: </strong>{{result.working_hours | titlecase}}</li>\r\n              <li><strong> Contact: </strong>{{result.contact | titlecase}}</li>\r\n              <li><strong> Ratings: </strong>{{result.ratings/result.num_ratings}}</li>\r\n              <li><strong> Description: </strong>{{result.description | titlecase}}</li>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerdropdown/customerdropdown.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerdropdown/customerdropdown.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light\">\r\n  <!-- Navbar content -->\r\n  <!-- Just an image -->\r\n  <a class=\"navbar-brand\" routerLink=\"/public\" style=\"padding: 0;\">\r\n    <img src=\"../../assets/img/logo.png\" height=\"50\" alt=\"\">\r\n  </a>\r\n  <ul class=\"nav navbar-nav navbar-right\">\r\n    <li class=\"\" style=\"width: 200px; text-align: center\">\r\n        <a href=\"#\" routerLink=\"/customerdashboard\">\r\n          <span class=\"glyphicon glyphicon-cog\"></span>\r\n          Search Restaurants\r\n          <b class=\"\"></b>\r\n        </a>\r\n    </li>\r\n    <li class=\"\" style=\"width: 160px; text-align: center\">\r\n        <a href=\"#\" routerLink=\"/customercurrentorders\">\r\n          <span class=\"glyphicon glyphicon-cog\"></span>\r\n          Current Orders\r\n          <b class=\"\"></b>\r\n        </a>\r\n    </li>\r\n    <li class=\"\" style=\"width: 160px; text-align: center\">\r\n        <a href=\"#\" routerLink=\"/customerorderhistory\">\r\n          <span class=\"glyphicon glyphicon-cog\"></span>\r\n          Order History\r\n          <b class=\"\"></b>\r\n        </a>\r\n    </li>\r\n    <li class=\"dropdown\" style=\"width: 160px; text-align: center\">\r\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n        <span class=\"glyphicon glyphicon-cog\"></span>\r\n        Account\r\n        <b class=\"caret\"></b>\r\n      </a>\r\n      <ul class=\"dropdown-menu\">\r\n        <li>\r\n          <a href=\"#\" routerLink=\"/customerprofile\">\r\n            <span class=\"glyphicon glyphicon-user\"></span>\r\n            Profile\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" routerLink=\"/login\">\r\n            <span class=\"glyphicon glyphicon-log-out\" (click)=\"logout()\"></span>\r\n            Logout\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customereditprofile/customereditprofile.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customereditprofile/customereditprofile.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    customer dashboard\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-customerdropdown></app-customerdropdown>\r\n\r\n<div class=\"container\" style=\"margin-top: 50px\">\r\n  <div class=\"container\">\r\n    <h3>Edit Profile</h3>\r\n  </div>\r\n  <hr>\r\n  <form method=\"POST\" [formGroup]=\"userProfileForm\" (ngSubmit)=\"onSubmit(userProfileForm.value)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-md-offset-1\">\r\n\r\n\r\n        <!-- Change src here -->\r\n        <img class=\"img-circle\" [src]=\"customer_details.customer_image\" alt=\"\" style=\"width: 200px; height: 200px\">\r\n        <input type=\"file\" required=\"required\" accept=\"image/*\" (change)=\"onFileSelected($event)\" id=\"customer_image\"\r\n               ng-model=\"customer_image\" base-sixty-four-input>\r\n\r\n      </div>\r\n      <div class=\"info col-md-6 col-md-offset-1\">\r\n        <div class=\"row\">\r\n          <strong> Full Name: </strong>\r\n          <input type=\"text\" formControlName=\"name\" required=\"required\" placeholder=\"John Doe\" id=\"Name\" value=\"{{ customer_details.name }}\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <strong> Email Address: </strong>\r\n          <input type=\"contact\" formControlName=\"email\" required=\"required\" placeholder=\"food@foodoholics.com\" \r\n                 id=\"email\" value=\"{{customer_details.email}}\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <strong> Phone Number: </strong>\r\n          <input type=\"contact\" formControlName=\"contact\" required=\"required\" placeholder=\"812-999-9999\" id=\"phone\" value=\"{{customer_details.contact}}\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <strong>Street Address 1: </strong>\r\n          <input type=\"text\" formControlName=\"street1\" required=\"required\" placeholder=\"123 10th Street\" id=\"street1\" value=\"{{customer_details.street1}}\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <strong>Street Address 2: </strong>\r\n          <input type=\"text\" formControlName=\"street2\" required=\"required\" placeholder=\"123 10th Street\" id=\"street2\" value=\"{{customer_details.street2}}\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <strong> City: </strong>\r\n          <input type=\"text\" formControlName=\"city\" required=\"required\" placeholder=\"Bloomington\" id=\"city\" value=\"{{customer_details.city}}\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <strong> State: </strong>\r\n            <input type=\"text\" formControlName=\"state\" required=\"required\" placeholder=\"Indiana\" id=\"state\" value=\"{{customer_details.state}}\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <strong> Zip Code: </strong>\r\n            <input type=\"text\" formControlName=\"zip_code\" required=\"required\" placeholder=\"47401\" id=\"zip_code\" value=\"{{customer_details.zip_code}}\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" value=\"submit\" class=\"btn btn-primary btn-lg btn-block pull-right\" style=\"width: 100px; margin-right: 20px\">\r\n      Update\r\n    </button>\r\n  </form>\r\n</div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/customerprofile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/customerprofile.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    customer dashboard\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"customerprofile.component.csss\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-customerdropdown></app-customerdropdown>\r\n\r\n<div class=\"container\" style=\"margin-top: 50px\">\r\n  <div class=\"container\">\r\n    <h3>Profile</h3>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-1\">\r\n      <img class=\"img-circle\" [src]=\"customer_details.customer_image\" alt=\"\" style=\"width: 200px; height: 200px\">\r\n    </div>\r\n    <div class=\"info col-md-6 col-md-offset-1\">\r\n      <div class=\"row\">\r\n        <strong> Full Name: </strong>{{customer_details.name}}\r\n      </div>\r\n      <div class=\"row\">\r\n        <strong> Email Address: </strong>{{customer_details.email}}\r\n      </div>\r\n      <div class=\"row\">\r\n        <strong> Phone Number: </strong>{{customer_details.contact}}\r\n      </div>\r\n      <div class=\"row\">\r\n        <strong> Address Street 1: </strong>{{customer_details.street1}}\r\n      </div>\r\n      <div class=\"row\">\r\n          <strong> Address Street 2: </strong>{{customer_details.street2}}\r\n      </div>\r\n      <div class=\"row\">\r\n          <strong> City: </strong>{{customer_details.city}}\r\n      </div>\r\n      <div class=\"row\">\r\n          <strong> State: </strong>{{customer_details.state}}\r\n      </div>\r\n      <div class=\"row\">\r\n          <strong> Zip Code: </strong>{{customer_details.zip_code}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <a class=\"edit-link pull-right\" href=\"#\" routerLink=\"/customereditprofile\">Edit</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliverycurrentorders/deliverycurrentorders.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deliverycurrentorders/deliverycurrentorders.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n  <title>\r\n    Order History\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"deliverycurrentorders.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-deliverydropdown></app-deliverydropdown>\r\n\r\n<!-- Place holder for list of orders -->\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Current Orders</h3>\r\n    <p>Below are orders that are currently being fulfilled</p>\r\n    <p>Click on an order to reveal options</p>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <strong> Order Number </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Price </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Name of Item </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Status </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Delivered? </strong>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div *ngIf=\"orders\">\r\n    <ul>\r\n      <div *ngFor=\"let order of orders; index as i\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <a href=\"#\" routerLink=\"/restaurantvieworder\"> {{i+1}} </a>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            $ {{order.price}}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            {{ order.name_of_item }}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            Fulfilled\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <button (click)=\"fullfillOrder(order._id, i)\">Delivered</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliverydropdown/deliverydropdown.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deliverydropdown/deliverydropdown.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"delivery-dropdown navbar navbar-light\" style=\"padding-right: 30px\">\r\n  <!-- Navbar content -->\r\n  <!-- Just an image -->\r\n  <a class=\"navbar-brand\" routerLink=\"/public\" style=\"padding: 0;\">\r\n    <img src=\"../../assets/img/logo.png\" height=\"50\" alt=\"\">\r\n  </a>\r\n  <ul class=\"nav navbar-nav navbar-right\" style=\"width: 80%\">\r\n    <li>\r\n      <a href=\"#\" routerLink=\"/deliverycurrentorders\">\r\n        <span class=\"glyphicon glyphicon-glass\"></span>\r\n        Current Order\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\" routerLink=\"/deliveryorderhistory\">\r\n        <span class=\"glyphicon glyphicon-glass\"></span>\r\n        Order History\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\" routerLink=\"/deliveryprofile\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n        Profile\r\n      </a>\r\n    </li>\r\n    <li style=\"width: 10%; text-align: center\">\r\n      <a href=\"#\" routerLink=\"/deliverylogin\">\r\n        <span class=\"glyphicon glyphicon-log-out\"></span>\r\n        Logout\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryeditprofile/deliveryeditprofile.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryeditprofile/deliveryeditprofile.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n  <title>\r\n    Delivery Profile\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"deliveryeditprofile.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-deliverydropdown></app-deliverydropdown>\r\n\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Delivery Details</h3>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\" col-md-6\">\r\n      <ul *ngIf=\"delivery_details\">\r\n        <h4><strong> {{delivery_details.name}} </strong></h4>\r\n        <li>\r\n          <strong> Contact: </strong> <a href=\"tel:{{delivery_details.contact}}\">{{delivery_details.contact}}</a>\r\n        </li>\r\n        <li>\r\n          <strong> Address: </strong>\r\n          {{delivery_details.street1 + delivery_details.street2 + delivery_details.city + delivery_details.state + delivery_details.zip_code}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <a class=\"edit-link pull-right\" href=\"#\" routerLink=\"/deliveryeditprofile\">Edit</a>\r\n  </div>\r\n</div>\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliverylogin/deliverylogin.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deliverylogin/deliverylogin.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    Log In\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-logindropdown></app-logindropdown>\r\n<div class=\"container\" style=\"width: 400px; margin-top: 5%; margin-bottom: 5%\">\r\n  <div class=\"jumbotron\" style=\"padding: 0; background-color: #FFF8E1\">\r\n    <div class=\"container\" style=\"text-align: center; padding: 20px; border-bottom: #FFE082 2px solid\">\r\n      <h2>Delivery Login</h2>\r\n    </div>\r\n    <div class=\"container\" style=\"padding: 30px; font-size: 15px\">\r\n      <form method=\"post\" [formGroup]=\"deliveryLoginForm\" (ngSubmit) = \"onSubmit(deliveryLoginForm.value)\">\r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Your Email:</div>\r\n          <div><input type = \"text\" required = \"required\" formControlName=\"email\" placeholder=\"example@foodoholic.com\" id=\"Email\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">Your Password:</div>\r\n            <div class=\"col-md-6\" style=\"text-align: right\"><a routerLink=\"/recover\">Forgot?</a></div>\r\n          </div>\r\n          <div><input type = \"password\" required = \"required\" formControlName=\"password\" placeholder=\"*******************\" id=\"password\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"padding: 20px 20px 0px 20px\">\r\n          <button type=\"submit\" value = \"submit\" class=\"btn btn-primary btn-lg btn-block\">Login</button>\r\n        </div>\r\n        <!-- Place holder for recaptcha -->\r\n        <div #recaptcha style=\"padding: 10px -10px; margin-top: 10px\"></div>\r\n\r\n        <div class=\"container\" style=\"margin-top: 10px; padding: 10px 27px 5px 27px\">\r\n          <button id=\"google-button\" class=\"btn btn-block btn-social btn-google\" style=\"margin-bottom: 15px\" (click)=\"socialSignIn('google')\">\r\n            <i class=\"fa fa-google\"></i> Sign in with Google\r\n          </button>\r\n          <button id=\"facebook-button\" class=\"btn btn-block btn-social btn-facebook\" (click)=\"socialSignIn('facebook')\">\r\n            <i class=\"fa fa-facebook\"></i> Sign in with Facebook\r\n          </button>\r\n          \r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n    <div class=\"container\" style=\"border-top: #FFE082 2px solid; padding: 30px 40px 40px 40px; font-size: 15px\">\r\n      <div class=\"row\" style=\"font-style: italic; text-align: center\"><b>Want to be a delivery person?</b></div>\r\n      <div class=\"row\">We Hire You! <a routerLink=\"/deliveryreg\">Join today</a>, registered to be a delivery person of Food-O-Holic today!</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryorderhistory/deliveryorderhistory.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryorderhistory/deliveryorderhistory.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n  <title>\r\n    Order History\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"deliveryorderhistory.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n\r\n<app-deliverydropdown></app-deliverydropdown>\r\n\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Order History</h3>\r\n    <p>Below order history from your restaurant.</p>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <strong> Order Number </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Price </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Name of Item </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Status </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Time </strong>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div *ngIf=\"orders\">\r\n    <ul>\r\n      <div *ngFor=\"let order of orders; index as i\">\r\n        <div class=\"row\" style=\"margin-top: 5px\">\r\n          <div class=\"col-md-4\">\r\n            <a href=\"#\" routerLink=\"/restaurantvieworder\"> {{ i+1 }} </a>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            $ {{order.price}}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            {{ order.name_of_item }}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            Fulfilled\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            {{ order.time }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n</body>\r\n\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryprofile/deliveryprofile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryprofile/deliveryprofile.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n  <title>\r\n    Delivery Profile\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"deliveryprofile.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-deliverydropdown></app-deliverydropdown>\r\n\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Delivery Details</h3>\r\n  </div>\r\n  <hr>\r\n  <!-- <div class=\"row\">\r\n    <div class=\" col-md-6\">\r\n      <ul *ngIf=\"delivery_details\">\r\n        <h4><strong> {{delivery_details.name}} </strong></h4>\r\n        <li>\r\n          <strong> Contact: </strong> <a href=\"tel:{{delivery_details.contact}}\">{{delivery_details.contact}}</a>\r\n        </li>\r\n        <li>\r\n          <strong> Address: </strong>\r\n          {{delivery_details.street1 + delivery_details.street2 + delivery_details.city + delivery_details.state + delivery_details.zip_code}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n  <form method=\"POST\" [formGroup]=\"deliveryProfileForm\" (ngSubmit)=\"onSubmit(deliveryProfileForm.value)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-md-offset-1\">\r\n        <!-- Change src here -->\r\n        <img class=\"img-circle\" [src]=\"delivery_details.delivery_image\" alt=\"\" style=\"width: 200px; height: 200px\">\r\n        <input type=\"file\" required=\"required\" accept=\"image/*\" (change)=\"onFileSelected($event)\" id=\"delivery_image\"\r\n               ng-model=\"delivery_image\" base-sixty-four-input>\r\n\r\n      </div>\r\n      <div class=\"info col-md-6 col-md-offset-1\">\r\n        <div class=\"row\">\r\n          <strong> Full Name: </strong>\r\n          <input type=\"text\" formControlName=\"name\" required=\"required\" placeholder=\"John Doe\" id=\"Name\" value=\"{{ delivery_details.name }}\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <strong> Email Address: </strong>\r\n          <input type=\"contact\" formControlName=\"email\" required=\"required\" placeholder=\"food@foodoholics.com\" \r\n                 id=\"email\" value=\"{{delivery_details.email}}\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <strong> Phone Number: </strong>\r\n          <input type=\"contact\" formControlName=\"contact\" required=\"required\" placeholder=\"812-999-9999\" id=\"phone\" value=\"{{delivery_details.contact}}\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" value=\"submit\" class=\"btn btn-primary btn-lg btn-block pull-right\" style=\"width: 100px; margin-right: 20px\">\r\n      Save\r\n    </button>\r\n  </form>\r\n  <hr>\r\n</div>\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryreg/deliveryreg.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryreg/deliveryreg.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    Log In\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-logindropdown></app-logindropdown>\r\n<div class=\"container\" style=\"width: 400px; margin-top: 5%; margin-bottom: 5%\">\r\n  <div class=\"jumbotron\" style=\"padding: 0; background-color: #FFF8E1\">\r\n    <div class=\"container\" style=\"text-align: center; padding: 20px; border-bottom: #FFE082 2px solid\">\r\n      <h2>Register Now!</h2>\r\n    </div>\r\n    <div class=\"container\" style=\"padding: 30px; font-size: 15px\">\r\n      <form method=\"post\" [formGroup]=\"deliveryRegistrationForm\" (ngSubmit) = onSubmit(deliveryRegistrationForm.value)>\r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Full Name::</div>\r\n          <div><input type = \"text\" required=\"required\" formControlName=\"name\" placeholder=\"John Doe\" id=\"FullName\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Email Address:</div>\r\n          <div><input type = \"text\" required = \"required\" formControlName=\"email\" placeholder=\"johndoe@foodoholic.com\" id=\"Email\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Password:</div>\r\n          <div><input type = \"password\" required=\"required\" formControlName=\"password\" placeholder=\"*******************\" id=\"password\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\">\r\n          <div>Confirm Password:</div>\r\n          <div><input type = \"password\" required=\"required\" formControlName=\"confirmpass\" placeholder=\"*******************\" id=\"confirmpass\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"padding: 20px 20px 0px 20px\">\r\n          <button type=\"submit\" value=\"submit\" class=\"login-button btn btn-primary\">Register</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display-menu/display-menu.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display-menu/display-menu.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    customer dashboard\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"customerdashboard.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-customerdropdown></app-customerdropdown>\r\n<div class=\"container\">\r\n    <div class=\"container\">\r\n      <h3>Restaurant Menu</h3>\r\n    </div>\r\n    <hr>\r\n    <ul>\r\n      <div *ngFor=\"let item of menu\">\r\n        <div class=\"item\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <img [src]=\"'/menu_images/' + item.image\" alt=\"\" style=\"width: 150px; height: 100px\">\r\n            </div>\r\n            \r\n            <div class=\"col-md-6\">\r\n              <div class=\"row\" style=\"margin: 1% 10%;\">\r\n                <div class=\"row\">\r\n                  <p>\r\n                    <strong> Name: </strong>\r\n                    {{item.name}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <p>\r\n                    <strong> Price: $ </strong>\r\n                    {{item.cost}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <p>\r\n                    <strong> Description: </strong>\r\n                    {{item.description}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <button (click)=\"orderItem(item)\">Order Now!</button>    \r\n                    <!-- <a class=\"edit-link pull-right\" (click)=\"remove(item.name, i)\">O</a> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          \r\n        </div>\r\n      </div>\r\n    </ul>\r\n</div>\r\n\r\n\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group-chat/group-chat.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group-chat/group-chat.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>group-chat works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n  <head>\r\n    <title>\r\n      Log In\r\n    </title>\r\n    <!-- Bootstrap CDN scripts -->\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n    <script src=\"login.component.css\"></script>\r\n    <script src=\"../../styles.css\"></script>\r\n    <script src=\"../backgroup-image.css\"></script>\r\n  </head>\r\n  <body>\r\n  <app-logindropdown></app-logindropdown>\r\n  <div>\r\n    <div class=\"container\" style=\"width: 430px; margin-top: 5%; margin-bottom: 5%\">\r\n      <div class=\"jumbotron\" style=\"padding: 0; background-color: #FFF8E1\">\r\n        <div class=\"container\" style=\"text-align: center; padding: 20px; border-bottom: #FFE082 2px solid\">\r\n          <h2>Log In</h2>\r\n        </div>\r\n        <div class=\"container\" style=\"padding: 30px; font-size: 15px\">\r\n          <form method=\"post\" [formGroup]=\"userLoginForm\" (ngSubmit) = \"onSubmit(userLoginForm.value)\">\r\n            <div class=\"container\" style=\"padding-bottom: 20px\">\r\n              <div>Your Email:</div>\r\n              <div><input type = \"email\" formControlName=\"email\" required = \"required\" placeholder=\"example@foodoholic.com\" id=\"Email\" style=\"width: 100%\"></div>\r\n            </div>\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">Your Password:</div>\r\n                <div class=\"col-md-6\" style=\"text-align: right\"><a routerLink=\"/recover\">Forgot?</a></div>\r\n              </div>\r\n              <div><input type = \"password\" required = \"required\" formControlName=\"password\" placeholder=\"*******************\" id=\"password\" style=\"width: 100%\"></div>\r\n            </div>\r\n            <div class=\"container\" style=\"padding: 20px 20px 0px 20px\">\r\n              <button type=\"submit\" value = \"submit\" class=\"login-button btn btn-primary\" (ngSubmit)=\"onSubmit\">Login</button>\r\n\r\n              <!-- Place holder for recaptcha -->\r\n              <div #recaptcha style=\"padding: 10px -10px; margin-top: 10px\"></div>\r\n\r\n              <div class=\"container\" style=\"margin-top: 10px; padding: 10px 27px 5px 27px\">\r\n                <button id=\"google-button\" class=\"btn btn-block btn-social btn-google\" style=\"margin-bottom: 15px\" (click)=\"socialSignIn('google')\">\r\n                  <i class=\"fa fa-google\"></i> Sign in with Google\r\n                </button>\r\n                <button id=\"facebook-button\" class=\"btn btn-block btn-social btn-facebook\" (click)=\"socialSignIn('facebook')\">\r\n                  <i class=\"fa fa-facebook\"></i> Sign in with Facebook\r\n                </button>\r\n\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"showFile\">\r\n          <form method=\"post\" [formGroup]=\"userVerifyForm\" (ngSubmit) = \"onVerify(userVerifyForm.value)\">\r\n            <div>Please enter the 6-digit code that was sent to your email</div>\r\n            <input type=\"text\" required=\"required\" placeholder=\"6-digit code\" formControlName=\"otp\">\r\n            <span class=\"input-group-btn\">\r\n              <button type=\"submit\" class=\"btn btn-primary\" (ngSubmit)=\"onVerify\">Verify</button>\r\n            </span>\r\n          </form>\r\n          <div class=\"form-text error\" *ngIf=\"userVerifyForm\">\r\n            <!--<div *ngIf=\"userLoginForm.controls.otp.hasError('required')\">Verifcation is required</div>\r\n            <div *ngIf=\"userLoginForm.controls.otp.hasError('invalidOtp')\">Code is invalid</div>-->\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"container\" style=\"border-top: #FFE082 2px solid; padding: 30px 40px 40px 40px; font-size: 15px\">\r\n          <div class=\"row\" style=\"font-style: italic; text-align: center\"><b>New to Food-O-Holic?</b></div>\r\n          <div class=\"row\"><a routerLink=\"/registration\">Create an account</a>, it only takes a few seconds.</div>\r\n          <div class=\"row\"><a routerLink=\"/recover\">Forgot Password</a>.</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logindropdown/logindropdown.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logindropdown/logindropdown.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light\">\r\n  <!-- Navbar content -->\r\n  <!-- Just an image -->\r\n  <a class=\"navbar-brand\" routerLink=\"/public\" style=\"padding: 0;\">\r\n    <img src=\"../../assets/img/logo.png\" height=\"50\" alt=\"\">\r\n  </a>\r\n  <ul class=\"nav navbar-nav navbar-right\">\r\n    <li class=\"dropdown\" style=\"width: 160px; text-align: center\">\r\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n        <span class=\"glyphicon glyphicon-log-in\"></span>\r\n        Login\r\n        <b class=\"caret\"></b>\r\n      </a>\r\n      <ul class=\"dropdown-menu\">\r\n        <li><a href=\"#\" routerLink=\"/login\">Customers</a></li>\r\n        <li><a href=\"#\" routerLink=\"/resturantlogin\">Restaurant</a></li>\r\n        <li><a href=\"#\" routerLink=\"/deliverylogin\">Delivery Person</a></li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"dropdown\" style=\"width: 160px; text-align: center\">\r\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n        Sign up\r\n        <b class=\"caret\"></b>\r\n      </a>\r\n      <ul class=\"dropdown-menu\">\r\n        <li><a href=\"#\" routerLink=\"/registration\">Customers</a></li>\r\n        <li><a href=\"#\" routerLink=\"/restaurantreg\">Restaurant</a></li>\r\n        <li><a href=\"#\" routerLink=\"/deliveryreg\">Delivery Person</a></li>\r\n      </ul>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-details/my-details.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-details/my-details.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h6 class=\"pb-2 mb-0\">My Details</h6>\n\n    <form [formGroup]=\"detailsForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"name\">Display Name</label>\n        <input formControlName=\"displayName\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Alien\">\n         <small *ngIf=\"detailsForm.get('displayName').hasError('required')\" class=\"form-text text-danger\">Display name is required.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"test@example.com\">\n        <small *ngIf=\"detailsForm.get('email').hasError('required')\" class=\"form-text text-danger\">Email is required.</small>\n        <small *ngIf=\"detailsForm.get('email').hasError('email')\" class=\"form-text text-danger\">Email is invalid.</small>\n      </div>\n      <button type=\"submit\" [disabled]=\"loader || detailsForm.invalid\" class=\"btn btn-primary\">{{loader?'Joining':'Join Group'}}</button>\n    </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>order works!</p>\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderhistory/orderhistory.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderhistory/orderhistory.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n  <title>\r\n    Order History\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"orderhistory.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n\r\n<app-restaurantdropdown></app-restaurantdropdown>\r\n\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Order History</h3>\r\n    <p>Below order history from your restaurant.</p>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <strong> Order Number </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Price </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Name of Item </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Status </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Time </strong>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div *ngIf=\"orders\">\r\n    <ul>\r\n      <div *ngFor=\"let order of orders; index as i\">\r\n        <div class=\"row\" style=\"margin-top: 5px\">\r\n          <div class=\"col-md-4\">\r\n            {{i + 1}}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            $ {{order.price}}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            {{ order.name_of_item }}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n              {{ order.status }}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            {{ order.time }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n</body>\r\n\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/public.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/public.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    public dashboard\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"public.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n<!--  <script src=\"../backgroup-image.css\"></script>-->\r\n</head>\r\n<body>\r\n<app-logindropdown></app-logindropdown>\r\n\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Welcome to Food-O-Holics</h3>\r\n    <p style=\"font-size: 18px\">Search for restaurants below</p>\r\n  </div>\r\n  <br>\r\n  <div class=\"search-container\">\r\n    <form action=\"get\" [formGroup]=\"userSearchForm\" (ngSubmit)=\"onSubmit(userSearchForm.value)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 col-md-offset-2\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" placeholder=\"Restaurant Name\" formControlName=\"restaurant_name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" placeholder=\"Location\" formControlName=\"location\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" placeholder=\"Category\" formControlName=\"food_category\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button class=\"btn btn-primary\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <hr>\r\n</div>\r\n\r\n<app-my-details></app-my-details>\r\n\r\n<div #result>\r\n  <div *ngIf=\"results\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-md-offset-1\">\r\n          <h4> Searching Result: </h4>\r\n        </div>\r\n        <div class=\"col-md-2 col-md-offset-4\">\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\"\r\n                    aria-expanded=\"false\">\r\n              <span class=\"glyphicon glyphicon-th-list\"></span>\r\n              Sort By\r\n            </button>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a class=\"dropdown-item\" (click)=\"updateToLocation()\">Location</a></li>\r\n              <li><a class=\"dropdown-item\" (click)=\"updateToResName()\">Restaurant Name</a></li>\r\n              <li><a class=\"dropdown-item\" (click)=\"updateToFoodCat()\">Restaurant Category</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\" style=\"margin-left: 0; margin-right: 20px\">\r\n        <ul *ngFor=\"let result of results\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <img [src]=\"result.res_image\" alt=\"\"/>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <h4><strong> {{result.name}} </strong></h4>\r\n              <li><strong> Food Category: </strong>{{result.food_category}}</li>\r\n              <li><strong> Location: </strong> <a\r\n                href=\"http://maps.google.com/?q={{result.location.replace(' ', '+')}}\">{{result.location}}</a>\r\n              </li>\r\n              <li><strong> Working Hours: </strong>{{result.working_hours}}</li>\r\n              <li><strong> Description: </strong> Some thing write here!</li>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n</body>\r\n</html>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recover/recover.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recover/recover.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n  <head>\r\n    <title>\r\n      Recover Account\r\n    </title>\r\n    <!-- Bootstrap CDN scripts -->\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n    <script src=\"login.component.css\"></script>\r\n    <script src=\"../../styles.css\"></script>\r\n  </head>\r\n  <body class=\"login-background\">\r\n\r\n    <nav class=\"navbar navbar-light\">\r\n        <a class=\"navbar-brand\" routerLink=\"/public\" style=\"padding: 0;\">\r\n          <img src=\"../../assets/img/logo.png\" height=\"50\" alt=\"\">\r\n        </a>\r\n    </nav>\r\n\r\n    <div>Recover your account</div>\r\n\r\n    <br>\r\n\r\n    <div>To recover your account please complete the form below</div>\r\n\r\n    <form method=\"POST\" [formGroup]=\"userRecoverForm\" (ngSubmit)=\"onSubmit(userRecoverForm.value)\">\r\n        <div>Full Name:</div>\r\n        <div><input type=\"text\" required=\"required\" formControlName=\"name\" placeholder=\"First Last\" id=\"FullName\" style=\"width: 100%\"></div>\r\n        <div>Email Address:</div>\r\n        <div><input type=\"text\" required = \"required\" formControlName=\"email\" placeholder=\"johndoe@foodoholic.com\" id=\"Email\" style=\"width: 100%\"></div>\r\n        <div><button type=\"submit\"value = \"submit\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"onClickOpenVerification()\">Verify</button></div>\r\n    </form>\r\n\r\n    <div *ngIf=\"showFile\">\r\n        <form method=\"post\" [formGroup]=\"userVerifyForm\" (ngSubmit) = \"onVerify(userVerifyForm.value)\">\r\n          <div>Please enter the 6-digit code that was sent to your email</div>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"6-digit code\" formControlName=\"otp\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-secondary\" (click)=\"veryOTPAsyn(userVerifyForm.controls.otp)\" type=\"button\">Verify</button>\r\n          </span>\r\n        </form>\r\n        <div class=\"form-text error\" *ngIf=\"userVerifyForm.touched\">\r\n          <div *ngIf=\"userLoginForm.controls.otp.hasError('required')\">Verifcation is required</div>\r\n          <div *ngIf=\"userLoginForm.controls.otp.hasError('invalidOtp')\">Code is invalid</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"showPasswordReset\">\r\n        <form method=\"post\" [formGroup]=\"userPasswordReset\" (ngSubmit) = \"onReset(userPasswordReset.value)\">\r\n          <div>Enter your new password</div>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"******\" formControlName=\"newPass\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-secondary\" type=\"submit\" value=\"submit\">Submit</button>\r\n          </span>\r\n        </form>\r\n      </div>\r\n\r\n  </body>\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    Log In\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-logindropdown></app-logindropdown>\r\n<div class=\"container\" style=\"width: 400px; margin-top: 5%; margin-bottom: 5%\">\r\n  <div class=\"jumbotron\" style=\"padding: 0; background-color: #FFF8E1\">\r\n    <div class=\"container\" style=\"text-align: center; padding: 20px; border-bottom: #FFE082 2px solid\">\r\n      <h2>Register Now!</h2>\r\n    </div>\r\n    <div class=\"container\" style=\"padding: 30px; font-size: 15px\">\r\n      <form method=\"post\"  [formGroup]=\"userRegistrationForm\" (ngSubmit) = onSubmit(userRegistrationForm.value)>\r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Full Name:</div>\r\n          <div><input type = \"text\" required=\"required\" formControlName=\"name\" placeholder=\"John Doe\" id=\"FullName\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Email Address:</div>\r\n          <div><input type = \"text\" required = \"required\" formControlName=\"email\" placeholder=\"johndoe@foodoholic.com\" id=\"Email\" style=\"width: 100%\"></div>\r\n        </div>  \r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Password:</div>\r\n          <div><input type = \"password\" required=\"required\" formControlName=\"password\" placeholder=\"*******************\" id=\"password\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\">\r\n          <div>Confirm Password:</div>\r\n          <div><input type = \"password\" required=\"required\" formControlName=\"confirmpass\" placeholder=\"*******************\" id=\"confirmpass\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"padding: 20px 20px 0px 20px\">\r\n          <button type=\"submit\" value=\"submit\" class=\"login-button btn btn-primary\">Register</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"container\" style=\"border-top: #FFE082 2px solid; padding: 30px 40px 40px 120px;font-size: 15px\">\r\n      <div class=\"row\" style=\"font-style: italic\"><b>Already a member?</b></div>\r\n      <div class=\"row\" style=\"text-align:justify;\"><a routerLink=\"/login\">Log In</a> Here!</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-view/restaurant-view.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-view/restaurant-view.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<html>\r\n\r\n    <head>\r\n        <title>\r\n          Restaurant Portal\r\n        </title>\r\n        <!-- Bootstrap CDN scripts -->\r\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n        <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n        <script src=\"login.component.css\"></script>\r\n        <script src=\"../../styles.css\"></script>\r\n    </head> \r\n    <body>\r\n\r\n        <nav class=\"navbar navbar-light\">\r\n            <!-- Navbar content -->\r\n            <!-- Just an image -->\r\n            <a class=\"navbar-brand\" routerLink=\"/public\" style=\"padding: 0;\">\r\n              <img src=\"../../assets/img/logo.png\" height=\"50\" alt=\"\">\r\n            </a>\r\n            <ul class=\"nav navbar-nav navbar-right\" style=\"padding-right: 20px;\"> \r\n                <div class=\"container\">\r\n                  <div class=\"dropdown\">\r\n                      <button class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-user\"></span> Account <span class=\"caret\"></span></button>\r\n                      <ul class=\"dropdown-menu\">\r\n                        <label>Orders</label>\r\n                        <li><a href=\"#\" routerLink=\"/restaurantcurrentorders\">Current Orders</a></li>\r\n                        <li><a href=\"#\" routerLink=\"/orderhistory\">Order History</a></li>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <label>Restaurant Details</label>\r\n                        <li><a href=\"#\" routerLink=\"/resturantdetails\">Add Details</a></li>\r\n                        <li><a href=\"#\" routerLink=\"/restaurantviewdetails\">View Details</a></li>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <label>Restaurant Menu</label>\r\n                        <li><a href=\"#\" routerLink=\"/restaurantmenu\">Add items to menu</a></li>\r\n                        <li><a href=\"#\" routerLink=\"/restaurantviewmenu\">View Menu</a></li>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <label>Restaurent Statistics</label>\r\n                        <li><a href=\"#\" routerLink=\"/restaurantstats\">Statistics</a></li>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <li><a href=\"#\" routerLink=\"/resturantlogin\">Log out</a></li>\r\n                      </ul>\r\n                    </div>\r\n                </div>\r\n            </ul>\r\n          </nav>\r\n\r\n    </body>\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantcurrentorders/restaurantcurrentorders.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantcurrentorders/restaurantcurrentorders.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n  <title>\r\n    Restaurant Menu\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-restaurantdropdown></app-restaurantdropdown>\r\n\r\n<!-- Place holder for list of orders -->\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Current Orders</h3>\r\n    <p>Below are orders that are currently being fulfilled</p>\r\n    <p>Click on an order to reveal options</p>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <strong> Order Number </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Price </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Name of Item </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Status </strong>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <strong> Completed? </strong>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div *ngIf=\"orders\">\r\n    <ul>\r\n      <div *ngFor=\"let order of orders; index as i\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            {{i + 1}}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            $ {{order.price}}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            {{ order.name_of_item }}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            {{ order.status }}\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <button (click)=\"fullfillOrder(order._id, i)\">Completed</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n</body>\r\n\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantdetails/restaurantdetails.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantdetails/restaurantdetails.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n  <title>\r\n    Restaurant Details\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"restaurantviewdetails.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n\r\n<app-restaurantdropdown></app-restaurantdropdown>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Edit Details</h3>\r\n    <p>Please put new restaurant information here! After edit, do not forget to click update at the button.</p>\r\n  </div>\r\n  <hr>\r\n  <form mehtod=\"post\" [formGroup]=\"detailsForm\" (ngSubmit)=onSubmit(detailsForm.value)>\r\n    <div class=\"row\">\r\n      <div class=\" col-md-6\">\r\n        <img [src]=\"restaurant_details.res_image\" alt=\"\" style=\"width: 500px\"/>\r\n        <input type=\"file\" required=\"required\" accept=\"image/*\" (change)=\"onFileSelected($event)\" id=\"res_image\"\r\n               ng-model=\"res_image\" base-sixty-four-input>\r\n      </div>\r\n      <div class=\"form-style col-md-6\">\r\n        <h4>\r\n          <input type=\"text\" required=\"required\" formControlName=\"name\" value=\"{{ restaurant_details.name }}\"\r\n                 id=\"name\" style=\"width: 100%\">\r\n        </h4>\r\n        <li>\r\n          <strong> Contact: </strong>\r\n          <input type=\"text\" required=\"required\" formControlName=\"contact\" value=\"{{ restaurant_details.contact }}\"\r\n                 id=\"contact\">\r\n        </li>\r\n        <li>\r\n          <strong> Food Category: </strong>\r\n          <input type=\"text\" required=\"required\" formControlName=\"food_category\"\r\n                 value=\"{{ restaurant_details.food_category }}\" id=\"food_category\">\r\n        </li>\r\n        <li>\r\n          <strong> Location: </strong>\r\n          <input type=\"text\" required=\"required\" formControlName=\"location\"\r\n                 value=\"{{ restaurant_details.location }}\" id=\"location\">\r\n        </li>\r\n        <li>\r\n          <strong> Working Hours: </strong>\r\n          <input type=\"text\" required=\"required\" formControlName=\"working_hours\"\r\n                 value=\"{{ restaurant_details.working_hours }}\"\r\n                 id=\"working_hours\">\r\n        </li>\r\n        <li><strong> Description: </strong>\r\n          <input type=\"text\" required=\"required\" formControlName=\"description\"\r\n                 value=\"{{restaurant_details.description}}\"\r\n                 id=\"description\">\r\n        </li>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <button type=\"submit\" value=\"submit\"\r\n              class=\"btn btn-primary btn-lg btn-block pull-right\" style=\"width: 100px; margin-right: 20px\">Update\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantdropdown/restaurantdropdown.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantdropdown/restaurantdropdown.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light\" style=\"padding-right: 30px\">\r\n  <!-- Navbar content -->\r\n  <!-- Just an image -->\r\n  <a class=\"navbar-brand\" routerLink=\"/public\" style=\"padding: 0;\">\r\n    <img src=\"../../assets/img/logo.png\" height=\"50\" alt=\"\">\r\n  </a>\r\n  <ul class=\"nav navbar-nav navbar-right\" style=\"width: 80%\">\r\n    <li class=\"dropdown\" style=\"width: 22.5%; text-align: center\">\r\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n        <span class=\"glyphicon glyphicon-glass\"></span>\r\n        Orders\r\n        <b class=\"caret\"></b>\r\n      </a>\r\n      <ul class=\"dropdown-menu\" style=\"width: 100%\">\r\n        <li><a href=\"#\" routerLink=\"/restaurantcurrentorders\">Current Orders</a></li>\r\n        <li><a href=\"#\" routerLink=\"/orderhistory\">Order History</a></li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"dropdown\" style=\"width: 22.5%; text-align: center\">\r\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n        Menu\r\n        <b class=\"caret\"></b>\r\n      </a>\r\n      <ul class=\"dropdown-menu\" style=\"width: 100%\">\r\n        <li><a href=\"#\" routerLink=\"/restaurantviewmenu\">View Menu</a></li>\r\n        <li><a href=\"#\" routerLink=\"/restaurantmenu\">Add items to menu</a></li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"dropdown\" style=\"width: 22.5%; text-align: center\">\r\n      <a href=\"#\" routerLink=\"/restaurantviewdetails\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n        Restaurant Details\r\n      </a>\r\n    </li>\r\n    <!-- <li style=\"width: 22.5%; text-align: center\">\r\n      <a href=\"#\" routerLink=\"/restaurantstats\">\r\n        <span class=\"glyphicon glyphicon-object-align-bottom\"></span>\r\n        Statistics\r\n      </a>\r\n    </li> -->\r\n    <li style=\"width: 10%; text-align: center\">\r\n      <a href=\"#\" routerLink=\"/resturantlogin\">\r\n        <span class=\"glyphicon glyphicon-log-out\"></span>\r\n        Logout\r\n      </a>\r\n    </li>\r\n\r\n  </ul>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantmenu/restaurantmenu.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantmenu/restaurantmenu.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n  <title>\r\n    Restaurant Details\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n\r\n<app-restaurantdropdown></app-restaurantdropdown>\r\n\r\n<div class=\"container\">\r\n  <h2>Add new item to the Menu</h2>\r\n  <form mehtod=\"post\" [formGroup]=\"menuForm\" (ngSubmit)=onSubmit(menuForm.value)>\r\n    <div class=\"item\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\" style=\"margin: 10% 10%\">\r\n            <div class=\"row\">\r\n              <strong>Image:</strong>\r\n              <input type=\"file\" required=\"required\" accept=\"image/*\" (change)=\"onFileSelected($event)\" id=\"food_image\"\r\n                     ng-model=\"res_image\" base-sixty-four-input>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <p>\r\n                <strong> Name: </strong>\r\n                <input type=\"text\" required=\"required\" formControlName=\"name\" placeholder=\"Cheeseburger\" id=\"name\">\r\n              </p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <p>\r\n                <strong> Price: </strong>\r\n                <input type=\"text\" required=\"required\" formControlName=\"cost\" placeholder=\"$2.00\" id=\"cost\">\r\n              </p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <p>\r\n                <strong> Description: </strong>\r\n                <input type=\"text\" required=\"required\" formControlName=\"description\" placeholder=\"A delecious Meal\"\r\n                       id=\"description\">\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\" style=\"margin-right: 20px\">\r\n        <button type=\"submit\" value=\"submit\" class=\"btn btn-primary pull-right\" style=\"width: 200px\">\r\n          Add Item\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n</body>\r\n\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantreg/restaurantreg.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantreg/restaurantreg.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    Log In\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-logindropdown></app-logindropdown>\r\n<div class=\"container\" style=\"width: 400px; margin-top: 5%; margin-bottom: 5%\">\r\n  <div class=\"jumbotron\" style=\"padding: 0; background-color: #FFF8E1\">\r\n    <div class=\"container\" style=\"text-align: center; padding: 20px; border-bottom: #FFE082 2px solid\">\r\n      <h2>Register Now!</h2>\r\n    </div>\r\n    <div class=\"container\" style=\"padding: 30px; font-size: 15px\">\r\n      <form method=\"post\" [formGroup]=\"restaurantRegistrationForm\" (ngSubmit) = onSubmit(restaurantRegistrationForm.value)>\r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Full Name:</div>\r\n          <div><input type = \"text\" required=\"required\" formControlName=\"name\" placeholder=\"John Doe\" id=\"FullName\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Email Address:</div>\r\n          <div><input type = \"text\" required = \"required\" formControlName=\"email\" placeholder=\"johndoe@foodoholic.com\" id=\"Email\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Restaurant/Company Name:</div>\r\n          <div><input type = \"text\" required=\"required\" formControlName=\"restaurant_name\" placeholder=\"John Doe's Burgers\" id=\"RestaurantName\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Password:</div>\r\n          <div><input type = \"password\" required=\"required\" formControlName=\"password\" placeholder=\"*******************\" id=\"password\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\">\r\n          <div>Confirm Password:</div>\r\n          <div><input type = \"password\" required=\"required\" placeholder=\"*******************\" id=\"confirmpass\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"padding: 20px 20px 20px 20px\">\r\n          <button type=\"submit\" value=\"submit\" class=\"login-button btn btn-primary\">Register</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantstats/restaurantstats.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantstats/restaurantstats.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n  <title>\r\n    Restaurant Menu\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"restaurantstats.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-restaurantdropdown></app-restaurantdropdown>\r\n\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Restaurant Statistics</h3>\r\n    <p style=\"font-size: 18px\">Below are some statistics you might find helpful</p>\r\n  </div>\r\n  <hr>\r\n</div>\r\n\r\n<!-- placeholder for statistics -->\r\n<div #stats></div>\r\n\r\n</body>\r\n\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantviewdetails/restaurantviewdetails.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantviewdetails/restaurantviewdetails.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n  <title>\r\n    Restaurant Details\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"restaurantviewdetails.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n\r\n<app-restaurantdropdown></app-restaurantdropdown>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Restaurant Details</h3>\r\n    <p>Below is how a customer will see your Restaurant page</p>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\" col-md-6\" *ngIf=\"restaurant_details\">\r\n      <img [src]=\"restaurant_details.res_image\" alt=\"\" style=\"width: 500px\"/>\r\n    </div>\r\n    <div class=\" col-md-6\">\r\n      <ul *ngIf=\"restaurant_details\">\r\n        <h4><strong> {{restaurant_details.name}} </strong></h4>\r\n        <li><strong> Contact: </strong> <a href=\"tel:{{restaurant_details.contact}}\">{{restaurant_details.contact}}</a>\r\n        </li>\r\n        <li><strong> Food Category: </strong>{{restaurant_details.food_category}}</li>\r\n        <li><strong> Location: </strong> <a\r\n          href=\"http://maps.google.com/?q={{restaurant_details.location.replace(' ', '+')}}\">{{restaurant_details.location}}</a>\r\n        </li>\r\n        <li><strong> Working Hours: </strong>{{restaurant_details.working_hours}}</li>\r\n        <li><strong> Description: </strong> {{restaurant_details.description}}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <a class=\"edit-link pull-right\" href=\"#\" routerLink=\"/restaurantdetails\">Edit</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n</body>\r\n\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantviewmenu/restaurantviewmenu.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantviewmenu/restaurantviewmenu.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<head>\r\n  <title>\r\n    Restaurant Menu\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-restaurantdropdown></app-restaurantdropdown>\r\n\r\n<div class=\"container\">\r\n  <div class=\"container\">\r\n    <h3>Restaurant Menu</h3>\r\n    <p style=\"font-size: 18px\">Below is how a customer will see your Restaurant menu</p>\r\n  </div>\r\n  <hr>\r\n  <ul>\r\n    <div *ngFor=\"let item of menu\">\r\n      <div class=\"item\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <img [src]=\"'/menu_images/' + item.image\" alt=\"\" style=\"width: 150px; height: 100px\">\r\n          </div>\r\n          \r\n          <div class=\"col-md-6\">\r\n            <div class=\"row\" style=\"margin: 1% 10%;\">\r\n              <div class=\"row\">\r\n                <p>\r\n                  <strong> Name: </strong>\r\n                  {{item.name}}\r\n                </p>\r\n              </div>\r\n              <div class=\"row\">\r\n                <p>\r\n                  <strong> Price: $ </strong>\r\n                  {{item.cost}}\r\n                </p>\r\n              </div>\r\n              <div class=\"row\">\r\n                <p>\r\n                  <strong> Description: </strong>\r\n                  {{item.description}}\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n           <a class=\"edit-link pull-right\" (click)=\"remove(item.name, i)\">Remove</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ul>\r\n</div>\r\n\r\n</body>\r\n\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantvieworder/restaurantvieworder.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantvieworder/restaurantvieworder.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>restaurantvieworder works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resturantlogin/resturantlogin.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resturantlogin/resturantlogin.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <title>\r\n    Log In\r\n  </title>\r\n  <!-- Bootstrap CDN scripts -->\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"login.component.css\"></script>\r\n  <script src=\"../../styles.css\"></script>\r\n</head>\r\n<body>\r\n<app-logindropdown></app-logindropdown>\r\n<div class=\"container\" style=\"width: 400px; margin-top: 5%; margin-bottom: 5%\">\r\n  <div class=\"jumbotron\" style=\"padding: 0; background-color: #FFF8E1\">\r\n    <div class=\"container\" style=\"text-align: center; padding: 20px; border-bottom: #FFE082 2px solid\">\r\n      <h2>Restaurant Login</h2>\r\n    </div>\r\n    <div class=\"container\" style=\"padding: 30px; font-size: 15px\">\r\n      <form method=\"post\" [formGroup]=\"restaurantLoginForm\" (ngSubmit) = \"onSubmit(restaurantLoginForm.value)\">\r\n        <div class=\"container\" style=\"padding-bottom: 20px\">\r\n          <div>Your Email:</div>\r\n          <div><input type = \"text\" required = \"required\" formControlName=\"email\" placeholder=\"example@foodoholic.com\" id=\"Email\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">Your Password:</div>\r\n            <div class=\"col-md-6\" style=\"text-align: right\"><a routerLink=\"/recover\">Forgot?</a></div>\r\n          </div>\r\n          <div><input type = \"password\" required = \"required\" formControlName=\"password\" placeholder=\"*******************\" id=\"password\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"padding: 20px 20px 0px 20px\">\r\n          <button type=\"submit\" value = \"submit\" class=\"login-button btn btn-primary\">Login</button>\r\n\r\n           <!-- Place holder for recaptcha -->\r\n           <div #recaptcha style=\"padding: 10px -10px; margin-top: 10px\"></div>\r\n\r\n           <div class=\"container\" style=\"margin-top: 10px; padding: 10px 27px 5px 27px\">\r\n             <button id=\"google-button\" class=\"btn btn-block btn-social btn-google\" style=\"margin-bottom: 15px\" (click)=\"socialSignIn('google')\">\r\n               <i class=\"fa fa-google\"></i> Sign in with Google\r\n             </button>\r\n             <button id=\"facebook-button\" class=\"btn btn-block btn-social btn-facebook\" (click)=\"socialSignIn('facebook')\">\r\n               <i class=\"fa fa-facebook\"></i> Sign in with Facebook\r\n             </button>\r\n\r\n           </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n    <div class=\"container\" style=\"border-top: #FFE082 2px solid; padding: 30px 40px 40px 40px; font-size: 15px\">\r\n      <div class=\"row\" style=\"font-style: italic; text-align: center\"><b>Want us to deliver your food?</b></div>\r\n      <div class=\"row\"><a routerLink=\"/restaurantreg\">Create a restaurant account</a>, registered to be a restaurant owner on Food-O-Holic today!</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <nav class=\"navbar navbar-inverse navbar-fixed-top sidebar-main\" id=\"sidebar-wrapper\" role=\"navigation\">\r\n    <ul class=\"nav sidebar-nav\">\r\n      <li><a routerLink=\"/public\" style=\"padding: 0;\"><img src=\"../../assets/img/logo.png\" height=\"50\" alt=\"\"></a></li>\r\n      <li><a routerLink=\"/restaurantcurrentorders\"><span class=\"glyphicon glyphicon-briefcase\"></span> Current Orders </a></li>\r\n      <li><a routerLink=\"/restaurantdetails\"><span class=\"glyphicon glyphicon-th-list\"></span> Add Details </a></li>\r\n      <li><a routerLink=\"/restaurantviewdetails\"><span class=\"glyphicon glyphicon-list-alt\"></span> View Details</a></li>\r\n      <li><a routerLink=\"/restaurantmenu\"><span class=\"glyphicon glyphicon-menu-hamburger\"></span> Add items to Menu </a>\r\n      </li>\r\n      <li><a routerLink=\"/restaurantviewmenu\"><span class=\"glyphicon glyphicon-cutlery\"></span> View Menu </a></li>\r\n      <li><a routerLink=\"/restaurantstats\"><span class=\"glyphicon glyphicon-stats\"></span> Statistics </a></li>\r\n      <li><a routerLink=\"/orderhistory\"><span class=\"glyphicon glyphicon-folder-open\"></span> Order History</a></li>\r\n      <li><a routerLink=\"/resturantlogin\"><span class=\"glyphicon glyphicon-log-out\"></span> Log out </a></li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!-- Bootstrap CDN scripts -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n<script src=\"login.component.css\"></script>\r\n<script src=\"../../styles.css\"></script>\r\n\r\n<div class=\"container-fluid\">\r\n         \r\n    <!-- <div>Enter your OTP </div>\r\n    <div><input type = \"text\" formControlName=\"{{input}}\" class=\"form-control\" required = \"required\"   style=\"width: 100%\"></div>\r\n           -->\r\n           <label for=\"e-mail\">Verify OTP</label>\r\n           <br>\r\n           please enter the 6-digit code sent to your email\r\n    <div>\r\n    <form class=\"input-group\" [formGroup]=\"verifyForm\" formControlName=\"verifyForm\">\r\n      <input type=\"text\" placeholder=\"OTP\" formControlName=\"otp\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-secondary\" (ngSubmit)=\"veryOTPAsyn(verifyFormData.otp)\" type=\"button\">Verify</button>\r\n      </span>\r\n    </form>\r\n    </div>\r\n    <div class=\"form-text error\" *ngIf=\"userLoginForm.controls.otp.touched\">\r\n        <div *ngIf=\"userLoginForm.controls.otp.hasError('required')\">OTP is required.</div>\r\n      <div *ngIf=\"userLoginForm.controls.otp.hasError('invalidOtp')\">OTP is invalid.</div>\r\n    </div>\r\n    <!-- <div class=\"row\">\r\n        <div class=\"form-group col-sm-2\" *ngFor=\"let input of formInput;  index as i\">\r\n            <input #formRow type=\"text\" formControlName=\"{{input}}\" class=\"form-control\" maxlength=\"1\" (keyup)=\"keyUpEvent($event, i)\">\r\n          </div> -->\r\n    \r\n   \r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'fooddeliverysystem';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: socialConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialConfigs", function() { return socialConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_pusher_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _resturantlogin_resturantlogin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resturantlogin/resturantlogin.component */ "./src/app/resturantlogin/resturantlogin.component.ts");
/* harmony import */ var _restaurantreg_restaurantreg_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./restaurantreg/restaurantreg.component */ "./src/app/restaurantreg/restaurantreg.component.ts");
/* harmony import */ var _restaurant_view_restaurant_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./restaurant-view/restaurant-view.component */ "./src/app/restaurant-view/restaurant-view.component.ts");
/* harmony import */ var _orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./orderhistory/orderhistory.component */ "./src/app/orderhistory/orderhistory.component.ts");
/* harmony import */ var _restaurantdetails_restaurantdetails_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./restaurantdetails/restaurantdetails.component */ "./src/app/restaurantdetails/restaurantdetails.component.ts");
/* harmony import */ var _restaurantmenu_restaurantmenu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./restaurantmenu/restaurantmenu.component */ "./src/app/restaurantmenu/restaurantmenu.component.ts");
/* harmony import */ var _restaurantstats_restaurantstats_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./restaurantstats/restaurantstats.component */ "./src/app/restaurantstats/restaurantstats.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _restaurantviewdetails_restaurantviewdetails_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./restaurantviewdetails/restaurantviewdetails.component */ "./src/app/restaurantviewdetails/restaurantviewdetails.component.ts");
/* harmony import */ var _restaurantviewmenu_restaurantviewmenu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./restaurantviewmenu/restaurantviewmenu.component */ "./src/app/restaurantviewmenu/restaurantviewmenu.component.ts");
/* harmony import */ var _restaurantcurrentorders_restaurantcurrentorders_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./restaurantcurrentorders/restaurantcurrentorders.component */ "./src/app/restaurantcurrentorders/restaurantcurrentorders.component.ts");
/* harmony import */ var _customerdashboard_customerdashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./customerdashboard/customerdashboard.component */ "./src/app/customerdashboard/customerdashboard.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
/* harmony import */ var _recover_recover_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./recover/recover.component */ "./src/app/recover/recover.component.ts");
/* harmony import */ var _restaurantdropdown_restaurantdropdown_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./restaurantdropdown/restaurantdropdown.component */ "./src/app/restaurantdropdown/restaurantdropdown.component.ts");
/* harmony import */ var _customerprofile_customerprofile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./customerprofile/customerprofile.component */ "./src/app/customerprofile/customerprofile.component.ts");
/* harmony import */ var _customereditprofile_customereditprofile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./customereditprofile/customereditprofile.component */ "./src/app/customereditprofile/customereditprofile.component.ts");
/* harmony import */ var _deliverylogin_deliverylogin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./deliverylogin/deliverylogin.component */ "./src/app/deliverylogin/deliverylogin.component.ts");
/* harmony import */ var _deliveryreg_deliveryreg_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./deliveryreg/deliveryreg.component */ "./src/app/deliveryreg/deliveryreg.component.ts");
/* harmony import */ var _logindropdown_logindropdown_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./logindropdown/logindropdown.component */ "./src/app/logindropdown/logindropdown.component.ts");
/* harmony import */ var _restaurantvieworder_restaurantvieworder_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./restaurantvieworder/restaurantvieworder.component */ "./src/app/restaurantvieworder/restaurantvieworder.component.ts");
/* harmony import */ var _customerdropdown_customerdropdown_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./customerdropdown/customerdropdown.component */ "./src/app/customerdropdown/customerdropdown.component.ts");
/* harmony import */ var _chatfeature_chatfeature_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./chatfeature/chatfeature.component */ "./src/app/chatfeature/chatfeature.component.ts");
/* harmony import */ var _deliverydropdown_deliverydropdown_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./deliverydropdown/deliverydropdown.component */ "./src/app/deliverydropdown/deliverydropdown.component.ts");
/* harmony import */ var _deliveryorderhistory_deliveryorderhistory_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./deliveryorderhistory/deliveryorderhistory.component */ "./src/app/deliveryorderhistory/deliveryorderhistory.component.ts");
/* harmony import */ var _deliverycurrentorders_deliverycurrentorders_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./deliverycurrentorders/deliverycurrentorders.component */ "./src/app/deliverycurrentorders/deliverycurrentorders.component.ts");
/* harmony import */ var _deliveryprofile_deliveryprofile_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./deliveryprofile/deliveryprofile.component */ "./src/app/deliveryprofile/deliveryprofile.component.ts");
/* harmony import */ var _display_menu_display_menu_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./display-menu/display-menu.component */ "./src/app/display-menu/display-menu.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _deliveryeditprofile_deliveryeditprofile_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./deliveryeditprofile/deliveryeditprofile.component */ "./src/app/deliveryeditprofile/deliveryeditprofile.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _customer_current_orders_customer_current_orders_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./customer-current-orders/customer-current-orders.component */ "./src/app/customer-current-orders/customer-current-orders.component.ts");
/* harmony import */ var _customer_order_history_customer_order_history_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./customer-order-history/customer-order-history.component */ "./src/app/customer-order-history/customer-order-history.component.ts");
/* harmony import */ var _my_details_my_details_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./my-details/my-details.component */ "./src/app/my-details/my-details.component.ts");
/* harmony import */ var _group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./group-chat/group-chat.component */ "./src/app/group-chat/group-chat.component.ts");





















































function socialConfigs() {
    const config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthServiceConfig"]([
        {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"]('594822105603-ugolhi0gvekn50uh6pct5v0hthh3mjfn.apps.googleusercontent.com')
        },
        {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"]('2606643606225907')
        }
    ]);
    return config;
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
            _public_public_component__WEBPACK_IMPORTED_MODULE_13__["PublicComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"],
            _resturantlogin_resturantlogin_component__WEBPACK_IMPORTED_MODULE_16__["ResturantloginComponent"],
            _restaurantreg_restaurantreg_component__WEBPACK_IMPORTED_MODULE_17__["RestaurantregComponent"],
            _restaurant_view_restaurant_view_component__WEBPACK_IMPORTED_MODULE_18__["RestaurantViewComponent"],
            _orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_19__["OrderhistoryComponent"],
            _restaurantdetails_restaurantdetails_component__WEBPACK_IMPORTED_MODULE_20__["RestaurantdetailsComponent"],
            _restaurantmenu_restaurantmenu_component__WEBPACK_IMPORTED_MODULE_21__["RestaurantmenuComponent"],
            _restaurantstats_restaurantstats_component__WEBPACK_IMPORTED_MODULE_22__["RestaurantstatsComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["SidebarComponent"],
            _restaurantviewdetails_restaurantviewdetails_component__WEBPACK_IMPORTED_MODULE_24__["RestaurantviewdetailsComponent"],
            _restaurantviewmenu_restaurantviewmenu_component__WEBPACK_IMPORTED_MODULE_25__["RestaurantviewmenuComponent"],
            _restaurantcurrentorders_restaurantcurrentorders_component__WEBPACK_IMPORTED_MODULE_26__["RestaurantcurrentordersComponent"],
            _customerdashboard_customerdashboard_component__WEBPACK_IMPORTED_MODULE_27__["CustomerdashboardComponent"],
            _verify_verify_component__WEBPACK_IMPORTED_MODULE_28__["VerifyComponent"],
            _recover_recover_component__WEBPACK_IMPORTED_MODULE_29__["RecoverComponent"],
            _restaurantdropdown_restaurantdropdown_component__WEBPACK_IMPORTED_MODULE_30__["RestaurantdropdownComponent"],
            _customerprofile_customerprofile_component__WEBPACK_IMPORTED_MODULE_31__["CustomerprofileComponent"],
            _customereditprofile_customereditprofile_component__WEBPACK_IMPORTED_MODULE_32__["CustomereditprofileComponent"],
            _deliverylogin_deliverylogin_component__WEBPACK_IMPORTED_MODULE_33__["DeliveryloginComponent"],
            _deliveryreg_deliveryreg_component__WEBPACK_IMPORTED_MODULE_34__["DeliveryregComponent"],
            _logindropdown_logindropdown_component__WEBPACK_IMPORTED_MODULE_35__["LogindropdownComponent"],
            _restaurantvieworder_restaurantvieworder_component__WEBPACK_IMPORTED_MODULE_36__["RestaurantvieworderComponent"],
            _customerdropdown_customerdropdown_component__WEBPACK_IMPORTED_MODULE_37__["CustomerdropdownComponent"],
            _chatfeature_chatfeature_component__WEBPACK_IMPORTED_MODULE_38__["ChatfeatureComponent"],
            _deliverydropdown_deliverydropdown_component__WEBPACK_IMPORTED_MODULE_39__["DeliverydropdownComponent"],
            _deliveryorderhistory_deliveryorderhistory_component__WEBPACK_IMPORTED_MODULE_40__["DeliveryorderhistoryComponent"],
            _deliverycurrentorders_deliverycurrentorders_component__WEBPACK_IMPORTED_MODULE_41__["DeliverycurrentordersComponent"],
            _deliveryprofile_deliveryprofile_component__WEBPACK_IMPORTED_MODULE_42__["DeliveryprofileComponent"],
            _display_menu_display_menu_component__WEBPACK_IMPORTED_MODULE_43__["DisplayMenuComponent"],
            _order_order_component__WEBPACK_IMPORTED_MODULE_44__["OrderComponent"],
            _deliveryeditprofile_deliveryeditprofile_component__WEBPACK_IMPORTED_MODULE_45__["DeliveryeditprofileComponent"],
            _customer_current_orders_customer_current_orders_component__WEBPACK_IMPORTED_MODULE_47__["CustomerCurrentOrdersComponent"],
            _customer_order_history_customer_order_history_component__WEBPACK_IMPORTED_MODULE_48__["CustomerOrderHistoryComponent"],
            _my_details_my_details_component__WEBPACK_IMPORTED_MODULE_49__["MyDetailsComponent"],
            _group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_50__["GroupChatComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_46__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDMlEdoVdUq5SvrCUCJYQeA9vzOypKhJDY'
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot([
                {
                    path: "customerorderhistory",
                    component: _customer_order_history_customer_order_history_component__WEBPACK_IMPORTED_MODULE_48__["CustomerOrderHistoryComponent"]
                },
                {
                    path: "customercurrentorders",
                    component: _customer_current_orders_customer_current_orders_component__WEBPACK_IMPORTED_MODULE_47__["CustomerCurrentOrdersComponent"]
                },
                {
                    path: '',
                    component: _public_public_component__WEBPACK_IMPORTED_MODULE_13__["PublicComponent"]
                },
                {
                    path: 'login',
                    component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
                },
                {
                    path: 'public',
                    component: _public_public_component__WEBPACK_IMPORTED_MODULE_13__["PublicComponent"]
                },
                {
                    path: 'registration',
                    component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"]
                },
                {
                    path: 'resturantlogin',
                    component: _resturantlogin_resturantlogin_component__WEBPACK_IMPORTED_MODULE_16__["ResturantloginComponent"]
                },
                {
                    path: 'restaurantreg',
                    component: _restaurantreg_restaurantreg_component__WEBPACK_IMPORTED_MODULE_17__["RestaurantregComponent"]
                },
                {
                    path: 'restaurant-view',
                    component: _restaurant_view_restaurant_view_component__WEBPACK_IMPORTED_MODULE_18__["RestaurantViewComponent"]
                },
                {
                    path: 'orderhistory',
                    component: _orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_19__["OrderhistoryComponent"]
                },
                {
                    path: 'restaurantdetails',
                    component: _restaurantdetails_restaurantdetails_component__WEBPACK_IMPORTED_MODULE_20__["RestaurantdetailsComponent"]
                },
                {
                    path: 'restaurantmenu',
                    component: _restaurantmenu_restaurantmenu_component__WEBPACK_IMPORTED_MODULE_21__["RestaurantmenuComponent"]
                },
                {
                    path: 'restaurantstats',
                    component: _restaurantstats_restaurantstats_component__WEBPACK_IMPORTED_MODULE_22__["RestaurantstatsComponent"]
                },
                {
                    path: 'restaurantviewdetails',
                    component: _restaurantviewdetails_restaurantviewdetails_component__WEBPACK_IMPORTED_MODULE_24__["RestaurantviewdetailsComponent"]
                },
                {
                    path: 'restaurantviewmenu',
                    component: _restaurantviewmenu_restaurantviewmenu_component__WEBPACK_IMPORTED_MODULE_25__["RestaurantviewmenuComponent"]
                },
                {
                    path: 'restaurantcurrentorders',
                    component: _restaurantcurrentorders_restaurantcurrentorders_component__WEBPACK_IMPORTED_MODULE_26__["RestaurantcurrentordersComponent"]
                },
                {
                    path: 'customerdashboard',
                    component: _customerdashboard_customerdashboard_component__WEBPACK_IMPORTED_MODULE_27__["CustomerdashboardComponent"]
                },
                {
                    path: 'verify',
                    component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_28__["VerifyComponent"]
                },
                {
                    path: 'recover',
                    component: _recover_recover_component__WEBPACK_IMPORTED_MODULE_29__["RecoverComponent"]
                },
                {
                    path: 'customerprofile',
                    component: _customerprofile_customerprofile_component__WEBPACK_IMPORTED_MODULE_31__["CustomerprofileComponent"]
                },
                {
                    path: 'customereditprofile',
                    component: _customereditprofile_customereditprofile_component__WEBPACK_IMPORTED_MODULE_32__["CustomereditprofileComponent"]
                },
                {
                    path: 'deliverylogin',
                    component: _deliverylogin_deliverylogin_component__WEBPACK_IMPORTED_MODULE_33__["DeliveryloginComponent"]
                },
                {
                    path: 'deliveryreg',
                    component: _deliveryreg_deliveryreg_component__WEBPACK_IMPORTED_MODULE_34__["DeliveryregComponent"]
                },
                {
                    path: 'deliveryorderhistory',
                    component: _deliveryorderhistory_deliveryorderhistory_component__WEBPACK_IMPORTED_MODULE_40__["DeliveryorderhistoryComponent"]
                },
                {
                    path: 'deliverycurrentorders',
                    component: _deliverycurrentorders_deliverycurrentorders_component__WEBPACK_IMPORTED_MODULE_41__["DeliverycurrentordersComponent"]
                },
                {
                    path: 'deliveryprofile',
                    component: _deliveryprofile_deliveryprofile_component__WEBPACK_IMPORTED_MODULE_42__["DeliveryprofileComponent"]
                },
                {
                    path: 'chatfeature',
                    component: _chatfeature_chatfeature_component__WEBPACK_IMPORTED_MODULE_38__["ChatfeatureComponent"]
                },
                {
                    path: 'displaymenu/:restaurant_id',
                    component: _display_menu_display_menu_component__WEBPACK_IMPORTED_MODULE_43__["DisplayMenuComponent"]
                },
                {
                    path: 'order',
                    component: _order_order_component__WEBPACK_IMPORTED_MODULE_44__["OrderComponent"]
                },
                {
                    path: 'deliveryeditprofile',
                    component: _deliveryeditprofile_deliveryeditprofile_component__WEBPACK_IMPORTED_MODULE_45__["DeliveryeditprofileComponent"]
                }
            ])
        ],
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"],
            _services_pusher_service__WEBPACK_IMPORTED_MODULE_8__["PusherService"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"], {
                provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthServiceConfig"],
                useFactory: socialConfigs
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chatfeature/chatfeature.component.css":
/*!*******************************************************!*\
  !*** ./src/app/chatfeature/chatfeature.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXRmZWF0dXJlL2NoYXRmZWF0dXJlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/chatfeature/chatfeature.component.ts":
/*!******************************************************!*\
  !*** ./src/app/chatfeature/chatfeature.component.ts ***!
  \******************************************************/
/*! exports provided: ChatfeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatfeatureComponent", function() { return ChatfeatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ChatfeatureComponent = class ChatfeatureComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.messages = [];
    }
    ngOnInit() {
    }
};
ChatfeatureComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChatfeatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chatfeature',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatfeature.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatfeature/chatfeature.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatfeature.component.css */ "./src/app/chatfeature/chatfeature.component.css")).default]
    })
], ChatfeatureComponent);



/***/ }),

/***/ "./src/app/customer-current-orders/customer-current-orders.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/customer-current-orders/customer-current-orders.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\r\n    border-width: 3px;\r\n}\r\n  \r\n.row strong {\r\n    margin: 20px;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItY3VycmVudC1vcmRlcnMvY3VzdG9tZXItY3VycmVudC1vcmRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci1jdXJyZW50LW9yZGVycy9jdXN0b21lci1jdXJyZW50LW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbn1cclxuICBcclxuLnJvdyBzdHJvbmcge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/customer-current-orders/customer-current-orders.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/customer-current-orders/customer-current-orders.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerCurrentOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCurrentOrdersComponent", function() { return CustomerCurrentOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let CustomerCurrentOrdersComponent = class CustomerCurrentOrdersComponent {
    constructor(http, cookie) {
        this.http = http;
        this.cookie = cookie;
    }
    ngOnInit() {
        var url = '/customer/current_orders/' + this.cookie.get('customer_id');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            if (data != null) {
                this.orders = data;
                console.log(this.orders);
            }
        });
    }
};
CustomerCurrentOrdersComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
CustomerCurrentOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-current-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-current-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-current-orders/customer-current-orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-current-orders.component.css */ "./src/app/customer-current-orders/customer-current-orders.component.css")).default]
    })
], CustomerCurrentOrdersComponent);



/***/ }),

/***/ "./src/app/customer-order-history/customer-order-history.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/customer-order-history/customer-order-history.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\r\n    border-width: 3px;\r\n}\r\n  \r\n.row strong {\r\n    margin: 20px;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItb3JkZXItaGlzdG9yeS9jdXN0b21lci1vcmRlci1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItb3JkZXItaGlzdG9yeS9jdXN0b21lci1vcmRlci1oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XHJcbiAgICBib3JkZXItd2lkdGg6IDNweDtcclxufVxyXG4gIFxyXG4ucm93IHN0cm9uZyB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/customer-order-history/customer-order-history.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/customer-order-history/customer-order-history.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerOrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrderHistoryComponent", function() { return CustomerOrderHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let CustomerOrderHistoryComponent = class CustomerOrderHistoryComponent {
    constructor(http, cookie, formBuilder) {
        this.http = http;
        this.cookie = cookie;
        this.formBuilder = formBuilder;
        this.ratingForm = this.formBuilder.group({
            ratings: ''
        });
    }
    ngOnInit() {
        var url = '/customer/order_history/' + this.cookie.get('customer_id');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            if (data != null) {
                this.orders = data;
                console.log(this.orders);
            }
        });
    }
    onRate(rateObject, order) {
        // console.log(rateObject)
        // console.log(order)
        var data = {
            order_id: order._id,
            restaurant_id: order.restaurant_id,
            ratings: rateObject.ratings
        };
        console.log(data);
        rateObject['ratings'] = 0;
        this.ratingForm.ratings = 0;
        order.ratings = data["ratings"];
        var url = "restaurant/add_restaurant_rating/" + order.restaurant_id;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        this.http.post(url, data, { headers }).subscribe((res) => console.log(res), (err) => console.log(err));
    }
};
CustomerOrderHistoryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
CustomerOrderHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-order-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-order-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-order-history/customer-order-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-order-history.component.css */ "./src/app/customer-order-history/customer-order-history.component.css")).default]
    })
], CustomerOrderHistoryComponent);



/***/ }),

/***/ "./src/app/customerdashboard/customerdashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/customerdashboard/customerdashboard.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\r\n  font-size: 16px;\r\n}\r\n\r\na {\r\n  margin-right: 50px;\r\n  font-size: 16px;\r\n}\r\n\r\nhr {\r\n  border-width: 3px;\r\n}\r\n\r\n.input-group input{\r\n  width: 190px;\r\n  border-radius: 5px;\r\n  border: 1px solid gray;\r\n  font-size: 18px;\r\n  margin-top: 3px;\r\n}\r\n\r\nimg {\r\n  width: 360px;\r\n  height: 280px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJkYXNoYm9hcmQvY3VzdG9tZXJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyZGFzaGJvYXJkL2N1c3RvbWVyZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXItd2lkdGg6IDNweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIGlucHV0e1xyXG4gIHdpZHRoOiAxOTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAzNjBweDtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/customerdashboard/customerdashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/customerdashboard/customerdashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdashboardComponent", function() { return CustomerdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");







let CustomerdashboardComponent = class CustomerdashboardComponent {
    constructor(OAuth, formBuilder, router, http, cookie) {
        this.OAuth = OAuth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.cookie = cookie;
        this.userSearchForm = this.formBuilder.group({
            restaurant_name: '',
            location: '',
            food_category: '',
        });
    }
    ngOnInit() {
    }
    voiceSearchName() {
        // console.log("hello")
        if ('webkitSpeechRecognition' in window) {
            this.userSearchForm.get('restaurant_name').setValue("");
            console.log("hello");
            const vSearch = new webkitSpeechRecognition();
            vSearch.continuous = false;
            vSearch.interimresults = false;
            vSearch.lang = "en-US";
            vSearch.start();
            const userSearchForm = this.userSearchForm;
            vSearch.onresult = function (e) {
                console.log(e.results[0][0].transcript);
                userSearchForm.get('restaurant_name').setValue(e.results[0][0].transcript);
                vSearch.stop();
            };
            vSearch.onerror = function (e) {
                console.log(e);
                vSearch.stop();
            };
        }
        else {
            console.log("Speech Recognition Not Supported in your Browser");
        }
    }
    voiceSearchCategory() {
        // console.log("hello")
        if ('webkitSpeechRecognition' in window) {
            this.userSearchForm.get('food_category').setValue("");
            console.log("hello");
            const vSearch = new webkitSpeechRecognition();
            vSearch.continuous = false;
            vSearch.interimresults = false;
            vSearch.lang = "en-US";
            vSearch.start();
            const userSearchForm = this.userSearchForm;
            vSearch.onresult = function (e) {
                console.log(e.results[0][0].transcript);
                userSearchForm.get('food_category').setValue(e.results[0][0].transcript);
                vSearch.stop();
            };
            vSearch.onerror = function (e) {
                console.log(e);
                vSearch.stop();
            };
        }
        else {
            console.log("Speech Recognition Not Supported in your Browser");
        }
    }
    voiceSearchLocation() {
        // console.log("hello")
        if ('webkitSpeechRecognition' in window) {
            this.userSearchForm.get('location').setValue("");
            console.log("hello");
            const vSearch = new webkitSpeechRecognition();
            vSearch.continuous = false;
            vSearch.interimresults = false;
            vSearch.lang = "en-US";
            vSearch.start();
            const userSearchForm = this.userSearchForm;
            vSearch.onresult = function (e) {
                console.log(e.results[0][0].transcript);
                userSearchForm.get('location').setValue(e.results[0][0].transcript);
                vSearch.stop();
            };
            vSearch.onerror = function (e) {
                console.log(e);
                vSearch.stop();
            };
        }
        else {
            console.log("Speech Recognition Not Supported in your Browser");
        }
    }
    updateToRatings() {
        this.results.sort(function (a, b) {
            return b.ratings - a.ratings;
        });
    }
    updateToLocation() {
        this.searchFilter = "Location";
        console.log(this.searchFilter);
    }
    updateToResName() {
        this.searchFilter = "Name";
        console.log(this.searchFilter);
    }
    updateToFoodCat() {
        this.searchFilter = "category";
        console.log(this.searchFilter);
    }
    // openMenu(id){
    //   console.log(id);
    // }
    onSubmit(event) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("restaurant_name", event['restaurant_name'])
            .set("location", event['location'])
            .set("food_category", event['food_category']);
        console.log(params);
        this.http.get('/restaurant/restaurants_list', { headers, params }).subscribe(data => {
            // this.detailsForm = data;
            console.log(data);
            this.results = data;
        });
        // var jwttoken = this.cookie.get("jwttoken")
        //we'll need to change the endpoint to the endpoint for the search on the backend
        // this.http.get<any>('/restaurant/restaurant_list', event).subscribe((data: any) => this.result = {data});
        // this.displayResult(this.result);
    }
    //function to render the result of the search to the website
    displayResult(result) {
        console.log(result);
    }
    logout() {
        alert(1);
        this.OAuth.signOut().then(data => {
            debugger;
            this.router.navigate([`/Login`]);
        });
    }
};
CustomerdashboardComponent.ctorParameters = () => [
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('restaurant_name', { static: true })
], CustomerdashboardComponent.prototype, "restaurant_name", void 0);
CustomerdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerdashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customerdashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerdashboard/customerdashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customerdashboard.component.css */ "./src/app/customerdashboard/customerdashboard.component.css")).default]
    })
], CustomerdashboardComponent);



/***/ }),

/***/ "./src/app/customerdropdown/customerdropdown.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/customerdropdown/customerdropdown.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyZHJvcGRvd24vY3VzdG9tZXJkcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/customerdropdown/customerdropdown.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customerdropdown/customerdropdown.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerdropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdropdownComponent", function() { return CustomerdropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomerdropdownComponent = class CustomerdropdownComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomerdropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerdropdown',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customerdropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerdropdown/customerdropdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customerdropdown.component.css */ "./src/app/customerdropdown/customerdropdown.component.css")).default]
    })
], CustomerdropdownComponent);



/***/ }),

/***/ "./src/app/customereditprofile/customereditprofile.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customereditprofile/customereditprofile.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info .row{\r\n  margin-top: 10px;\r\n}\r\n\r\nhr {\r\n  border-width: 3px;\r\n}\r\n\r\n.btn {\r\n  margin-right: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJlZGl0cHJvZmlsZS9jdXN0b21lcmVkaXRwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcmVkaXRwcm9maWxlL2N1c3RvbWVyZWRpdHByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvIC5yb3d7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/customereditprofile/customereditprofile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customereditprofile/customereditprofile.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomereditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomereditprofileComponent", function() { return CustomereditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CustomereditprofileComponent = class CustomereditprofileComponent {
    constructor(formbuilder, cookie, http, router) {
        this.formbuilder = formbuilder;
        this.cookie = cookie;
        this.http = http;
        this.router = router;
        this.userProfileForm = this.formbuilder.group({
            name: '',
            contact: '',
            email: '',
            street1: '',
            street2: '',
            city: '',
            state: '',
            zip_code: ''
        });
    }
    onFileSelected(event) {
        //this.selectedFile = <File>event.target.files[0];
        // var b64;
        // var reader = new FileReader();
        // reader.onload = function(e){
        //   console.log("encoding image")
        //   b64 = btoa(e.target.toString());
        //   console.log(b64)
        // }
        // this.fileAsBase64 = b64;
        const file = event.target.files[0];
        this.image = file;
    }
    ngOnInit() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        var customer_id = this.cookie.get('customer_id');
        var url = '/customer/display_details/' + customer_id;
        // var params = new HttpParams().set("id", customer_id)
        this.http.get(url, { headers }).subscribe(data => {
            // console.log(data)
            if (data != null) {
                this.customer_details = data['result'];
                this.customer_details.customer_image = "/customer_images/" + customer_id + ".png";
                console.log(this.customer_details);
            }
        });
    }
    onSubmit(profile) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            // 'Content-Type': 'multipart/form-data',
            jwttoken: this.cookie.get("jwttoken")
        });
        var customer_id = this.cookie.get("customer_id");
        var jwttoken = this.cookie.get("jwttoken");
        // console.log(jwttoken)
        const formData = new FormData();
        formData.append("id", customer_id);
        formData.append("name", profile["name"]);
        formData.append("email", profile["email"]);
        formData.append("contact", profile["contact"]);
        formData.append("street1", profile["street1"]);
        formData.append("street2", profile["street2"]);
        formData.append("city", profile["city"]);
        formData.append("state", profile["state"]);
        formData.append("zip_code", profile["zip_code"]);
        formData.append("jwttoken", jwttoken);
        formData.append("image", this.image, this.cookie.get('customer_id') + '.png');
        console.log(formData.get("state"));
        this.http.post('/customer/details', formData, { headers }).subscribe((res) => console.log(res), (err) => console.log(err));
        this.router.navigate(['/customerprofile']);
    }
};
CustomereditprofileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CustomereditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customereditprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customereditprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customereditprofile/customereditprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customereditprofile.component.css */ "./src/app/customereditprofile/customereditprofile.component.css")).default]
    })
], CustomereditprofileComponent);



/***/ }),

/***/ "./src/app/customerprofile/customerprofile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/customerprofile/customerprofile.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info .row{\r\n  margin-top: 10px;\r\n}\r\n\r\nhr {\r\n  border-width: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJwcm9maWxlL2N1c3RvbWVycHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJwcm9maWxlL2N1c3RvbWVycHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8gLnJvd3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/customerprofile/customerprofile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/customerprofile/customerprofile.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerprofileComponent", function() { return CustomerprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CustomerprofileComponent = class CustomerprofileComponent {
    constructor(cookie, http) {
        this.cookie = cookie;
        this.http = http;
    }
    ngOnInit() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        var customer_id = this.cookie.get('customer_id');
        var url = '/customer/display_details/' + customer_id;
        // var params = new HttpParams().set("id", customer_id)
        this.http.get(url, { headers }).subscribe(data => {
            // console.log(data)
            if (data != null) {
                this.customer_details = data['result'];
                this.customer_details.customer_image = "/customer_images/" + customer_id + ".png";
                console.log(this.customer_details);
            }
        });
    }
};
CustomerprofileComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CustomerprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customerprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/customerprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customerprofile.component.css */ "./src/app/customerprofile/customerprofile.component.css")).default]
    })
], CustomerprofileComponent);



/***/ }),

/***/ "./src/app/deliverycurrentorders/deliverycurrentorders.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/deliverycurrentorders/deliverycurrentorders.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5Y3VycmVudG9yZGVycy9kZWxpdmVyeWN1cnJlbnRvcmRlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/deliverycurrentorders/deliverycurrentorders.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/deliverycurrentorders/deliverycurrentorders.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeliverycurrentordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverycurrentordersComponent", function() { return DeliverycurrentordersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let DeliverycurrentordersComponent = class DeliverycurrentordersComponent {
    constructor(http, cookie) {
        this.http = http;
        this.cookie = cookie;
    }
    fullfillOrder(id, i) {
        var url = "delivery/fullfillorder";
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        this.http.post(url, { id: id }, { headers }).subscribe((res) => console.log(res), (err) => console.log(err));
        this.orders.splice(parseInt(i), 1);
    }
    ngOnInit() {
        var url = '/delivery/current_orders/' + this.cookie.get('delivery_id');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            if (data != null) {
                this.orders = data;
                console.log(this.orders);
            }
        });
    }
};
DeliverycurrentordersComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
DeliverycurrentordersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deliverycurrentorders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deliverycurrentorders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliverycurrentorders/deliverycurrentorders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deliverycurrentorders.component.css */ "./src/app/deliverycurrentorders/deliverycurrentorders.component.css")).default]
    })
], DeliverycurrentordersComponent);



/***/ }),

/***/ "./src/app/deliverydropdown/deliverydropdown.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/deliverydropdown/deliverydropdown.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li {\r\n  width: 30%; text-align: center\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnlkcm9wZG93bi9kZWxpdmVyeWRyb3Bkb3duLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5ZHJvcGRvd24vZGVsaXZlcnlkcm9wZG93bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xyXG4gIHdpZHRoOiAzMCU7IHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/deliverydropdown/deliverydropdown.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/deliverydropdown/deliverydropdown.component.ts ***!
  \****************************************************************/
/*! exports provided: DeliverydropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverydropdownComponent", function() { return DeliverydropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeliverydropdownComponent = class DeliverydropdownComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeliverydropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deliverydropdown',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deliverydropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliverydropdown/deliverydropdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deliverydropdown.component.css */ "./src/app/deliverydropdown/deliverydropdown.component.css")).default]
    })
], DeliverydropdownComponent);



/***/ }),

/***/ "./src/app/deliveryeditprofile/deliveryeditprofile.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/deliveryeditprofile/deliveryeditprofile.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5ZWRpdHByb2ZpbGUvZGVsaXZlcnllZGl0cHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/deliveryeditprofile/deliveryeditprofile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/deliveryeditprofile/deliveryeditprofile.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeliveryeditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryeditprofileComponent", function() { return DeliveryeditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let DeliveryeditprofileComponent = class DeliveryeditprofileComponent {
    constructor(http, cookie) {
        this.http = http;
        this.cookie = cookie;
    }
    ngOnInit() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        var url = '/restaurant/display_details/' + this.cookie.get('restaurant_id');
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            if (data != null) {
                this.delivery_details = data;
                console.log(data);
            }
        });
    }
};
DeliveryeditprofileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
DeliveryeditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deliveryeditprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deliveryeditprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryeditprofile/deliveryeditprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deliveryeditprofile.component.css */ "./src/app/deliveryeditprofile/deliveryeditprofile.component.css")).default]
    })
], DeliveryeditprofileComponent);



/***/ }),

/***/ "./src/app/deliverylogin/deliverylogin.component.css":
/*!***********************************************************!*\
  !*** ./src/app/deliverylogin/deliverylogin.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n  background-image: url('LoginBackground.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnlsb2dpbi9kZWxpdmVyeWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBNkQ7RUFDN0QsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvZGVsaXZlcnlsb2dpbi9kZWxpdmVyeWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvTG9naW5CYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/deliverylogin/deliverylogin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/deliverylogin/deliverylogin.component.ts ***!
  \**********************************************************/
/*! exports provided: DeliveryloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryloginComponent", function() { return DeliveryloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let DeliveryloginComponent = class DeliveryloginComponent {
    constructor(loginService, formBuilder, cookie, router) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.cookie = cookie;
        this.router = router;
        this.timesSubmitted = 0;
        this.deliveryLoginForm = this.formBuilder.group({
            email: '',
            password: ''
        });
    }
    ngOnInit() {
        this.addRecaptchaScript();
    }
    onSubmit(userData) {
        var r = this.loginService.sendRequest(userData, "/authentication/login/delivery");
        if (this.recaptchaElement == null) {
            alert('Enter recaptcha');
            return;
        }
        r.subscribe(data => {
            console.log(data);
            if (data['auth']) {
                this.cookie.set("jwttoken", data['token']);
                this.cookie.set("delivery_id", data['_id']);
                this.router.navigate(['/deliveryprofile']);
                //console.log(data[_id])
            }
        });
    }
    addRecaptchaScript() {
        window['grecaptchaCallback'] = () => {
            this.renderReCaptcha();
        };
        (function (d, s, id, obj) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                obj.renderReCaptcha();
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'recaptcha-jssdk', this));
    }
    renderReCaptcha() {
        window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
            'sitekey': '6LdhGcMUAAAAAJ2eG5TNInZtPqRfS2MJE-CVeptA',
            'callback': (response) => {
                console.log(response);
            }
        });
    }
};
DeliveryloginComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recaptcha', { static: true })
], DeliveryloginComponent.prototype, "recaptchaElement", void 0);
DeliveryloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deliverylogin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deliverylogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliverylogin/deliverylogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deliverylogin.component.css */ "./src/app/deliverylogin/deliverylogin.component.css")).default]
    })
], DeliveryloginComponent);



/***/ }),

/***/ "./src/app/deliveryorderhistory/deliveryorderhistory.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/deliveryorderhistory/deliveryorderhistory.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5b3JkZXJoaXN0b3J5L2RlbGl2ZXJ5b3JkZXJoaXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/deliveryorderhistory/deliveryorderhistory.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/deliveryorderhistory/deliveryorderhistory.component.ts ***!
  \************************************************************************/
/*! exports provided: DeliveryorderhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryorderhistoryComponent", function() { return DeliveryorderhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let DeliveryorderhistoryComponent = class DeliveryorderhistoryComponent {
    constructor(http, cookie) {
        this.http = http;
        this.cookie = cookie;
    }
    ngOnInit() {
        var url = '/delivery/order_history/' + this.cookie.get('delivery_id');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            if (data != null) {
                this.orders = data;
                console.log(this.orders);
            }
        });
    }
};
DeliveryorderhistoryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
DeliveryorderhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deliveryorderhistory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deliveryorderhistory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryorderhistory/deliveryorderhistory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deliveryorderhistory.component.css */ "./src/app/deliveryorderhistory/deliveryorderhistory.component.css")).default]
    })
], DeliveryorderhistoryComponent);



/***/ }),

/***/ "./src/app/deliveryprofile/deliveryprofile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/deliveryprofile/deliveryprofile.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5cHJvZmlsZS9kZWxpdmVyeXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/deliveryprofile/deliveryprofile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/deliveryprofile/deliveryprofile.component.ts ***!
  \**************************************************************/
/*! exports provided: DeliveryprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryprofileComponent", function() { return DeliveryprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let DeliveryprofileComponent = class DeliveryprofileComponent {
    constructor(http, formbuilder, cookie) {
        this.http = http;
        this.formbuilder = formbuilder;
        this.cookie = cookie;
        this.deliveryProfileForm = this.formbuilder.group({
            name: '',
            contact: '',
            email: ''
        });
    }
    onFileSelected(event) {
        const file = event.target.files[0];
        this.image = file;
    }
    ngOnInit() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        var delivery_id = this.cookie.get('delivery_id');
        var url = '/delivery/display_details/' + this.cookie.get('delivery_id');
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            if (data != null) {
                this.delivery_details = data['result'];
                this.delivery_details.delivery_image = "/delivery_images/" + delivery_id + ".png";
                console.log(this.delivery_details);
            }
        });
    }
    onSubmit(profile) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            // 'Content-Type': 'multipart/form-data',
            jwttoken: this.cookie.get("jwttoken")
        });
        var jwttoken = this.cookie.get("jwttoken");
        var delivery_id = this.cookie.get("delivery_id");
        const formData = new FormData();
        formData.append("id", delivery_id);
        formData.append("name", profile["name"]);
        formData.append("email", profile["email"]);
        formData.append("contact", profile["contact"]);
        formData.append("jwttoken", jwttoken);
        formData.append("image", this.image, this.cookie.get('delivery_id') + '.png');
        this.http.post('/delivery/details', formData, { headers }).subscribe((res) => console.log(res), (err) => console.log(err));
    }
};
DeliveryprofileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
DeliveryprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deliveryprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deliveryprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryprofile/deliveryprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deliveryprofile.component.css */ "./src/app/deliveryprofile/deliveryprofile.component.css")).default]
    })
], DeliveryprofileComponent);



/***/ }),

/***/ "./src/app/deliveryreg/deliveryreg.component.css":
/*!*******************************************************!*\
  !*** ./src/app/deliveryreg/deliveryreg.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n  background-image: url('LoginBackground.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnlyZWcvZGVsaXZlcnlyZWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUE2RDtFQUM3RCw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9kZWxpdmVyeXJlZy9kZWxpdmVyeXJlZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL0xvZ2luQmFja2dyb3VuZC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/deliveryreg/deliveryreg.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deliveryreg/deliveryreg.component.ts ***!
  \******************************************************/
/*! exports provided: DeliveryregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryregComponent", function() { return DeliveryregComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let DeliveryregComponent = class DeliveryregComponent {
    constructor(loginService, router, formBuilder) {
        this.loginService = loginService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.SERVER_URL = "/authentication/sign_up/delivery";
        this.deliveryRegistrationForm = this.formBuilder.group({
            name: '',
            email: '',
            password: '',
            confirmpass: ''
        });
    }
    ngOnInit() {
    }
    newRest(password, confirmpass) {
        //event.preventDefault()
        if (password == confirmpass) {
            return true;
        }
        else {
            return false;
        }
    }
    onSubmit(userData) {
        if (this.newRest(userData.password, userData.confirmpass) && userData.password != null) {
            var r = this.loginService.sendRequest(userData, this.SERVER_URL);
            r.subscribe(data => {
                this.router.navigate(['/login']);
            });
        }
        else {
            alert("Passwords do not match");
        }
    }
};
DeliveryregComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
DeliveryregComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deliveryreg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deliveryreg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryreg/deliveryreg.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deliveryreg.component.css */ "./src/app/deliveryreg/deliveryreg.component.css")).default]
    })
], DeliveryregComponent);



/***/ }),

/***/ "./src/app/display-menu/display-menu.component.css":
/*!*********************************************************!*\
  !*** ./src/app/display-menu/display-menu.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXktbWVudS9kaXNwbGF5LW1lbnUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/display-menu/display-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/display-menu/display-menu.component.ts ***!
  \********************************************************/
/*! exports provided: DisplayMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayMenuComponent", function() { return DisplayMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let DisplayMenuComponent = class DisplayMenuComponent {
    constructor(route, httpService, cookie, http, router) {
        this.route = route;
        this.httpService = httpService;
        this.cookie = cookie;
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        // this.route.paramMap.subscribe(params => {
        //     // console.log(params['restaurant_id'])
        //     restaurant_id = params["restaurant_id"]
        // })
        this.restaurant_id = this.route.snapshot.params['restaurant_id'];
        console.log(this.restaurant_id);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        var url = '/restaurant/display_menu/' + this.restaurant_id;
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            //console.log(data)
            if (data != null) {
                this.menu = data['menu'];
                // this.restaurantmenudetails.image = "/menu_images/" + this.restaurantmenudetails.image
                console.log(this.menu);
            }
        });
    }
    orderItem(item) {
        var data = {
            "restaurant_id": this.restaurant_id,
            "user_id": this.cookie.get("customer_id"),
            "price": item["cost"],
            "name_of_item": item["name"],
        };
        var url = "orders/add_order";
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        this.http.post(url, data, { headers }).subscribe((res) => this.router.navigate(['/customercurrentorders']), (err) => console.log(err));
    }
};
DisplayMenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DisplayMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display-menu/display-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display-menu.component.css */ "./src/app/display-menu/display-menu.component.css")).default]
    })
], DisplayMenuComponent);



/***/ }),

/***/ "./src/app/group-chat/group-chat.component.css":
/*!*****************************************************!*\
  !*** ./src/app/group-chat/group-chat.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwLWNoYXQvZ3JvdXAtY2hhdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/group-chat/group-chat.component.ts":
/*!****************************************************!*\
  !*** ./src/app/group-chat/group-chat.component.ts ***!
  \****************************************************/
/*! exports provided: GroupChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatComponent", function() { return GroupChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GroupChatComponent = class GroupChatComponent {
    constructor() { }
    ngOnInit() {
    }
};
GroupChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/group-chat/group-chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-chat.component.css */ "./src/app/group-chat/group-chat.component.css")).default]
    })
], GroupChatComponent);



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let LoginService = class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'dataType': 'json',
                'withcredentials': 'false'
            })
        };
    }
    sendRequest(data, url) {
        // console.log(data)
        // return this.httpClient.post(url, data, this.httpOptions).subscribe(
        //   (res)=>{
        //     console.log(res)
        //     return res
        //   },
        //   (err)=> {
        //     console.log(err)
        //     return err
        //   }
        // );
        return this.httpClient.post(url, data);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n  background-image: url('LoginBackground.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: 0px 0px;\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUE2RDtFQUM3RCw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvTG9naW5CYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, Socialusers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socialusers", function() { return Socialusers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _sociallogin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sociallogin.service */ "./src/app/sociallogin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


// import { AuthService } from '../auth.service';








let LoginComponent = class LoginComponent {
    constructor(OAuth, SocialloginService, loginService, formBuilder, router, http, cookie) {
        this.OAuth = OAuth;
        this.SocialloginService = SocialloginService;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.cookie = cookie;
        this.socialusers = new Socialusers();
        this.timesSubmitted = 0;
        this.showFile = false;
        this.verifyOTP = false;
        this.userLoginForm = this.formBuilder.group({
            email: '',
            password: ''
        });
        this.userVerifyForm = this.formBuilder.group({
            otp: ''
        });
    }
    ngOnInit() {
        this.addRecaptchaScript();
    }
    onSubmit(userData) {
        var r = this.loginService.sendRequest(userData, '/authentication/login/user');
        if (this.recaptchaElement == null) {
            alert('Enter recaptcha');
            return;
        }
        r.subscribe(data => {
            if (data['auth']) {
                this.cookie.set('jwttoken', data['token']);
                this.cookie.set('customer_id', data['_id']);
                this.router.navigate(['/customerdashboard']);
            }
        });
        // this.cookie.set("userid", "123")
        // console.log(this.response)
        /*
        const payload = {
          jwttoken: this.cookie.get('jwttoken')
        };
        console.log(payload);
        console.log(this.cookie.get('jwttoken'));
        r = this.loginService.sendRequest(payload, '/authentication/verifyotp');
        r.subscribe(data => {
          console.log(data);
        });*/
    }
    socialSignIn(socialProvider) {
        let socialPlatormProvider;
        if (socialProvider == 'google') {
            socialPlatormProvider = angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID;
        }
        else if (socialProvider == 'facebook') {
            socialPlatormProvider = angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID;
        }
        this.OAuth.signIn(socialPlatormProvider).then(socialusers => {
            console.log(socialProvider, socialusers);
            console.log(socialusers);
            this.Savesresponse(socialusers);
        });
    }
    Savesresponse(socialusers) {
        this.SocialloginService.Savesresponse(socialusers).subscribe((res) => {
            this.socialusers = res;
            this.response = res.userDetail;
            localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
            this.router.navigate(['/customerdashboard']);
        });
    }
    addRecaptchaScript() {
        window['grecaptchaCallback'] = () => {
            this.renderReCaptcha();
        };
        (function (d, s, id, obj) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                obj.renderReCaptcha();
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'recaptcha-jssdk', this));
    }
    renderReCaptcha() {
        window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
            'sitekey': '6LdhGcMUAAAAAJ2eG5TNInZtPqRfS2MJE-CVeptA',
            'callback': (response) => {
                console.log(response);
            }
        });
    }
    onVerify(userData) {
        console.log(userData['otp']);
        console.log("verify");
        var jwttoken = this.cookie.get("jwttoken");
        this.http.post('/authentication/verifyotp/user', userData).subscribe(data => {
            if (data['auth']) {
                this.router.navigate(['/customerdashboard']);
            }
            else {
                alert("Invalid OTP");
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _sociallogin_service__WEBPACK_IMPORTED_MODULE_6__["SocialloginService"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recaptcha', { static: true })
], LoginComponent.prototype, "recaptchaElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showfile', { static: false })
], LoginComponent.prototype, "OTPElement", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);

class Socialusers {
}


/***/ }),

/***/ "./src/app/logindropdown/logindropdown.component.css":
/*!***********************************************************!*\
  !*** ./src/app/logindropdown/logindropdown.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luZHJvcGRvd24vbG9naW5kcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/logindropdown/logindropdown.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/logindropdown/logindropdown.component.ts ***!
  \**********************************************************/
/*! exports provided: LogindropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogindropdownComponent", function() { return LogindropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogindropdownComponent = class LogindropdownComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogindropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logindropdown',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logindropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logindropdown/logindropdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logindropdown.component.css */ "./src/app/logindropdown/logindropdown.component.css")).default]
    })
], LogindropdownComponent);



/***/ }),

/***/ "./src/app/my-details/my-details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-details/my-details.component.ts ***!
  \****************************************************/
/*! exports provided: MyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDetailsComponent", function() { return MyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");




let MyDetailsComponent = class MyDetailsComponent {
    constructor(_fb, _chatService) {
        this._fb = _fb;
        this._chatService = _chatService;
    }
    ngOnInit() {
        this._createForm();
    }
    _createForm() {
        this.detailsForm = this._fb.group({
            displayName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
        });
    }
    onSubmit() {
        const param = this.detailsForm.value;
        this._chatService.join(param)
            .subscribe((resp) => {
            this.loader = false;
        }, (error) => {
            console.error(error);
            this.loader = false;
        });
    }
};
MyDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }
];
MyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-details/my-details.component.html")).default
    })
], MyDetailsComponent);



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n  height: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderComponent = class OrderComponent {
    constructor() {
        this.lng = 7.809007;
    }
    ngOnInit() {
    }
};
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/orderhistory/orderhistory.component.css":
/*!*********************************************************!*\
  !*** ./src/app/orderhistory/orderhistory.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\r\n  border-width: 3px;\r\n}\r\n\r\n.row strong {\r\n  margin: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJoaXN0b3J5L29yZGVyaGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJoaXN0b3J5L29yZGVyaGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG59XHJcblxyXG4ucm93IHN0cm9uZyB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/orderhistory/orderhistory.component.ts":
/*!********************************************************!*\
  !*** ./src/app/orderhistory/orderhistory.component.ts ***!
  \********************************************************/
/*! exports provided: OrderhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryComponent", function() { return OrderhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let OrderhistoryComponent = class OrderhistoryComponent {
    constructor(http, cookie) {
        this.http = http;
        this.cookie = cookie;
    }
    ngOnInit() {
        var url = '/restaurant/order_history/' + this.cookie.get('restaurant_id');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            if (data != null) {
                this.orders = data;
                console.log(this.orders);
            }
        });
    }
};
OrderhistoryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
OrderhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderhistory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orderhistory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderhistory/orderhistory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orderhistory.component.css */ "./src/app/orderhistory/orderhistory.component.css")).default]
    })
], OrderhistoryComponent);



/***/ }),

/***/ "./src/app/public/public.component.css":
/*!*********************************************!*\
  !*** ./src/app/public/public.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*body{*/\r\n/*  background-image: url(\"../../assets/img/LoginBackground.jpg\");*/\r\n/*  background-repeat: no-repeat;*/\r\n/*  background-position: 0px 0px;*/\r\n/*  background-size: cover;*/\r\n/*}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3B1YmxpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVE7QUFDUixtRUFBbUU7QUFDbkUsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFDNUIsSUFBSSIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wdWJsaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qYm9keXsqL1xyXG4vKiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9Mb2dpbkJhY2tncm91bmQuanBnXCIpOyovXHJcbi8qICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyovXHJcbi8qICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4OyovXHJcbi8qICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyovXHJcbi8qfSovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/public/public.component.ts":
/*!********************************************!*\
  !*** ./src/app/public/public.component.ts ***!
  \********************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");






let PublicComponent = class PublicComponent {
    constructor(formBuilder, router, http, cookie) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.cookie = cookie;
        this.userSearchForm = this.formBuilder.group({
            restaurant_name: '',
            location: '',
            food_category: '',
        });
    }
    ngOnInit() {
    }
    updateToLocation() {
        this.searchFilter = "Location";
        console.log(this.searchFilter);
    }
    updateToResName() {
        this.searchFilter = "Name";
        console.log(this.searchFilter);
    }
    updateToFoodCat() {
        this.searchFilter = "category";
        console.log(this.searchFilter);
    }
    onSubmit(event) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("restaurant_name", event['restaurant_name'])
            .set("location", event['location'])
            .set("food_category", event['food_category']);
        console.log(params);
        this.http.get('/restaurant/restaurants_list', { headers, params }).subscribe(data => {
            // this.detailsForm = data;
            console.log(data);
            this.results = data;
        });
    }
    //function to render the result of the search to the website
    displayResult(result) {
        console.log(result);
    }
};
PublicComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
PublicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-public',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./public.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/public.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./public.component.css */ "./src/app/public/public.component.css")).default]
    })
], PublicComponent);



/***/ }),

/***/ "./src/app/recover/recover.component.css":
/*!***********************************************!*\
  !*** ./src/app/recover/recover.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY292ZXIvcmVjb3Zlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/recover/recover.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recover/recover.component.ts ***!
  \**********************************************/
/*! exports provided: RecoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverComponent", function() { return RecoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RecoverComponent = class RecoverComponent {
    constructor(loginService, formBuilder, router, cookie) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.cookie = cookie;
        this.showFile = false;
        this.showPasswordReset = false;
        this.userRecoverForm = this.formBuilder.group({
            name: '',
            email: ''
        });
        this.userVerifyForm = this.formBuilder.group({
            otp: ''
        });
    }
    onClickOpenVerification() {
        this.showFile = true;
    }
    onShowPasswordRest() {
        this.showPasswordReset = true;
    }
    ngOnInit() {
    }
    veryOTPAsyn(otpControl) {
        console.log(otpControl);
        console.log(otpControl.hasError('invalidOtp'));
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ invalidOtp: true });
            }, 500);
        });
    }
    onSubmit(userData) {
        var jwttoken = this.cookie.get('jwttoken');
        userData['jwttoken'] = jwttoken;
        var r = this.loginService.sendRequest(userData, 'http://localhost:3000/recover');
        r.subscribe(data => {
            console.log(data);
            if (data['auth']) {
                this.onShowPasswordRest();
            }
        });
    }
    onReset(userData) {
        var jwttoken = this.cookie.get('jwttoken');
        userData['jwttoken'] = jwttoken;
        var r = this.loginService.sendRequest(userData, 'http://localhost:3000/resetpassword');
        r.subscribe(data => {
            //set the users password to this
            console.log(data);
            this.router.navigate(['/login']);
        });
    }
};
RecoverComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
RecoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recover',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recover/recover.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recover.component.css */ "./src/app/recover/recover.component.css")).default]
    })
], RecoverComponent);



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".window {\r\n  float: top;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n\r\n  height: 600px;\r\n  margin-top: -300px;\r\n\r\n  width: 360px;\r\n  margin-left: -160px;\r\n\r\n  border: 3px solid gray;\r\n  border-radius: 15px;\r\n\r\n  text-align: center;\r\n  background-color: #ffe0b2;\r\n}\r\n\r\n.regist-form {\r\n  width: 100%;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  text-align: left;\r\n  font-size: 16px;\r\n\r\n  padding-bottom: 10px;\r\n  border-bottom-color: gray;\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 2px;\r\n}\r\n\r\n.regist-form p {\r\n  margin-top: 5px;\r\n}\r\n\r\n.regist-form input {\r\n  width: 100%;\r\n}\r\n\r\n.regist-form button {\r\n  width: 100%;\r\n  padding-top: 2px;\r\n  height: 30px;\r\n}\r\n\r\nbody{\r\n  background-image: url('LoginBackground.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTs7RUFFUixhQUFhO0VBQ2Isa0JBQWtCOztFQUVsQixZQUFZO0VBQ1osbUJBQW1COztFQUVuQixzQkFBc0I7RUFDdEIsbUJBQW1COztFQUVuQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7O0VBRWYsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTZEO0VBQzdELDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aW5kb3cge1xyXG4gIGZsb2F0OiB0b3A7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuXHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBtYXJnaW4tdG9wOiAtMzAwcHg7XHJcblxyXG4gIHdpZHRoOiAzNjBweDtcclxuICBtYXJnaW4tbGVmdDogLTE2MHB4O1xyXG5cclxuICBib3JkZXI6IDNweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMGIyO1xyXG59XHJcblxyXG4ucmVnaXN0LWZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogZ3JheTtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi5yZWdpc3QtZm9ybSBwIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5yZWdpc3QtZm9ybSBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yZWdpc3QtZm9ybSBidXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvTG9naW5CYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegistrationComponent = class RegistrationComponent {
    constructor(loginService, router, formBuilder) {
        this.loginService = loginService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.SERVER_URL = "/authentication/sign_up/user";
        this.userRegistrationForm = this.formBuilder.group({
            name: '',
            email: '',
            password: ''
        });
    }
    ngOnInit() {
    }
    newRest(password, confirmpass) {
        //event.preventDefault()
        if (password == confirmpass) {
            return true;
        }
        else {
            return false;
        }
    }
    onSubmit(userData) {
        console.log(userData);
        var r = this.loginService.sendRequest(userData, this.SERVER_URL);
        r.subscribe(data => {
            this.router.navigate(['/login']);
        });
        if (this.newRest(userData.password, userData.confirmpass) && userData.password != null) {
            var r = this.loginService.sendRequest(userData, this.SERVER_URL);
            r.subscribe(data => {
                this.router.navigate(['/login']);
            });
        }
        else {
            alert("Passwords do not match");
        }
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/restaurant-view/restaurant-view.component.css":
/*!***************************************************************!*\
  !*** ./src/app/restaurant-view/restaurant-view.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQtdmlldy9yZXN0YXVyYW50LXZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/restaurant-view/restaurant-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/restaurant-view/restaurant-view.component.ts ***!
  \**************************************************************/
/*! exports provided: RestaurantViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantViewComponent", function() { return RestaurantViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RestaurantViewComponent = class RestaurantViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
RestaurantViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurant-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restaurant-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-view/restaurant-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restaurant-view.component.css */ "./src/app/restaurant-view/restaurant-view.component.css")).default]
    })
], RestaurantViewComponent);



/***/ }),

/***/ "./src/app/restaurantcurrentorders/restaurantcurrentorders.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/restaurantcurrentorders/restaurantcurrentorders.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\r\n  border-width: 3px;\r\n}\r\n\r\n.row strong {\r\n  margin: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGN1cnJlbnRvcmRlcnMvcmVzdGF1cmFudGN1cnJlbnRvcmRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRjdXJyZW50b3JkZXJzL3Jlc3RhdXJhbnRjdXJyZW50b3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XHJcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi5yb3cgc3Ryb25nIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/restaurantcurrentorders/restaurantcurrentorders.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/restaurantcurrentorders/restaurantcurrentorders.component.ts ***!
  \******************************************************************************/
/*! exports provided: RestaurantcurrentordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantcurrentordersComponent", function() { return RestaurantcurrentordersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let RestaurantcurrentordersComponent = class RestaurantcurrentordersComponent {
    constructor(http, cookie) {
        this.http = http;
        this.cookie = cookie;
    }
    fullfillOrder(id, i) {
        var url = "restaurant/fullfillorder";
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        this.http.post(url, { id: id }, { headers }).subscribe((res) => console.log(res), (err) => console.log(err));
        this.orders.splice(parseInt(i), 1);
    }
    ngOnInit() {
        var url = '/restaurant/current_orders/' + this.cookie.get('restaurant_id');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            if (data != null) {
                this.orders = data;
                console.log(this.orders);
            }
        });
    }
};
RestaurantcurrentordersComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
RestaurantcurrentordersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurantcurrentorders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restaurantcurrentorders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantcurrentorders/restaurantcurrentorders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restaurantcurrentorders.component.css */ "./src/app/restaurantcurrentorders/restaurantcurrentorders.component.css")).default]
    })
], RestaurantcurrentordersComponent);



/***/ }),

/***/ "./src/app/restaurantdetails/restaurantdetails.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/restaurantdetails/restaurantdetails.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border-type {\r\n  border-style: solid;\r\n  border-color: black;\r\n}\r\n\r\np {\r\n  font-size: 18px;\r\n}\r\n\r\nhr {\r\n  border-width: 3px;\r\n}\r\n\r\n.edit-link {\r\n  margin-right: 50px;\r\n}\r\n\r\n.form-style input{\r\n  margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGRldGFpbHMvcmVzdGF1cmFudGRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRkZXRhaWxzL3Jlc3RhdXJhbnRkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLXR5cGUge1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi5lZGl0LWxpbmsge1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmZvcm0tc3R5bGUgaW5wdXR7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/restaurantdetails/restaurantdetails.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/restaurantdetails/restaurantdetails.component.ts ***!
  \******************************************************************/
/*! exports provided: RestaurantdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantdetailsComponent", function() { return RestaurantdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let RestaurantdetailsComponent = class RestaurantdetailsComponent {
    constructor(httpService, loginService, formBuilder, cookie, http, router) {
        this.httpService = httpService;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.cookie = cookie;
        this.http = http;
        this.router = router;
        this.selectedFile = null;
        this.detailsForm = this.formBuilder.group({
            name: '',
            location: '',
            food_category: '',
            res_image: '',
            contact: '',
            working_hours: '',
            description: ''
        });
    }
    onFileSelected(event) {
        //this.selectedFile = <File>event.target.files[0];
        // var b64;
        // var reader = new FileReader();
        // reader.onload = function(e){
        //   console.log("encoding image")
        //   b64 = btoa(e.target.toString());
        //   console.log(b64)
        // }
        // this.fileAsBase64 = b64;
        const file = event.target.files[0];
        this.image = file;
    }
    onSubmit(details) {
        var jwttoken = this.cookie.get('jwttoken');
        details['jwttoken'] = jwttoken;
        details['id'] = this.cookie.get('restaurant_id');
        // details['res_image'] = this.fileAsBase64;
        // console.log(details['res_image'])
        const formData = new FormData();
        formData.append("id", this.cookie.get('restaurant_id'));
        formData.append("jwttoken", jwttoken);
        formData.append("image", this.image, this.cookie.get('restaurant_id') + '.png');
        formData.append("name", details['name']);
        formData.append("location", details['location']);
        formData.append("food_category", details['food_category']);
        formData.append("contact", details['contact']);
        formData.append("working_hours", details['working_hours']);
        formData.append("description", details['description']);
        this.http.post('/restaurant/restaurant_details', formData).subscribe((res) => this.router.navigate(['/restaurantviewdetails']), (err) => console.log(err));
    }
    ngOnInit() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        var url = '/restaurant/display_details/' + this.cookie.get('restaurant_id');
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            if (data != null) {
                this.restaurant_details = data;
                this.restaurant_details.res_image = "/restaurant_images/" + this.restaurant_details.res_image;
                this.detailsForm.get('name').setValue(data['name']);
                this.detailsForm.get('food_category').setValue(data['food_category']);
                this.detailsForm.get('location').setValue(data['location']);
                this.detailsForm.get('working_hours').setValue(data['working_hours']);
                this.detailsForm.get('description').setValue(data['description']);
                this.detailsForm.get('contact').setValue(data['contact']);
                console.log(data);
            }
        });
    }
};
RestaurantdetailsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
RestaurantdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurantdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restaurantdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantdetails/restaurantdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restaurantdetails.component.css */ "./src/app/restaurantdetails/restaurantdetails.component.css")).default]
    })
], RestaurantdetailsComponent);



/***/ }),

/***/ "./src/app/restaurantdropdown/restaurantdropdown.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/restaurantdropdown/restaurantdropdown.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRkcm9wZG93bi9yZXN0YXVyYW50ZHJvcGRvd24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/restaurantdropdown/restaurantdropdown.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurantdropdown/restaurantdropdown.component.ts ***!
  \********************************************************************/
/*! exports provided: RestaurantdropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantdropdownComponent", function() { return RestaurantdropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RestaurantdropdownComponent = class RestaurantdropdownComponent {
    constructor() { }
    ngOnInit() {
    }
};
RestaurantdropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurantdropdown',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restaurantdropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantdropdown/restaurantdropdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restaurantdropdown.component.css */ "./src/app/restaurantdropdown/restaurantdropdown.component.css")).default]
    })
], RestaurantdropdownComponent);



/***/ }),

/***/ "./src/app/restaurantmenu/restaurantmenu.component.css":
/*!*************************************************************!*\
  !*** ./src/app/restaurantmenu/restaurantmenu.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item {\r\n  margin: 10px;\r\n  border-radius: 25px;\r\n  border: 2px solid black;\r\n  padding: 20px;\r\n}\r\n\r\nhr {\r\n  border-width: 3px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudG1lbnUvcmVzdGF1cmFudG1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRtZW51L3Jlc3RhdXJhbnRtZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/restaurantmenu/restaurantmenu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/restaurantmenu/restaurantmenu.component.ts ***!
  \************************************************************/
/*! exports provided: RestaurantmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantmenuComponent", function() { return RestaurantmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let RestaurantmenuComponent = class RestaurantmenuComponent {
    constructor(loginService, formBuilder, cookie, http) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.cookie = cookie;
        this.http = http;
        this.menuForm = this.formBuilder.group({
            name: "",
            cost: "",
            description: "",
            image: ""
        });
    }
    // fileAsBase64 = null;
    onFileSelected(event) {
        // var b64
        // var reader = new FileReader()
        // reader.onload = function(e){
        //   console.log("encoding images")
        //   b64 = btoa(e.target.toString());
        // }
        // this.fileAsBase64 = b64;
        const file = event.target.files[0];
        this.image = file;
    }
    onSubmit(menu) {
        var jwttoken = this.cookie.get("jwttoken");
        // menu["jwttoken"] = jwttoken
        // menu['id'] = this.cookie.get("restaurant_id")
        // menu['image'] = this.image;
        const formData = new FormData();
        formData.append("image", this.image, this.cookie.get("restaurant_id") + menu['name'] + ".png");
        formData.append('id', this.cookie.get("restaurant_id"));
        formData.append('jwttoken', jwttoken);
        formData.append('name', menu['name']);
        formData.append('cost', menu['cost']);
        formData.append('description', menu['description']);
        this.http.post('/restaurant/menu', formData).subscribe((res) => console.log(res), (err) => console.log(err));
        // var r = this.loginService.sendRequest(menu, "/restaurant/menu");
        // r.subscribe(data => {
        //   console.log(data)
        // })
    }
    ngOnInit() {
    }
};
RestaurantmenuComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
RestaurantmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurantmenu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restaurantmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantmenu/restaurantmenu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restaurantmenu.component.css */ "./src/app/restaurantmenu/restaurantmenu.component.css")).default]
    })
], RestaurantmenuComponent);



/***/ }),

/***/ "./src/app/restaurantreg/restaurantreg.component.css":
/*!***********************************************************!*\
  !*** ./src/app/restaurantreg/restaurantreg.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".window {\r\n  float: top;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n\r\n  height: 570px;\r\n  margin-top: -260px;\r\n\r\n  width: 400px;\r\n  margin-left: -200px;\r\n\r\n  border: 3px solid gray;\r\n  border-radius: 15px;\r\n\r\n  text-align: center;\r\n  background-color: #ffe0b2;\r\n}\r\n\r\n.regist-form {\r\n  width: 100%;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  text-align: left;\r\n  font-size: 16px;\r\n}\r\n\r\n.regist-form p {\r\n  margin-top: 5px;\r\n}\r\n\r\n.regist-form input {\r\n  width: 100%;\r\n}\r\n\r\n.regist-form button {\r\n  width: 100%;\r\n  padding-top: 2px;\r\n  height: 30px;\r\n}\r\n\r\nbody{\r\n  background-image: url('LoginBackground.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudHJlZy9yZXN0YXVyYW50cmVnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFROztFQUVSLGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCLFlBQVk7RUFDWixtQkFBbUI7O0VBRW5CLHNCQUFzQjtFQUN0QixtQkFBbUI7O0VBRW5CLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRDQUE2RDtFQUM3RCw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9yZXN0YXVyYW50cmVnL3Jlc3RhdXJhbnRyZWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aW5kb3cge1xyXG4gIGZsb2F0OiB0b3A7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuXHJcbiAgaGVpZ2h0OiA1NzBweDtcclxuICBtYXJnaW4tdG9wOiAtMjYwcHg7XHJcblxyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW4tbGVmdDogLTIwMHB4O1xyXG5cclxuICBib3JkZXI6IDNweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMGIyO1xyXG59XHJcblxyXG4ucmVnaXN0LWZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnJlZ2lzdC1mb3JtIHAge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnJlZ2lzdC1mb3JtIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlZ2lzdC1mb3JtIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9Mb2dpbkJhY2tncm91bmQuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/restaurantreg/restaurantreg.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/restaurantreg/restaurantreg.component.ts ***!
  \**********************************************************/
/*! exports provided: RestaurantregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantregComponent", function() { return RestaurantregComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RestaurantregComponent = class RestaurantregComponent {
    constructor(loginService, formBuilder, router) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.SERVER_URL = "/authentication/sign_up/restaurant";
        this.restaurantRegistrationForm = this.formBuilder.group({
            name: '',
            email: '',
            password: '',
            restaurant_name: ''
        });
    }
    ngOnInit() {
    }
    newRest(password, confirmpass) {
        //event.preventDefault()
        if (password == confirmpass) {
            return true;
        }
        else {
            return false;
        }
    }
    onSubmit(userData) {
        //console.log(userData.password)
        var r = this.loginService.sendRequest(userData, this.SERVER_URL);
        r.subscribe(data => {
            this.router.navigate(['/resturantlogin']);
        });
    }
};
RestaurantregComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RestaurantregComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurantreg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restaurantreg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantreg/restaurantreg.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restaurantreg.component.css */ "./src/app/restaurantreg/restaurantreg.component.css")).default]
    })
], RestaurantregComponent);



/***/ }),

/***/ "./src/app/restaurantstats/restaurantstats.component.css":
/*!***************************************************************!*\
  !*** ./src/app/restaurantstats/restaurantstats.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\r\n  border-width: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudHN0YXRzL3Jlc3RhdXJhbnRzdGF0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudHN0YXRzL3Jlc3RhdXJhbnRzdGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/restaurantstats/restaurantstats.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/restaurantstats/restaurantstats.component.ts ***!
  \**************************************************************/
/*! exports provided: RestaurantstatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantstatsComponent", function() { return RestaurantstatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RestaurantstatsComponent = class RestaurantstatsComponent {
    constructor() { }
    ngOnInit() {
    }
};
RestaurantstatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurantstats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restaurantstats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantstats/restaurantstats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restaurantstats.component.css */ "./src/app/restaurantstats/restaurantstats.component.css")).default]
    })
], RestaurantstatsComponent);



/***/ }),

/***/ "./src/app/restaurantviewdetails/restaurantviewdetails.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/restaurantviewdetails/restaurantviewdetails.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border-type {\r\n  border-style: solid;\r\n  border-color: black;\r\n}\r\n\r\np {\r\n  font-size: 20px;\r\n}\r\n\r\nhr {\r\n  border-width: 3px;\r\n}\r\n\r\n.edit-link {\r\n  margin-right: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudHZpZXdkZXRhaWxzL3Jlc3RhdXJhbnR2aWV3ZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZXN0YXVyYW50dmlld2RldGFpbHMvcmVzdGF1cmFudHZpZXdkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLXR5cGUge1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi5lZGl0LWxpbmsge1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/restaurantviewdetails/restaurantviewdetails.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/restaurantviewdetails/restaurantviewdetails.component.ts ***!
  \**************************************************************************/
/*! exports provided: RestaurantviewdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantviewdetailsComponent", function() { return RestaurantviewdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let RestaurantviewdetailsComponent = class RestaurantviewdetailsComponent {
    constructor(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.errorFlag = false;
    }
    ngOnInit() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        var url = '/restaurant/display_details/' + this.cookie.get('restaurant_id');
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            if (data != null) {
                this.restaurant_details = data;
                this.restaurant_details.res_image = "/restaurant_images/" + this.restaurant_details.res_image;
                console.log(data);
            }
        });
        // var img_url='/restaurant/restaurant_image/' + this.cookie.get("restaurant_id")
        // // var d = {res_image: this.cookie.get("restaurant_id")}
        // this.http.get(img_url, {headers}).subscribe(data => {
        //   console.log(data)
        //   if (data != null){
        //     var array = new Uint8Array(data["data"])
        //     var string_char = String.fromCharCode.apply(null, array)
        //     let base64 = btoa(string_char)
        //     this.imageurl = base64
        //     // console.log(this.imageurl)
        //   }
        // })
    }
};
RestaurantviewdetailsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
RestaurantviewdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurantviewdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restaurantviewdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantviewdetails/restaurantviewdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restaurantviewdetails.component.css */ "./src/app/restaurantviewdetails/restaurantviewdetails.component.css")).default]
    })
], RestaurantviewdetailsComponent);



/***/ }),

/***/ "./src/app/restaurantviewmenu/restaurantviewmenu.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/restaurantviewmenu/restaurantviewmenu.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item {\r\n  padding: 10px;\r\n}\r\n\r\np {\r\n  font-size: 16px;\r\n}\r\n\r\na {\r\n  margin-right: 50px;\r\n  font-size: 16px;\r\n}\r\n\r\nhr {\r\n  border-width: 3px;\r\n}\r\n\r\n.break {\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudHZpZXdtZW51L3Jlc3RhdXJhbnR2aWV3bWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnR2aWV3bWVudS9yZXN0YXVyYW50dmlld21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXItd2lkdGg6IDNweDtcclxufVxyXG5cclxuLmJyZWFrIHtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/restaurantviewmenu/restaurantviewmenu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurantviewmenu/restaurantviewmenu.component.ts ***!
  \********************************************************************/
/*! exports provided: RestaurantviewmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantviewmenuComponent", function() { return RestaurantviewmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let RestaurantviewmenuComponent = class RestaurantviewmenuComponent {
    constructor(httpService, cookie, http) {
        this.httpService = httpService;
        this.cookie = cookie;
        this.http = http;
    }
    remove(name, i) {
        var url = "/restaurant/delete";
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("name", name)
            .set("id", this.cookie.get('restaurant_id'));
        this.http.delete(url, { headers, params }).subscribe(data => {
            if (data != null) {
                console.log(data);
            }
        });
        this.menu.splice(parseInt(i), 1);
    }
    ngOnInit() {
        // console.log("fge" + this.cookie.get('restaurant_id'))
        // this.httpService.get('/restaurant/menu/'+this.cookie.get('restaurant_id')).subscribe(data => {
        //   // this.detailsForm = data;
        //   console.log(data)
        //   if (data != null){
        //     this.detailsForm.controls['name'].setValue(data['name'])
        //     this.detailsForm.controls['location'].setValue(data['location'])
        //     this.detailsForm.controls['food_category'].setValue(data['food_category'])
        //     this.detailsForm.controls['contact'].setValue(data['contact'])
        //     this.detailsForm.controls['working_hours'].setValue(data['working_hours'])
        //   }
        // });
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json',
            jwttoken: this.cookie.get("jwttoken")
        });
        var url = '/restaurant/display_menu/' + this.cookie.get('restaurant_id');
        this.http.get(url, { headers }).subscribe(data => {
            // this.detailsForm = data;
            //console.log(data)
            if (data != null) {
                this.menu = data['menu'];
                // this.restaurantmenudetails.image = "/menu_images/" + this.restaurantmenudetails.image
                console.log(this.menu);
            }
        });
    }
};
RestaurantviewmenuComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RestaurantviewmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurantviewmenu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restaurantviewmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantviewmenu/restaurantviewmenu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restaurantviewmenu.component.css */ "./src/app/restaurantviewmenu/restaurantviewmenu.component.css")).default]
    })
], RestaurantviewmenuComponent);



/***/ }),

/***/ "./src/app/restaurantvieworder/restaurantvieworder.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/restaurantvieworder/restaurantvieworder.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnR2aWV3b3JkZXIvcmVzdGF1cmFudHZpZXdvcmRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/restaurantvieworder/restaurantvieworder.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/restaurantvieworder/restaurantvieworder.component.ts ***!
  \**********************************************************************/
/*! exports provided: RestaurantvieworderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantvieworderComponent", function() { return RestaurantvieworderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RestaurantvieworderComponent = class RestaurantvieworderComponent {
    constructor() { }
    ngOnInit() {
    }
};
RestaurantvieworderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurantvieworder',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restaurantvieworder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurantvieworder/restaurantvieworder.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restaurantvieworder.component.css */ "./src/app/restaurantvieworder/restaurantvieworder.component.css")).default]
    })
], RestaurantvieworderComponent);



/***/ }),

/***/ "./src/app/resturantlogin/resturantlogin.component.css":
/*!*************************************************************!*\
  !*** ./src/app/resturantlogin/resturantlogin.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".window {\r\n  float: top;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n\r\n  height: 520px;\r\n  margin-top: -250px;\r\n\r\n  width: 360px;\r\n  margin-left: -160px;\r\n\r\n  border: 3px solid gray;\r\n  border-radius: 15px;\r\n\r\n  text-align: center;\r\n  background-color: #ffe0b2;\r\n}\r\n\r\n.login-form {\r\n  width: 100%;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  text-align: left;\r\n  font-size: 16px;\r\n\r\n  padding-bottom: 10px;\r\n  border-bottom-color: gray;\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 2px;\r\n}\r\n\r\n.login-form p {\r\n  margin-top: 25px;\r\n}\r\n\r\n.login-form input {\r\n  width: 100%;\r\n}\r\n\r\n.login-form button {\r\n  width: 100%;\r\n  padding-top: 2px;\r\n  height: 30px;\r\n}\r\n\r\nbody{\r\n  background-image: url('LoginBackground.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdHVyYW50bG9naW4vcmVzdHVyYW50bG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7O0VBRVIsYUFBYTtFQUNiLGtCQUFrQjs7RUFFbEIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjs7RUFFbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlOztFQUVmLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTZEO0VBQzdELDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3Jlc3R1cmFudGxvZ2luL3Jlc3R1cmFudGxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2luZG93IHtcclxuICBmbG9hdDogdG9wO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcblxyXG4gIGhlaWdodDogNTIwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTI1MHB4O1xyXG5cclxuICB3aWR0aDogMzYwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNjBweDtcclxuXHJcbiAgYm9yZGVyOiAzcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTBiMjtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogZ3JheTtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHAge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuYm9keXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL0xvZ2luQmFja2dyb3VuZC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/resturantlogin/resturantlogin.component.ts":
/*!************************************************************!*\
  !*** ./src/app/resturantlogin/resturantlogin.component.ts ***!
  \************************************************************/
/*! exports provided: ResturantloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantloginComponent", function() { return ResturantloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ResturantloginComponent = class ResturantloginComponent {
    constructor(loginService, formBuilder, cookie, router) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.cookie = cookie;
        this.router = router;
        this.timesSubmitted = 0;
        this.restaurantLoginForm = this.formBuilder.group({
            email: '',
            password: ''
        });
    }
    ngOnInit() {
        this.addRecaptchaScript();
    }
    onSubmit(userData) {
        var r = this.loginService.sendRequest(userData, "/authentication/login/restaurant");
        if (this.recaptchaElement == null) {
            alert('Enter recaptcha');
            return;
        }
        r.subscribe(data => {
            console.log(data);
            if (data['auth']) {
                this.cookie.set("jwttoken", data['token']);
                this.cookie.set("restaurant_id", data['_id']);
                if (data['auth']) {
                    // this.cookie.set('jwttoken', data['token']);
                    this.router.navigate(['/restaurantviewdetails']);
                }
                //console.log(data[_id])
            }
        });
    }
    addRecaptchaScript() {
        window['grecaptchaCallback'] = () => {
            this.renderReCaptcha();
        };
        (function (d, s, id, obj) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                obj.renderReCaptcha();
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'recaptcha-jssdk', this));
    }
    renderReCaptcha() {
        window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
            'sitekey': '6LdhGcMUAAAAAJ2eG5TNInZtPqRfS2MJE-CVeptA',
            'callback': (response) => {
                console.log(response);
            }
        });
    }
};
ResturantloginComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recaptcha', { static: true })
], ResturantloginComponent.prototype, "recaptchaElement", void 0);
ResturantloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resturantlogin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resturantlogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resturantlogin/resturantlogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resturantlogin.component.css */ "./src/app/resturantlogin/resturantlogin.component.css")).default]
    })
], ResturantloginComponent);



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pusher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ChatService = class ChatService {
    constructor(_pusherService, _http) {
        this._pusherService = _pusherService;
        this._http = _http;
        this._endpoint = 'http://localhost:8080';
        this._channel = this._pusherService.getPusher().subscribe('chat-group');
    }
    join(param) {
        return this._http.post('${this._endpoint}/join', param)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            this.user = param;
        }));
    }
    sendMessage(message) {
        const param = Object.assign({ message, type: 'human' }, this.user);
        return this._http.post('${this._endpoint}/message', param);
    }
    getChannel() {
        return this._channel;
    }
};
ChatService.ctorParameters = () => [
    { type: _pusher_service__WEBPACK_IMPORTED_MODULE_2__["PusherService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ "./src/app/services/pusher.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pusher.service.ts ***!
  \********************************************/
/*! exports provided: PusherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherService", function() { return PusherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);



let PusherService = class PusherService {
    constructor() {
        this._pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_2__('a2dc9ba2d47e27762a7f', {
            clsuter: 'us2',
            encryted: true
        });
    }
    getPusher() {
        return this._pusher;
    }
};
PusherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PusherService);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar-main {\r\n  background-color: #FFCA28;\r\n  width: 200px;\r\n  border: 0;\r\n  height: 5000px;\r\n  font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXItbWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0EyODtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGhlaWdodDogNTAwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/sociallogin.service.ts":
/*!****************************************!*\
  !*** ./src/app/sociallogin.service.ts ***!
  \****************************************/
/*! exports provided: SocialloginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialloginService", function() { return SocialloginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SocialloginService = class SocialloginService {
    constructor(http) {
        this.http = http;
    }
    Savesresponse(response) {
        this.url = 'http://foodoholic-backend.herokuapp.com/Api/Login/Savesresponse';
        return this.http.post(this.url, response);
    }
};
SocialloginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SocialloginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocialloginService);



/***/ }),

/***/ "./src/app/verify/verify.component.css":
/*!*********************************************!*\
  !*** ./src/app/verify/verify.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/verify/verify.component.ts":
/*!********************************************!*\
  !*** ./src/app/verify/verify.component.ts ***!
  \********************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let VerifyComponent = class VerifyComponent {
    constructor(loginService, http, router, formBuilder) {
        this.loginService = loginService;
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.verifyForm = this.formBuilder.group({
            otp: ''
        });
    }
    ngOnInit() {
    }
    verifyOTPAsyn(event) {
    }
};
VerifyComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify.component.css */ "./src/app/verify/verify.component.css")).default]
    })
], VerifyComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    pusher: {
        key: '49096276b737a48a5ba1',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pwmcb\Desktop\Food-Delivery-System\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map