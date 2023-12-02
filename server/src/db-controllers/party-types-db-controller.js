const HttpError = require('../models/http-error');
const PartyTypes = require('../models/party-types');

class PartyTypesDbController {
  constructor() {
    this.partyTypesModel = new PartyTypes();
  }

  getPartyTypeById = async id => {
    let partyType;

    try {
      partyType = await this.partyTypesModel.findById(id);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return partyType;
  };

  getPartyTypes = async () => {
    let partyTypes;

    try {
      partyTypes = await this.partyTypesModel.find();
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return partyTypes;
  };

  addPartyType = async typeName => {
    try {
      await this.partyTypesModel.add(typeName);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  removePartyTypeById = async typeId => {
    try {
      await this.partyTypesModel.removeById(typeId);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };
}

const partyTypesDbController = new PartyTypesDbController();

module.exports = partyTypesDbController;
