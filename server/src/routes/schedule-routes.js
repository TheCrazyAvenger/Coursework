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

router.get('/shcedule&type=classes', getUserClassSchedule);
router.get('/shcedule&type=parties', getUserPartyParticipants);
router.get('/user-schedules&type=classes', getUserClassesByIds);
router.get('/user-schedules&type=parties', getUserPartiesByIds);

module.exports = router;
