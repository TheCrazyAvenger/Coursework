const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class Admin {
  findAdminByEmail = async email => {
    try {
      const user = await pool.query(
        'SELECT * FROM admin WHERE admin_email = $1',
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

module.exports = Admin;
