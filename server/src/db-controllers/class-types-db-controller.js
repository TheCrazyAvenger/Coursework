const HttpError = require('../models/http-error');
const ClassTypes = require('../models/class-types');

class ClassTypesDbController {
  constructor() {
    this.classTypesModel = new ClassTypes();
  }

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
