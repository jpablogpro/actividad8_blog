const { getAllPosts, createPost, updatePost, deletePost } = require('../../controllers/posts.controller');

const router = require('express').Router();

router.get('/', getAllPosts)
router.post('/', createPost)
router.put('/:postId', updatePost)
router.delete('/:postId', deletePost)

module.exports = router;