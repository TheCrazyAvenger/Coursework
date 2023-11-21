const express = require('express');

const {getInstructors} = require('../controllers/instructors-controller');

const router = new express.Router();

router.get('/instructors', getInstructors);

module.exports = router;
