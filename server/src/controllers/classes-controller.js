const ClassesDbController = require('../db-controllers/classes-db-controller');

const getClasses = async (_, res, next) => {
  let classes;

  try {
    classes = await ClassesDbController.getClasses();
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classes,
  });
};

const getGroupClasses = async (_, res, next) => {
  let classes;

  try {
    classes = await ClassesDbController.getGroupClasses();
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classes,
  });
};

module.exports = {getClasses, getGroupClasses};
