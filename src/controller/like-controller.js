const LikeService = require('../services/like-service');

const likeService = new LikeService();

const toggleTweetLike = async (req, res) => {
    try {
        const response = await likeService.toggleTweetLike(req.params.tweetId);
        if (response) {
            return res.status(200).json({
                err: {},
                success: true,
                message: 'Successfully disliked'
            });
        }
        else {
            return res.status(200).json({
                err: {},
                success: true,
                message: 'Successfully liked'
            });
        }
    } catch (error) {
        return res.status(500).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
} 

module.exports = {
    toggleTweetLike
};