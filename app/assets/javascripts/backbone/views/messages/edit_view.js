Viralfeed.Views.Messages ||= {}

class Viralfeed.Views.Messages.EditView extends Backbone.View
  template : JST["backbone/templates/messages/edit"]

  events :
    "submit #edit-message" : "update"

  update : (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.save(null,
      success : (message) =>
        @model = message
        window.location.hash = "/#{@model.id}"
    )

  render : ->
    $(@el).html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
