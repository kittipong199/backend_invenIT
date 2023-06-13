const mysql = require('mysql');


const db = mysql.createPool({

const db = mysql.createConnection({

    host: 'yourHost',
    user: 'root',
    password: 'password DB',
    database:'DB name',
    port: '3306'
});


db.connect((err) => {
    if (err){
        console.log('Error connect to DB is',err)
    }
    console.log('Mysql successfully connected');
})

module.exports = db;
