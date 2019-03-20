
const Poll = require('../lib/models/Poll');
const chance = require('chance').Chance();

module.exports = function(count = 10) {
  const polls = [...Array(count)].map((_, i) => ({
    email: chance.email(),
    question: `My question${i}`,
    options: [chance.string(), chance.string(), chance.string()]
  }));

  return Poll.create(polls);
};
