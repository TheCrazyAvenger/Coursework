const PartyTypesDbController = require('../db-controllers/party-types-db-controller');

const getPartyTypes = async (_, res, next) => {
  let partyTypes;

  try {
    partyTypes = await PartyTypesDbController.getPartyTypes();
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: partyTypes,
  });
};

const addPartyType = async (req, res, next) => {
  const {typeName} = req.body;

  try {
    PartyTypesDbController.addPartyType(typeName);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

const removePartyTypeById = async (req, res, next) => {
  const {typeId} = req.body;

  try {
    PartyTypesDbController.removePartyTypeById(typeId);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    status: 200,
    data: [{message: 'Successfull'}],
  });
};

module.exports = {getPartyTypes, addPartyType, removePartyTypeById};
