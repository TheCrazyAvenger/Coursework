const express = require('express');
const {
  getClassTypes,
  addClassType,
  removeClassTypeById,
} = require('../controllers/class-types-controller');

const router = new express.Router();

router.get('/types&type=class', getClassTypes);
router.post('/types&type=class', addClassType);
router.delete('/types&type=class', removeClassTypeById);

module.exports = router;
