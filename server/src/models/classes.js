const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class Classes {
  find = async () => {
    try {
      const allClasses = await pool.query('SELECT * FROM classes');
      return allClasses.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  findGroupClasses = async ids => {
    try {
      const allGroupClasses = await pool.query(
        'SELECT * FROM classes WHERE class_id = ANY($1)',
        [ids],
      );
      return allGroupClasses.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = Classes;
