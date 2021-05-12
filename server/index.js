const express = require("express");
const app = express();
const mysql = require('mysql')
const PORT = 3001;

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '#10LO12ml16',
    database: 'PasswordManager'
})


//application sends '/', request and result to the app (in this)
app.post("/addpassword", (req, res) => {
    const {password, title} = req.body

    db.query("INSERT INTO passwords (password, title) VALUES (?,?)", 
    [password, title,],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Success");
            }
        }
    );
});


//app.listener on port 3001 == Localhost : 3001, 
app.listen(PORT, () => {
    console.log("Server is running"); //Instance is printed into the console
});



