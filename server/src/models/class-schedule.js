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

  getUserClassesByIds = async (ids, classesIds) => {
    try {
      const classes = await pool.query(
        'SELECT * FROM classes WHERE class_id = ANY($1) AND class_id = ANY($2)',
        [ids, classesIds],
      );
      return classes.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };

  addStudentClassSchedule = async (studentId, classId) => {
    try {
      await pool.query(
        `INSERT INTO class_schedule (student_id, class_id)
         VALUES
          ($1, $2)`,
        [studentId, classId],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  removeStudentClassSchedule = async (studentId, classId) => {
    try {
      await pool.query(
        'DELETE FROM class_schedule WHERE student_id = $1 AND class_id = $2',
        [studentId, classId],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  removeClassSchedule = async classId => {
    try {
      await pool.query('DELETE FROM class_schedule WHERE class_id = $1', [
        classId,
      ]);
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = ClassSchedule;
