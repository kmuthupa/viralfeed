Viralfeed.Views.Messages.IndexView = Backbone.View.Extend ({
	template : JST["backbone/templates/messages/index"],

	initialize: function() {
		@options.messages.bind('reset', @addAll);
	},

	addAll: function() {
		@options.messages.each(@addOne);
	},

	addOne: function() {
		view = new Viralfeed.Views.Messages.MessageView({model : message});
		@$("tbody").append(view.render().el);
	},

	render: function() {
		$(@el).html(@template({messages: @options.messages.toJSON()}));
		@addAll();
		return this;
	}
});