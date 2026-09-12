const comment = require('../models/comments');
const CrudRepository = require('./crud-repository');

class CommentRepository extends CrudRepository {
    constructor() {
        super(comment);
    }
}

module.exports = CommentRepository;