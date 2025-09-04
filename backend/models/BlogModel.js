const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    maindescription:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("Blogs", blogSchema)