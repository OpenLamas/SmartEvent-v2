// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  JQuery(function() {
    var Event, Session, SessionRouteur, SessionView, router;
    Event = (function(_super) {

      __extends(Event, _super);

      function Event() {
        return Event.__super__.constructor.apply(this, arguments);
      }

      Event.prototype.initialize = function() {
        this.url = "/api/event/" + this.id;
        return console.log("Nouvel event !");
      };

      return Event;

    })(Backbone.Model);
    Session = (function(_super) {

      __extends(Session, _super);

      function Session() {
        return Session.__super__.constructor.apply(this, arguments);
      }

      Session.prototype.model = Event;

      Session.prototype.url = "/api/events";

      Session.prototype.initialize = function() {
        return console.log("Nouvelle session !");
      };

      return Session;

    })(Backbone.Collection);
    SessionView = (function(_super) {

      __extends(SessionView, _super);

      function SessionView() {
        return SessionView.__super__.constructor.apply(this, arguments);
      }

      SessionView.prototype.el = $('#session');

      SessionView.prototype.initialize = function() {
        this.template = _.template($("#template-events").html());
        _.bindAll(this, 'render');
        return this.model.bind('change', render);
      };

      SessionView.prototype.render = function() {
        var renderedCont;
        renderedCont = this.template(this.model.toJSON());
        $(this.el).html(renderedCont);
        return this;
      };

      return SessionView;

    })(Backbone.View);
    SessionRouteur = (function(_super) {

      __extends(SessionRouteur, _super);

      function SessionRouteur() {
        return SessionRouteur.__super__.constructor.apply(this, arguments);
      }

      SessionRouteur.prototype.initialize = function() {
        var session;
        session = new Session();
        this.session.fetch();
        this.sessionView = new SessionView({
          collection: session
        });
        return this.sessionView.render();
      };

      return SessionRouteur;

    })(Backbone.Router);
    router = new SessionRouter();
    return Backbone.history.start();
  });

}).call(this);
