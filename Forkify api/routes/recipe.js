const express = require("express");

const recipeController = require("../controllers/recipe");

const router = express.Router();

// GET /forkify-api/recipes
router.get("/recipes", recipeController.getRecipes);

// GET /forkify-api/recipes/id
router.get("/recipes/:recipeId", recipeController.getRecipe);

// POST /forkify-api/recipes
router.post("/recipes", recipeController.createRecipe);

module.exports = router;
