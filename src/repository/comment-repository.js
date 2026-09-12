const comment = require('../models/comments');
const CrudRepository = require('./crud-repository');

class CommentRepository extends CrudRepository {
    constructor() {
        super(comment);
    }

    async addLike(commentId, likeId) {
        await this.update(commentId, {like: likeId});
    }

    async removeLike(commentId) {
        await this.update(commentId, {like: null});
    }

    async addReply(commentId, replyId){
        await this.update(commentId, {
            $push: {
                replies: replyId
            }
        });
    }

    async removeReply(commentId, replyId) {
        await this.update(commentId, {
            $pull: {
                replies: replyId
            }
        });
    }
}

module.exports = CommentRepository;