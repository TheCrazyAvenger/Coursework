const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class GroupClasses {
  find = async () => {
    try {
      const allGroupClasses = await pool.query('SELECT * FROM group_classes');
      return allGroupClasses.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  add = async (classId, maxStudents) => {
    try {
      await pool.query(
        `INSERT INTO group_classes (class_id, max_students)
         VALUES
          ($1, $2)`,
        [classId, maxStudents],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  remove = async classId => {
    try {
      await pool.query('DELETE FROM group_classes WHERE class_id = $1', [
        classId,
      ]);
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = GroupClasses;
