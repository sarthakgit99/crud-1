const express=require("express");
const mongoose=require("mongoose");
const studentRoute=require("./controller/studentRoute");
const cors=require("cors");
const bodyParser = require("body-parser");
const app=express();
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://mango:mangodb@cluster0.lgagoaj.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>{
    console.log("connected to database");
});
db.on("error",()=>{
    console.log("failed to connect to database");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute",studentRoute);
app.listen(4000,()=>{
    console.log("listening on port 4000");
})  