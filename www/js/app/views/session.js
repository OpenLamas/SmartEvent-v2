define([
  'text!app/templates/session.html'
],

function(template){
  var SessionView = Backbone.View.extend({
    el: 'header',
    template: _.template(template),

    events: {

    },

    initialize: function(App){
      this.App = App;
    },

    render: function(){
      $(this.el).after(this.template()); //On rend home
      return this;
    }
  });

  return SessionView;
});