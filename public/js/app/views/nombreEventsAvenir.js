define([
  'app/views/sessionEnCours'
],

function(EventView){
  var listEventsAvenirView = Backbone.View.extend({
    events: {

    },

    initialize: function(){
      this.collection.on('add', this.render, this);
      this.collection.on('remove', this.render, this);
      this.collection.on('nbEvents', this.render, this);
    },

    render: function(){
      
      $(this.el).html(this.collection.length);
      return this;
    }
  });

  return listEventsAvenirView
});