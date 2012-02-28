Viralfeed.Views.Messages = Viralfeed.Views.Messages || {};

Viralfeed.Views.Messages.ShowView = Backbone.View.extend ({
	template: JST["backbone/templates/messages/show"],
	
	events:	{"click .destroy" : "destroy"},
	
	model: {},
	
	destroy: function(e) {
		this.model.destroy();
		window.location = "/messages";
	},
	
	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
});