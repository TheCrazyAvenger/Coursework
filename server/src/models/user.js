const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class User {
  findUserByEmail = async email => {
    try {
      const user = await pool.query(
        'SELECT * FROM users WHERE user_login = $1',
        [email],
      );
      return user.rows[0];
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = User;
