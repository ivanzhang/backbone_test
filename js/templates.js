define(function(require){
    var templates = {
            plotwidget : require('tpl!templates/plot.html'),
            plotcontainer : require('tpl!templates/plots.html'),
            landingpage: require('tpl!templates/landing.html'),
        };
    return templates;    
}); 
