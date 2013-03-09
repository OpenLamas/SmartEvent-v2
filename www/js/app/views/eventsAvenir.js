define([
	'text!app/templates/eventsAvenir.html'
],

function(template){
	var EventAvenirView = Backbone.View.extend({
		el: '#eventAvenir',
		template: _.template(template),

		events: {

		},

		initialize: function(){

		},

		render: function(){
			this.$el.html(this.template());
			return this;
		}
	});

	return EventAvenirView
});