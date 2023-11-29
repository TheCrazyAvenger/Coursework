const express = require('express');

const {getParties, getPartyById} = require('../controllers/paties-controller');

const router = new express.Router();

router.get('/parties', getParties);
router.get('/parties/:id', getPartyById);

module.exports = router;
