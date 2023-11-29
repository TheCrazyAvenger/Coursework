const express = require('express');

const {
  getClasses,
  getGroupClasses,
  getIndividualClasses,
  getClassById,
} = require('../controllers/classes-controller');

const router = new express.Router();

router.get('/classes', getClasses);
router.get('/classes&type=group', getGroupClasses);
router.get('/classes&type=individual', getIndividualClasses);

router.get('/classes/:id', getClassById);

module.exports = router;
