const mongoose=require("mongoose");
const createSchema=new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Name is required.'],
        minlength: [3, 'Name must be at least 3 characters long.'],
    },
    email:{
        type:String,
        required: [true, 'Email is required.'],
        match: [/.+\@.+\..+/, 'Please enter a valid email address.'],
        unique: [true,"Aldreay have email"], 
        //default:0,
       
    },
    mobileNumber:{
        type:String,
        required:[true,"please check the mobile number"],
        minlength:[10,"Please enter min 10 number"],
        maxlength:[10,"Plese enter max 10 number"]
        // mobile: {
        //     type: String,
        //     required: [true, 'Mobile number is required.'],
        //     minlength:[10,"Please enter min 10 number"]
            // validate: {
            //     validator: function (v) {
            //         return /^[0-9]{10}$/.test(v); // Regex for a 10-digit mobile number
            //     },
            //     message: props => `${props.value} is not a valid 10-digit mobile number!`,
            // },
        // },
    },
    designation:{
        type:Object,
        required:[true,"please select the designation"]
        //default:0,
    },
    gender:{
        type:Object,
        required:[true,"please select the gender"]
        //default:0,
    },
    course:{
        type:Object,
        required:[true,"please select the course"]
        // default:0,
    },
    image:{
        type:Object,
        required:[true,"please select the image file"]
        // default:0,
    },uniqueId:{
        type:Number,
        // required:[true,"please given uniqueId"]
        // default:0,
    },imageUrl:{
        type:String,
        require:[true,"Please enter the image"]
    }
},{timestamps:true})
const Create=mongoose.model('Createemployee',createSchema)
module.exports={Create}
