const SuccessResponse = require("../response/successResponse")
const ErrorResponse = require("../response/errorResponse")
const songService = require("../service/songService")


exports.addSongsToAlbum = async(req,res) => {
    try{
        const { status, data, code } = await songService.addSongsToAlbum(req);
        if(status) return res.status(code).send(new SuccessResponse(data))
        else return res.status(code).send(new ErrorResponse(data));
    } 
    catch (error) {
        return res.status(HttpCodes.INTERNAL_SERVER_ERROR).json(new ErrorResponse(error));
    }
}

exports.getAllSongsByAlbumId = async(req,res) => {
    try{
        const { status, data, code } = await songService.getAllSongsByAlbumId(req);
        if(status) return res.status(code).send(new SuccessResponse(data))
        else return res.status(code).send(new ErrorResponse(data));
    } 
    catch (error) {
        return res.status(HttpCodes.INTERNAL_SERVER_ERROR).json(new ErrorResponse(error));
    }
}