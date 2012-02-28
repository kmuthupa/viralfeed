Viralfeed.Views.Messages = Viralfeed.Views.Messages || {};

Viralfeed.Views.Messages.IndexView = Backbone.View.extend ({
	template: JST["backbone/templates/messages/index"],
	
	options: {},

	initialize: function(options) {
		options = options;
		options.messages.bind('reset', this.addAll);
	},
	
	addOne: function(message) {
		view = new Viralfeed.Views.Messages.MessageView({model: message});
		$(this.el).find(".messages-list").append(view.render().el);
	},
	
	addAll: function() {
		if (this.options.messages.length === 0) {
			view = new Viralfeed.Views.Messages.NoMessagesView();
			$(this.el).find(".messages-bar").after(view.render().el);
		}
		else {
			var idx = 0;
			models_to_remove = this.options.messages.select(function(msg) { return msg.get('title') === null });
			this.options.messages.remove(models_to_remove);
			while(idx < this.options.messages.length) {
				msg = this.options.messages.at(idx);
				this.addOne(msg);
				idx++;
			}
		}
	},

	render: function() {
		$(this.el).html(this.template({messages: this.options.messages.toJSON()}));
		this.addAll();
		return this;
	}
});