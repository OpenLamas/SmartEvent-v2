define([

],
  function(){
    return Backbone.Router.extend({
      routes: {
        '': 'home',
        'session/:id': 'showSession'
      },

      initialize: function(App){
        this.App = App;
      },

      home: function(){
        this.App.views.home.render();

        /* Test sessions en cours */
        if(this.App.collections.sessions && this.App.collections.sessions.length){
          this.App.collections.sessions.trigger('listSessions:ok');
        }
        else{
          this.App.collections.sessions.trigger('listSessions:fail');
        }

        /* Test events à venir */
        if(this.App.collections.events && this.App.collections.events.length){
          this.App.collections.events.trigger('listEvents:ok');
        }
        else{
          this.App.collections.events.trigger('listEvents:fail');
        }

        /* Nombre events inscrit */
        this.App.collections.events.trigger('nbEvents');
      },

      showSession: function(id){
        if(this.App.collections.sessions && this.App.collections.sessions.length){
          var session = this.App.collections.sessions.get(id);
          if(session){
            session.trigger("show");
          }
        }
      }
    });
  });