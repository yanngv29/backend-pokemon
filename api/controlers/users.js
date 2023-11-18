
'use strict';

const users = require("../../models/users");


exports.getAll = (req, res, next) => {
  return res.status(200).json(users);
  };