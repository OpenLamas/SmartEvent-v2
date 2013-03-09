define([
	'app/models/session'
], 

function (Session){
	var SessionEnCours = Backbone.Collection.extend({
		model: Session,
		initialize: function(){
			console.log("New sessionEnCours");
		}
	});

	return SessionEnCours;
});