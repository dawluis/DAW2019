function muestraInformacion(event){
  var e= event || window.event;
  var codigo=e.keyCode;
  var propiedad=e.charCode;
  var caracterPulsado= String.fromCharCode(propiedad);
  teclado.innerHTML= 
  "<h2>Teclado</h2><p>Codigo: [" + e.keyCode + "]</p>"+
  "<p>Carácter pulsado: ["+ String.fromCharCode(e.keyCode)+"]</p>";

}
document.onkeypress = muestraInformacion;