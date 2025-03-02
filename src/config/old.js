
require('dotenv').config();// phải import cái này vì nếu ko imporrt vào thì nó ko lấy đc dữ liệu của env (t nghĩ thếnst mysql = require('mysql2');
const mysql = require('mysql2');

//test connection
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, // default : 3306
    password: process.env.DB_PASSWORD,// default: no password(empty)
    waitForConnections: true,
    connectionLimit: 10,// tối đa có 10 thằng kết nối tới
    queueLimit:0
});

module.exports = connection;