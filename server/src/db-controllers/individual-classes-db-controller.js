const HttpError = require('../models/http-error');
const IndividualClasses = require('../models/individual-classes');

class IndividualClassesDbController {
  constructor() {
    this.individualClassesModel = new IndividualClasses();
  }

  getIndividualClasses = async () => {
    let individualClasses;

    try {
      individualClasses = await this.individualClassesModel.find();
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return individualClasses;
  };
}

const individualClassesDbController = new IndividualClassesDbController();

module.exports = individualClassesDbController;
