define([
    'backbone',
    'views/landing',
    'views/plots',
    'collections/plots',
    'data/plots'
], function(Backbone, LandingPageView, PlotCollectionView, 
        PlotCollection, DefinedPlotsList){
   var AppRouter = Backbone.Router.extend({
        routes : {
            'plots' : "showPlots",
            '*path' :   "defaultRoute"
        },
        
        showPlots: function(){
            console.debug("rendering plot view");
            plotCollection = new PlotCollection(DefinedPlotsList)
            view = new PlotCollectionView({collection : plotCollection}); 
            view.render();   
        },

        defaultRoute: function(path){
            console.debug("rendering default view");
            LandingPageView.render();
        }
    });


    return {
            initialize : function(){
                var app_router = new AppRouter();
                Backbone.history.start();
            }
    }

}); 
