const InstructorsDbController = require('../db-controllers/instructors-db-controller');
const InstructorForPartiesDbController = require('../db-controllers/instructors-for-parties-db-controller');
const InstructorScheduleDbController = require('../db-controllers/instructor-schedule-db-controller');

const getInstructors = async (req, res, next) => {
  let instructors;

  const sort = req?.params?.sort;

  try {
    instructors = await InstructorsDbController.getInstructors(sort);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: instructors,
  });
};

const getInstructorById = async (req, res, next) => {
  let instructor;

  const id = req.params.id;

  try {
    instructor = await InstructorsDbController.getInstructorById(id);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: instructor,
  });
};

const addInstructor = async (req, res, next) => {
  const {instructorData} = req.body;

  let instructor_id;
  try {
    instructor_id = await InstructorsDbController.addInstructor(instructorData);
  } catch (e) {
    return next(e);
  }

  try {
    await InstructorScheduleDbController.addInstructorSchedule({
      ...instructorData,
      instructor_id,
    });
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: 'Successfull',
  });
};

const updateInstructor = async (req, res, next) => {
  const {instructorData} = req.body;

  try {
    await InstructorsDbController.updateInstructor(instructorData);
  } catch (e) {
    return next(e);
  }

  try {
    await InstructorScheduleDbController.updateInstructorSchedule(
      instructorData,
    );
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: 'Successfull',
  });
};

const removeInstructor = async (req, res, next) => {
  const {instructorId} = req.body;

  try {
    await InstructorForPartiesDbController.removeById(instructorId);
  } catch (e) {
    return next(e);
  }

  try {
    await InstructorScheduleDbController.removeInstructorSchedule(instructorId);
  } catch (e) {
    return next(e);
  }

  try {
    await InstructorsDbController.removeInstructor(instructorId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: 'Successfull',
  });
};

module.exports = {
  getInstructors,
  getInstructorById,
  addInstructor,
  updateInstructor,
  removeInstructor,
};
