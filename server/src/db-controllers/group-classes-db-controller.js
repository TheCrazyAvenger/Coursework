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

  addGroupClass = async (classId, maxStudents) => {
    try {
      await this.groupClassesModel.add(classId, maxStudents);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  removeClass = async classId => {
    try {
      await this.groupClassesModel.remove(classId);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };
}

const groupClassesDbController = new GroupClassesDbController();

module.exports = groupClassesDbController;
