const LikeRepository = require('../repository/like-repository');
const TweetRepository = require('../repository/tweet-repository.js');

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleTweetLike(tweetId) {
        if (await this.likeRepository.tweetLikeExist(tweetId)) {
            const tweet = await this.tweetRepository.get(tweetId);
            await this.likeRepository.destroy(tweet.like);
            await this.tweetRepository.removeLike(tweetId);
            return true;
        }
        else {
            const like = await this.likeRepository.create({
                onModel: 'tweet',
                likeable: tweetId
            });
            await this.tweetRepository.addLike(tweetId, like._id);
        }
    }
}

module.exports = LikeService;