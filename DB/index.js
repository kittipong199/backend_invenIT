const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'chbwapp001',
    user: 'root',
    password: 'Maxim123;',
    database:'it_inventory',
    port: '3306'
});

db.connect((err) => {
    if (err){
        console.log('Error connect to DB is',err)
    }
    console.log('Mysql successfully connected');
})

module.exports = db;