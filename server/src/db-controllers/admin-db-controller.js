const Admin = require('../models/admin');
const HttpError = require('../models/http-error');

class AdminDbController {
  constructor() {
    this.adminModel = new Admin();
  }

  findAdminByEmail = async email => {
    let admin;

    try {
      admin = await this.adminModel.findAdminByEmail(email);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return admin;
  };
}

const adminDbController = new AdminDbController();

module.exports = adminDbController;
