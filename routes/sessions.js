/* ~~~ Partie Event ~~~ */

/**
*  Module
*/

var redis = require('redis'),
    clientRed = redis.createClient(6379, "10.0.0.250");
    
/** TODO
*  emit un event lorsque la base est selectionné
*  pour n'écouté les I/O qu'à ce moment
*/
clientRed.send_command("SELECT", [1], redis.print);

clientRed.on("error", function (err){
  console.log("Error : " + err);
});

exports.view = function(req, res){
  clientRed.hgetall("session:"+req.params.id, function(err, reply){
    if(!err){
      console.log("Request: Session "+req.params.id);
      if(reply === null){
        console.log("Session doesn't exist");
        res.send(404);
      }

      else{
        res.send(reply);
      }
    }
    else{
      console.log("Error: "+ err);
      res.send(500);
    }
  });
};

/** TODO 
* faire la modif des sessions
*/
exports.modif = function(req, res){
 
};

/** TODO
* Envoyer 200 que si tous c'est bien passé (et quand tout c'est bien passé)
*/
exports.suppr = function (req, res){
  console.log("Request: del session "+req.params.id);
  var tailleSet = clientRed.scard("session:"+req.params.id+":events", redis.print); // On compte le nombre d'event assoscier à la session
  clientRed.del("session:"+req.params.id, redis.print); // On del la session en elle même
  clientRed.srem("global:sessions", req.params.id, redis.print);
  for(var i=1;i<tailleSet+1;i++){
    clientRed.spop("session:"+req.params.id+":events", function(err, reply){ // on les pop un par un
      if(!err){
        clientRed.del("event:"+reply, redis.print); // On le kill
        clientRed.srem("global:events", reply, redis.print); // Et on le vire de la liste global
      }
    });
  }
  res.send(200);
};

exports.nouv = function(req, res){
  clientRed.get("global:nextSessionId", function(err, id){
    if(!err){
      console.log("New session ! id: "+id);
      clientRed.incr("global:nextSessionId", redis.print);
      clientRed.hmset("session:"+id, req.body, redis.print);
      clientRed.hset("session:"+id, "id", id, redis.print);
      clientRed.sadd("global:sessions", id, redis.print);
      res.send({id: id}, 201);
    }
    else{
      console.log("Error: "+err);
      res.send(500);
    }
  });
};

exports.viewAll = function(req, res){
  clientRed.smembers("global:sessions", function(err, reply){
    console.log("Request : all events");
    if(!err){
      var waiting = 0;
      var listSessions = [];
      for(var i=0;i<reply.length;i++){
        waiting++;
        clientRed.hgetall("session:"+reply[i], function (err, session){
          waiting--;
          if(!err){
            listSessions.push(session);
            if(!waiting){
              res.send(listSessions, 200);
            }
          }
          else{
            console.log("Error: "+err);
            res.send(500);
          }
        });
      }
    }
    else{
      console.log("Error: "+ err);
      res.send(500);
    }
  });
};
