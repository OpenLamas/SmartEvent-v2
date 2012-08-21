/**
 * Module dependencies
 */
var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    mongoose = require('mongoose'),
    twig = require("twig");

var app = express.createServer();

// Database

mongoose.connect('mongodb://localhost/ecomm_database');

// Config

app.configure(function () {
  app.set('view engine', 'twig');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

  app.set("twig options", { 
    strict_variables: false
  });
});

app.register('twig', twig);

/* API */
var Schema = mongoose.Schema;

var Event = new Schema({
  nom: { type: String, required: true},
  description: { type: String, required: true},
  dateDebut: { type: Date, required: true},
  dateFin: { type: Date, required: true},
  emplacement: { type: String, required: true}
});

var eventModel = mongoose.model('Event', Event);

app.get('/api/events', function (req, res) {
  return eventModel.find(function (err, events) {
    if(!err){
      return res.send(events);
    }

    else{
      return console.log(err);
    }
  });
});

app.post('/api/events', function(req, res){
  var event;
  console.log("POST: ");
  console.log(req.body);
  event = new eventModel({
    nom: req.body.nom,
    description: req.body.description,
    dateDebut: req.body.dateDebut,
    dateFin: req.body.dateFin,
    emplacement: req.body.emplacement
  });
  event.save(function (err) {
    if(!err){
      return console.log("created");
    }
    else{
      return console.log(err);
    }
  });
  return res.send(event);
});

app.get('/api/events/:id', function (req, res){
  return eventModel.findById(req.params.id, function (err, event){
    if(!err){
      return res.send(event);
    }
    else{
      return console.log(err);
    }
  });
});

app.put('/api/events/:id', function (req, res){
  return eventModel.findById(req.params.id, function (err, event){
    event.nom = req.body.nom;
    event.description =  req.body.description;
    event.dateDebut = req.body.dateDebut;
    event.dateFin = req.body.dateFin;
    event.emplacement = req.body.emplacement;
    return event.save(function (err){
      if(!err){
        console.log("Updated");
      }
      else{
        console.log(err);
      }
      return res.send(event);
    });
  });
});

app.delete('/api/events/:id', function (req, res) {
  return eventModel.findById(req.param.id, function (err, event){
    return event.remove(function (err) {
      if(!err){
        console.log("removed");
        return res.send('');
      }
      else{
        console.log(err);
      }
    });
  });
});

/* Vu */

var template = twig({
  id: "home",
  href: "view/home.twig",
  async: false,
})

app.get('/', function(req, res){
  var data = { 'site_root': '/', 'cur_user': {'right': 'ADMIN', 'login': 'jeanPo', 'nomutilisateur': 'Polate', 'prenomutilisateur': 'Jean'}};
 return res.send(twig({ref: "home"}).render(data));
};
// Launch server

app.listen(8080);
