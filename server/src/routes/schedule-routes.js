const express = require('express');

const {
  getUserClassSchedule,
  getUserClassesByIds,
  removeStudentClassSchedule,
  addStudentClassSchedule,
} = require('../controllers/class-schedule-controller');
const {
  getUserPartyParticipants,
  getUserPartiesByIds,
} = require('../controllers/party-participants-controller');

const router = new express.Router();

router.post('/shcedule&type=classes', getUserClassSchedule);
router.post('/shcedule&type=parties', getUserPartyParticipants);
router.post('/user-schedules&type=classes', getUserClassesByIds);
router.post('/user-schedules&type=parties', getUserPartiesByIds);

router.delete(
  '/user-schedules/remove&type=classes',
  removeStudentClassSchedule,
);
router.post('/user-schedules/add&type=classes', addStudentClassSchedule);

module.exports = router;
