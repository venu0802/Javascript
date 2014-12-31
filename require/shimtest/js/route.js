define(["backbone"], function(Backbone){
return Backbone.Router.extend({

  routes: {
    "help":                 "help",    // #help
    "search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search"   // #search/kiwis/p7
  },

  help: function() {
    console.log("in help");
  },

  search: function(query, page) {
    console.log("query is "+query);
	console.log("page is "+page);
  }

});


});