const Recipe = require("../models/recipe");

exports.getRecipes = (req, res, next) => {
  Recipe.fetchAll()
    .then(({ rows: recipes }) => {
      // console.log(recipes);
      res.status(200).json({
        status: "success",
        results: recipes.length,
        data: {
          recipes: recipes,
        },
      });
    })
    .catch((err) => console.log(err));
};

exports.getRecipe = (req, res, next) => {
  const recipeId = +req.params.recipeId;
  Recipe.findById(recipeId)
    .then(({ rows: [recipe] }) => {
      console.log(recipe);
      res.status(200).json({
        status: "success",
        data: {
          recipe: recipe,
          // ingredients: [
          //   {
          //     quantity: recipe.quantity,
          //     unit: recipe.unit,
          //     description: recipe.description,
          //   },
          // ],
        },
      });
    })
    .catch((err) => console.log());
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
    req.body.ingredients
  );
  recipe
    .save()
    .then(({ rows: [recipe] }) => {
      res.status(200).json({
        status: "success",
        data: {
          recipe: recipe,
        },
      });
    })
    .catch((err) => console.log());
};

// if (!rows) {
//   const error = new Error("Could not find recipe.");
//   error.statusCode = 404;
//   throw error;
// }

// status: "success",
// results: 1,
// data: {
//   recipes: [
//     {
//       publisher: "Closet Cooking",
//       image_url:
//         "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
//       title: "Cauliflower Pizza Crust",
//       id: 1,
//     },
//   ],
// },
