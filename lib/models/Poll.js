const mongoose = require('mongoose');

const PollSchema =  new mongoose.Schema ({
  question: {
    type: String,
    required: true,
    maxLength: 50
  },
  options: {
    type: [String],
    required: true
  },
  email: {
    type: String,
    required:true
  }
});
module.exports = mongoose.model('Poll', PollSchema);
