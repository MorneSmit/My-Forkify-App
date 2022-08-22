-- SELECT r.id, title, publisher, source_url, image_url, servings, cooking_time, quantity, unit, "description" FROM recipes AS r
-- LEFT JOIN ingredients AS i ON r.id = i.recipe_id;
-- SELECT r.id, title, publisher, source_url, image_url, servings, cooking_time, quantity, unit, "description"
-- FROM recipes AS r
-- INNER JOIN ingredients AS i ON r.id = i.recipe_id
-- WHERE r.id = 1;
SELECT id, title, publisher, image_url FROM recipes WHERE title ILIKE '%recipe%';