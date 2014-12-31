define(["backbone"],function(Backbone){

return Backbone.View.extend({

  tagName: "li",

  className: "document-row",

  events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },

  initialize: function() {
    console.log("in intialize");
	if (this.model){
    this.listenTo(this.model, "change", this.render);
	}
  },

  render: function() {
    
  }

});


});
