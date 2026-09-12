const like = require('../models/likes');
const CrudRepository = require('./crud-repository');
const TweetRepository = require('./tweet-repository');

const tweetRepository = new TweetRepository();

class LikeRepository extends CrudRepository {
    constructor() {
        super(like);
    }

    async tweetLikeExist(tweetId) {
        const tweet = await tweetRepository.get(tweetId);
        if (tweet.like) return true;
        else return false;
    }
}

module.exports = LikeRepository;