const db = require("../util/database");

module.exports = class Recipe {
  constructor(
    title,
    publisher,
    source_url,
    image_url,
    servings,
    cooking_time,
    ingredients,
    key
  ) {
    this.title = title;
    this.publisher = publisher;
    this.source_url = source_url;
    this.image_url = image_url;
    this.servings = servings;
    this.cooking_time = cooking_time;
    this.ingredients = ingredients;
    this.key = key;
  }

  saveRecipe() {
    return db.query(
      "INSERT INTO recipes (title, publisher, source_url, image_url, servings, cooking_time, key) VALUES ($1, $2, $3 , $4, $5, $6, $7) RETURNING *",
      [
        this.title,
        this.publisher,
        this.source_url,
        this.image_url,
        this.servings,
        this.cooking_time,
        this.key,
      ]
    );
  }

  saveIngredients(recipeId) {
    this.ingredients.forEach((ingred) => {
      db.query(
        "INSERT INTO recipe_ingredients (quantity, unit, description, recipe_id) VALUES ($1, $2, $3, $4)",
        [ingred.quantity, ingred.unit, ingred.description, recipeId]
      );
    });
    return this.ingredients;
  }

  static findRecipe(id) {
    return db.query("SELECT * FROM recipes WHERE id = $1", [id]);
  }

  static findRecipeIngredients(id) {
    return db.query(
      "SELECT quantity, unit, description FROM recipe_ingredients WHERE recipe_id = $1",
      [id]
    );
  }

  static fetchYourRecipes(searchQuery, key) {
    return db.query(
      "SELECT id, title, publisher, image_url, key FROM recipes WHERE title ILIKE $1 AND key = $2",
      [`%${searchQuery}%`, key]
    );
  }

  static fetchRestRecipes(searchQuery) {
    if (searchQuery === "*") {
      return db.query(
        "SELECT id, title, publisher, image_url, key FROM recipes"
      );
    }

    return db.query(
      "SELECT id, title, publisher, image_url FROM recipes WHERE title ILIKE $1 AND key IS NULL",
      [`%${searchQuery}%`]
    );
  }
};
