const { selectAll, insertPost, selectById } = require("../models/posts.model");

const getAllPosts = async (req, res, next) => {
    try {
        const [result] = await selectAll()
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const getByAuthor = (req, res, next) => {
    res.json({message: 'Recupero posts por autor'})
}


const createPost = async (req, res, next) => {
    try {
        const [result] = await insertPost(req.body)
        const post = await selectById(result.insertId)
        res.json(post);
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllPosts, getByAuthor, createPost
}