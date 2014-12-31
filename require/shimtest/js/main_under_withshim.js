requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),  //Remove for prod
	"enforceDefine":true,
    paths: {
	    "jquery": "libs/jquery1.8.3",
        "underscore": "libs/underscore1.4.3",
        "backbone": "libs/backbone.9.9"
    },
	 shim: {
        "underscore": {
            deps: [],
            exports: "_"
        }
	} 
});

require(["underscore"],function (Under) {
        
        console.log("_: " + typeof Under);
        
    }
 
/*require(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {
        console.log("Test output");
        console.log("$: " + typeof $);
        console.log("_: " + typeof _);
        console.log("Backbone: " + typeof Backbone);
    }*/
);