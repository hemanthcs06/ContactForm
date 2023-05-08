const mongoose=require("mongoose");
require("dotenv").config();

//Creating a database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connection Successful...");
})
.catch((err)=>{
    console.log("Connection failed");
});
