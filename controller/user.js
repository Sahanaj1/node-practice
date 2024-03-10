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


exports.getAllUsers=async(req,res)=>{
    const page=parseInt(req.query.page) || 1;
    const limit= parseInt(req.query.limit) || 10;
    try{
        const users=await User.find().skip( (page - 1)*limit ).limit(limit);
        
        return res.status(200).json(users);
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"error occured"});
    }
}

// exports.getAllUsers=async(req,res)=>{
//     try {
//         const pageNumber = parseInt(req.query.page) || 0;
//         const limit = parseInt(req.query.limit) || 12;
//         const result = {};
//         const totalPosts = await User.countDocuments().exec();
//         let startIndex = pageNumber * limit;
//         const endIndex = (pageNumber + 1) * limit;
//         result.totalPosts = totalPosts;
//         if (startIndex > 0) {
//           result.previous = {
//             pageNumber: pageNumber - 1,
//             limit: limit,
//           };
//         }
//         if (endIndex < (await User.countDocuments().exec())) {
//           result.next = {
//             pageNumber: pageNumber + 1,
//             limit: limit,
//           };
//         }
//         result.data = await User.find()
//           .sort("-_id")
//           .skip(startIndex)
//           .limit(limit)
//           .exec();
//         result.rowsPerPage = limit;
//         return res.json({ msg: "Posts Fetched successfully", data: result });
//       } catch (error) {
//         console.log(error);
//         return res.status(500).json({ msg: "Sorry, something went wrong" });
//       }
// }