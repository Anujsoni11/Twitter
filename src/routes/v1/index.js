const express = require('express');
const { create, destroy, get, getAll, update } = require('../../controllers/tweet-controller');
const { createComment, destroyComment, getComment, getAllComment, updateComment, replyComment} = require('../../controllers/comment-controller');
const { toggleTweetLike, toggleCommentLike } = require('../../controllers/like-controller');
const authMiddleware = require('../../middleware/auth-middleware');

const router = express.Router();

router.post('/tweets', authMiddleware, create);
router.delete('/tweets/:id', destroy);
router.get('/tweets/:id', get);
router.get('/tweets', getAll);
router.put('/tweets/:id', update);

router.post('/tweets/:tweetId', toggleTweetLike);
router.post('/tweets/:tweetId/comments/:commentId/likes', toggleCommentLike);

router.post('/tweets/:tweetId/comments', createComment);
router.delete('/tweets/:tweetId/comments/:commentId', destroyComment);
router.get('/tweets/:tweetId/comments/:commentId', getComment);
router.get('/tweets/:tweetId/comments', getAllComment);
router.put('/tweets/:tweetId/comments/:commentId', updateComment);


router.post('/tweets/:tweetId/comments/:commentId', replyComment);

module.exports = router;