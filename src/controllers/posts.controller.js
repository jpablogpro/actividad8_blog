const { selectAll, insertPost, selectById } = require("../models/posts.model");

const getAllPosts = async (req, res, next) => {
    try {
        const [result] = await selectAll()
        res.json(result);
    } catch (error) {
        next(error);
    }
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
    getAllPosts, createPost
}