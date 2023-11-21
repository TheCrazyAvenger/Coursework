const HttpError = require('../models/http-error');
const Classes = require('../models/classes');
const GroupClasses = require('../models/group-classes');
const {getGroupClassesIds} = require('../controllers/group-classes-controller');

class ClassesDbController {
  constructor() {
    this.classesModel = new Classes();
    this.groupClassesModel = new GroupClasses();
  }

  getClasses = async () => {
    let classes;

    try {
      classes = await this.classesModel.find();
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return classes;
  };

  getGroupClasses = async () => {
    let groupClasses;

    try {
      groupClasses = await this.groupClassesModel.find();
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    let ids;

    try {
      ids = await getGroupClassesIds(groupClasses);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    let classes;

    try {
      classes = await this.classesModel.findGroupClasses(ids);
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return classes;
  };
}

const classesDbController = new ClassesDbController();

module.exports = classesDbController;
