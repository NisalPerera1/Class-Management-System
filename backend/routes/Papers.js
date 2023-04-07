const router = require ("express").Router();
const Papers = require("../models/papermodel");

router.route('/add-papers').post((req,res)=>{
    const name =req.body.name;
    const grade =req.body.grade;
    const term =req.body.term;
 
    const NewPaper=new Papers({
        name,
        grade,
        term
    })
    NewPaper.save((err) => {
        if (err) {
            return res.status(400).json ({
                error:err
            });
        }
      return res.status(200).json({
        sucess:"Paper saved succcesfull"
      });
    })
})

router.route("/").get( (req,res)=>{
    Papers.find().then((Paper)=>{
     res.json(Paper) } ) 
     .catch((err)=>{
     console.log(err)
     })
}
)





module.exports=router;

    
