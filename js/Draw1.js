/*//////////////////////////////////////////////////////////
//Introduction
///////////////////////////////////////////////////////////*/
function Draw1(){

	/*First disable click event on clicker button*/
	stopClicker();

	/*Show and run the progressBar*/
	runProgressBar(time=700*11);

	changeTopText(newText = "Entre los años 2010 y 2016 han ingresado a Chile más de 74.790 personas provenientes desde Haití. " +
							" ",
	loc = 4/2, delayDisappear = 0, delayAppear = 1);

	changeTopText(newText = "Huracanes, el Terremoto del 2010 más las condiciones sociales y políticas de Haití, han contribuído a una migración forzada contínua. Principalmente a países como Estados Unidos y República Dominicana. Reciéntemente a Chile.", /* INCLUIR MUCHO MÁS TEXTO */
	loc = 8/2, delayDisappear = 9, delayAppear = 10, finalText = true);

	changeBottomText(newText = " Las cifras corresponden a la población total migrante desde el año 2010 al año 2017.",
	loc = 1/2, delayDisappear = 0, delayAppear = 10);

	//Remove arcs again
	d3.selectAll(".arc")
		.transition().delay(9*700).duration(2100)
		.style("opacity", 0)
		.each("end", function() {d3.selectAll(".arc").remove();});



};/*Draw1*/
