const { getAllAuthors, createAuthor, getById } = require('../../controllers/authors.controller');

const router = require('express').Router();

router.get('/', getAllAuthors);
router.get('/:authorId', getById)
router.post('/', createAuthor);

module.exports = router;