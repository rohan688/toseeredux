const express = require("express");
const User  = require("../models/users.model");
require('dotenv').config();
const router = express.Router();
const jwt = require('jsonwebtoken');
 
const newToken=(user)=>{
    return jwt.sign({user},process.env.JWT)
}

const Register=async(req, res)=>{
    try {
        let user = await User.findOne({username:req.body.username});
        if(user) return res.status(400).send("user already exists!")
        user = await User.create(req.body);
        const token = newToken(user);
        return res.status(201).send(user,{token});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
}

const Login = async(req, res)=>{
    try {
        const user = await User.findOne({username:req.body.username});
        if(!user || user.password!==req.body.password) return res.status(400).send("invalid username or password!");
        const token = newToken(user);
        return res.status(201).send({user,token});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
}

module.exports = {Register, Login}