const getAllAuthors = (req, res, next) => {
    res.send('Me devuelve todos los autores');
}


const createAuthor = (req, res, next) => {
    res.send('Me crea un autor');
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