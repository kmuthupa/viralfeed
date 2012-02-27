Viralfeed.Views.Messages.ShowView = Backbone.View.Extend ({
	template : JST["backbone/templates/messages/show"],

	render: function() {
		$(@el).html(@template(@model.toJSON()));
		return this;
	}

});