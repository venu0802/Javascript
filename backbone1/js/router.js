define(["backbone","jquery","views/SidebarLinks","models/Modls"], function(Backbone,$,SideLinksV,Modls){
 /*var Mnv= require("mainV");*/
 //var mnv = new Mnv();  
 console.log("in router");
 var library = new Modls();
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
var sideLinks

return Backbone.Router.extend({

  routes: {
    "":                     "home",
    "help":                 "help",    // #help
	"listItem/:id":         "itemDisplay",
	"search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search"   // #search/kiwis/p7
  },

  help: function() {
    console.log("in help");
  },
  home: function(){
   sideLinks = new SideLinksV({model:library});
   sideLinks.render();
   console.log("in home "+sideLinks.el);   
   //console.dir(sideLinks.el);
   $("#sidebar").html(sideLinks.el); 
  },
  itemDisplay: function(id){
    if (!sideLinks) {this.home();};
    console.log("id is "+id);
  },
 
  search: function(query, page) {
  console.log("in search");
    console.log("query is "+query);
	console.log("page is "+page);
  }

});


});