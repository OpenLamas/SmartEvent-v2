/* ~~~ Partie Event ~~~ */

/**
*  Module
*/

var redis = require('redis'),
    clientRed = redis.createClient(6379, "10.0.0.250");
    
/** TODO
*  emit un event lorsque la base est selectionné
*  pour n'écouté les I/O qu'�|  ce moment
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
}

/** TODO 
* faire la modif des sessions
*/
exports.modif = function(req, res){
 
}

exports.suppr = function (req, res){
  console.log("Request: del session "+req.params.id);
  var tailleSet = clientRed.scard("session:"+req.params.id, redis.print);
  for(var i=1;i<tailleSet+1;i++){
    clientRed.spop("session:"+req.params.id, function(err, reply){
      if(!err){
        clientRed.del("event:"+reply, redis.print);
        clientRed.srem("global:events", reply, redis.print); 
      }
    });
  }
}

exports.nouv = function(req, res){
  clientRed.get("sessions:nextId", function(err, id){
    if(!err){
      console.log("New session ! id: "+id);
      clientRed.incr("sessions:nextId", redis.print);
      clientRed.hmset("session:"+id, req.body, redis.print);
      clientRed.hset("session:"+id, "id", id, redis.print);
      clientRed.sadd("global:sessions", id, redis.print);
    }
  });
}

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
}
