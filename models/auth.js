const mongoose = require('mongoose');
Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken: String,
  resetTokenExpiration: Date,
  cart: {
    furniture: {
      type: Schema.Types.ObjectId,
      ref: 'Furniture',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
