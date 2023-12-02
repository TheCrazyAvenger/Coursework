const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class IndividualClasses {
  find = async () => {
    try {
      const allIndividualClasses = await pool.query(
        'SELECT * FROM individual_classes',
      );
      return allIndividualClasses.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  add = async classId => {
    try {
      await pool.query(
        `INSERT INTO individual_classes (class_id)
         VALUES
          ($1)`,
        [classId],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  remove = async classId => {
    try {
      await pool.query('DELETE FROM individual_classes WHERE class_id = $1', [
        classId,
      ]);
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = IndividualClasses;
