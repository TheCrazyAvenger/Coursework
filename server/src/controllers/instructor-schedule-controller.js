const InstructorScheduleDbController = require('../db-controllers/instructor-schedule-db-controller');

const getInstructorScheduleById = async (req, res, next) => {
  let schedule;

  const id = req.params.id;

  try {
    schedule = await InstructorScheduleDbController.getInstructorScheduleById(
      id,
    );
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: schedule,
  });
};

module.exports = {
  getInstructorScheduleById,
};
