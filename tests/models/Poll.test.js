require('dotenv').config();
const mongoose = require('mongoose');
const Poll = require('../../lib/models/Poll');

describe('Poll model', () => {
  it('validates a good poll model', () => {
    const poll = new Poll({ 
      question: 'What is your favorite cereal?', 
      options: ['fruity pebbles', 'coco puffs', 'raisin bran'], 
      email: 'email@email.com' 
    });
    
    expect(poll.toJSON()).toEqual({ 
      question: 'What is your favorite cereal?', 
      options: ['fruity pebbles', 'coco puffs', 'raisin bran'], 
      email: 'email@email.com',
      _id: expect.any(mongoose.Types.ObjectId), 
    });
  });
});
