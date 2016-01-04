"use strict";

//Config
var httpProtocol = 'https';
var host = process.env.IP || '0.0.0.0';
var port = process.env.PORT || 8080;
var dbProtocol = "mongodb";
var dbName = "db";
var dbConnection = dbProtocol + "://" + host + "/" + dbName;


//Express
var express = require("express");
var app = express();


//Middleware
var morgan = require('morgan')
app.use(morgan('combinded'));
var cors = require("cors");
app.use(cors());

//Parse request into json format
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// compress all requests 
var compression = require('compression');
app.use(compression())


//Mongoose
var mongoose = require("mongoose");
var db = mongoose.connect(dbConnection);

var Model = require("./server/models/model.js")(mongoose);

var controller = require("./server/controllers/controller.js")(Model);

var routes = require("./server/routes/route.js")(controller, express, app, cors);

app.listen(port, function(err){
    if(err)
        console.log(err);
   else 
        console.log("Listening on %s://%s", httpProtocol, host); 
});