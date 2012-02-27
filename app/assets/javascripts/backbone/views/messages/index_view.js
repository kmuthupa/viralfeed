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
		var idx = 0;
		while(idx < this.options.messages.length) {
			msg = this.options.messages.at(idx);
			this.addOne(msg);
			idx++;
		}		
	},

	render: function() {
		$(this.el).html(this.template({messages: this.options.messages.toJSON()}));
		this.addAll();
		return this;
	}
});