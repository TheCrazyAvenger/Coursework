const HttpError = require('../models/http-error');
const GroupClasses = require('../models/group-classes');

class GroupClassesDbController {
  constructor() {
    this.groupClassesModel = new GroupClasses();
  }

  getGroupClasses = async () => {
    let groupClasses;

    try {
      groupClasses = await this.groupClassesModel.find();
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return groupClasses;
  };
}

const groupClassesDbController = new GroupClassesDbController();

module.exports = groupClassesDbController;
