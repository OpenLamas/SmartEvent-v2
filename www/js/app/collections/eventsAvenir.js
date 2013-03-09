define([
	'app/models/event'
], function(Event){
	var EventsAvenir = Backbone.Collection.extend({
		model: Event,
		initialize: function(){
			console.log("New eventsAvenir");
		}
	});

	return EventsAvenir;
});