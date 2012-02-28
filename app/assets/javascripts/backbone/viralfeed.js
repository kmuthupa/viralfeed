#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers

window.Viralfeed = {
	Models: {},
	Collections: {},
	Routers: {},
	Views: {},
	displayFormError: function(response) {
		errors = $.parseJSON(response);
		window.jQuery('.alert').remove();
		window.jQuery('.hero-unit').before("<div class='alert'>Please fill in all the fields!</div>");
		setTimeout(hideFlashMessages, 5000);
	}
};