const Recipe = require('../models/recipeModel');

// @desc    Create a new recipe
// @route   POST /api/recipes
// @access  Public
const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json({
      success: true,
      data: recipe,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc    Retrieve all recipes
// @route   GET /api/recipes
// @access  Public
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc    Retrieve a single recipe by ID
// @route   GET /api/recipes/:id
// @access  Public
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: 'Recipe not found',
      });
    }

    res.status(200).json({
      success: true,
      data: recipe,
    });
  } catch (error) {
    // Check if error is due to invalid ObjectId
    if (error.kind === 'ObjectId') {
        return res.status(404).json({
            success: false,
            error: 'Recipe not found',
        });
    }
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc    Update a recipe by ID
// @route   PUT /api/recipes/:id
// @access  Public
const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: 'Recipe not found',
      });
    }

    res.status(200).json({
      success: true,
      data: recipe,
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
        return res.status(404).json({
            success: false,
            error: 'Recipe not found',
        });
    }
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc    Delete a recipe by ID
// @route   DELETE /api/recipes/:id
// @access  Public
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: 'Recipe not found',
      });
    }

    res.status(200).json({
      success: true,
      data: {},
      message: 'Recipe deleted successfully'
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
        return res.status(404).json({
            success: false,
            error: 'Recipe not found',
        });
    }
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
