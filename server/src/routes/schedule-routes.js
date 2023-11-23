const express = require('express');

const {
  getUserClassSchedule,
  getUserClassesByIds,
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

module.exports = router;
