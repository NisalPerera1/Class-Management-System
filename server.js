const express = require('express');
const app = express();
const mongoose =require ('mongoose')
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
