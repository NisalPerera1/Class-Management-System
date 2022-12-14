const express = require('express');
const mongoose =require ('mongoose');
const bodyParser=require('body-parser'); //information (json walin ) ena req eka converting to javascript object 
var https = require('https');
const app = express();
//importing routes 
const postRoutes=require('./routes/posts');


//app midleware
app.use(bodyParser.json());

//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL="mongodb+srv://Nisal:Nisal12345@classsmansy.kt8c5al.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);
mongoose.connect(DB_URL)
.then(//sucess nam 
  ()=>{
    console.log("Db Connected");
  }  
)
.catch(//unsuc nam 
    (err)=>{
        console.log("Sorry Db is not Connected!!!",err );
    }
)

app.listen(PORT,()=>{
    console.log(`App is Running on ${PORT}`); //backtiks used for port eka varaiable ekak wage ganna  

});
