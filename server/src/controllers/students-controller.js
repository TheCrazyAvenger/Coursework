const StudentsDbController = require('../db-controllers/students-db-controller');

const getStudents = async (_, res, next) => {
  let students;

  try {
    students = await StudentsDbController.getStudents();
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: students,
  });
};

module.exports = {getStudents};
