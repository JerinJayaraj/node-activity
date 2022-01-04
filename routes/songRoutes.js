const express = require('express')
const router = express.Router()
const songHelper = require("../helper/songHelper")

router.post('/', songHelper.addSongsToAlbum)
router.get('/', songHelper.getAllSongsByAlbumId)


module.exports = router