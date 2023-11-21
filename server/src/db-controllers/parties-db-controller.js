const Parties = require('../models/Parties');
const HttpError = require('../models/http-error');
const PartyTypes = require('../models/party-types');

class GroupClassesDbController {
  constructor() {
    this.partiesModel = new Parties();
    this.partyTypesModel = new PartyTypes();
  }

  getParties = async () => {
    let parties;

    try {
      parties = await this.partiesModel.find();
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    try {
      await Promise.all(
        parties.map(async item => {
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
}

const groupClassesDbController = new GroupClassesDbController();

module.exports = groupClassesDbController;
