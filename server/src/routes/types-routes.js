const express = require('express');
const {
  getClassTypes,
  addClassType,
  removeClassTypeById,
} = require('../controllers/class-types-controller');
const {
  getPartyTypes,
  addPartyType,
  removePartyTypeById,
} = require('../controllers/party-types-controller');

const router = new express.Router();

router.get('/types&type=class', getClassTypes);
router.post('/types&type=class', addClassType);
router.delete('/types&type=class', removeClassTypeById);

router.get('/types&type=party', getPartyTypes);
router.post('/types&type=party', addPartyType);
router.delete('/types&type=party', removePartyTypeById);

module.exports = router;
