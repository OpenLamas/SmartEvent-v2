requirejs.config({
  baseUrl: 'js',

  paths: {
  	text: 'lib/text'
  },

  shim: {
  	'lib/jquery' : {
  		exports: '$'
  	},
  	'lib/underscore' : {
  		exports: '_'
  	},
  	'lib/backbone': {
  		deps: ['lib/underscore'],
  		exports: 'Backbone'
  	},
  	'app/main': {
  		deps: ['lib/underscore', 'lib/backbone', 'lib/jquery']
  	}
  }
});

require(['app/main'],

function(App) {
  window.smartEvent = new App();
});
