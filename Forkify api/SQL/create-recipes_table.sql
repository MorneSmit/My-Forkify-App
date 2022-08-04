DROP TABLE recipes;
DROP TABLE ingredients;

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  publisher VARCHAR(255) NOT NULL,
  source_url TEXT,
  image_url TEXT NOT NULL,
  servings INT NOT NULL,
  cooking_time INT NOT NULL
);
  -- ingredients JSON[] DEFAULT '{}' -- [{quantity: 1, unit: '', description: 'egg'}] 

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  quantity INT,
  unit VARCHAR(100),
  "description" TEXT,
  recipe_id INT NOT NULL
);

-- DROP TABLE posts;

-- CREATE TABLE posts (
--   "_id" SERIAL PRIMARY KEY,
--   "title" VARCHAR(255) NOT NULL,
--   "imageUrl" VARCHAR(255) NOT NULL,
--   "content" TEXT NOT NULL,
--   "creator" INT NOT NULL,
--   "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- DROP TABLE users;

-- CREATE TABLE users (
--   "_id" SERIAL PRIMARY KEY,
--   "name" VARCHAR(255) NOT NULL,
--   "email" VARCHAR(255) UNIQUE NOT NULL,
--   "password" VARCHAR(255) NOT NULL,
--   "status" VARCHAR(255) DEFAULT 'I am new',
--   "posts" INT[] DEFAULT '{}',
--   "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
