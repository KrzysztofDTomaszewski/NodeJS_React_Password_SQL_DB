const express = require('express')
const app = express()
const PORT = 3001


app.get('/', (req, res) => {
    res.send('Hello World');
});

//pass app to listen port ~3000
app.listen(PORT, () => {
    console.log('Server is running...')
});