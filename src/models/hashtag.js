const mongoose = require('mongoose');

const hashtags = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    tweets: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tweet'
    }
}, { timestamps: true });

const hashtag = mongoose.model('hashtag', hashtags);
module.exports = hashtag;