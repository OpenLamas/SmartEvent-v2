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
      this.collection.on('listSessions:ok', this.render, this);
      this.collection.on('listSessions:fail', this.renderFail, this);
    },

    render: function(){
      this.setEl();
      
      var $el = $(this.el);
      $el.html("");
      
      this.collection.each(function (event){
        var item = new EventView({ model: event});
        $el.append(item.render().el);
      });
      return this;
    },

    renderFail: function(){
      this.setEl();
      $(this.el).html("Aucune session en cours");
      return this;
    },

    setEl: function(){
      this.el = $('#sessionsEnCours');
    }
  });

  return listEventsAvenirView
});