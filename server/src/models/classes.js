const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class Classes {
  find = async () => {
    try {
      const allClasses = await pool.query('SELECT * FROM classes SORT');
      return allClasses.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  findGroupAndIndividualClasses = async (ids, sort) => {
    console.log(
      'SELECT * FROM classes WHERE class_id = ANY($1)' +
        (sort ? ` ${sort}` : ''),
    );
    try {
      const allGroupClasses = await pool.query(
        'SELECT * FROM classes WHERE class_id = ANY($1)' +
          (sort ? ` ${sort}` : ''),
        [ids],
      );
      return allGroupClasses.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  add = async classData => {
    let classes;
    const {class_name, day_of_week, start_time, end_time, type_id} = classData;

    try {
      classes = await pool.query(
        `INSERT INTO classes (class_name, day_of_week, start_time, end_time, type_id)
         VALUES
          ($1, $2, $3, $4, $5)
          RETURNING class_id`,
        [class_name, day_of_week, start_time, end_time, type_id],
      );
      return classes.rows[0].class_id;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  remove = async classId => {
    let classes;

    try {
      classes = await pool.query(
        'DELETE FROM classes WHERE class_id = $1 RETURNING class_id',
        [classId],
      );
      return classes.rows[0].class_id;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  update = async classData => {
    const {class_name, day_of_week, start_time, end_time, type_id, class_id} =
      classData;

    try {
      await pool.query(
        'UPDATE classes SET class_name = $1, day_of_week = $2, start_time = $3, end_time = $4, type_id = $5 WHERE class_id = $6',
        [class_name, day_of_week, start_time, end_time, type_id, class_id],
      );
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
