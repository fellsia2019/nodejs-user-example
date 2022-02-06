const Poll = require("pg").Pool;
const poll = new Poll({
  user: "postgres",
  password: "1881240",
  host: "localhost",
  port: 5432,
  database: "nodejsapi",
});

module.exports = poll;
