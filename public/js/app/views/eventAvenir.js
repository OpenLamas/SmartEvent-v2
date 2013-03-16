define([
	'text!app/templates/eventAvenir.html'
],

function(template){
	var EventAvenirView = Backbone.View.extend({
		template: _.template(template),
		tagName: 'li',
		events: {

		},

		initialize: function(){
			this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
		},

		render: function(){
			this.$el.html(this.template(this.model.attributes));

			return this;
		}
	});

	return EventAvenirView
});