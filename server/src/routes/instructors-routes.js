const express = require('express');

const {
  getInstructors,
  getInstructorById,
  addInstructor,
  removeInstructor,
  updateInstructor,
} = require('../controllers/instructors-controller');
const {
  getInstructorScheduleById,
} = require('../controllers/instructor-schedule-controller');

const router = new express.Router();

router.get('/instructors', getInstructors);
router.get('/instructors/:id', getInstructorById);

router.get('/instructors-schedule/:id', getInstructorScheduleById);

router.post('/instructors', addInstructor);
router.delete('/instructors', removeInstructor);
router.patch('/instructors', updateInstructor);

module.exports = router;
