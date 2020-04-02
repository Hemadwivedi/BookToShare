const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'book_db',
    password: 'password'
});

module.exports = pool.promise();