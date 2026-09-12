const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserRepository = require('../repository/user-repository');
const user = require('../models/user');
const { SALT, SECRET_KEY } = require('../config/serverConfig');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(email, password, username) {
        try {
            const user = await this.userRepository.signUp(email, password, username);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async destroy(userId) {
        try {
            await this.userRepository.destroy(userId);
        } catch (error) {
            throw error;
        }
    }

    async update(userId, content) {
        try {
            const user = await this.userRepository.update(userId, content);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async get(userId) {
        try {
            const user = await this.userRepository.get(userId);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const users = await this.userRepository.getAll();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async signUp(email, password, username) {
        try {;
            const hashedpassword = await bcrypt.hash(password, SALT);
            const user = await this.userRepository.signUp(email, hashedpassword, username);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signIn(password, username) {
        try {
            const User = await this.userRepository.getByUsername(username);
            const match = await bcrypt.compare(password, User.password);
            if (match) {
                const token = jwt.sign({ userId: User._id}, SECRET_KEY, { expiresIn: '2h'});
                return token;
            } else {
                console.log('Incorrect password or username');
                throw error;
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;