const mongoose=require("mongoose");
const validator=require("validator");
const infoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Enter a valid email");
            }
        }
    },
    phone:{
        type:Number,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

const Register=new mongoose.model("Register",infoSchema);

module.exports=Register;