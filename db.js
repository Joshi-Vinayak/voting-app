const mongoose = require('mongoose');
require('dotenv').config();

//define  the mongodb  connection url
const mongoURL = process.env.MONGODB_URL_LOCAL;

//set up mongodb connection 
mongoose.connect(mongoURL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get  the default connection 
const db = mongoose.connection;

// Define the event listner for databse connection 

db.on('connected' , ()=>{
    console.log("connected to mongodb server");
})

db.on('error' , ()=>{
    console.log(" mongodb connection error");
})

db.on('disconnected' , ()=>{
    console.log(" mongodb disconnected ");
})

//export the database connection
module.exports =db;`    `
