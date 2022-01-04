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
    if(data) return res.status(200).send(data)
    else return res.status(400).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
}

exports.getAllSongsByAlbumId = async(req,res) => {
  try{
    const { albumId } = req.params
    const data = await Songs.find({albumId: albumId})
    // console.log(data)
    if(data) return res.status(200).send(data)
    else return res.status(400).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
}