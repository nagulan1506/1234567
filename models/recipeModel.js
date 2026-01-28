const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a recipe title'],
    trim: true,
  },
  ingredients: {
    type: [String],
    required: [true, 'Please add ingredients'],
  },
  instructions: {
    type: String,
    required: [true, 'Please add instructions'],
  },
  cookingTime: {
    type: Number, // in minutes
    required: [true, 'Please add cooking time in minutes'],
  },
  servings: {
    type: Number,
    required: [true, 'Please add number of servings'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);
