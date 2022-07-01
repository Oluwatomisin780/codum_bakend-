const mongoose = require('mongoose');
Schema = mongoose.Schema;
const furnitureSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  ],
});

module.exports = mongoose.model('furnitures', furnitureSchema);
