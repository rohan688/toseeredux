const express = require('express');
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connect = require("./config/db")
const app = express();
const {Register, Login} = require("./controllers/users.controller")
app.use(express.json());
app.post("/register",Register);
app.post("/login", Login);

app.listen(PORT, async(req,res)=>{
    try {
        await connect();
        console.log('successfully connected on port 8080....')
    } catch (error) {
        console.log(error)
    }
})

