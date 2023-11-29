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
}

module.exports = Parties;
