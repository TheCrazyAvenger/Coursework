const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const HttpError = require('../models/http-error');
const AdminDbController = require('../db-controllers/admin-db-controller');

const loginAdmin = async (req, res, next) => {
  const errors = validationResult(req);

  const {email, password} = req.body;
  console.log(email, typeof password);
  let exisitingUser;

  try {
    exisitingUser = await AdminDbController.findAdminByEmail(email);
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
      exisitingUser.admin_password,
    );
  } catch {
    const error = new HttpError('Wrong password, please try again.', 500);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError('Wrong password, please try again.', 401);

    return next(error);
  }

  let token;
  try {
    token = await jwt.sign(
      {
        email: exisitingUser.admin_email,
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
    },
  });
};

module.exports = {loginAdmin};
