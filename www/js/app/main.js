define([
	'app/views/listEventsAvenir',
  'app/views/listSessionsEnCours',
  'app/views/nombreEventsAvenir',
  'app/views/nomUser',
  'app/routes',

  /*DEBUG*/
  'app/models/event',
  'app/collections/eventsAvenir',
  'app/models/session',
  'app/collections/sessionsEnCours',
  'app/models/user'
], 

function(ListEventsAvenir, ListSessionsEnCours, NombreEventsAvenir, NomUser, Routes, Event, EventsAvenir, Session, SessionsEnCours, User) {
  var App = function() {

    this.routes = new Routes(this);
    Backbone.history.start();
    this.models.event1 = new Event({id: "001", title: "Metropolis", date: "12 Jan"});
    this.models.event2 = new Event({id: "002", title: "Inception", date: "16 Fev"});
    this.models.event3 = new Event({id: "003", title: "Pro Git", date: "21 Fev"});
    this.models.event4 = new Event({id: "004", title: "1984", date: "15 Avr"});
    this.collections.events = new EventsAvenir().add([this.models.event1, this.models.event2, this.models.event3, this.models.event4]);
    this.models.session1 = new Session({id: "101", title: "Films", inscriptionMini: 2, inscriptionEffective: 2});
    this.models.session2 = new Session({id: "102", title: "Livres", inscriptionMini: 2, inscriptionEffective: 1});
    this.collections.sessions = new SessionsEnCours().add([this.models.session1, this.models.session2]);
    this.models.user1 = new User({id: "201", nom: "Cocteau", prenom: "Jean"});

  	this.views.eventsAvenir = new ListEventsAvenir({collection: this.collections.events});
  	this.views.eventsAvenir.render();
    this.views.sessionsEnCours = new ListSessionsEnCours({collection: this.collections.sessions});
    this.views.sessionsEnCours.render();
    this.views.nombreEventsAvenir = new NombreEventsAvenir({collection: this.collections.events});
    this.views.nombreEventsAvenir.render();
    this.views.nomUser = new NomUser({model: this.models.user1});
    this.views.nomUser.render();

    

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