const express = require('express');
const app = express();
const SERVER_PORT = 5555

app.listen( SERVER_PORT, () => console.log(`bingpot on ${SERVER_PORT}`))

const ctrl = require('./Controller')

//Endpoint
app.get(`/api/books/:title`, ctrl.getBookByTitle)
app.get(`/api/books`, ctrl.getBooks);
