const { getAllPosts, createPost } = require('../../controllers/posts.controller');

const router = require('express').Router();

router.get('/', getAllPosts);
router.post('/', createPost);

module.exports = router;