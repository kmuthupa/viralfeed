Viralfeed.Views.Messages.MessageView = Backbone.View.Extend ({
	template : JST["backbone/templates/messages/message"],

	events:	{"click .destroy" : "destroy"},

	tagName: "li",

	destroy: function(e) {
		@model.destroy();
		this.remove();
		return false;
	},

	render: function(e) {
		$(@el).html(@template(@model.toJSON()));
		return this;
	}	
});