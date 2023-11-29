const express = require('express');
const {check} = require('express-validator');

const {login} = require('../controllers/user-controller');

const router = new express.Router();

router.post(
  '/login',
  [
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6}),
  ],
  login,
);

module.exports = router;
