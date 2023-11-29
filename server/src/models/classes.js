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
  findGroupAndIndividualClasses = async ids => {
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

  findById = async id => {
    try {
      const classes = await pool.query(
        `SELECT i.instructor_id, i.first_name, i.last_name, i.type, c.class_name, c.day_of_week, c.start_time, c.end_time
        FROM classes AS c
        LEFT JOIN instructors_for_classes AS ic ON ic.class_id = c.class_id
        LEFT JOIN instructors AS i ON i.instructor_id = ic.instructor_id
        WHERE c.class_id = $1`,
        [id],
      );
      return classes.rows[0];
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = Classes;
