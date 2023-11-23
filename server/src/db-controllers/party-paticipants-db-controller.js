const HttpError = require('../models/http-error');
const PartyParticipants = require('../models/party-participants');

class PatyPaticipantsDbController {
  constructor() {
    this.partyParticipantsModel = new PartyParticipants();
  }

  getUserPartyParticipants = async id => {
    let partyParticipants;

    try {
      partyParticipants =
        await this.partyParticipantsModel.getUserPartyParticipants(id);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return partyParticipants.map(item => item.party_id);
  };

  getUserPartiesByIds = async ids => {
    let parties;

    try {
      parties = await this.partyParticipantsModel.getUserPartiesByIds(ids);
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }

    return parties;
  };
}

const patyPaticipantsDbController = new PatyPaticipantsDbController();

module.exports = patyPaticipantsDbController;
