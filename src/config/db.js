const mysql = require('mysql2');

require('dotenv').config();

const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.MYSQL_PASSWORD,
        port: 3306,
        database: 'bbdd_blog'
    }
);

module.exports = pool.promise();
