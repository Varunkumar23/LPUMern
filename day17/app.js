const dotEnv=require("dotenv")
dotEnv.config();
const express=require("express")
const app=express();
require('./config/db.js')

const {apiRouter}=require("./api/v1/routes.js")

app.use(express.json());

app.use((req,res,next)=>{
    console.log("--------------");
    console.log(new Date(),req.method,req.url);
    console.log("--------------");
    next();
})


app.use("/app/v1",apiRouter);

app.listen("2900",()=>{
    console.log("<====== Server is Running ======>")
})