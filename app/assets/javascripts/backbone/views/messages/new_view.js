Viralfeed.Views.Messages.NewView = Backbone.View.Extend ({
	template : JST["backbone/templates/messages/new"],

	events:	{"submit #new-message": "save"},

	constructor: function(options) {
		super(options);
		@model = new @collection.model();
		@model.bind("change:errors", this.render());
    },

    save: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    @model.unset("errors");
	    @collection.create({@model.toJSON(),
	        success: function(message) {
		      @model = message;
		      window.location.hash = "/#{@model.id}"; 
		    },
	        error: function(message, jqXHR) {
	          @model.set({errors: $.parseJSON(jqXHR.responseText)});
	        }
	   });
    },

    render: function(e) {
	   $(@el).html(@template(@model.toJSON()));
	   this.$("form").backboneLink(@model);
	   return this;	
    }	
});
