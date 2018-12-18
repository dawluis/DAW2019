var principal= document.getElementById("principal");




function muestraInformacion(event){
  var typo=event.type;
  var e= event || window.event;
  var codigo=e.keyCode;
  var propiedad=e.charCode;
  var caracterPulsado= String.fromCharCode(propiedad);
  principal.innerHTML= 
  "Codigo: [" + e.keyCode + "]<br>"+
  "Carácter pulsado: ["+ String.fromCharCode(e.keyCode)+"]";

}
document.onkeypress = muestraInformacion;