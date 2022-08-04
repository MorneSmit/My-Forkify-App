const express = require("express");
const bodyParser = require("body-parser");

const recipeRoutes = require("./routes/recipe");

const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization");
  next();
});

// localhost:8080/forkify-api/recipes
app.use("/forkify-api", recipeRoutes);

app.listen(8080);
