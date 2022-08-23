DROP TABLE recipes;
DROP TABLE recipe_ingredients;

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  publisher VARCHAR(255) NOT NULL,
  source_url TEXT,
  image_url TEXT NOT NULL,
  servings INT NOT NULL,
  cooking_time INT NOT NULL,
  "key" VARCHAR(255) DEFAULT NULL 
);

CREATE TABLE recipe_ingredients (
  id SERIAL PRIMARY KEY,
  quantity NUMERIC,
  unit VARCHAR(100),
  "description" TEXT,
  recipe_id INT NOT NULL
);

-- ingredients JSON[] DEFAULT '{}' -- [{quantity: 1, unit: '', description: 'egg'}]
