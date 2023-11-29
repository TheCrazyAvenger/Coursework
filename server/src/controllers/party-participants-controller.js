const PartyParticipantsDbController = require('../db-controllers/party-paticipants-db-controller');

const getUserPartyParticipants = async (_, res, next) => {
  let classShcedule;

  try {
    classShcedule =
      await PartyParticipantsDbController.getUserPartyParticipants();
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classShcedule,
  });
};

const getUserPartiesByIds = async (req, res, next) => {
  let classShcedule;

  const {ids, partiesIds} = req.body;

  try {
    classShcedule = await PartyParticipantsDbController.getUserPartiesByIds(
      ids,
      partiesIds,
    );
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: classShcedule,
  });
};

const addStudentPartySchedule = async (req, res, next) => {
  const {studentId, partyId} = req.body;

  try {
    PartyParticipantsDbController.addStudentPartySchedule(studentId, partyId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

const removeStudentPartySchedule = async (req, res, next) => {
  const {studentId, partyId} = req.body;

  try {
    PartyParticipantsDbController.removeStudentPartySchedule(
      studentId,
      partyId,
    );
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

module.exports = {
  getUserPartyParticipants,
  getUserPartiesByIds,
  addStudentPartySchedule,
  removeStudentPartySchedule,
};
