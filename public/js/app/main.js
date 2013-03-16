define([
  'app/routes',

  /*DEBUG*/
  'app/models/user',
  'app/models/event',
  'app/collections/eventsAvenir',
  'app/models/session',
  'app/collections/sessionsEnCours'
],

function(Home, Session, NomUser, Routes, User, Event, EventsAvenir, Session, SessionsEnCours) {
  var App = function() {

    this.models.event1 = new Event({id: "001", title: "Metropolis", date: "12 Jan"});
    this.models.event2 = new Event({id: "002", title: "Inception", date: "16 Fev"});
    this.models.event3 = new Event({id: "003", title: "Pro Git", date: "21 Fev"});
    this.models.event4 = new Event({id: "004", title: "1984", date: "15 Avr"});
    this.collections.events = new EventsAvenir().add([this.models.event1, this.models.event2, this.models.event3, this.models.event4]);
    this.models.session1 = new Session({id: "101", title: "Films", inscriptionMini: 2, inscriptionEffective: 2});
    this.models.session2 = new Session({id: "102", title: "Livres", inscriptionMini: 2, inscriptionEffective: 1});
    this.collections.sessions = new SessionsEnCours().add([this.models.session1, this.models.session2]);
    this.models.user1 = new User({id: "201", nom: "Cocteau", prenom: "Jean"});

    this.routes = new Routes(this); //On instancie le Routeur et on lui passe le contexte courant
    Backbone.history.start({pushState: true}); //On active le routage et le pushState (fake ajout dans l'historique, HTML5 )



    /*var that = this;
    setTimeout(function(){
      that.models.session3 = new Session({id: "103", title: "Series", inscriptionMini: 2, inscriptionEffective: 1});
      that.collections.sessions.add(that.models.session3);
    }, 2500);

    setTimeout(function(){
      that.models.session3 = new Session({id: "103", title: "Series", inscriptionMini: 2, inscriptionEffective: 1});
      that.collections.sessions.remove(that.collections.sessions.get("103"));
    }, 5000);

    setTimeout(function(){
      that.collections.events.remove(that.collections.events.get("003"));
    }, 7500);*/
  };

  App.prototype = {
  	views: {},
    models: {},
    collections: {}
  };

  console.log("C'est parti !");
  return App;
});
