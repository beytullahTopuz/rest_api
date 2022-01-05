const mongoose = require('mongoose');
require('dotenv/config');

/*
mongoose.connect("mongodb+srv://t4zb:s7GZRQ4p*7U8d_f@cluster0.6ebb8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false})
    .then(()=>console.log("DB connection is successful"))
    .catch(err =>console.log("connection failed", err));
*/

//connect db
mongoose.connect('mongodb://localhost/musicApp',
{useNewUrlParser:true})
    .then(()=>console.log("DB connection is successful"))
    .catch(err =>console.log("connection failed", err));