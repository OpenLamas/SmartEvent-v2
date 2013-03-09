define([
	'app/views/eventsAvenir'
], 

function(eventAvenirView) {
  var App = function() {
  	this.views.eventAvenir = new eventAvenirView();
  	this.views.eventAvenir.render();
  };

  App.prototype = {
  	views: {}
  };

  console.log("C'est parti !");
  return App;
});