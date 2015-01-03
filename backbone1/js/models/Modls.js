define(["models/Modl","lclstg"],function(Modl,lclstg){
return Backbone.Collection.extend({
    model: Modl,
	 url: "books",
   // localStorage: new Backbone.LocalStorage("Modl"),
	initialize: function() {
    console.log("in Modls intialize");
	
  }
});

});