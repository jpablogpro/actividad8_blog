const getAllPosts = (req, res, next) => {
    res.send('Me devuelve todos los posts');
}


const createPost = (req, res, next) => {
    res.send('Me crea un post');
}


const updatePost = (req, res, next) => {
    res.send('Me actualiza un post');
}


const deletePost = (req, res, next) => {
    res.send('Me elimina un post');
}


module.exports = {
    getAllPosts, createPost, updatePost, deletePost
}