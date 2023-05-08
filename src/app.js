const express=require("express");
const app=express();
const hbs=require("hbs");
const path=require("path");
const Register=require("./models/userSchema");
const staticPath=path.join(__dirname,"../public");
const viewPath=path.join(__dirname,"..//templates//views");
const partialPath=path.join(__dirname,"../templates/partials");
require("./db//conn");
const PORT=process.env.PORT||3500;

app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticPath));

app.set("view engine","hbs");
app.set("views",viewPath);

hbs.registerPartials(partialPath);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/contact",async(req,res)=>{
    try{
        const data=new Register({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            message:req.body.message
        });
        const result=await data.save();
        console.log(result);
        res.status(200).render("index");
    }catch(err){
        res.status(400).send(err);
    }
});

app.listen(PORT,()=>{
    console.log(`Listening to port no ${PORT}`);
});

