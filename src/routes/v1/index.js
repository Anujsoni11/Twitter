const express = require('express');
const { create, destroy, get, getAll, update } = require('../../controllers/tweet-controller');

const router = express.Router();

router.post('/tweets', authMiddleware, create);
router.delete('/tweets/:id', destroy);
router.get('/tweets/:id', get);
router.get('/tweets', getAll);
router.put('/tweets/:id', update);


module.exports = router;