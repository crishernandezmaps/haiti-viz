/*///////////////////////////////////////////////////////////
//Draw the other arcs as well
//////////////////////////////////////////////////////////*/
function Draw3(){

	/*First disable click event on clicker button*/
	stopClicker();

	var arcDelay = [0,1,2,12,13,23,33,34,35,40,47];
	/*Show and run the progressBar*/
	runProgressBar(time=700*(arcDelay[(arcDelay.length-1)]+1));

   /*Fill in the other arcs*/
   svg.selectAll("g.group").select("path")
	.transition().delay(function(d, i) { return 700*arcDelay[i];}).duration(1000)
	.attrTween("d", function(d) {
		if(d.index != 0) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
    });

  /*Make the other strokes black as well*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("line").style("stroke", "#000");
  /*Same for the %'s*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("text").style("opacity", 1);
  /*And the Names of each Arc*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("text").style("opacity", 1);

	/*Change the text of the top section inside the circle accordingly*/
	/*HTC*/
	changeTopText(newText = "Durante el año 2011 y 2012 el número se mantuvo relativamente constante.",
		loc = 6/2, delayDisappear = 0, delayAppear = arcDelay[2]);
	/*LG*/
	changeTopText(newText = "El 2013 ingresaron a Chile 2.444 personas desde Haití. El año 2.014 dicha cifra estuvo cerca de duplicarse, con 4.598 ingresos.",
		loc = 6/2, delayDisappear = arcDelay[3], delayAppear = arcDelay[4]);
	/*Samsung*/
	changeTopText(newText = "El año 2015 fue el año en el que se experimentó la primera gran oleada de ingresos. El número se incrementó hasta llegar a los 14.098 inmigrantes Haitianos.",
		loc = 3/2, delayDisappear = (arcDelay[5]-1), delayAppear = arcDelay[5]);
	/*Sony*/
	changeTopText(newText = "El año 2016, la cifra llegó al récord de 48.783 personas provenientes desde Haití.",
		loc = 4/2, delayDisappear = arcDelay[6], delayAppear = (arcDelay[8]-1));
	/*100%*/
	changeTopText(newText = "Entre los años 2002 y 2016, 74.790 personas provenientes de Haití han ingresado a Chile. ",
		loc = 1/2, delayDisappear = (arcDelay[9]-1), delayAppear = arcDelay[9]);
	/*Chord intro*/
	changeTopText(newText = "Más del 65% lo hizo durante el año 2016.",
		loc = 8/2, delayDisappear = (arcDelay[10]-1), delayAppear = arcDelay[10], finalText = true);

};/*Draw3*/
