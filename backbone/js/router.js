define(["backbone","jquery","views/mainV","views/SidebarLinks","models/Books"], function(Backbone,$,Mnv,SideLinksV,Books){
 /*var Mnv= require("mainV");*/
 //var mnv = new Mnv();  
 console.log("in router");
 var library = new Books();
library.on('sync', function() {
    console.log('sync succesful!');
});
var othello = library.create({
  title: "Othello",
  author: "William Shakespeare"
});
var javascript = library.create({
  title: "JavaScript",
  author: "O Reilly"
});

return Backbone.Router.extend({

  routes: {
    "":                     "home",
    "help":                 "help",    // #help
	"book/:id":             "displayBook",
    "search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search"   // #search/kiwis/p7
  },

  help: function() {
    console.log("in help");
  },
  home: function(){
   var sideLinks = new SideLinksV({model:library});
   sideLinks.render();
   console.log(sideLinks.el);   
   $("#sidebar").html(sideLinks.el); 
  },
  displayBook: function(id) {
  console.log("id is "+id);
  var book = library.get(id);
  console.log("book is "+JSON.stringify(book));
  },

  search: function(query, page) {
  console.log("in search");
    console.log("query is "+query);
	console.log("page is "+page);
  }

});


});