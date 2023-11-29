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
  removeStudentPartySchedule,
  addStudentPartySchedule,
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

router.delete(
  '/user-schedules/remove&type=parties',
  removeStudentPartySchedule,
);
router.post('/user-schedules/add&type=parties', addStudentPartySchedule);

module.exports = router;
