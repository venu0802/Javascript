requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),  //Remove for prod
	"enforceDefine":true,
	
    paths: {
	    "jquery": "libs/jquery-1.11.2.min",
	    "underscore": "libs/underscore-1.7.0.min",
        "backbone": "libs/backbone-1.1.2.min",
		"lclstg":"libs/backbone.localStorage-min",
		"text":"libs/text"
    }
});
/* require(["backbone"],function (Backbone){
 console.log("Backbone: " + typeof Backbone);
 }
); */
require(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {
        console.log("Test output");
        console.log("$: " + typeof $);
        console.log("_: " + typeof _);
        console.log("Backbone: " + typeof Backbone);
    }
);
define(['router'], function (Router) {
    var router = new Router();
    Backbone.history.start();
});

