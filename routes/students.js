const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Student = require("../models/student");

mongoose.connect('mongodb://127.0.0.1/students').then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log(`erorr is ${err.message}`)
})

router.get("/all",(req,res)=>{
    res.send({message:"Success"})
})

router.post("/add",async(req,res)=>{
    try {
        const data = await Student.create(req.body);
        res.json({message:"Success"})
    } catch (err) {
        res.status(500).json({message:"Failed",error:err.message})
    }
})

module.exports = router;
