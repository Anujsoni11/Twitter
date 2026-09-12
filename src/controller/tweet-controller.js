const TweetService = require('../services/tweet-service.js');
const { StatusCodes } = require('http-status-codes');

const tweetService = new TweetService();

const create = async(req, res) => {
    try {
        console.log(req.user);
        const response = await tweetService.create(req.body, req.user);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully created a tweet'
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
};

const destroy = async(req, res) => {
    try {
        const response = await tweetService.destroy(req.params.id);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully deleted a tweet'
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
};

const get = async(req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully fetched the tweet'
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
};

const getAll = async(req, res) => {
    try {
        const response = await tweetService.getAll();
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully fetched all tweets'
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
};

const update = async(req, res) => {
    try {
        const response = await tweetService.update(req.params.id, req.body);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully updated the tweet'
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            err: error,
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create,
    destroy,
    get,
    getAll,
    update
}