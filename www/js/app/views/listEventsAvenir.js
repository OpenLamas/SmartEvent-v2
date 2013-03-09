define([
	'app/views/eventAvenir'
],

function(EventView){
	var listEventsAvenirView = Backbone.View.extend({
		el: '#eventAvenir',
		events: {

		},

		initialize: function(){
			this.collection.on('add', this.render, this);
		},

		render: function(){
			var self = this
				$el = $(this.el);
			this.collection.each(function (event){
				var item = new EventView({ model: event});
				$el.append(item.render().el);
			});
			$el.append('<li><a href="#">Voir tout &raquo;</a></li>'); //On ajoute le lien à la fin de la liste
			return this;
		}
	});

	return listEventsAvenirView
});