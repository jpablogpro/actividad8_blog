const { selectAll, insertAuthor, selectById } = require("../models/authors.model");

const getAllAuthors = async (req, res, next) => {
    try {
        const [result] = await selectAll()
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const getById = async (req, res, next) => {
 const { authorId } = req.params;
 
 try {
    const author = await selectById(authorId)
    if (!author) {
        return res.status(404).json({
            message: 'El autor no existe en la base de datos'
        })
    }
    res.json(author)
} catch (error) {
    next(error)
 }
}

const createAuthor = async (req, res, next) => {
    try {
        const [result] = await insertAuthor(req.body)
        const author = await selectById(result.insertId)
        res.json(author);
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllAuthors, createAuthor, getById
}