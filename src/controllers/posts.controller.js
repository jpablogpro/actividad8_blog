const getAllPosts = (req, res, next) => {
    res.send('Me devuelve todos los posts');
}


const createPost = (req, res, next) => {
    res.send('Me crea un post');
}


module.exports = {
    getAllPosts, createPost
}