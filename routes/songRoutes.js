const express = require('express')
const router = express.Router()
const songService = require("../service/songService")

router.post('/', songService.addSongsToAlbum)
router.get('/:albumId', songService.getAllSongsByAlbumId)


module.exports = router