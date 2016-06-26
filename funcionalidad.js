
//funcion que escribe los valores en el imput
function retornar(num){
	var anterior = document.fo.valores.value;
	document.getElementById("valores").value= anterior+num;

}
//borrar el ultimo caracter

function eliminarUltimo(){
	var valor= document.fo.valores.value;
	document.getElementById("valores").value= valor.substring(0,valor.length-1);
}