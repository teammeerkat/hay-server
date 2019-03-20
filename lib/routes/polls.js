const { Router } = require('express');
const Poll = require('../models/Poll');
const ensureAuth  = require('../middleware/ensureAuth');

module.exports = Router() 
  .post('/', ensureAuth(), (req, res, next) => {
    const { question, options } = req.body;
    Poll
      .create({
        question, options, email: req.user.email
      })
      .then(poll => res.send(poll))
      .catch(next);
  })
  .get('/', ensureAuth(), (req, res, next) => {
    Poll
      .find()
      .lean()
      .then(polls => res.send(polls))
      .catch(next);
  })
  .get('/:id', ensureAuth(), (req, res, next) => {
    const { id } = req.params;
    Poll
      .findById(id)
      .lean()
      .then(poll => res.send(poll))
      .catch(next);
  });

