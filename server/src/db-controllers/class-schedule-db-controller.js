const HttpError = require('../models/http-error');
const ClassSchedule = require('../models/class-schedule');
const ClassTypes = require('../models/class-types');

class ClassScheduleDbController {
  constructor() {
    this.classScheduleModel = new ClassSchedule();
    this.classTypes = new ClassTypes();
  }

  getUserClassSchedule = async id => {
    let classShcedule;

    try {
      classShcedule = await this.classScheduleModel.getUserClassSchedule(id);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return classShcedule.map(item => item.class_id);
  };

  getUserClassesByIds = async (ids, classesIds) => {
    let classes;

    try {
      classes = await this.classScheduleModel.getUserClassesByIds(
        ids,
        classesIds,
      );
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    try {
      await Promise.all(
        classes.map(async item => {
          const typeId = await this.classTypes.findById(item.type_id);
          item.type_id = typeId;

          return item;
        }),
      );
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return classes;
  };

  addStudentClassSchedule = async (studentId, classId) => {
    try {
      await this.classScheduleModel.addStudentClassSchedule(studentId, classId);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  removeStudentClassSchedule = async (studentId, classId) => {
    try {
      await this.classScheduleModel.removeStudentClassSchedule(
        studentId,
        classId,
      );
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };
}

const classScheduleDbController = new ClassScheduleDbController();

module.exports = classScheduleDbController;
