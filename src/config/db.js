const mongoose = require('mongoose');

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://rohan123:rohan45@cluster0.pir6p.mongodb.net/tosee")
}