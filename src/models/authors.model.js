const pool = require("../config/db")

function selectAll() {
    return pool.query("select * from authors;")
}

async function selectById(authorId) {
    const [author] = await pool.query("select * from authors where id = ?", [authorId])

    if (author.length === 0) {
        return null
    }

    return author[0]
}

function insertAuthor({ nombre, email, imagen}) {
    return pool.query(
        'insert into authors (nombre, email, imagen) values (?, ?, ?)',
        [nombre, email, imagen]
    )
}

module.exports = {
    selectAll, selectById, insertAuthor
}