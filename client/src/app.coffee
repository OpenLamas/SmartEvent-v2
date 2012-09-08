JQuery ->
  class Event extends Backbone.Model
    initialize: ->
      @url = "/api/event/#{@id}"
      console.log "Nouvel event !"

  class Session extends Backbone.Collection
    model: Event
    url: "/api/events"

    initialize: ->
      console.log "Nouvelle session !"

  class SessionView extends Backbone.View
    el: $ '#session'
    initialize: ->
      @template = _.template $("#template-events").html()
      _.bindAll @, 'render'
      @model.bind 'change', render

    render: ->
      renderedCont = @template @model.toJSON()
      $(@el).html renderedCont;
      @

  class SessionRouteur extends Backbone.Router
    initialize: ->
      session = new Session()
      @session.fetch()

      @sessionView = new SessionView collection: session
      @sessionView.render()

  router = new SessionRouter()

  Backbone.history.start()
