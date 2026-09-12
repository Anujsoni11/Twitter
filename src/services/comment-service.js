const CommentRepository = require('../repository/comment-repository');
const TweetRepository = require('../repository/tweet-repository.js');

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(data, tweetId) {
        try {
            const comment = await this.commentRepository.create({
                content: data.content,
                onModel: 'tweet',
                commentable: tweetId
            });
            await this.tweetRepository.addComment(tweetId, comment._id);
            return comment;
        } catch (error) {
            throw error;
        }
    }

    async destroy(tweetId, commentId) {
        try {
            await this.commentRepository.destroy(commentId);
            await this.tweetRepository.removeComment(tweetId, commentId);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(commentId, content) {
        try {
            const tweet = await this.commentRepository.update(commentId, content);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(commentId) {
        try {
            const tweet = await this.commentRepository.get(commentId);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll() {
        try {
            const tweet = await this.commentRepository.getAll();
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CommentService;