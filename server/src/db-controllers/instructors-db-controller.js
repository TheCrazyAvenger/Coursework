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

  addInstructor = async instructorData => {
    let instructor;

    try {
      instructor = await this.insctructorsModel.add(instructorData);
      return instructor;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  updateInstructor = async instructorData => {
    try {
      await this.insctructorsModel.update(instructorData);
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  removeInstructor = async instructorId => {
    let instructor;

    try {
      instructor = await this.insctructorsModel.remove(instructorId);
      return instructor;
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
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
