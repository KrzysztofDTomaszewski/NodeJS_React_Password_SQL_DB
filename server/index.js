const express = require('express')
const app = express()
const mysql = require('mysql')
const PORT = 3001

// db used for queries for MySQL
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password', // OR password: ''
    database: 'PasswordManager',
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

//pass app to listen port ~3000
app.listen(PORT, () => {
    console.log('Server is running...')
});