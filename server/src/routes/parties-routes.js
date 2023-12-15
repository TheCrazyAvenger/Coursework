const express = require('express');

const {
  getParties,
  getPartyById,
  addParty,
  removeParty,
  updateParty,
} = require('../controllers/paties-controller');

const router = new express.Router();

router.get('/parties', getParties);
router.get('/partiess/:sort', getParties);
router.get('/parties/:id', getPartyById);

router.post('/parties', addParty);
router.delete('/parties', removeParty);
router.patch('/parties', updateParty);

module.exports = router;
