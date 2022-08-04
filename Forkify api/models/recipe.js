const db = require("../util/database");

module.exports = class Recipe {
  constructor(
    title,
    publisher,
    source_url,
    image_url,
    servings,
    cooking_time,
    ingredients
  ) {
    this.title = title;
    this.publisher = publisher;
    this.source_url = source_url;
    this.image_url = image_url;
    this.servings = servings;
    this.cooking_time = cooking_time;
    this.ingredients = ingredients;
  }

  save() {
    return db.query(
      "INSERT INTO recipes (title, publisher, source_url, image_url, servings, cooking_time, ingredients) VALUES ($1, $2, $3 , $4, $5, $6, $7) RETURNING *",
      [
        this.title,
        this.publisher,
        this.source_url,
        this.image_url,
        this.servings,
        this.cooking_time,
        this.ingredients,
      ]
    );
  }

  // static findById(id) {
  //   return db.query("SELECT * FROM recipes WHERE id = $1", [id]);
  // }

  static findById(id) {
    return db.query(
      "SELECT r.id, title, publisher, source_url, image_url, servings, cooking_time FROM recipes AS r WHERE r.id = $1",
      [id]
    );
  }

  static fetchAll() {
    return db.query("SELECT id, title, publisher, image_url FROM recipes");
  }
};
