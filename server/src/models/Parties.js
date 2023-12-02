const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class Parties {
  find = async () => {
    try {
      const allPartiesTypes = await pool.query('SELECT * FROM dance_parties');
      return allPartiesTypes.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  findById = async id => {
    try {
      const party = await pool.query(
        `SELECT i.instructor_id, i.first_name, i.last_name, i.type, dp.date,dp.number_of_attendees, dp.entrance_fee, pt.type_name
        FROM dance_parties AS dp
        LEFT JOIN party_types AS pt ON pt.type_id = dp.type_id
        LEFT JOIN instructors_for_parties AS ip ON ip.party_id = dp.party_id
        LEFT JOIN instructors AS i ON i.instructor_id = ip.instructor_id
        WHERE dp.party_id = $1`,
        [id],
      );
      return party.rows[0];
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  add = async partyData => {
    let parties;
    const {date, number_of_attendees, entrance_fee, type_id} = partyData;

    try {
      parties = await pool.query(
        `INSERT INTO dance_parties (date, number_of_attendees, entrance_fee, type_id)
         VALUES
          ($1, $2, $3, $4)
          RETURNING party_id`,
        [date, number_of_attendees, entrance_fee, type_id],
      );
      return parties.rows[0].party_id;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  remove = async partyId => {
    let party;

    try {
      party = await pool.query(
        'DELETE FROM dance_parties WHERE party_id = $1 RETURNING party_id',
        [partyId],
      );
      return party.rows[0].party_id;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  update = async partyData => {
    const {date, number_of_attendees, entrance_fee, type_id, party_id} =
      partyData;

    try {
      await pool.query(
        'UPDATE dance_parties SET date = $1, number_of_attendees = $2, entrance_fee = $3, type_id = $4 WHERE party_id = $5',
        [date, number_of_attendees, entrance_fee, type_id, party_id],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = Parties;
