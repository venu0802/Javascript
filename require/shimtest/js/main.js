requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),  //Remove for prod
	"enforceDefine":true,
    paths: {
	    "jquery": "libs/jquery-1.11.2.min",
        "underscore": "libs/underscore-1.7.0.min",
        "backbone": "libs/backbone-1.1.2.min"
    }
});

 
require(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {
        console.log("Test output");
        console.log("$: " + typeof $);
        console.log("_: " + typeof _);
        console.log("Backbone: " + typeof Backbone);
    }
);

