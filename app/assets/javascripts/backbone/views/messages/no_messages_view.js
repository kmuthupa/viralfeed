Viralfeed.Views.Messages = Viralfeed.Views.Messages || {};

Viralfeed.Views.Messages.NoMessagesView = Backbone.View.extend ({
	template: JST["backbone/templates/messages/no_messages"],
    
    events:	{"click .destroy" : "handleDestroy"},

    handleDestroy: function(e) {
	
    },

	render: function() {
		$(this.el).html(this.template());
		return this;
	}
});