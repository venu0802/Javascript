define(["models/Book","lclstg"],function(Book,lclstg){
return Backbone.Collection.extend({
    model: Book,
    localStorage: new Backbone.LocalStorage("Books"),
	initialize: function() {
    console.log("in books intialize");
	
  }
});

});