// require mysql
const mysql = require("mysql");

// dotenv
require("dotenv").config();

// create connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// export connection
module.exports = db;

