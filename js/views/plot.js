define([
    'backbone',
    'underscore',
    'highchart',
    'templates'
], function(Backbone, _, Highcharts, templates){
    var PlotView = Backbone.View.extend({
        //if you initialize this view, then add model & and also el of parent element
        className : "plot-widget",
        template : templates.plotwidget,
        render : function(){
            return this.template();         
        },

        draw :  function(){
            var $widgets = $("."+this.className),
                chart_obj = this.model.toJSON(); 
            
            if($widgets.length){
                chart_obj.chart["renderTo"] =  _.last($widgets); //$(this.el);
                chart_obj.chart["height"] = 360;
                
                chart = new Highcharts.Chart(chart_obj);//draw plot
            } else {
                console.error("Cant draw plot, because didnt find widget.");
            }
        }

    });     

    return PlotView;
}); 
