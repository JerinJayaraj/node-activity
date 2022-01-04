const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    songName:{
        type:String,
        required:true
    },
    songTime:{
        type:String,
        required:true
    },
    albumId:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
    }
})

module.exports = mongoose.model("Song",songSchema)