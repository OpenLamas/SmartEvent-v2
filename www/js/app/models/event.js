define(function(){
	var Event = Backbone.Model.extend({

		initialize: function Event(){
			console.log("New event");
		}
	});

	return Event;
});