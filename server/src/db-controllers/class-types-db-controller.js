const HttpError = require('../models/http-error');
const ClassTypes = require('../models/class-types');

class ClassTypesDbController {
  constructor() {
    this.classTypesModel = new ClassTypes();
  }

  getClassTypes = async () => {
    let classTypes;

    try {
      classTypes = await this.classTypesModel.find();
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return classTypes;
  };

  addClassType = async typeName => {
    try {
      await this.classTypesModel.add(typeName);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  removeClassTypeById = async typeId => {
    try {
      await this.classTypesModel.removeById(typeId);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  getPartyTypeById = async id => {
    let classType;

    try {
      classType = await this.classTypesModel.findById(id);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return classType;
  };
}

const classTypesDbController = new ClassTypesDbController();

module.exports = classTypesDbController;
