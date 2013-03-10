define(
  function(){
    return Backbone.Router.extend({
      routes: {
        'session/:id': 'showSession'
      },

      initialize: function(parent){
        this.App = parent;
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