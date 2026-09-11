const mongoose = require('mongoose');

const tweets = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

const tweet = mongoose.model('tweet', tweets);
module.exports = tweet;