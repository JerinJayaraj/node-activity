const Songs = require('../models/songs')

exports.addSongsToAlbum = async(req,res) => {
  try{
    console.log("in Post")
    const { trackName, tackTime, albumId } = req.body
    console.log(trackName, tackTime, albumId);
    const trackData = {
        songName: trackName,
        songTime: tackTime,
        albumId,
        createdDate: new Date(),
    }
    
    const data = await Songs.create(trackData)
    console.log(data)
    if(data) return { status: true, data: data, code: 200 }
    else return { status: false, data: data, code: 400 }
  } catch (error) {
    return ({ status: false, data: "INTERNAL_SERVER_ERROR", code: 500 })
  }
}

exports.getAllSongsByAlbumId = async(req,res) => {
  try{
    const { albumId } = req.params
    const data = await Songs.find({albumId: albumId})
    // console.log(data)
    if(data) return { status: true, data: data, code: 200 }
    else return { status: false, data: data, code: 400 }
  } catch (error) {
    return ({ status: false, data: "INTERNAL_SERVER_ERROR", code: 500 })
  }
}