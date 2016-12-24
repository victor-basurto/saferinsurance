const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const path = require('path');

// model variables
// var Thing1 = require('./../models/thing1');
// var Thing2 = require('./../models/thing2');

// route middleware
router.use(function(req, res, next) {
  next();
});

// api root

router.route('/')
  .get(function(req, res) {
    res.json({
      message: 'This is the Safer Insurance API'
    });
  });

// basic json getters

/*
 router.route('/sidenav.json')
  .get(function(req, res){
    res.sendFile(path.resolve('./app/data/sidenav.json'));
  });
*/

// thing1s api

/*
router.route('/thing1s')
  // create a thing1
  .post(function(req, res) {
    // new thing1 instance
    var thing1 = new Thing1();

    // store thing1 data
    storeThing1(thing1, req);

    // save thing1 data
    thing1.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({
        message: 'Thing1 created!'
      });
    });
  })

  // get all thing1s
  .get(function(req, res) {
    Thing1.find(function(err, thing1s) {
      if (err) {
        res.send(err);
      }
      res.json(thing1s);
    });
  });

router.route('/thing1s/:thing1_id')
  // get a thing1
  .get(function(req, res) {
    Thing1.findById(req.params.thing1_id, function(err, thing1) {
      if (err) {
        res.send(err);
      }
      res.json(thing1);
    });
  })

  // update thing1
  .put(function(req, res) {
    Thing1.findById(req.params.thing1_id, function(err, thing1) {
      if (err) {
        res.send(err);
      }

      // store thing1 data
      storeThing1(thing1, req);

      // save thing1 data
      thing1.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Thing1 updated!' });
      });
    });
  })
  .delete(function(req, res) {
    Thing1.remove({
      _id: req.params.thing1_id
    }, function(err, thing1) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Thing1 successfully deleted' });
    });
  });

// helper to store thing1 to model
function storeThing1(thing1, req) {
  thing1.name = req.body.name;
}
*/

// export api
module.exports = router;