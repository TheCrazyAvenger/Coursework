const Parties = require('../models/Parties');
const HttpError = require('../models/http-error');
const PartyTypes = require('../models/party-types');

class GroupClassesDbController {
  constructor() {
    this.partiesModel = new Parties();
    this.partyTypesModel = new PartyTypes();
  }

  getParties = async sort => {
    let parties;

    try {
      parties = await this.partiesModel.find(sort);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    try {
      await Promise.all(
        parties.map(async item => {
          const pureTypeId = item.type_id;
          item.pure_type_id = pureTypeId;
          const typeId = await this.partyTypesModel.findById(item.type_id);
          item.type_id = typeId;

          return item;
        }),
      );
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return parties;
  };

  getPartyById = async id => {
    let party;

    try {
      party = await this.partiesModel.findById(id);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return party;
  };

  addParty = async partyData => {
    let party;

    try {
      party = await this.partiesModel.add(partyData);
      return party;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  updateParty = async partyData => {
    try {
      await this.partiesModel.update(partyData);
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  removeParty = async partyId => {
    let party;

    try {
      party = await this.partiesModel.remove(partyId);
      return party;
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };
}

const groupClassesDbController = new GroupClassesDbController();

module.exports = groupClassesDbController;
