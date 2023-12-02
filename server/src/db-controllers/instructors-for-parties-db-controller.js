const HttpError = require('../models/http-error');
const InstructorsForParties = require('../models/instructors-for-parties');

class InstructorForPartiesDbController {
  constructor() {
    this.instructorForPartiesModel = new InstructorsForParties();
  }

  removeInstructorForClasses = async partyId => {
    try {
      await this.instructorForPartiesModel.removeInstructorForParties(partyId);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  removeInstructorForParties = async classId => {
    try {
      await this.instructorForPartiesModel.remove(classId);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };
}

const instructorForPartiesDbController = new InstructorForPartiesDbController();

module.exports = instructorForPartiesDbController;
