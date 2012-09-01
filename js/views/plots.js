//view that render all plots in plot-collections
define([
    'backbone',
    'views/plot',
    'templates'
], function(Backbone, PlotView, templates){
    var PlotCollectionView = Backbone.View.extend({
        el : "#plot-container",
        template : templates.plotcontainer,
        initialize : function() {
            //this.bindTo(this.collection, 'all', this.render, this);
        },
        render : function(){
            //render container for plots
            $("#content").html(this.template());
            //render plot-widgets
            var that_el = this.el;
            this.collection.each(function(plot){
                plotwidget = new PlotView({model : plot});                
                $("#plot-container").append(plotwidget.render()); //renders container of plotwidget
                plotwidget.draw(); //renders plot to widget   
            });
        }
    });
    
    return PlotCollectionView;
});
