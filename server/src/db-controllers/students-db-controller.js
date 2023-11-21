const HttpError = require('../models/http-error');
const Students = require('../models/students');

class StudentsDbController {
  constructor() {
    this.studentsModel = new Students();
  }

  getStudents = async () => {
    let students;

    try {
      students = await this.studentsModel.find();
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return students;
  };
}

const studentsDbController = new StudentsDbController();

module.exports = studentsDbController;
