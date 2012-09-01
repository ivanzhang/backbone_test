define(["highchart", 
	"data/barchart1", "data/barchart2",
	"data/pie1", "data/pie2" ], 
function(Highcharts, Barchart1, Barchart2, Pie1, Pie2){
	//returns all charts once
	models = [Barchart1, Barchart2, Pie1, Pie2];
	return models;
}); 
