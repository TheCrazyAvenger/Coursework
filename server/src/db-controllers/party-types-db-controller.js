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
}

const partyTypesDbController = new PartyTypesDbController();

module.exports = partyTypesDbController;
