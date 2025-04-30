const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Student = require("../models/student");
// const student = require('../models/student');

mongoose.connect('mongodb://127.0.0.1/students').then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log(`erorr is ${err.message}`)
})



router.post("/add",async(req,res)=>{
    try {
        const data = await Student.create(req.body);
        res.json({message:"Success"})
    } catch (err) {
        res.status(500).json({message:"Failed",error:err.message})
    }
})

router.get("/all",async(req,res)=>{
    try {
        const data = await Student.find();
        res.send(data);
    } catch (err) {
        res.status(500).json({message:"Failed"})
    }
})

router.delete("/delete/:rollnum",async(req,res)=>{
    try {
        const roll = req.params.rollnum;
        // console.log(roll)
        const deletestd = await Student.deleteOne({_id:roll});
        res.json({message:"Deleted"})
    } catch (err) {
        res.json({message:"failed"})
    }
})

module.exports = router;
