const express = require('express');

const {
  getClasses,
  getGroupClasses,
  getIndividualClasses,
} = require('../controllers/classes-controller');

const router = new express.Router();

router.get('/classes', getClasses);
router.get('/classes&type=group', getGroupClasses);
router.get('/classes&type=individual', getIndividualClasses);

module.exports = router;
