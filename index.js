const express = require('express');
const app = express();
const { port } = require('./config.json');


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Website is live on port ${port}!`));