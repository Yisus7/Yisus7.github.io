var inicioApp = function()
{
	var Yo = function()
	{
		$("#sectionYo").show("slow");
		$("#sectionPracticas").hide("slow");
		$("#artInicio").hide("slow");
	}
	var Practicas = function()
	{
		$("#sectionPracticas").show("slow");
		$("#sectionYo").hide("slow");
		$("#artInicio").hide("slow");
	}
	var Inicio = function()
	{
		$("#sectionPracticas").hide("slow");
		$("#sectionYo").hide("slow");
		$("#artInicio").show("slow");	
	}

	$("#btnYo").on("click",Yo);
	$("#btnInicio").on("click",Inicio);
	$("#btnPracticas").on("click",Practicas);

	var id=$("#menuCelular").val();
		if(id=="btnYo")
			Yo();
		else if(id=="btnPracticas")
			Practicas();
		else if(id=="btnInicio")
			Inicio();
}
$(document).on("ready",inicioApp);
