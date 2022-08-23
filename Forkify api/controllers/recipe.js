const Recipe = require("../models/recipe");

exports.getRecipes = (req, res, next) => {
  const searchQuery = req.query.search;
  const key = req.query.key;
  const allRecipes = [];

  Recipe.fetchYourRecipes(searchQuery, key)
    .then(({ rows: recipes }) => {
      // console.log("MY Rec", recipes);
      if (!recipes) {
        const error = new Error("Could not find recipes.");
        error.statusCode = 404;
        throw error;
      }

      allRecipes.push(...recipes);
      return Recipe.fetchRestRecipes(searchQuery);
    })
    .then(({ rows: recipes }) => {
      // console.log("Rec", recipes);
      if (!recipes) {
        const error = new Error("Could not find recipes.");
        error.statusCode = 404;
        throw error;
      }

      allRecipes.push(...recipes);
      console.log("ALL", allRecipes);

      res.status(200).json({
        status: "success",
        results: allRecipes.length,
        data: {
          recipes: allRecipes,
        },
      });
    })
    .catch((err) => console.log(err));
};

exports.getRecipe = (req, res, next) => {
  const recipeId = +req.params.recipeId;
  let wholeRecipe;
  Recipe.findRecipe(recipeId)
    .then(({ rows: [recipe] }) => {
      if (!recipe) {
        const error = new Error("Could not find recipe.");
        error.statusCode = 404;
        throw error;
      }

      wholeRecipe = recipe;
      return Recipe.findRecipeIngredients(recipeId);
    })
    .then(({ rows: ingred }) => {
      if (!ingred) {
        const error = new Error("Could not find Ingredients.");
        error.statusCode = 404;
        throw error;
      }

      wholeRecipe.ingredients = ingred;
      // console.log("WHOLE", wholeRecipe);
      res.status(200).json({
        status: "success",
        data: {
          recipe: wholeRecipe,
        },
      });
    })
    .catch((err) => console.log(err));
};

exports.createRecipe = (req, res, next) => {
  // console.log(req.body);
  const recipe = new Recipe(
    req.body.title,
    req.body.publisher,
    req.body.source_url,
    req.body.image_url,
    req.body.servings,
    req.body.cooking_time,
    req.body.ingredients,
    req.query.key
  );
  // console.log("RECIPE", recipe);

  let wholeRecipe;
  recipe
    .saveRecipe()
    .then(({ rows: [rec] }) => {
      wholeRecipe = rec;
      return recipe.saveIngredients(wholeRecipe.id);
    })
    .then((ingred) => {
      wholeRecipe.ingredients = ingred;
      res.status(200).json({
        status: "success",
        data: {
          recipe: wholeRecipe,
        },
      });
    })
    .catch((err) => console.log(err));
};
