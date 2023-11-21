const IndividualClassesDbController = require('../db-controllers/individual-classes-db-controller');
const HttpError = require('../models/http-error');

const getIndividualClasses = async (_, res, next) => {
  let individualClasses;

  try {
    individualClasses =
      await IndividualClassesDbController.getIndividualClasses();
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: individualClasses,
  });
};

const getIndividualClassesIds = async individualClasses => {
  let ids;

  try {
    ids = await individualClasses.map(item => item.class_id);
    return ids;
  } catch (e) {
    console.log(e);
    const error = new HttpError('Something went wrong', 500);
    throw error;
  }
};

module.exports = {getIndividualClasses, getIndividualClassesIds};
