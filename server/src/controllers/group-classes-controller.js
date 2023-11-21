const GroupClassesDbController = require('../db-controllers/group-classes-db-controller');
const HttpError = require('../models/http-error');

const getGroupClasses = async (_, res, next) => {
  let groupClasses;

  try {
    groupClasses = await GroupClassesDbController.getGroupClasses();
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: groupClasses,
  });
};

const getGroupClassesIds = async groupClasses => {
  let ids;

  try {
    ids = await groupClasses.map(item => item.class_id);
    return ids;
  } catch (e) {
    console.log(e);
    const error = new HttpError('Something went wrong', 500);
    throw error;
  }
};

module.exports = {getGroupClasses, getGroupClassesIds};
