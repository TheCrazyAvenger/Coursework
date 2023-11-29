const PartiesDbController = require('../db-controllers/parties-db-controller');

const getParties = async (_, res, next) => {
  let parties;

  try {
    parties = await PartiesDbController.getParties();
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

module.exports = {getParties, getPartyById};
