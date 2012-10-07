/**
*  Module
*/
var express = require('express'),
    application_root = __dirname,
    event = require('./route/event'),
    session = require('./route/session'),
    redis = require('redis');

var app = express(),
  clientRed = redis.createClient(6379, 10.0.0.80, );

clientRed.on("error", function (err){
  console.log("Error : " + err);
});

  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(application_root + '/client'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

app.get("/api/event/:id", event.view);
app.put("/api/event/:id", event.modif);
app.delete("/api/event/:id", event.suppr);
app.post("/api/events", event.new);
app.get('/api/events', event.viewAll);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
