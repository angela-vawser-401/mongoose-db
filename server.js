require('dotenv').config();
require('./lib/connect')();
const express = require('express');
const app = express();
const Food = require('./lib/model/food');

app.use(express.json());

app.get('/api/food', (req, res, next) => {
  Food.find()
    .then(food => {
      res.json(food);
    })
    .catch(next);
});

app.get('/api/food/:id', (req, res, next) => {
  Food.findById(req.params.id)
    .then(food => {
      res.json(food);
    })
    .catch(next);
});

app.post('/api/food', (req, res, next) => {
  Food.create(req.body)
    .then(food => {
      res.json(food);
    })
    .catch(next);
});

app.put('/api/food/:id', (req, res, next) => {
  Food.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
    .then(food => {
      res.json(food);
    })
    .catch(next);
});

app.delete('/api/food/:id', (req, res, next) => {
  Food.findByIdAndRemove(req.params.id)
    .then(removed => {
      res.json(removed);
    })
    .catch(next);
});

app.listen(3000, () => console.log('server running on 3000'));