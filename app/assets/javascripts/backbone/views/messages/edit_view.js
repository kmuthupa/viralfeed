Viralfeed.Views.Messages.EditView = Backbone.View.Extend ({
  template: JST["backbone/templates/messages/edit"],
  
  events: {"submit #edit-message" : "update"},

  model: {},
  
  update: function(e) {
	e.preventDefault();
	e.stopPropagation();
	this.model.save({
		success: function(message) {
		  this.model = message;
		  window.location.hash = "/"+this.model.id;
		}
	});
  },
 
  render: function(e) {
	$(this.el).html(this.template(this.model.toJSON()));
    this.$("form").backboneLink(this.model);
    return this;
  }	
});
  
