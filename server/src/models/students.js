const HttpError = require('./http-error');

const {pool} = require('../utils/postgres-helper');

class Students {
  find = async sort => {
    try {
      const allStudents = await pool.query(
        'SELECT * FROM students' + (sort ? ` ${sort}` : ''),
      );
      return allStudents.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  findById = async id => {
    try {
      const student = await pool.query(
        'SELECT * FROM students WHERE student_id = $1',
        [id],
      );
      return student.rows[0];
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
  update = async studentsData => {
    const {first_name, last_name, address, date_of_birth, student_id} =
      studentsData;

    try {
      await pool.query(
        'UPDATE students SET first_name = $1, last_name = $2, address = $3, date_of_birth =$4 WHERE student_id = $5',
        [first_name, last_name, address, date_of_birth, student_id],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };

  disableOrUnlock = async (studentId, disabled) => {
    try {
      await pool.query(
        'UPDATE students SET disabled = $1 WHERE student_id = $2',
        [disabled, studentId],
      );
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };

  getStudentClasses = async id => {
    try {
      const classes = await pool.query(
        `SELECT cs.student_id, cs.class_id, c.class_name, c.day_of_week, c.start_time, c.end_time, c.type_id, ct.type_id
      FROM class_schedule AS cs
      LEFT JOIN classes AS c ON cs.class_id = c.class_id
      LEFT JOIN class_types as ct ON ct.type_id = c.type_id
      WHERE cs.student_id = $1`,
        [id],
      );
      return classes.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };

  removeStudentSchedule = async (studentId, classId) => {
    try {
      const classes = await pool.query(
        'DELETE FROM class_schedule WHERE student_id = $1 AND class_id = $2',
        [studentId, classId],
      );
      return classes.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };

  getStudentParties = async id => {
    try {
      const parties = await pool.query(
        `SELECT pp.student_id, pp.party_id, dp.date, dp.type_id, dp.number_of_attendees, dp.entrance_fee
        FROM party_participants AS pp
        LEFT JOIN dance_parties AS dp ON pp.party_id = dp.party_id
        WHERE pp.student_id = $1`,
        [id],
      );

      return parties.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };

  removeStudentParticipant = async (studentId, partyId) => {
    try {
      const parties = await pool.query(
        'DELETE FROM party_participants WHERE student_id = $1 AND party_id = $2',
        [studentId, partyId],
      );
      return parties.rows;
    } catch (e) {
      console.log(e);
      const error = new HttpError('Something went wrong', 500);
      throw error;
    }
  };
}

module.exports = Students;
