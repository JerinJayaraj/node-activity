const Albums = require('../models/albums')
const Songs = require('../models/songs')

exports.createAlbum = async(req,res) => {
  try{
    const { albumName, artistName } = req.body
    const albumData = {
        name: albumName,
        artistName,
        createdDate: new Date(),
    }
    
    const data = await Albums.create(albumData)
    if(data) return { status: true, data: data, code: 200 }
    else return { status: false, data: "Failed to insert data", code: 400 }
  } catch (error) {
    return ({ status: false, data: "INTERNAL_SERVER_ERROR", code: 500 })
  }
}

exports.getAllAlbums = async(req,res) => {
  try{
    let responseData = {}
    const count = await Albums.find({}).count()
    if(count) responseData.count = count
    const albums = await Albums.find({})
    if(albums.length > 0) {
      responseData.data = albums
      return { status: true, data: responseData, code: 200 }
    }
    else return { status: false, data: "No albums found", code: 400 }
  } catch (error) {
    return ({ status: false, data: "INTERNAL_SERVER_ERROR", code: 500 })
  }
}