//Llamamos a la funcion ready para cargar el DOM

$(document).on("ready",inicio);

function inicio(){
	//al hacer click en el boton publicar llama a la funcion inicio
	$("#publicar").on("click", mensaje);

}

function mensaje(){
	alert("Haz presionado el boton Publicar");
}
