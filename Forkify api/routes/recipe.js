const express = require("express");

const recipeController = require("../controllers/recipe");

const router = express.Router();

// GET /forkify-api/recipes
router.get("/recipes", recipeController.getRecipes); // 2

// GET /forkify-api/recipes/id
router.get("/recipes/:recipeId", recipeController.getRecipe); // 1

// POST /forkify-api/recipes
router.post("/recipes", recipeController.createRecipe); // 3

module.exports = router;
