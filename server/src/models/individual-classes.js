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
}

module.exports = IndividualClasses;
