const HttpError = require('../models/http-error');
const Classes = require('../models/classes');
const GroupClasses = require('../models/group-classes');
const {getGroupClassesIds} = require('../controllers/group-classes-controller');
const IndividualClasses = require('../models/individual-classes');
const {
  getIndividualClassesIds,
} = require('../controllers/individual-classes-controller');

class ClassesDbController {
  constructor() {
    this.classesModel = new Classes();
    this.groupClassesModel = new GroupClasses();
    this.individualClassesModel = new IndividualClasses();
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
      classes = await this.classesModel.findGroupAndIndividualClasses(ids);
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return classes;
  };

  getIndividualClasses = async () => {
    let individualClasses;

    try {
      individualClasses = await this.individualClassesModel.find();
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    let ids;

    try {
      ids = await getIndividualClassesIds(individualClasses);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    let classes;

    try {
      classes = await this.classesModel.findGroupAndIndividualClasses(ids);
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
