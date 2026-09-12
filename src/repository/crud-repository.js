const mongoose = require('mongoose');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    
    async create(content) {
        try {
            const data = await this.model.create(content);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async destroy(id) {
        try {
            await this.model.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id, content) {
        try {
            const data = await this.model.findOneAndUpdate({
                _id: id
            }, content,
                { returnDocument: 'after' });
                // console.log(data);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id) {
        try {
            const data = await this.model.findById(id);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll() {
        try {
            const data = await this.model.find();
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CrudRepository;