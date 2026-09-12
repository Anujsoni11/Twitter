const user = require('../models/user');
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository {
    constructor() {
        super(user);
    }

    async signUp(email, encryptedpassword, username) {
        try {
            const User = await user.create({
                email: email,
                password: encryptedpassword,
                username: username
            });
            return User;
        } catch (error) {
            throw error;
        }
    }

    async getByUsername(username) {
        try {
            const User = await user.findOne({ username: username });
            return User;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;