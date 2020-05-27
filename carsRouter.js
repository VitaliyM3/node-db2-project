const express = require('express');
const knex = require('knex');
// const db = require('./knexfile')

const db = knex({
    client: 'sqlite3',
    connection: {
      filename: './cars.db3'
    },
    useNullAsDefault: true
});

// const db = require('./knexfile');

const router = express.Router();

  router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
      res.json(cars); 
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    db('cars').where({ id }).first()
    .then(car => {
      res.json(car);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve car' });
    });
  });


router.post('/', (req, res) => {
    db('cars')
    .insert(req.body, "id")
    .then(ids => {
        res.status(201).json({ results: ids })
    })
    .catch(error => {
        res.status(500).json({ message: "sorry, ran into an error" });
    });
});

  module.exports = router;