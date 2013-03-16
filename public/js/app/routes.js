define([
  'app/views/home',
  'app/views/layout'
],
  function(HomeView, LayoutView){
    return Backbone.Router.extend({
      routes: {
        '': 'home',
        'session/:id': 'showSession'
      },

      initialize: function(App){
        console.log("Router !");
        this.App = App;
        this.layoutView = new LayoutView({model: this.App.user});
        this.layoutView.render();
        $('#main').html(this.layoutView.el);
      },

      home: function(){
        if (!this.homeView) {
          this.homeView = new HomeView(this.App);
          this.homeView.render();
        } 
        else {
          this.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        $('#app').html(this.homeView.el);
      },

      showSession: function(id){
        /*console.log(this.App.views.session);
        if(this.App.collections.sessions && this.App.collections.sessions.length){
          var session = this.App.collections.sessions.get(id);
          if(session){
            this.App.views.session.render();
            //session.trigger("show");*/
          }
        }
      }
    });
  });

        /*this.App.views.home.render();

        /* Test sessions en cours 
        if(this.App.collections.sessions && this.App.collections.sessions.length){
          this.App.collections.sessions.trigger('listSessions:ok');
        }
        else{
          this.App.collections.sessions.trigger('listSessions:fail');
        }

        /* Test events à venir 
        if(this.App.collections.events && this.App.collections.events.length){
          this.App.collections.events.trigger('listEvents:ok');
        }
        else{
          this.App.collections.events.trigger('listEvents:fail');
        }

        /* Nombre events inscrit 
        this.App.collections.events.trigger('nbEvents');*/