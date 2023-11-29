const HttpError = require('../models/http-error');
const User = require('../models/user');

class UserDbController {
  constructor() {
    this.userModel = new User();
  }

  getUserByEmail = async email => {
    let user;

    try {
      user = await this.userModel.findUserByEmail(email);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return user;
  };
}

const userDbController = new UserDbController();

module.exports = userDbController;
