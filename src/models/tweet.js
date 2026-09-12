const mongoose = require('mongoose');

const tweets = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max:[250,'Tweet cannot be more than 250 characters']
    }
}, { timestamps: true });

const tweet = mongoose.model('tweet', tweets);
module.exports = tweet;