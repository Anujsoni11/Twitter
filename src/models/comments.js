const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    onModel: {
        type: String,
        enum: ['tweet', 'comment']
    },
    like: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'like'
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel'
    },
    replies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        }
    ]
}, { timestamps: true });

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;
