const CommentService = require('../services/comment-service');

const commentService = new CommentService();

const createComment = async (req, res) => {
    try {
        const response = await commentService.create(req.body, req.params.tweetId);
        return res.status(202).json({
            data: response,
            err: {},
            message: 'Successfully created a comment',
            success: true 
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
}

const destroyComment = async(req, res) => {
    try {
        const response = await commentService.destroy(req.params.tweetId, req.params.commentId);
        return res.status(200).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully deleted a comment'
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
};

const getComment = async(req, res) => {
    try {
        const response = await commentService.get(req.params.commentId);
        return res.status(200).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully fetched the comment'
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
};

const getAllComment = async(req, res) => {
    try {
        const response = await commentService.getAll();
        return res.status(200).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully fetched all comments'
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
};

const updateComment = async(req, res) => {
    try {
        const response = await commentService.update(req.params.commentId, req.body);
        return res.status(200).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully updated the comment'
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createComment,
    destroyComment,
    getComment,
    getAllComment,
    updateComment
}