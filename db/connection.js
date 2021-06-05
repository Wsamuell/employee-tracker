const mysql = require('mysql2');


// connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Greatness23',
        database: 'employee_tracker'
    },
    console.log('Connection successful!!')
);

module.exports = db;