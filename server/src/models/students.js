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
  findById = async id => {
    try {
      const student = await pool.query(
        'SELECT * FROM students WHERE student_id = $1',
        [id],
      );
      return student.rows[0];
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = Students;
