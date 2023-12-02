const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class InstructorsForParties {
  remove = async classId => {
    try {
      await pool.query(
        'DELETE FROM instructors_for_classes WHERE class_id = $1',
        [classId],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  removeInstructorForParties = async partyId => {
    try {
      await pool.query(
        'DELETE FROM instructors_for_parties WHERE party_id = $1',
        [partyId],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = InstructorsForParties;
