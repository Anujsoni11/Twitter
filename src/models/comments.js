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
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel'
    }
}, { timestamps: true });

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;
