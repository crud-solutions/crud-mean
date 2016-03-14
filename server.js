'use strict';

// External Modules/Packages Required
var express  = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var colours = require('colors');
var logger   = require('morgan');
require('colors');

// Internal App Modules/Packages Required
var routes = require('./server/routes.js');

// Create a new application with Express
var app = express();

// Set the Port
app.set('port', process.env.PORT || 4000);

// Serve the static index.html from the public folder
app.use(express.static(__dirname + '/public'));

// Use Middleware
app.use(logger('dev')); //log every request in dev mode only to the console

//parse application/json
app.use(bodyParser.json()); //needed for req.body

// ROUTES - using Express
routes(app);

// Create HTTP Server using Express
var server = http.createServer(app);

// Bind to a port and listen for connections on it
server.listen(app.get('port'), function() {
  console.log('Express HTTP server listening on port ' . red + app.get('port'));
});
