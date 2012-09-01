//js loader 

//define aliases for loaded libraries
require.config({
   paths: {
        jquery : 'libs/jquery/jquery',
        underscore : 'libs/underscore/underscore',
        backbone : 'libs/backbone/backbone',
        highchart: 'libs/highchart/js/highcharts',
        tpl : 'libs/tpl/tpl' //tmplate engine
    },

    shim : {
        underscore : {
            exports : '_'
        },
        backbone: {
            exports: 'Backbone',
            deps : ['jquery', 'underscore']
        },
        highchart : {
            exports : 'Highcharts'
        }
    },
    
    deps : ['jquery','underscore']
});

//load app and requirements
//TODO: use aliases
require([
    'app',
    'backbone',
], function(App, Backbone){
    App.initialize();    
});


