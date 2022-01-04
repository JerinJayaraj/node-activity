const Albums = require('../models/albums')
const Songs = require('../models/songs')

exports.createAlbum = async(req,res) => {
  try{
    const { albumName, artistName } = req.body
    // console.log(albumName, artistName);
    const albumData = {
        name: albumName,
        artistName,
        createdDate: new Date(),
    }
    
    const data = await Albums.create(albumData)
    // console.log(data)
    if(data) return { status: true, data: data, code: 200 }
    else return { status: false, data: data, code: 400 }
  } catch (error) {
    return ({ status: false, data: "INTERNAL_SERVER_ERROR", code: 500 })
  }
}

exports.getAllAlbums = async(req,res) => {
  try{
    const data = await Albums.find({})
    // console.log(data)
    if(data) return { status: true, data: data, code: 200 }
    else return { status: false, data: data, code: 400 }
  } catch (error) {
    return ({ status: false, data: "INTERNAL_SERVER_ERROR", code: 500 })
  }
}