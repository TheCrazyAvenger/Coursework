const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class PartyTypes {
  find = async () => {
    try {
      const allPartyTypes = await pool.query('SELECT * FROM party_types');
      return allPartyTypes.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  add = async typeName => {
    try {
      await pool.query(
        `INSERT INTO party_types (Type_Name)
         VALUES
          ($1)`,
        [typeName],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  removeById = async id => {
    try {
      await pool.query('DELETE FROM party_types WHERE type_id = $1', [id]);
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  findById = async id => {
    try {
      const partyType = await pool.query(
        'SELECT * FROM party_types WHERE type_id = $1',
        [id],
      );
      return partyType.rows[0].type_name;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = PartyTypes;
