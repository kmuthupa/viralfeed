Viralfeed.Models.Message = Backbone.Model.extend({
	paramRoot: 'message',
	defaults: {
		'title': null,
		'name': null,
		'message': null,
		'posted_at': null
	}
});

Viralfeed.Collections.MessagesCollection = Backbone.Collection.extend({
	model: Viralfeed.Models.Message,
	url: '/messages'
});
