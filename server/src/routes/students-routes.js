const express = require('express');

const {getStudents} = require('../controllers/students-controller');

const router = new express.Router();

router.get('/students', getStudents);

module.exports = router;
