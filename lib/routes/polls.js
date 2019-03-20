const { Router } = require('express');
const Poll = require('../models/Poll');
// const ensureAuth  = require('../middleware/ensureAuth');
// const { populateUsers } = require('../services/auth');

module.exports = Router() 
  .post('/', (req, res, next) => {
    const { question, options, author } = req.body;
    Poll
      .create({
        question, options, author
      })
      .then(poll => res.send(poll))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Poll
      .find()
      .lean()
      .then(polls => res.send(polls))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    Poll
      .findById(id)
      .lean()
      .then(poll => res.send(poll))
      .catch(next);
  });
