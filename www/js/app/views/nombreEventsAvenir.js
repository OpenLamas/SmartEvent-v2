define([
	'app/views/sessionEnCours'
],

function(EventView){
	var listEventsAvenirView = Backbone.View.extend({
		el: '#nombreEventsAvenir',
		events: {

		},

		initialize: function(){
			this.collection.on('add', this.render, this);
			console.log("New nombreEventsAvenir");
		},

		render: function(){
			$el = $(this.el);
			$el.html(this.collection.length);
			return this;
		}
	});

	return listEventsAvenirView
});