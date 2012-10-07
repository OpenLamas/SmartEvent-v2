/* ~~~ Partie Event ~~~ */

exports.view = function(req, res){
  clientRed.hgetall("event:"+req.params.id, function (err, reply){
    if(!err){
      console.log("Request: Event "+req.params.id);
      res.send(reply);
    }
    else{
      console.log("Error : "+ err);
      res.send(500);
    }
  });
});

exports.modif =  function(req, res){
  console.log("Request: modif event "+req.params.id);
  clientRed.hmset("event:"+req.params.id, req.body, redis.print);
  res.send(200);
});

exports.suppr = function (req, res){
  console.log("Request: del event "+req.params.id);
  clientRed.del("event:"+req.params.id, redis.print); // On supprime l'event
  clientRed.srem("global:events", req.params.id, redis.print) // On l'enlève du set
  res.send(200);
});

exports.new = function(req, res){
  clientRed.get("events:nextId", function (err, id){ // On récup l'id de notre nouvel event
    if(!err){
      console.log("New event ! id:"+id); 
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
});

exports.viewAll = function (req, res){
  clientRed.smembers("global:events", function (err, reply){
    console.log("Request : all events");
    if(!err){ 
      var waiting = 0;
      var listEvents = new Array();
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
      console.log("Error : "+ id);
      res.send(500);
    }
  });
});