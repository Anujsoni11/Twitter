const like = require('../models/likes');
const CrudRepository = require('./crud-repository');
const TweetRepository = require('./tweet-repository');
const CommentRepository = require('./comment-repository');

const tweetRepository = new TweetRepository();
const commentRepository = new CommentRepository();

class LikeRepository extends CrudRepository {
    constructor() {
        super(like);
    }

    async tweetLikeExist(tweetId) {
        const tweet = await tweetRepository.get(tweetId);
        if (tweet.like) return true;
        else return false;
    }

    async commentLikeExist(commentId) {
            const comment = await commentRepository.get(commentId);
            if (comment.like) return true;
            else return false;
        }
}

module.exports = LikeRepository;