const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "forkify_app_api",
  password: "MS8446",
});

module.exports = pool;
