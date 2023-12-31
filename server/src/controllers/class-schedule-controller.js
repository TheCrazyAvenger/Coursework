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

  const {ids, classesIds} = req.body;

  try {
    classes = await ClassScheduleDbController.getUserClassesByIds(
      ids,
      classesIds,
    );
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classes,
  });
};

const addStudentClassSchedule = async (req, res, next) => {
  const {studentId, classId} = req.body;

  try {
    ClassScheduleDbController.addStudentClassSchedule(studentId, classId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

const removeStudentClassSchedule = async (req, res, next) => {
  const {studentId, classId} = req.body;

  try {
    ClassScheduleDbController.removeStudentClassSchedule(studentId, classId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

module.exports = {
  removeStudentClassSchedule,
  getUserClassSchedule,
  getUserClassesByIds,
  addStudentClassSchedule,
};
