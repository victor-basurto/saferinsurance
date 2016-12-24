// dependency variables
const express = require('express');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const multer = require('multer');
const logger = require('morgan');
const nodemailer = require('nodemailer');

// environment variables
require("dotenv").load();
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000
const secret = process.env.SESSION_SECRET;

// routing variables
const routes = require('./app/routes/index');
const users = require('./app/routes/users');
const api = require('./app/routes/api');

// database variables
const mongodbUri = process.env.MLAB_URI
const options = {
  server: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  }
};

// express application
const app = express();

// database connection setup
mongoose.Promise = global.Promise;
mongoose.connect(mongodbUri, options);
const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

// database correctly setup
conn.once('open', function() {
  console.log("Connected to Database.");

  // view engine middleware
  app.set('views', __dirname + '/app/views');
  app.set('view engine', 'ejs');

  // http middleware
  app.use(methodOverride('X-HTTP-Method-Override'));

  // logger middleware
  app.use(logger('dev'));

  // parser middleware
  const parser = {
    body: bodyParser,
    cookie: cookieParser
  };
  app.use(parser.body.json({type: 'application/vnd.api+json' }));
  app.use(parser.body.urlencoded({ extended: false }));
  app.use(parser.cookie());

  // folders middleware
  app.use(express.static(path.join(__dirname + '/public')));

  // session middleware
  app.use(session({
    secret: secret,
    saveUninitialized: true,
    resave: true
  }));

  // flash middleware
  app.use(flash());
  app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });

  // route middleware
  app.use('/', routes);
  app.use('/users', users);
  app.use('/api', api);

  // port middleware
  app.set('port', port);

  // check environment type
  if (env === 'production') {
    // force SSL route in production
    // app.get('*', function(req, res, next){
    //   res.redirect('' + req.url)
    // });
    console.log('Starting production server..');
  } else {
    console.log('Starting development server..');
  };

  // server construction
  http.createServer(app).listen(app.get('port'), function() {
    console.log('There\'s magic on port ' + app.get('port'));
  });

});

// file export
exports = module.exports = app;