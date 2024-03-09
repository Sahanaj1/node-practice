const express=require('express');
const User=require("../model/User");


exports.getUsers=async(req,res)=>{
    try{
        const users=await User.find();
        return res.status(200).json(users);
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"error occured"});
    }
}