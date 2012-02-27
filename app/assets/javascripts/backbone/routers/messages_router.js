Viralfeed.Routers.MessagesRouter = Backbone.Router.extend({
	routes: {
		"/new"      : "newMessage",
		"/index"    : "index",
		"/:id/edit" : "edit",
		"/:id"      : "show",
		".*"        : "index"
	},
	
	messages: {},
	
	initialize: function(options) {
		this.messages = new Viralfeed.Collections.MessagesCollection();
		this.messages.reset(options.messages);
	},

	newMessage: function() {
		view = new Viralfeed.Views.Messages.NewView({collection: this.messages});
		$("#messages").html(view.render().el);
	},

	index: function() {
		view = new Viralfeed.Views.Messages.IndexView({messages: this.messages});
		$("#messages").html(view.render().el);
	},

	show: function(id) {
		message = this.messages.get(id);
		view = new Viralfeed.Views.Messages.ShowView({model: message});
		$("#messages").html(view.render().el);
	},

	edit: function(id) {
		message = this.messages.get(id)
		view = new Viralfeed.Views.Messages.EditView({model: message})
		$("#messages").html(view.render().el)
	}
});