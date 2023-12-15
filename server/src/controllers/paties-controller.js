const PartiesDbController = require('../db-controllers/parties-db-controller');
const InstructorForPartiesDbController = require('../db-controllers/instructors-for-parties-db-controller');
const PatyPaticipantsDbController = require('../db-controllers/party-paticipants-db-controller');

const getParties = async (req, res, next) => {
  let parties;

  const sort = req?.params?.sort;

  try {
    parties = await PartiesDbController.getParties(sort);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: parties,
  });
};

const getPartyById = async (req, res, next) => {
  let classes;

  const id = req.params.id;

  try {
    classes = await PartiesDbController.getPartyById(id);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classes,
  });
};

const addParty = async (req, res, next) => {
  const {partyData} = req.body;

  try {
    await PartiesDbController.addParty(partyData);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: 'Successfull',
  });
};

const updateParty = async (req, res, next) => {
  const {partyData} = req.body;

  try {
    await PartiesDbController.updateParty(partyData);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: 'Successfull',
  });
};

const removeParty = async (req, res, next) => {
  const {partyId} = req.body;

  try {
    await InstructorForPartiesDbController.removeInstructorForClasses(partyId);
  } catch (e) {
    return next(e);
  }

  try {
    await PatyPaticipantsDbController.removePartySchedule(partyId);
  } catch (e) {
    return next(e);
  }

  try {
    await PartiesDbController.removeParty(partyId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: 'Successfull',
  });
};

module.exports = {getParties, getPartyById, addParty, removeParty, updateParty};
