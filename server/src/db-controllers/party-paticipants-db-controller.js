const HttpError = require('../models/http-error');
const PartyParticipants = require('../models/party-participants');
const PartyTypes = require('../models/party-types');

class PatyPaticipantsDbController {
  constructor() {
    this.partyParticipantsModel = new PartyParticipants();
    this.partyTypesModel = new PartyTypes();
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

  getUserPartiesByIds = async (ids, partiesIds) => {
    let parties;

    try {
      parties = await this.partyParticipantsModel.getUserPartiesByIds(
        ids,
        partiesIds,
      );
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

  addStudentPartySchedule = async (studentId, partyId) => {
    try {
      await this.partyParticipantsModel.addStudentPartySchedule(
        studentId,
        partyId,
      );
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };

  removeStudentPartySchedule = async (studentId, partyId) => {
    try {
      await this.partyParticipantsModel.removeStudentPartySchedule(
        studentId,
        partyId,
      );
    } catch (e) {
      const error = new HttpError('Something went wrong.', 500);
      throw error;
    }
  };
}

const patyPaticipantsDbController = new PatyPaticipantsDbController();

module.exports = patyPaticipantsDbController;
