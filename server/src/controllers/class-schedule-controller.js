const ClassScheduleDbController = require('../db-controllers/class-schedule-db-controller');

const getUserClassSchedule = async (_, res, next) => {
  let classShcedule;

  try {
    classShcedule = await ClassScheduleDbController.getUserClassSchedule();
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classShcedule,
  });
};

const getUserClassesByIds = async (req, res, next) => {
  let classes;

  const {ids} = req.body;

  try {
    classes = await ClassScheduleDbController.getUserClassesByIds(ids);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classes,
  });
};

module.exports = {getUserClassSchedule, getUserClassesByIds};
