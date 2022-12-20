const express = require('express');
const posts = require('../crud_models/posts');
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
  });
 });
});


//get post 
router.get('/post/get',(req,res)=>{
  Posts.find().exec((err,posts)=>{
    if(err){
      return res.status(400).json({
        error:err
  });
   
}
return res.status(200).json({
sucess:true,
message:"Posts Got Succesfully"


});
})
});


//update
router.put('/post/update/:id',(req,res)=>{
Posts.findByIdAndUpdate(
  req.params.id,
  {
    $set:req.body
  },
  (err,post)=>{
    if (err) {
      return res.status(400).json ({error:err});
             }
return res.status(200).json({
  sucess:"post updated succcesfull"
  //sucess kiyanne key eka "post eka " liyanne json format eken 
});
});
});

//delete
router.delete('/post/delete/:id',(req,res)=>{
                                            Posts.findByIdAndRemove(req.params.id.exec((err,deletedPost)=>{
                                                    if (err) {
                                          return res.status(400).json ({message:"Delete Unsucessful",err});
                                                      
                                             }}
              ));
              

  return res.json({
    message:"post deleted succcesfully",deletedPost
  });
});


module.exports=router;