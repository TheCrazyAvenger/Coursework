const HttpError = require('../models/http-error');
const ClassSchedule = require('../models/class-schedule');

class ClassScheduleDbController {
  constructor() {
    this.classScheduleModel = new ClassSchedule();
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

  getUserClassesByIds = async ids => {
    let classes;

    try {
      classes = await this.classScheduleModel.getUserClassesByIds(ids);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return classes;
  };
}

const classScheduleDbController = new ClassScheduleDbController();

module.exports = classScheduleDbController;
