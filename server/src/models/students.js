const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class Students {
  find = async () => {
    try {
      const allStudents = await pool.query('SELECT * FROM students');
      return allStudents.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = Students;
