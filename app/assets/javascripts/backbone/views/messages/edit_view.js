Viralfeed.Views.Messages = Viralfeed.Views.Messages || {};

Viralfeed.Views.Messages.EditView = Backbone.View.extend ({
  template: JST["backbone/templates/messages/edit"],
  
  events: {"submit #edit-message" : "update"},

  model: {},
  
  update: function(e) {
	e.preventDefault();
	e.stopPropagation();
	this.model.save({},{
		success: function(message) {
		  this.model = message;
		  window.location.hash = "/"+this.model.id;
		},
		error: function(message, jqXHR) {
          window.Viralfeed.displayFormError();
        }
	});
  },
 
  render: function(e) {
	$(this.el).html(this.template(this.model.toJSON()));
    this.$("form").backboneLink(this.model);
    return this;
  }	
});
  
