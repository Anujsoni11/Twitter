const TweetRepository = require('../repository/tweet-repository.js');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async create(data, userId) {
        try {
            const content = data.content;
            const tags = (content.match(/#[a-zA-Z0-9_]+/g) || []);
            const tag = tags.map((tags) => tags.substring(1).toLowerCase());
            data.hashtags = tag;
            const tweet = await this.tweetRepository.create({
                content: content,
                user: userId
            });
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async destroy(tweetId) {
        try {
            await this.tweetRepository.destroy(tweetId);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(tweetId, content) {
        try {
            const tweet = await this.tweetRepository.update(tweetId, content);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(tweetId) {
        try {
            const tweet = await this.tweetRepository.get(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll() {
        try {
            const tweet = await this.tweetRepository.getAll();
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = TweetService;