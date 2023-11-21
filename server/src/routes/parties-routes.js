const express = require('express');

const {getParties} = require('../controllers/paties-controller');

const router = new express.Router();

router.get('/parties', getParties);

module.exports = router;
