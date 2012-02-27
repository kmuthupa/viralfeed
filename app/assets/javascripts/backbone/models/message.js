class Viralfeed.Models.Message extends Backbone.Model
  paramRoot: 'message'

  defaults:
    title: null
    name: null
    message: null

class Viralfeed.Collections.MessagesCollection extends Backbone.Collection
  model: Viralfeed.Models.Message
  url: '/messages'
