define([
	'app/views/listEventsAvenir',
  'app/views/listSessionsEnCours',
  'app/views/nombreEventsAvenir',

  /*DEBUG*/
  'app/models/event',
  'app/collections/eventsAvenir',
  'app/models/session',
  'app/collections/sessionsEnCours'
], 

function(ListEventsAvenir, ListSessionsEnCours, NombreEventsAvenir, Event, EventsAvenir, Session, SessionsEnCours) {
  var App = function() {
    this.models.event1 = new Event({id: "001", title: "Metropolis", date: "12 Jan"});
    this.models.event2 = new Event({id: "002", title: "Inception", date: "16 Fev"});
    this.models.event3 = new Event({id: "003", title: "Pro Git", date: "21 Fev"});
    this.models.event4 = new Event({id: "004", title: "1984", date: "15 Avr"});
    this.collections.events = new EventsAvenir().add([this.models.event1, this.models.event2, this.models.event3, this.models.event4]);
    this.models.session1 = new Session({id: "101", title: "Films", inscriptionMini: 2, inscriptionEffective: 2});
    this.models.session2 = new Session({id: "102", title: "Livres", inscriptionMini: 2, inscriptionEffective: 1});
    this.collections.sessions = new SessionsEnCours().add([this.models.session1, this.models.session2]);

  	this.views.eventsAvenir = new ListEventsAvenir({collection: this.collections.events});
  	this.views.eventsAvenir.render();
    this.views.sessionsEnCours = new ListSessionsEnCours({collection: this.collections.sessions});
    this.views.sessionsEnCours.render();
    this.views.nombreEventsAvenir = new NombreEventsAvenir({collection: this.collections.events});
    this.views.nombreEventsAvenir.render();
  };

  App.prototype = {
  	views: {},
    models: {},
    collections: {}
  };

  console.log("C'est parti !");
  return App;
});