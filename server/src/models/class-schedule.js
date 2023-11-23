const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class ClassSchedule {
  getUserClassSchedule = async id => {
    try {
      const classSchedule = await pool.query(
        'SELECT * FROM class_schedule WHERE student_id = $1',
        [25],
      );
      return classSchedule.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };

  getUserClassesByIds = async ids => {
    try {
      const classes = await pool.query(
        'SELECT * FROM classes WHERE class_id = ANY($1)',
        [ids],
      );
      return classes.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = ClassSchedule;
