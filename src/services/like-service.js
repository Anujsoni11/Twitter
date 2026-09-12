const LikeRepository = require('../repository/like-repository');
const TweetRepository = require('../repository/tweet-repository.js');
const CommentRepository = require('../repository/comment-repository.js');

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
        this.commentRepository = new CommentRepository();
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

    async toggleCommentLike(commentId) {
        if (await this.likeRepository.commentLikeExist(commentId)) {
            const comment = await this.commentRepository.get(commentId);
            await this.likeRepository.destroy(comment.like);
            await this.commentRepository.removeLike(commentId);
            return true;
        }
        else {
            const like = await this.likeRepository.create({
                onModel: 'comment',
                likeable: commentId
            });
            await this.commentRepository.addLike(commentId, like._id);
        }
    }
}

module.exports = LikeService;