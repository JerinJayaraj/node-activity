const SuccessResponse = require("../response/successResponse")
const ErrorResponse = require("../response/errorResponse")
const albumService = require("../service/albumService")


exports.createAlbum = async(req,res) => {
    try{
        const { status, data, code } = await albumService.createAlbum(req);
        if(status) return res.status(code).send(new SuccessResponse(data))
        else return res.status(code).send(new ErrorResponse(data));
    } 
    catch (error) {
        return res.status(HttpCodes.INTERNAL_SERVER_ERROR).json(new ErrorResponse(error));
    }
}

exports.getAllAlbums = async(req,res) => {
    try{
        const { status, data, code } = await albumService.getAllAlbums(req);
        if(status) return res.status(code).send(new SuccessResponse(data))
        else return res.status(code).send(new ErrorResponse(data));
    } 
    catch (error) {
        return res.status(HttpCodes.INTERNAL_SERVER_ERROR).json(new ErrorResponse(error));
    }
}