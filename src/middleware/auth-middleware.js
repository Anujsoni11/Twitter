const { StatusCodes } = require('http-status-codes');
const { SECRET_KEY } = require('../config/serverConfig');
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if(authHeader == null) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data: {},
                err: 'Something went wrong',
                success: false,
                message: 'User authentication failed'
            });
        }
        const token = authHeader.split(" ");
        if (token[0] != 'Bearer' || !token[1]) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data: {},
                err: 'Something went wrong',
                success: false,
                message: 'User authentication failed'
            });
        } else {
            const response = jwt.verify(token[1], SECRET_KEY);
            req.user = response.userId;
            console.log(req.user);
        }
        next();
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

module.exports = authMiddleware;