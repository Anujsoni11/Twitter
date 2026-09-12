const UserService = require('../services/user-service');
const {StatusCodes} = require('http-status-codes');

const userService = new UserService();

const createUser = async (req, res) => {
    try {
        const response = await userService.create(req.body.email, req.body.password, req.body.username);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully created a user'
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

const destroyUser = async (req, res) => {
    try {
        const response = await userService.destroy(req.params.id);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully deleted a user'
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

const getUser = async (req, res) => {
    try {
        const response = await userService.get(req.params.id);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully fetched the user'
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

const getAllUser = async (req, res) => {
    try {
        const response = await userService.getAll();
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully fetched all users'
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

const updateUser = async (req, res) => {
    try {
        const response = await userService.update(req.params.id, req.body);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully updated the user'
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

const signUp = async (req, res) => {
    try {
        const response = await userService.signUp(req.body.email, req.body.password, req.body.username);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully created a user'
        });
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

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body.password, req.body.username);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully logged in'
        });
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
    createUser,
    destroyUser,
    getUser,
    getAllUser,
    updateUser,
    signIn,
    signUp
}