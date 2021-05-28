const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3001; // Server will listen on port 3001

// Here, I import the functions 'encrypt' and 'decrypt' form EncryptionHandler.js
const { encrypt, decrypt } = require('./EncryptionHandler');

//  Cors to secure the information in transit from front-end to the back-end
app.use(cors());
app.use(express.json());

/*
    Function, 'db', is used for MySQL queries.
    Here, I utilise the mysql node.js dependency,
    to create a connection to the specificed MySQL
    DB. The password 'reactPass123' is the password,
    used to protect my database. Because I stored it
    in the keychain, I don't need to re-enter it when
    I open MySQL Workbench.
*/
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'reactPass123', // OR password: ''
    database: 'PasswordManager',
});

/*
    Post request is defined to a route of /addpassword. We want to encapsulate the request and result,
    into password and title. The password container, when populated will be encrypted using 'EncryptionHandler's' 'encrypt' function.
    Which in turn, will create a unique ID buffer which is randomized and consists of around 16 bytes. Additionally, the encrypt function,
    is to cipher the encapsulated input with AES-256 using the secret pre-defined key AND iv (unique randomised 16 byte container).
*/
app.post('/addpassword', (req, res) => {
    const {password, title} = req.body;
    const hashedPassword = encrypt(password);

    // DB query is created, this tells the back-end to run the following MySQL query into 'passwords' table. 
    // Because my database has 3 columns: password, title and iv, we will set the values encapsulated from the user through the req and res.

    db.query('INSERT INTO passwords (password, title, iv) VALUES (?,?,?)', 
    [hashedPassword.password, title, hashedPassword.iv], 
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('Success');
        }
     }
    );
});

/*
    
    Get request route /showpasswords, will take the result stored in the req && res body; print it to the console
    in default Browser || switch the actual text to the password stored upon clicking on it.

    Then we send a SELECT all from passwords query to print stored data, this data will be handled by a result or error
    container. If there is an error, then print what went wrong. Else, print the result.
*/
app.get('/showpasswords', (req, res) => {
    db.query('SELECT * FROM passwords;', (err, result) => {
       if (err) {
           console.log(err);
       } else {
           res.send(result);
       }
    });
});


/*
    Post request to /decryptpassword, is pretty much self explanitory. It takes the values of request and result,
    sends the result to the decrypt function in 'EncryptionHandler.js', which in turn, will run a decipher function,
    to derive the data stored from buffer of my variable 'secret' as well as the encryption unique IV in hex format.
*/
app.post('/decryptpassword', (req, res) => {
    res.send(decrypt(req.body)) //simple end-point, recieves the request from decrypt body
});

//  App to listen port ~3000 and Print in iTerm2 terminal : 'Server is running...' to let the user know server is running.
app.listen(PORT, () => {
    console.log('Server is running...')
});