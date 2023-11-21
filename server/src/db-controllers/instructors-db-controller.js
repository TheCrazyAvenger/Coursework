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
}

const instructorsDbController = new InstructorsDbController();

module.exports = instructorsDbController;
