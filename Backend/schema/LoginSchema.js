const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please enter the name"]
    },
    password:{
        type:String,
        required:[true,"please end the password"]
        //default:0,
    }
},{timestamps:true})
const User=mongoose.model('loginemployee',userSchema)
module.exports={User}
