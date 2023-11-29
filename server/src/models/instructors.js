const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class Instructors {
  find = async () => {
    try {
      const allInstructors = await pool.query('SELECT * FROM instructors');
      return allInstructors.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  findById = async id => {
    try {
      const instructor = await pool.query(
        `SELECT i.instructor_id, i.first_name, i.last_name, i.type, c.class_name, c.day_of_week, c.start_time, c.end_time, ct.type_name, ins.day_of_week, ins.start_time, ins.end_time
        FROM instructors AS i
        LEFT JOIN instructors_for_classes AS ic ON ic.instructor_id = i.instructor_id
        LEFT JOIN classes AS c ON c.class_id = ic.class_id
        LEFT JOIN class_types as ct ON ct.type_id = c.type_id
        LEFT JOIN instructor_schedule as ins ON ins.instructor_id = i.instructor_id
        WHERE i.instructor_id = $1`,
        [id],
      );
      return instructor.rows[0];
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  // findGroupAndIndividualClasses = async ids => {
  //   try {
  //     const allGroupClasses = await pool.query(
  //       'SELECT * FROM classes WHERE class_id = ANY($1)',
  //       [ids],
  //     );
  //     return allGroupClasses.rows;
  //   } catch (e) {
  //     console.log(e);
  //     const error = new HttpError('Something went wrong', 500);
  //     throw error;
  //   }
  // };
}

module.exports = Instructors;
