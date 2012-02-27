Viralfeed.Views.Messages = Viralfeed.Views.Messages || {};

Viralfeed.Views.Messages.IndexView = Backbone.View.extend ({
	template: JST["backbone/templates/messages/index"],
	
	options: {},

	initialize: function(options) {
		options = options;
		options.messages.bind('reset', this.addAll);
	},

	addAll: function() {
		this.options.messages.each(this.addOne);
	},

	addOne: function() {
		view = new Viralfeed.Views.MessageView({model : message});
		$("tbody").append(view.render().el);
	},

	render: function() {
		$(this.el).html(this.template({messages: this.options.messages.toJSON()}));
		this.addAll();
		return this;
	}
});