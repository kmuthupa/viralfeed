Viralfeed.Views.Messages = Viralfeed.Views.Messages || {};

Viralfeed.Views.Messages.ShowView = Backbone.View.extend ({
	template: JST["backbone/templates/messages/show"],
	
	model: {},
	
	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
});