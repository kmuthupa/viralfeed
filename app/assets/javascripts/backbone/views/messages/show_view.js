Viralfeed.Views.Messages.ShowView = Backbone.View.Extend ({
	template: JST["backbone/templates/messages/show"],
	
	model: {},
	
	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}

});