Viralfeed.Routers.MessagesRouter = Backbone.Router.extend({
	routes: {
		"/new"      : "newMessage",
		"/index"    : "index",
		"/:id/edit" : "edit",
		"/:id"      : "show",
		".*"        : "index"
	},

	initialize: function(options) {
		@messages = new Viralfeed.Collections.MessagesCollection();
		@messages.reset(options.messages);
	},

	newMessage: function() {
		@view = new Viralfeed.Views.Messages.NewView({collection: @messages});
		$("#messages").html(@view.render().el);
	},

	index: function() {
		@view = new Viralfeed.Views.Messages.IndexView({messages: @messages});
		$("#messages").html(@view.render().el);
	},

	show: function(id) {
		message = @messages.get(id);
		@view = new Viralfeed.Views.Messages.ShowView({model: message});
		$("#messages").html(@view.render().el);
	},

	edit: function(id) {
		message = @messages.get(id)
		@view = new Viralfeed.Views.Messages.EditView({model: message})
		$("#messages").html(@view.render().el)
	}
});