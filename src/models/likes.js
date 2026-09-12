const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    onModel: {
        type: String,
        enum: ['tweet', 'comment']
    },
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel'
    }
}, {timestamps: true});

const like = mongoose.model('like', likeSchema);
module.exports = like;
