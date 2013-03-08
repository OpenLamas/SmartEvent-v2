requirejs.config({
  baseUrl: 'js',

  paths: {
  },

  shim: {
  }
});

require(['app/main'],

function(App) {
  window.bTask = new App();
});
