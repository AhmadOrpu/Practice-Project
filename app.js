//Basic library
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');

//security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
//Database import
const mongoose = require('mongoose');

//security middleware implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//body parser implementation
app.use(bodyParser.json());

//Request Rate Limit
let limiter = rateLimit({windowMs:15*60*1000,max:3000});
app.use(limiter);

//MongoDB database connection
mongoose.connect("mongodb+srv://ahmadorpu:ahmadorpu1234@cluster0.jqsrpzu.mongodb.net/ToDo",{autoIndex:true}).then((res) => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Failed to connect");
});

//routing implementation
app.use('/api/v1/',router);

//undefined routes
app.use('*',(req,res)=>{
    res.status(404).json({"status":"fail","data":"not found"});
});

module.exports = app;






