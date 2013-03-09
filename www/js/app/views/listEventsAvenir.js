define([
  'app/views/eventAvenir'
],

function(EventView){
  var listEventsAvenirView = Backbone.View.extend({
    el: '#eventAvenir',
    events: {

    },

    initialize: function(){
      this.collection.on('add', this.render, this);
    },

    render: function(){
      var self = this
        $el = $(this.el);
      _.each(this.collection.first(3), function(event){ // On prend au maximum les trois premier event de la collection
        var item = new EventView({ model: event});
        $el.append(item.render().el);
      });
      $el.append('<li><a href="#">Voir tout &raquo;</a></li>'); //On ajoute le lien à la fin de la liste
      return this;
    }
  });

  return listEventsAvenirView
});