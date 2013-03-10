define([
  'app/views/eventAvenir'
],

function(EventView){
  var listEventsAvenirView = Backbone.View.extend({
    events: {

    },

    initialize: function(){
      this.collection.on('add', this.render, this);
      this.collection.on('remove', this.render, this);
      this.collection.on('listEvents:ok', this.render, this);
      this.collection.on('listEvents:fail', this.renderFail, this);
    },

    render: function(){
      this.setEl();
      var $el = $(this.el);

      $el.html("");
      _.each(this.collection.first(3), function(event){ // On prend au maximum les trois premier event de la collection
        var item = new EventView({ model: event});
        $el.append(item.render().el);
      });
      $el.append('<li><a href="#">Voir tout &raquo;</a></li>'); //On ajoute le lien à la fin de la liste
      return this;
    },

    renderFail: function(){
      this.setEl();

      $(this.el).html("Aucun évènement à venir");
    },

    setEl: function(){
      this.el = $('#eventAvenir');
    }
  });

  return listEventsAvenirView
});