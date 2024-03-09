const express=require("express");
const  app = express();
const User=require('../model/User')
const bcrypt=require("bcrypt")

exports.register= async (req,res)=>{
    try{
        console.log(req.body)
        const {name,password,email}=req.body;

        const hashedPassword= await bcrypt.hash(password,10) ;
        const user=new User({name,email,password:hashedPassword});
    
        await user.save();
        return res.status(201).json({ message: 'User registered successfully' })
    }catch(err){
        console.error(err)
    }    
};