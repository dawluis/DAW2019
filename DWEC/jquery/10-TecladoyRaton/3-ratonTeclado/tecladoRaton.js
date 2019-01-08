var raton= document.getElementById("raton");
var teclado= document.getElementById('teclado');
function muestraInformacion1(event){
  var e= event || window.event;
  raton= document.getElementById("raton");
  raton.style.backgroundColor="white";
  teclado.style.backgroundColor="white";
  var coordenadaX = e.clientX;
  var coordenadaY = e.clientY;
  var cordX= e.screenX;
  var cordY= e.screenY;
  raton.innerHTML="<h2>Ratón</h2><p>Navegador ["+coordenadaX+", "+coordenadaY+"]</p> <p> Página ["+cordX+", "+cordY+"]</p>";
}
function pintayColorea(){
  raton.style.background="#FFFFCC";
}
function muestraInformacion2(event){
  var e= event || window.event;
  teclado.style.background="#CCE6FF";
  var codigo=e.keyCode;
  var propiedad=e.charCode;
  var caracterPulsado= String.fromCharCode(propiedad);
  teclado.innerHTML= 
  "<h2>Teclado</h2><p>Codigo: [" + e.keyCode + "]</p>"+
  "<p>Carácter pulsado: ["+ String.fromCharCode(e.keyCode)+"]</p>";

}

document.onclick= pintayColorea;
document.onmousemove = muestraInformacion1;
document.onkeypress = muestraInformacion2;