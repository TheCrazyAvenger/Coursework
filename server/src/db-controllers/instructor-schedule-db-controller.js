const HttpError = require('../models/http-error');
const InstructorSchedule = require('../models/instructor-schedule');

class InstructorScheduleDbController {
  constructor() {
    this.insctructorScheduleModel = new InstructorSchedule();
  }

  getInstructorScheduleById = async id => {
    let instructor;

    try {
      instructor = await this.insctructorScheduleModel.findById(id);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return instructor;
  };

  addInstructorSchedule = async instructorData => {
    let instructor;

    try {
      instructor = await this.insctructorScheduleModel.add(instructorData);
      return instructor;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  updateInstructorSchedule = async instructorData => {
    try {
      await this.insctructorScheduleModel.update(instructorData);
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  removeInstructorSchedule = async instructorId => {
    let instructor;

    try {
      instructor = await this.insctructorScheduleModel.remove(instructorId);
      return instructor;
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };
}

const instructorScheduleDbController = new InstructorScheduleDbController();

module.exports = instructorScheduleDbController;
