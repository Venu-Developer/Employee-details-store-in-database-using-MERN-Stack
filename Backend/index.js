const express=require("express");
const router=require('./routes/Router');
const mongoose=require('mongoose');
const cors=require('cors');
const morgan = require("morgan");
const app=express();

//middleware 
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use('/api',router);
const URL="mongodb+srv://venud:venud638@cluster0.llm1c.mongodb.net/EmployeeDetails?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(URL).then(()=>{
    console.log("database is connected")
}).catch((error)=>console.log("database is not connect"))
app.listen(3000,()=>{
    console.log("server is runing")
})

// const express=require("express")
// const routers=require("./routes/userRoute.js")
// const mongoose=require('mongoose');
// const morgan = require("morgan");
// const app=express()

// // //middeler
// app.use(express.json())
// app.use(morgan('dev'))

// //router
// app.use('/',routers);
// const url="mongodb+srv://venud:venud638@cluster0.llm1c.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
// // const url="mongodb+srv://venud:venud638@cluster0.9wpbnzs.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"
// // //mongodb
// // //{useNewUrlParser:true}
// mongoose.connect(url).then(()=>{
//    console.log("db is connected")
//    app.listen(3000,()=>{console.log("server is work")})
// }).catch(()=>console.log("db error"))