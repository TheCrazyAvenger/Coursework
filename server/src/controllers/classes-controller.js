const ClassesDbController = require('../db-controllers/classes-db-controller');
const GroupClassesDbController = require('../db-controllers/group-classes-db-controller');
const IndividualClassesDbController = require('../db-controllers/individual-classes-db-controller');
const ClassScheduleDbController = require('../db-controllers/class-schedule-db-controller');
const InstructorForPartiesDbController = require('../db-controllers/instructors-for-parties-db-controller');

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

const getIndividualClasses = async (_, res, next) => {
  let classes;

  try {
    classes = await ClassesDbController.getIndividualClasses();
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classes,
  });
};

const getClassById = async (req, res, next) => {
  let classes;

  const id = req.params.id;

  try {
    classes = await ClassesDbController.getClassById(id);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classes,
  });
};

const addClass = async (req, res, next) => {
  const {classData, type} = req.body;

  let class_id;
  try {
    class_id = await ClassesDbController.addClass(classData);
  } catch (e) {
    return next(e);
  }

  try {
    if (type === 'individual') {
      await IndividualClassesDbController.addIndividualClass(class_id);
    } else {
      await GroupClassesDbController.addGroupClass(class_id, 20);
    }
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: 'Successfull',
  });
};

const updateClass = async (req, res, next) => {
  const {classData} = req.body;

  try {
    await ClassesDbController.updateClass(classData);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: 'Successfull',
  });
};

const removeClass = async (req, res, next) => {
  const {classId, type} = req.body;

  try {
    await InstructorForPartiesDbController.removeInstructorForParties(classId);
  } catch (e) {
    return next(e);
  }

  try {
    await ClassScheduleDbController.removeClassSchedule(classId);
  } catch (e) {
    return next(e);
  }

  try {
    if (type === 'individual') {
      await IndividualClassesDbController.removeIndividualClass(classId);
    } else {
      await GroupClassesDbController.removeClass(classId);
    }
  } catch (e) {
    return next(e);
  }

  try {
    await ClassesDbController.removeClass(classId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: 'Successfull',
  });
};

module.exports = {
  getClasses,
  getGroupClasses,
  getIndividualClasses,
  getClassById,
  addClass,
  updateClass,
  removeClass,
};
