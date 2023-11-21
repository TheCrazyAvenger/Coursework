const express = require('express');

const {
  getClasses,
  getGroupClasses,
} = require('../controllers/classes-controller');

const router = new express.Router();

router.get('/classes', getClasses);
router.get('/classes&type=group', getGroupClasses);

module.exports = router;
