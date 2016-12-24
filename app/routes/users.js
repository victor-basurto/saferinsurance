const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const path = require('path');

// model variables
// var User = require('./../models/user');

// route middleware
router.use(function(req, res, next) {
  next();
});

// api root

router.route('/')
  .get(function(req, res) {
    res.json({
      message: 'This is the Safer Insurance User API'
    });
  });

// export api
module.exports = router;