const Albums = require('../models/albums')
const Songs = require('../models/songs')

exports.createAlbum = async(req,res) => {
  try{
    console.log("in Post")
    const { albumName, artistName } = req.body
    console.log(albumName, artistName);
    const albumData = {
        name: albumName,
        artistName,
        createdDate: new Date(),
    }
    
    const data = await Albums.create(albumData)
    console.log(data)
    if(data) return res.status(200).send(data)
    else return res.status(400).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
}

exports.getAllAlbums = async(req,res) => {
  try{
    const data = await Albums.find({})
    // console.log(data)
    if(data) return res.status(200).send(data)
    else return res.status(400).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
}