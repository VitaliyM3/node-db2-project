const express = require('express');

const carsRouter = require('./carsRouter.js');

const server = express();

server.use(express.json());
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Testing to make sure it works!</h2>`);
  });

module.exports = server;