const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class Parties {
  find = async () => {
    try {
      const allPartiesTypes = await pool.query('SELECT * FROM dance_parties');
      return allPartiesTypes.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = Parties;
