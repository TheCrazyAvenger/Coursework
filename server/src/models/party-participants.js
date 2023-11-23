const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class PartyParticipants {
  getUserPartyParticipants = async id => {
    try {
      const partyParticipants = await pool.query(
        'SELECT * FROM party_participants WHERE student_id = $1',
        [25],
      );
      return partyParticipants.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };

  getUserPartiesByIds = async ids => {
    try {
      const partyParticipants = await pool.query(
        'SELECT * FROM dance_parties WHERE party_id = ANY($1)',
        [ids],
      );
      return partyParticipants.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = PartyParticipants;
