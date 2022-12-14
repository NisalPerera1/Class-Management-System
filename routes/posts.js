const express = require('express');
const Posts=  require('../crud_models/posts');
 
//invoking express routing (http req method )
const router=express.Router();
//save posts



router.post('/post/save',(req,res)=>{
    let newpost=new Posts(req.body);
    newpost.save((err)=>{
    if (err) {
        return res.status(400).json ({
            error:err
        });
    }
  return res.status(200).json({
    sucess:"post saved succcesfull"
    //sucess kiyanne key eka "post eka " liyanne json format eken 
  } );
 } );
});
module.exports=router;