define([
	'underscore',
    'backbone'
], function(_, Backbone){
    var PlotModel =  Backbone.Model.extend({
        default : {
            title: {text : "Default title"}	         
        }    
    });  

    return PlotModel;
}); 
