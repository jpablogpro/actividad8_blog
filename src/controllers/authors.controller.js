const { selectAll, insertAuthor, selectById } = require("../models/authors.model");

const getAllAuthors = async (req, res, next) => {
    try {
        const [result] = await selectAll()
        res.json(result);
    } catch (error) {
        next(error);
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


const updateAuthor = (req, res, next) => {
    res.send('Me actualiza un autor');
}


const deleteAuthor = (req, res, next) => {
    res.send('Me elimina un autor');
}


module.exports = {
    getAllAuthors, createAuthor, updateAuthor, deleteAuthor
}