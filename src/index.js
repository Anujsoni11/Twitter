const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/database.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 3000;

app.listen(PORT, async () => {
    console.log('Server started');
    await connect();
    console.log('Mongodb connected');
});