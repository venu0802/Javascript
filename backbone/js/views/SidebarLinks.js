define([
    'jquery',
    'underscore',
    'backbone',
	'text!tpl/SidebarLink.html'
], function($, _, Backbone,BookLink){
var SidebarLinks = Backbone.View.extend({
    tagName:'ul',
    className:'nav nav-sidebar',
    initialize:function () {
	    console.log("SidebarLinks view");
		console.log("book link from text is "+BookLink);
		console.log("template is "+$('#booklink-template').html());
        var that=this;
        this.model.bind('all', this.test, this);
        this.model.bind('request',this.render,this);
        this.model.bind('remove',this.render,this);
        this.model.bind('add',this.render,this);

   },
    test:function(e){console.log("in test "+e)},
    template:_.template(BookLink),
    render:function (eventName) {
        var that=this;

        console.log('in personLinsV' ) ;
        console.log(this);
       // JSON.stringify(  this);
        console.log('bla '+JSON.stringify(this.model.models));
        $(this.el).empty();
        _(that.model.models).each(function (mdl) {
            console.log('in SidebarLinks mdl is '+mdl.toJSON()) ;
            $(that.el).append(that.template(mdl.toJSON()));
        }, that);

        return that;
    }
});

    return SidebarLinks;
});