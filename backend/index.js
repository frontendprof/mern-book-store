import express from 'express'
import { PORT,mongodbURL } from './config.js';
import mongoose from "mongoose";


const app=express();

app.get("/",(req,res)=>{
    console.log(req);
    return res.status(234).send("Welcome to MERN book store app")
})



mongoose.connect(mongodbURL).then(()=>{
    console.log("APp connected to DB");
    app.listen(PORT,()=>{
        console.log(`App is listeninig on port: ${PORT}`);
    })
}).catch((err)=>{console.log(err)})