const HttpError = require('../models/http-error');
const Instructors = require('../models/instructors');

class InstructorsDbController {
  constructor() {
    this.insctructorsModel = new Instructors();
  }

  getInstructors = async () => {
    let instructors;

    try {
      instructors = await this.insctructorsModel.find();
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return instructors;
  };

  getInstructorById = async id => {
    let instructor;

    try {
      instructor = await this.insctructorsModel.findById(id);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return instructor;
  };
}

const instructorsDbController = new InstructorsDbController();

module.exports = instructorsDbController;
