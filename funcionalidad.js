
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
//limpiar pantalla
function borrarPantalla(){
	document.getElementById("valores").value="";
}
//calcular operaciones
function calcular(num){
	var anterior = document.fo.valores.value;
	if(anterior==" "){
		document.fo.valores.value="";
	}else{
		var anterior= document.fo.valores.value;
		document.getElementById("valores").value = anterior+num;
		esto = document.fo.valores.value;

		record=0;
		igual=1;
		var letraRecord;
		var b=0;
		var letra="";
		for(a=1;a<esto.length; a++){
			if(esto.charAt(a)=="+" || esto.charAt(a)=="-" ||esto.charAt(a)=="*" ||esto.charAt(a)=="/" ){
				igual=igual+1;
				letra=esto.charAt(a);
			}else{
				if(igual>record){
					record=igual;
					letraRecord=letra;
				}
				igual=1;
			}
			b=a;
		}
		if(igual>record){
			record=igual;
			letraRecord=letra;
		}

		if(record>2){
			var anterior= esto;
			var nuevovalor =anterior.substring(0, anterior.length-1);
			document.getElementById("valores").value=nuevovalor;
			record=0;
			b=0;
			igual=1;
			letra="";
			letraRecord="";
		}

	}

}
//calcular con la funcion eval de javascript
function resultado(){
    var resultado=eval(document.fo.valores.value);

    if(resultado=="Infinity"){
        document.fo.valores.value="No se puede dividir entre cero";

    }else{
        document.fo.valores.value=resultado;
    }
}
