// import mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'R$c0y?(9f!%0)fnKSJr1',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//exports module by adding code at the bottom of the file
module.exports = db;
