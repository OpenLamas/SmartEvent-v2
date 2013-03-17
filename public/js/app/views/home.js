define([
  'app/views/listEventsAvenir',
  'app/views/listSessionsEnCours',
  'app/views/nombreEventsAvenir',

  'text!app/templates/home.html'
],

function(ListEventsAvenir, ListSessionsEnCours, NombreEventsAvenir, template){
  var HomeView = Backbone.View.extend({
    template: _.template(template),

    events: {

    },

    initialize: function(App){
      this.App = App;

      this.eventsAvenir = new ListEventsAvenir({collection: this.App.collections.events});
      this.sessionsEnCours = new ListSessionsEnCours({collection: this.App.collections.sessions});
      this.nombreEventsAvenir = new NombreEventsAvenir({collection: this.App.collections.events});
    },

    render: function(){
      $(this.el).html(this.template()); //On rend home
      $('#eventAvenir', this.el).html(this.eventsAvenir.render().el);
      $('#sessionsEnCours', this.el).html(this.sessionsEnCours.render().el);
      $('.hero-unit h1', this.el).after(this.nombreEventsAvenir.render().el);
      return this;
    }
  });

  return HomeView;
});