
	var numeroUsuario= Number(prompt("ingrese un numero"))
	var operadorUsuario= prompt("ingrese operacion")
	var numeroUsuarioBis= Number(prompt("ingrese otro numero"))
	


var suma= function(a,b){
	console.log("El resultado es", a+b)
	return a+b
}

var resta= function(a,b){
	console.log("El resultado es", a-b)
	return a-b
}

var multiplica= function(a,b){
	console.log("El resultado es", a*b)
	return a*b
}

var divide= function(a,b){
	console.log("El resultado es", a/b)
	return a/b
}

if (operadorUsuario=== "+") {
	suma(numeroUsuario,numeroUsuarioBis)
}
else if(operadorUsuario=== "-") {
	resta(numeroUsuario,numeroUsuarioBis)
}
else if (operadorUsuario=== "*") {
	multiplica(numeroUsuario,numeroUsuarioBis)
}
else if (operadorUsuario=== "/") {
	divide(numeroUsuario,numeroUsuarioBis)
}
else{
	console.log("no es una operacion valida")
}