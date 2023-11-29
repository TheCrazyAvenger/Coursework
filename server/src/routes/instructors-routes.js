const express = require('express');

const {
  getInstructors,
  getInstructorById,
} = require('../controllers/instructors-controller');

const router = new express.Router();

router.get('/instructors', getInstructors);
router.get('/instructors/:id', getInstructorById);

module.exports = router;
