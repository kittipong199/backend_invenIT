const mysql = require('mysql');


const db = mysql.createPool({
    host: 'chbwapp001',
    user: 'root',
    password: 'Maxim123;',
    database:'it_inventory',
    port: '3306'
});



module.exports = db;