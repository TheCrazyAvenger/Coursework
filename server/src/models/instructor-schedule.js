const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class InstructorSchedule {
  add = async instructorData => {
    let instructor;
    const {instructor_id, day_of_week, start_time, end_time} = instructorData;

    try {
      instructor = await pool.query(
        `INSERT INTO instructor_schedule (instructor_id, day_of_week, start_time, end_time)
         VALUES
          ($1, $2, $3, $4)
          RETURNING instructor_id`,
        [instructor_id, day_of_week, start_time, end_time],
      );
      return instructor.rows[0].instructor_id;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  remove = async instructorId => {
    let instructor;

    try {
      instructor = await pool.query(
        'DELETE FROM instructor_schedule WHERE instructor_id = $1 RETURNING instructor_id',
        [instructorId],
      );
      return instructor.rows[0].instructor_id;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  update = async instructorData => {
    const {day_of_week, start_time, end_time, instructor_id} = instructorData;

    try {
      await pool.query(
        'UPDATE instructor_schedule SET day_of_week = $1, start_time = $2, end_time = $3 WHERE instructor_id = $4',
        [day_of_week, start_time, end_time, instructor_id],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  findById = async id => {
    try {
      const instructor = await pool.query(
        'select * from instructor_schedule WHERE instructor_id = $1',
        [id],
      );

      return instructor.rows[0];
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = InstructorSchedule;
