define([
  'app/views/listEventsAvenir',
  'app/views/listSessionsEnCours',
  'app/views/nombreEventsAvenir',

  'text!app/templates/home.html'
],

function(ListEventsAvenir, ListSessionsEnCours, NombreEventsAvenir, template){
  var HomeView = Backbone.View.extend({
    el: 'header',
    template: _.template(template),

    events: {

    },

    initialize: function(App){
      this.App = App;

      /* On instancie les vues enfants de HomeView */
      this.App.views.eventsAvenir = new ListEventsAvenir({collection: this.App.collections.events});
      this.App.views.sessionsEnCours = new ListSessionsEnCours({collection: this.App.collections.sessions});
      this.App.views.nombreEventsAvenir = new NombreEventsAvenir({collection: this.App.collections.events});
    },

    render: function(){
      $(this.el).after(this.template()); //On rend home
      return this;
    }
  });

  return HomeView;
});