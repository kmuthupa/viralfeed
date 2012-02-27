Viralfeed.Views.Messages = Viralfeed.Views.Messages || {};

Viralfeed.Views.Messages.MessageView = Backbone.View.extend ({
	template: JST["backbone/templates/messages/message"],

	events:	{"click .destroy" : "destroy"},

	tagName: "li",
	
	model: {},

	destroy: function(e) {
		this.model.destroy();
		this.remove();
		return false;
	},

	render: function(e) {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}	
});