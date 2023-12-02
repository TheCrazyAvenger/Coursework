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

  addInstructorClasses = async (instructorId, classId) => {
    let instructor;
    if (classId) {
      try {
        instructor = await pool.query(
          `INSERT INTO instructors_for_classes (instructor_id, class_id)
           VALUES
            ($1, $2)
            RETURNING instructor_id`,
          [instructorId, classId],
        );
        return instructor.rows[0].instructor_id;
      } catch (e) {
        console.log(e);
        const error = new HttpError('Something went wrong', 500);
        throw error;
      }
    }
  };

  removeById = async id => {
    try {
      await pool.query(
        'DELETE FROM instructors_for_classes WHERE instructor_id = $1',
        [id],
      );
      await pool.query(
        'DELETE FROM instructors_for_parties WHERE instructor_id = $1',
        [id],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  findById = async id => {
    try {
      const insctructorClasses = await pool.query(
        'SELECT FROM instructors_for_classes WHERE instructor_id = $1',
        [id],
      );
      const instructorParties = await pool.query(
        'SELECT FROM instructors_for_parties WHERE instructor_id = $1',
        [id],
      );

      const classes = await pool.query(
        'select * from classes WHERE class_id = $1',
        [insctructorClasses.rows[0].class_id],
      );
      const party = await pool.query(
        'select * from dance_parties WHERE party_id = $1',
        [instructorParties.rows[0].party_id],
      );

      return {class: classes.rows[0], party: party.rows[0]};
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = InstructorsForParties;
