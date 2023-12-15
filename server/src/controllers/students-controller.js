const StudentsDbController = require('../db-controllers/students-db-controller');

const getStudents = async (req, res, next) => {
  let students;

  const sort = req?.params?.sort;

  try {
    students = await StudentsDbController.getStudents(sort);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: students,
  });
};

const updateStudent = async (req, res, next) => {
  const {studentData} = req.body;

  try {
    await StudentsDbController.updateStudent(studentData);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

const disableOrUnlockStudent = async (req, res, next) => {
  const {studentId, disabled} = req.body;

  try {
    await StudentsDbController.disableOrUnlock(studentId, disabled);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

const getStudentClasses = async (req, res, next) => {
  const studentId = req.params.studentId;

  let classes;

  try {
    classes = await StudentsDbController.getStudentClasses(studentId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classes,
  });
};

const removeStudentSchedule = async (req, res, next) => {
  const {studentId, classId} = req.body;

  try {
    await StudentsDbController.removeStudentSchedule(studentId, classId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

const getStudentParties = async (req, res, next) => {
  const studentId = req.params.studentId;

  let parties;

  try {
    parties = await StudentsDbController.getStudentParties(studentId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: parties,
  });
};

const removeStudentParticipant = async (req, res, next) => {
  const {studentId, partyId} = req.body;

  try {
    await StudentsDbController.removeStudentParticipant(studentId, partyId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

module.exports = {
  getStudents,
  updateStudent,
  disableOrUnlockStudent,
  getStudentClasses,
  removeStudentSchedule,
  getStudentParties,
  removeStudentParticipant,
};
