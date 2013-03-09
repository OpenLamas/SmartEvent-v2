define([
	'app/views/listEventsAvenir',
  'app/models/event',
  'app/collections/eventsAvenir'
], 

function(ListEventsAvenir, Event, EventsAvenir) {
  var App = function() {
    this.models.event1 = new Event({id: "001", title: "Metropolis", date: "12 Jan"});
    this.models.event2 = new Event({id: "002", title: "Inception", date: "16 Fev"});
    this.models.event3 = new Event({id: "003", title: "Pro Git", date: "21 Fev"});
    this.collections.events = new EventsAvenir().add([this.models.event1, this.models.event2, this.models.event3])
  	this.views.eventAvenir = new ListEventsAvenir({collection: this.collections.events});
  	this.views.eventAvenir.render();
  };

  App.prototype = {
  	views: {},
    models: {},
    collections: {}
  };

  console.log("C'est parti !");
  return App;
});