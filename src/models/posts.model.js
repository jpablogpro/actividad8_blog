const pool = require("../config/db")

function selectAll() {
    return pool.query("SELECT * FROM posts p JOIN authors a ON p.author_id = a.id")
}

async function selectById(postId) {
    const [post] = await pool.query("select * from posts where id = ?", [postId])

    if (post.length === 0) {
        return null
    }

    return post[0]
}

async function selectByAuthorId(authorId) {
    const [post] = await pool.query("select * from posts where author_id = ?", [authorId])

    if (post.length === 0) {
        return null
    }

    return post
}

function insertPost({ titulo, descripcion, fecha_creacion, categoria, author_id }) {
    return pool.query(
        'insert into posts (titulo, descripcion, fecha_creacion, categoria, author_id) values (?, ?, ?, ?, ?)',
        [titulo, descripcion, fecha_creacion, categoria, author_id]
    )
}

module.exports = {
    selectAll, selectById, selectByAuthorId, insertPost
}
