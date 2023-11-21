require('dotenv').config();

const {Pool} = require('pg');

const pool = new Pool({
  user: 'illiapauliushchyk',
  password: '1111',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
});

module.exports = {pool};
