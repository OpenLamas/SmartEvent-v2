/**
*  Module
*/
var express = require('express'),
    application_root = __dirname,
    redis = require('redis');

var app = express.createServer(),
    clientRed = redis.createClient();

clientRed.on("error", function (err){
  console.log("Error : " + err);
});

  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(application_root + '/client'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

app.get("/api/event/:id", function(req, res){
  clientRed.hgetall("event:"+req.params.id, function (err, reply){
    if(!err){
      console.log("Event "+req.params.id+" requested");
      res.send(reply);
    }
    else{
      console.log("Error : "+ err);
      res.send(500);
    }
  });
});

app.put("/api/event/:id", function(req, res){
  clientRed.hmset("event:"+req.params.id, req.body, redis.print);
  res.send(200);
});

app.delete("/api/event/:id", function (req, res){
  clientRed.del("event:"+req.params.id, redis.prinnt);
  res.send(200);
});

app.post("/api/events", function(req, res){
  clientRed.get("events:nextId", function (err, id){ // On récup l'id de notre nouvel event
    if(!err){
      console.log("New event ! id:"+id); 
      clientRed.incr("events:nextId", redis.print); // On incrémante pour le suivant
      clientRed.hmset("event:"+id, req.body, redis.print);
      res.send(201, '{ id : '+id+'}');
    }
    else{
      console.log("Error : "+ err);
      res.send(500);
    }
  });
});

app.get('/api/events', function (req, res){
  clientRed.get("events:nextId", function (err, id){
    if(!err){
      console.log("Reply :"+ id);
      res.send('id : ' + id);
    }
    else{
      console.log("Error : "+ id);
      res.send(500);
    }
  });
});

var port = 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
