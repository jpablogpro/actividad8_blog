const { getAllPosts, createPost, getByAuthor } = require('../../controllers/posts.controller');

const router = require('express').Router();

router.get('/', getAllPosts);
router.get('/:authorId', getByAuthor)
router.post('/', createPost);

module.exports = router;