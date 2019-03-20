require('dotenv').config();
const mongoose = require('mongoose');
const Vote = require('../../lib/models/Vote');
const Poll = require('../../lib/models/Poll');

describe('Vote model', () => {
  it('validates a good vote model', () => {
    const poll = new Poll({
      question: 'What is your favorite cereal?', 
      options: ['fruity pebbles', 'coco puffs', 'raisin bran'], 
      email: 'email@email.com' 
    });

    const vote = new Vote({ 
      poll: poll._id,
      optionChose: 2,
      email: '123456@email.com'
    });
    
    expect(vote.toJSON()).toEqual({ 
      poll: poll._id,
      optionChose: 2,
      email: '123456@email.com',
      _id: expect.any(mongoose.Types.ObjectId), 
    });
  });
});
