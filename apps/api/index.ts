import express from "express";
const app=express();
import {prisma} from "@repo/db/prisma"
app.use(express.json())


app.post("/create",(req,res)=>{

    const username:string=req.body.username
    const password:string=req.body.password
    if(username||password){}
    res.json({
        message:"user not created"
    })
    prisma.user.create({
        data:{
            username:username,
            password:password
        }
    })

})