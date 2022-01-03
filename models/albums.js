const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    artistName:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
    }
})

module.exports = mongoose.model("Album",albumSchema)