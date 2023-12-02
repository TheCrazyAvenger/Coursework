const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class ClassTypes {
  find = async () => {
    try {
      const classType = await pool.query('SELECT * FROM class_types');
      return classType.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  add = async typeName => {
    try {
      await pool.query(
        `INSERT INTO class_types (Type_Name)
         VALUES
          ($1)`,
        [typeName],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  removeById = async id => {
    try {
      await pool.query('DELETE FROM class_types WHERE type_id = $1', [id]);
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  findById = async id => {
    try {
      const classType = await pool.query(
        'SELECT * FROM class_types WHERE type_id = $1',
        [id],
      );
      return classType.rows[0].type_name;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = ClassTypes;
