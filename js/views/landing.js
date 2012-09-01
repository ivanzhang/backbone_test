define([
    'backbone',
    'templates'
], function(Backbone, templates){
    var LandingPageView = Backbone.View.extend({
        el : '#content',
        template: templates.landingpage,
        render: function(){        
            $(this.el).html(this.template());
        }
    });

    return new LandingPageView;
}); 
