const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class ClassTypes {
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
