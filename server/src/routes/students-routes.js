const express = require('express');

const {
  getStudents,
  updateStudent,
  disableOrUnlockStudent,
  getStudentClasses,
  removeStudentSchedule,
  getStudentParties,
  removeStudentParticipant,
} = require('../controllers/students-controller');

const router = new express.Router();

router.get('/students', getStudents);

router.get('/student-schedule&type=classes/:studentId', getStudentClasses);
router.delete('/student-schedule&type=classes', removeStudentSchedule);
router.get('/student-schedule&type=parties/:studentId', getStudentParties);
router.delete('/student-schedule&type=parties', removeStudentParticipant);

router.patch('/students', updateStudent);
router.patch('/students&type=access', disableOrUnlockStudent);

module.exports = router;
