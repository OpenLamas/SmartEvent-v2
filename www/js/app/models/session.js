define([], function(){
	var Session = Backbone.Model.extend({

		initialize: function () {
			console.log('New session');
		}

	});

	return Session;
});