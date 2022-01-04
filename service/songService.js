const Songs = require('../models/songs')

exports.addSongsToAlbum = async(req,res) => {
  try{
    const { trackName, tackTime, albumId } = req.body
    const trackData = {
        songName: trackName,
        songTime: tackTime,
        albumId,
        createdDate: new Date(),
    }
    
    const songData = await Songs.create(trackData)
    if(songData) return { status: true, data: songData, code: 200 }
    else return { status: false, data: "Failed to insert data", code: 400 }
  } catch (error) {
    return ({ status: false, data: "INTERNAL_SERVER_ERROR", code: 500 })
  }
}

exports.getAllSongsByAlbumId = async(req,res) => {
  try{
    const { albumId } = req.params
    let responseData = {}
    const countDocuments = await Songs.find({albumId: albumId}).count()
    if(countDocuments) responseData.count = countDocuments

    const songsOfAlbum = await Songs.find({albumId: albumId})
    if(songsOfAlbum.length > 0){
        responseData.data = songsOfAlbum
        return { status: true, data: responseData, code: 200 }
    } 
    else return { status: false, data: "No songs found for the albumId", code: 400 }
  } catch (error) {
    return ({ status: false, data: "INTERNAL_SERVER_ERROR", code: 500 })
  }
}