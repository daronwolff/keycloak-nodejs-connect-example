// Generated by CoffeeScript 1.10.0
(function() {
  var Keycloak, app, express, keycloak, memoryStore, session;

  Keycloak = require('keycloak-connect');

  express = require('express');

  session = require('express-session');

  app = express();

  memoryStore = new session.MemoryStore();

  keycloak = new Keycloak({
    store: memoryStore
  });

  app = express();

  app.use(session({
    secret: 'p@ssw0rd@apc312nd0',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  }));

  app.get('/', function(req, resp) {
    return resp.send("Welcome to index go to <a href='/protected'>protected </a>  or <a href='/public'>public</a> section");
  });

  app.get('/public', function(req, resp) {
    return resp.send('Hey, you can read this section because this is a public resource');
  });

  app.get('/protected', keycloak.protect(), function(req, resp) {
    return resp.send('You need logued to be in this section');
  });

  app.listen(3000, function() {
    return console.log('Runnig on localhost:3000');
  });

}).call(this);
