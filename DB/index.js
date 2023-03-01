const mysql = require('mysql');


<<<<<<< HEAD
const db = mysql.createPool({
=======
const db = mysql.createConnection({
>>>>>>> abf44b5d2c576c9cdc3f0370cff3406e0e82eeac
    host: 'chbwapp001',
    user: 'root',
    password: 'Maxim123;',
    database:'it_inventory',
    port: '3306'
});

<<<<<<< HEAD

=======
db.connect((err) => {
    if (err){
        console.log('Error connect to DB is',err)
    }
    console.log('Mysql successfully connected');
})
>>>>>>> abf44b5d2c576c9cdc3f0370cff3406e0e82eeac

module.exports = db;