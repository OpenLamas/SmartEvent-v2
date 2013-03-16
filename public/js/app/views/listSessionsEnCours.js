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
    },

    render: function(){
      var $el = $(this.el);
      $el.html("");
      
      this.collection.each(function (event){
        var item = new EventView({ model: event});
        $el.append(item.render().el);
      });
      return this;
    }
  });

  return listEventsAvenirView
});