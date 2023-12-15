const HttpError = require('../models/http-error');
const Students = require('../models/students');

class StudentsDbController {
  constructor() {
    this.studentsModel = new Students();
  }

  getStudents = async sort => {
    let students;

    try {
      students = await this.studentsModel.find(sort);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return students;
  };

  getStudentById = async id => {
    let student;

    try {
      student = await this.studentsModel.findById(id);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return student;
  };

  removeStudentClassSchedule = async id => {
    let student;

    try {
      student = await this.studentsModel.findById(id);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return student;
  };

  updateStudent = async studentData => {
    try {
      await this.studentsModel.update(studentData);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  disableOrUnlock = async (studentId, disabled) => {
    try {
      await this.studentsModel.disableOrUnlock(studentId, disabled);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  getStudentClasses = async studentId => {
    let classes;

    try {
      classes = await this.studentsModel.getStudentClasses(studentId);

      return classes;
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  removeStudentSchedule = async (studentId, classId) => {
    try {
      await this.studentsModel.removeStudentSchedule(studentId, classId);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  getStudentParties = async studentId => {
    let parties;

    try {
      parties = await this.studentsModel.getStudentParties(studentId);

      return parties;
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  removeStudentParticipant = async (studentId, partyId) => {
    try {
      await this.studentsModel.removeStudentParticipant(studentId, partyId);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };
}

const studentsDbController = new StudentsDbController();

module.exports = studentsDbController;
