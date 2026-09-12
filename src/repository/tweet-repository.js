const tweet = require('../models/tweet');
const CrudRepository = require('./crud-repository');

class TweetRepository extends CrudRepository{
    constructor() {
        super(tweet);
    }

    async addLike(tweetId, likeId) {
        await this.update(tweetId, {like: likeId});
    }

    async removeLike(tweetId) {
        await this.update(tweetId, {like: null});
    }

    async addComment(tweetId, commentId){
        await this.update(tweetId, {
            $push: {
                comments: commentId
            }
        });
    }

    async removeComment(tweetId, commentId) {
        await this.update(tweetId, {
            $pull: {
                comments: commentId
            }
        });
    }
}

module.exports = TweetRepository;