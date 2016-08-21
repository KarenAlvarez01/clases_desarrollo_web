$(document).on("ready",inicio);

function inicio () 
{
	$("#publicar").on("click", transicion);

}

function transicion() 
{
	var cambiocss=
	{
		overflow:"hidden",
		width:0,
		margin:0,
		padding:0,
		display:"none"
		
	};

	var cambiocss2=
	{
		width:"40%",
		height:"auto",
		opacity:1
		
	};

	$("#historia").css(cambiocss);
	$("#personalizar").css(cambiocss2);
}
