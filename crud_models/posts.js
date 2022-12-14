const { SpatialTrackingRounded } = require('@mui/icons-material')
const mongoose =require ('mongoose')

//model creation

const postSchema = new mongoose.Schema({

    Student_Name: {
        type :String,
        required:true
    },
    Student_Age:{
        type :String,
        required:true
    }
    
    ,
    Student_Gender:{
        type :String,
        required:true
    },
    Student_Grade:{
        type :String,
        required:true
    },
    Student_Adress:{
        type :String,
        required:true
    }


});
module.exports= mongoose.model('posts',postSchema);


    


