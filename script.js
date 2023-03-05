function hizoClick(){
	var asunto = document.getElementById("asunto").value;
	var email = document.getElementById("email").value;
	var mensaje = document.getElementById("mensaje").value;
	if (asunto == "" || email == "" || mensaje == "") {
		alert("¡Debes completar todos los campos!");
	}
	else {
		alert('enviado');
		document.getElementById("formulario").reset();
	}
}