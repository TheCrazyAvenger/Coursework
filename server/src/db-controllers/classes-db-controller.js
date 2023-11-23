const HttpError = require('../models/http-error');
const Classes = require('../models/classes');
const GroupClasses = require('../models/group-classes');
const {getGroupClassesIds} = require('../controllers/group-classes-controller');
const IndividualClasses = require('../models/individual-classes');
const {
  getIndividualClassesIds,
} = require('../controllers/individual-classes-controller');
const ClassTypes = require('../models/class-types');

class ClassesDbController {
  constructor() {
    this.classesModel = new Classes();
    this.groupClassesModel = new GroupClasses();
    this.individualClassesModel = new IndividualClasses();
    this.classTypes = new ClassTypes();
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
}

const classesDbController = new ClassesDbController();

module.exports = classesDbController;
