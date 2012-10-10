/* ~~~ Partie Event ~~~ */

/**
*  Module
*/

var redis = require('redis'),
    clientRed = redis.createClient(6379, "10.0.0.250");
    //fs = require('fs');

/** TODO
*  emit un event lorsque la base est selectionné
*  pour n'écouté les I/O qu'à ce moment
*/
clientRed.send_command("SELECT", [1], redis.print);

clientRed.on("error", function (err){
  console.log("Error : " + err);
});

exports.view = function(req, res){
  clientRed.hgetall("event:"+req.params.id, function (err, reply){
    if(!err){
      console.log("Request: Event "+req.params.id);
      if(reply === null){
        console.log("Event doesn't exist");
        res.send(404);
      }

      else{
        res.send(reply);
      }
    }
    else{
      console.log("Error : "+ err);
      res.send(500);
    }
  });
};

exports.modif =  function(req, res){
  /*res.send(500);
  fs.writeFile('./log.txt', req.body);*/
  //console.log(req);

  /** FIXME
  *  req.body vide
  *  n'arrive pas a récup les param envoyé par le client
  */
  clientRed.hmset("event:"+req.params.id, req.body, function (err){
    if(!err){
      console.log("Request: modif event "+req.params.id);
      res.send(200);
    }
    else{
      res.send(500);
      console.log("(event.modif) | " + err);
    }
  });
};

exports.suppr = function (req, res){
  console.log("Request: del event "+req.params.id);
  clientRed.del("event:"+req.params.id, redis.print); // On supprime l'event
  clientRed.srem("global:events", req.params.id, redis.print); // On l'enlève du set
  res.send(200);
};

exports.nouv = function(req, res){
  clientRed.get("events:nextId", function (err, id){ // On récup l'id de notre nouvel event
    if(!err){
      console.log("New event ! id:" + id);
      clientRed.incr("events:nextId", redis.print); // On incrémante pour le suivant
      clientRed.hmset("event:"+id, req.body, redis.print); // on crée le hash event:id
      clientRed.hset("event:"+id, "id", id, redis.print); // on ajoute l'id de l'event au hash
      clientRed.sadd("global:events", id, redis.print); // on ajoute l'id au set
      res.send(201, { id : id});
    }
    else{
      console.log("Error : "+ err);
      res.send(500);
    }
  });
};

exports.viewAll = function (req, res){
  clientRed.smembers("global:events", function (err, reply){
    console.log("Request : all events");
    if(!err){
      var waiting = 0;
      var listEvents = [];
      for(var i=0; i<reply.length;i++){
        waiting ++;
        clientRed.hgetall("event:"+reply[i], function (err, event){
          waiting --;
          if(!err){
            listEvents.push(event);
            if(!waiting){
              res.send(listEvents);
            }
          }
          else{
            console.log("Error : "+err);
            res.send(500);
          }
        });
      }
    }
    else{
      console.log("Error : "+ err);
      res.send(500);
    }
  });
};