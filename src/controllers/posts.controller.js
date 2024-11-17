const { selectAll, insertPost, selectById: selectPostById, selectByAuthorId } = require("../models/posts.model");
const { selectById: selectAuthorById } = require("../models/authors.model");

const getAllPosts = async (req, res, next) => {
    try {
        const [result] = await selectAll()
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const getByAuthor = async (req, res, next) => {
    const { authorId } = req.params;
 
    try {
        const author = await selectAuthorById(authorId)
        if (!author) {
            return res.status(401).json({
                message: 'El autor no existe en la base de datos'
            })
        }
        const post = await selectByAuthorId(authorId)

        if (post.length === 0) {
            return res.json({
                message: 'El autor no tiene posts publicados'
            })
       }
       res.json(post)
   } catch (error) {
       next(error)
    }
}

const createPost = async (req, res, next) => {
    try {
        const [result] = await insertPost(req.body)
        const post = await selectPostById(result.insertId)
        res.json(post);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllPosts, getByAuthor, createPost
}