/**
*  Module
*/
var express = require('express'),
    app = express(),
    application_root = __dirname,
    events = require('./routes/events');
    //sessions = require('./routes/sessions')

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(application_root + '/client'));
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

app.get("/api/event/:id", events.view);
app.put("/api/event/:id", events.modif);
app.delete("/api/event/:id", events.suppr);
app.post("/api/events", events.nouv);
app.get('/api/events', events.viewAll);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
