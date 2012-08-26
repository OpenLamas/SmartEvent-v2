jQuery ->
  
  class window.Event extends Backbone.Model
    defaults:
      _id: "000000000000000000000001"
      dateDebut: "2012-02-10T08:00:00.000Z"
      dateFin: "2012-02-10T08:44:23.372Z"
      description: "Defaults"
      emplacement: "No where"
      nom: "Name"

    initialize: ->
      console.log 'Event Contructor'
      @.bind "error", (model, error)->
        console.log "Erreur ! : #{error}"

    getId: ->
      @.get 'id'

    validate: (attributes) ->
      "Le nom n'est pas valide" if attributes.name is ''

  class window.Events extends Backbone.Collection
    model: Event

    url: "http://178.170.117.159:8080/api/events/"

    initialize: ->
      console.log "Nouvelle Collection"