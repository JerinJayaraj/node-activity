const express = require('express')
const router = express.Router()
const albumHelper = require("../helper/albumHelper")

router.post('/', albumHelper.createAlbum)
router.get('/', albumHelper.getAllAlbums)


module.exports = router