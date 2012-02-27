Viralfeed.Views.Messages.NewView = Backbone.View.Extend ({
	template: JST["backbone/templates/messages/new"],

	events:	{"submit #new-message": "save"},
	
	collection: {},
	
	model: {},

	initialize: function(options) {
		this.model = new this.collection.model();
		this.model.bind("change:errors", this.render());
    },

    save: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.model.unset("errors");
	    this.collection.create(this.model.toJSON(),
	        { 
		      success: function(message) {
		      this.model = message;
		      window.location.hash = "/#{@model.id}"; 
		      },
	          error: function(message, jqXHR) {
	          this.model.set({errors: $.parseJSON(jqXHR.responseText)});
	        }}
	    );
    },

    render: function(e) {
	   $(this.el).html(this.template(this.model.toJSON()));
	   this.$("form").backboneLink(this.model);
	   return this;	
    }	
});
