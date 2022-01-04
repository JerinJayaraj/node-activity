const express = require('express')
const router = express.Router()
const albumService = require("../service/albumService")

router.post('/', albumService.createAlbum)
router.get('/', albumService.getAllAlbums)


module.exports = router