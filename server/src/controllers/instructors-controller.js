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

module.exports = {getInstructors};
