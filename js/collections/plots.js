define([
	"backbone",
	"models/plot"
], function(Backbone, PlotModel){
	var PlotCollection = Backbone.Collection.extend({
		model : PlotModel
	});

	return PlotCollection;
}); 
