
const Poll = require('../lib/models/Poll');

module.exports = function(count = 10) {
  const polls = [...Array(count)].map((_, i) => ({
    author: 'test.user',
    question: `My question${i}`,
    options: ['option1', 'options2']
  }));

  return Poll.create(polls);
};
