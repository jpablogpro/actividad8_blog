const { getAllAuthors, createAuthor, updateAuthor, deleteAuthor } = require('../../controllers/authors.controller');

const router = require('express').Router();

router.get('/', getAllAuthors)
router.post('/', createAuthor)
router.put('/:authorId', updateAuthor)
router.delete('/:authorId', deleteAuthor)

module.exports = router;