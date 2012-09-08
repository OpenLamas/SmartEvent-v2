jQuery ->
  class window.Event extends Backbone.Model
    initialize: ->
      @url = "/api/event/#{@id}"
      console.log "Nouvel event !"

  class window.Session extends Backbone.Collection
    model: Event
    url: "/api/events"

    initialize: ->
      console.log "Nouvelle session !"

  class window.SessionView extends Backbone.View
    el: $ '#session-cont'
   
    initialize: ->
      console.log "Vu instancier !"
      @template = _.template $("#template-events").html()
     
      _.bindAll @, 'render'
      @collection.bind 'change', @render
      @collection.bind 'add', @render
      @collection.bind 'remove', @render
      @collection.bind 'reset', @render

    render: ->
      console.log "Vu rendu"
      renderedCont = @template events: @collection.toJSON()
      $(@el).html renderedCont;
      @

  class window.SessionRouter extends Backbone.Router
    initialize: ->
      @session = new Session()
      @session.fetch()

      @sessionView = new SessionView collection: @session
      @sessionView.render()

  router = new SessionRouter()

 # Backbone.history.start()
