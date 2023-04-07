const router = require ("express").Router();
const mongoose = require ('mongoose');
const schema = mongoose.Schema;


const paperSchema = new schema({
    name:{
        type : String,
        required:true 
    },
    grade:{
        type : String,
        required:true 
    },
    term:{
        type : String,
        required:true 
    }

})

const Papers =mongoose.model("Papers",paperSchema)
module.exports=Papers;