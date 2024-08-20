const express=require('express')
const router=express.Router()
const {Create}=require('../schema/CreateSchema')

//get
router.get("/getAllEmployeeList",async (req,res)=>{
    try{
        const val=await Create.find();
        res.status(202).json(val);
    }
    catch{
        res.status(404).json('error')
    }
})

router.post('/createEmployeeList',async(req,res)=>{
    try{
    
        const user= await Create.findOne({email:req.body.email});
        if(user)
        {
            return res.status(400).json("Already have email")
        }
        const userDetails=new Create({
            name:req.body.name,
            email:req.body.email,
            mobileNumber:req.body.mobileNumber,
            designation:req.body.designation,
            gender:req.body.gender,
            course:req.body.course,
            image:req.body.image,
            imageUrl:req.body.imageUrl,
            uniqueId:req.body.uniqueId
        })
        const data= await userDetails.save().then(()=>{
            res.status(200).json("succesfully")
        }).catch((error)=>{
            if (error.name === 'ValidationError') {
                const errors = {};
                for (let field in error.errors) {
                    errors[field] = error.errors[field].message;
                }
                return res.status(400).json({ errors });
            }
            else{
                res.status(500).json({ error: 'Internal Server Error' });
            }
            
        })  
    }
    catch(error){
        // res.status(404).json(error);
        if (error.name === 'ValidationError') {
            const errors = {};
            for (let field in error.errors) {
                errors[field] = error.errors[field].message;
            }
            return res.status(400).json({ errors });
        }
        else{
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
})

//put
router.put("/updateEmployeeList/:id",async (req,res)=>{
    
    try{
        // const user= await Create.findone({email:req.body.email}).count();
        const {error}= await Create.validate(req.body);
        const countemail= await Create.find({email:req.body.email}).countDocuments();
        console.log(countemail);
        if(countemail>1)
        {
            return res.status(400).json("Already have email")
        }          
    }
    catch(error){
        if (error.name === 'ValidationError') {
            const errors = {};
            for (let field in error.errors) {
                console.log(field)
                errors[field] = error.errors[field].message;
            }
            return res.status(400).json({ errors });
        }
        else{
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    // console.log(req.params.id,"kkkkkkkkk");
    console.log(req.params,"kkkkkkkkk");
    try{
        const val=await Create.findOneAndReplace(req.params.email,req.body,{
            new:true,
        }).then(()=>{
            res.status(200).json({success:'succesfully update'})
        }).catch((error)=>{res.json({error:"error"})})
        
    }
    catch(error){
        res.status(404).json({error:"error"})
    }
    
})

//delete
router.delete("/removeEmployeeList/:id",async (req,res)=>{
    try{
        const val=await Create.findOneAndDelete(req.params.email);
        res.status(200).json("data succesfully deleted")
    }
    catch{
        res.status(404).json({error:'error'})
    }
    
})
//get id
router.get("/particularEmployee/:id",async (req,res)=>{
    try{
        console.log(req.params.id)
        const val=await Create.findOne({email:req.params.id})
        // console.log(val)
        res.status(200).json(val)
    }
    catch{
        res.status(404).json({error:'error'})
    } 
})


module.exports=router