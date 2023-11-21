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

module.exports = {getParties};
