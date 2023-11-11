const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // console.log('Client is calling our server right now!');
    res.send('<h1><center>Hello Express!</center></h1>');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});