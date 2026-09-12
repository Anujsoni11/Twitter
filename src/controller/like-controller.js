const LikeService = require('../services/like-service');
const { StatusCodes } = require('http-status-codes');

const likeService = new LikeService();

const toggleTweetLike = async (req, res) => {
    try {
        const response = await likeService.toggleTweetLike(req.params.tweetId);
        if (response) {
            return res.status(StatusCodes.OK).json({
                err: {},
                success: true,
                message: 'Successfully disliked'
            });
        }
        else {
            return res.status(StatusCodes.OK).json({
                err: {},
                success: true,
                message: 'Successfully liked'
            });
        }
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
}

const toggleCommentLike = async (req, res) => {
    try {
        const response = await likeService.toggleCommentLike(req.params.commentId);
        if (response) {
            return res.status(StatusCodes.OK).json({
                err: {},
                success: true,
                message: 'Successfully disliked'
            });
        }
        else {
            return res.status(StatusCodes.OK).json({
                err: {},
                success: true,
                message: 'Successfully liked'
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
}

const toggleReplyLike = async (req, res) => {
    try {
        const response = await likeService.toggleReplyLike(req.params.replyId);
        if (response) {
            return res.status(StatusCodes.OK).json({
                err: {},
                success: true,
                message: 'Successfully disliked'
            });
        }
        else {
            return res.status(StatusCodes.OK).json({
                err: {},
                success: true,
                message: 'Successfully liked'
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    toggleTweetLike,
    toggleCommentLike,
    toggleReplyLike
};