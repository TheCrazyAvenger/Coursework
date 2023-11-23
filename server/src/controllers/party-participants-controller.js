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

module.exports = {getUserPartyParticipants, getUserPartiesByIds};
