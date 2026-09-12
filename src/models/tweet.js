const mongoose = require('mongoose');

const tweets = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    like: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'like'
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
}, { timestamps: true });

const tweet = mongoose.model('tweet', tweets);
module.exports = tweet;