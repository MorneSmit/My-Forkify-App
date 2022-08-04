-- https://stackoverflow.com/questions/35081748/how-can-i-insert-into-a-postgresql-json-array **(JSON[])**

-- ARRAY['{"quantity": 1, "unit": "", "description": "egg"}']::json[]

INSERT INTO recipes (title, publisher, source_url, image_url, servings, cooking_time)
VALUES ('VS Recipe', 'VS Code', '', 'vs.png', 2, 30);

INSERT INTO recipes (title, publisher, source_url, image_url, servings, cooking_time)
VALUES ('2de Recipe', 'VS Code the 2de', 'https:/VSCODE.com', '@2.png', 1, 40);


INSERT INTO ingredients (quantity, unit, "description",recipe_id)
VALUES (1, '', 'egg', 1);

INSERT INTO ingredients (quantity, unit, "description",recipe_id)
VALUES (1, '', 'avocado', 1);

INSERT INTO ingredients (quantity, unit, "description",recipe_id)
VALUES (3, '', 'apples', 2);