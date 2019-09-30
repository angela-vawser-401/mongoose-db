require('dotenv').config();
require('./lib/connect')();

const express = require('express');
const app = express();
const Dog = require('./lib/model/dog');

app.use(express.json());

app.get('/api/dogs', (req, res, next) => {
  Dog.find()
    .then(dogs => {
      res.json(dogs);
    })
    .catch(next);
});

app.get('/api/dogs/:id', (req, res, next) => {
  Dog.findById(req.params.id)
    .then(dogs => {
      res.json(dogs);
    })
    .catch(next);
});

app.post('/api/dogs', (req, res, next) => {
  Dog.create(req.body)
    .then(dogs => {
      res.json(dogs);
    })
    .catch(next);
});

app.put('/api/dogs/:id', (req, res, next) => {
  Dog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
    .then(dogs => {
      res.json(dogs);
    })
    .catch(next);
});

app.delete('/api/dogs/:id', (req, res, next) => {
  Dog.findByIdAndRemove(req.params.id)
    .then(removed => {
      res.json(removed);
    })
    .catch(next);
});

app.listen(3000, () => console.log('server running on 3000'));