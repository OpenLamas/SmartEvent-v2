define([
  'app/views/sessionEnCours',
  'text!app/templates/nombreEventsAvenir.html'
],

function(EventView, template){
  var nombreEventsAvenir = Backbone.View.extend({
    el: 'p',
    template: _.template(template),
    events: {

    },

    initialize: function(){
      this.collection.on('add', this.render, this);
      this.collection.on('remove', this.render, this);
      this.collection.on('nbEvents', this.render, this);
    },

    render: function(){
      $(this.el).html(this.template({nbEvents: this.collection.length}));
      return this;
    }
  });

  return nombreEventsAvenir;
});