Viralfeed.Views.Messages.EditView = Backbone.View.Extend ({
  template : JST["backbone/templates/messages/edit"],
  
  events:	{"submit #edit-message" : "update"},
  
  update: function(e) {
	e.preventDefault();
	e.stopPropagation();
	@model.save({null,
		success : function(message) {
		  @model = message;
		  window.location.hash = "/#{@model.id}";
		}
	});
  },
 
  render: function(e) {
	$(@el).html(@template(@model.toJSON()));
    this.$("form").backboneLink(@model);
    return this;
  }	
});
  
