define([], function(){
	var User = Backbone.Model.extend({

		initialize: function () {
			console.log('New user');
		}

	});

	return User;
});