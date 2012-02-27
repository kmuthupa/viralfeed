Viralfeed.Views.Messages.IndexView = Backbone.View.Extend ({
	template: JST["backbone/templates/messages/index"],

	initialize: function() {
		this.options.messages.bind('reset', this.addAll);
	},

	addAll: function() {
		this.options.messages.each(this.addOne);
	},

	addOne: function() {
		view = new Viralfeed.Views.Messages.MessageView({model : message});
		$("tbody").append(view.render().el);
	},

	render: function() {
		$(this.el).html(this.template({messages: this.options.messages.toJSON()}));
		this.addAll();
		return this;
	}
});