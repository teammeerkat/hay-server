const express = require('express');
const app = express();
const cors = require('cors');
// const connection = require('./middleware/connection');
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');

app.use(require('morgan')('dev', {
  skip() {
    return process.env.NODE_ENV === 'test';
  }
}));

app.use(cors());
app.use(express.json());

// (ROUTES HERE)
// ******

app.use(notFound);
app.use(handler);

module.exports = app;
