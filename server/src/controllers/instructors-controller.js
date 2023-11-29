const InstructorsDbController = require('../db-controllers/instructors-db-controller');

const getInstructors = async (_, res, next) => {
  let instructors;

  try {
    instructors = await InstructorsDbController.getInstructors();
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

module.exports = {getInstructors, getInstructorById};
