const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const HttpError = require('../models/http-error');
const studentsDbController = require('../db-controllers/students-db-controller');
const userDbController = require('../db-controllers/user-db-controller');

const login = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new HttpError(
      'Invalid inputs past, please check your data.',
      422,
    );
    return next(error);
  }

  const {email, password} = req.body;

  let exisitingUser;

  try {
    exisitingUser = await userDbController.getUserByEmail(email);
  } catch {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500,
    );
    return next(error);
  }

  if (!exisitingUser) {
    const error = new HttpError('User with this email is not registered.', 401);

    return next(error);
  }

  let isValidPassword = false;

  try {
    isValidPassword = await bcryptjs.compare(
      password,
      exisitingUser.user_password,
    );
  } catch {
    const error = new HttpError('Wrong password, please try again.', 500);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError('Wrong password, please try again.', 401);

    return next(error);
  }

  let exisitingStudent;

  try {
    exisitingStudent = await studentsDbController.getStudentById(
      exisitingUser.student_id,
    );
  } catch {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500,
    );
    return next(error);
  }

  if (!exisitingStudent) {
    const error = new HttpError('Cannot find student.', 401);

    return next(error);
  }

  let token;
  try {
    token = await jwt.sign(
      {
        email: exisitingUser.user_login,
      },
      process.env.JWT_KEY,
    );
  } catch {
    const error = new HttpError('Logging in failed, please try again.');
    return next(error);
  }

  res.status(200).json({
    ststus: 200,
    data: {
      token,
      student: exisitingStudent,
    },
  });
};

module.exports = {login};
