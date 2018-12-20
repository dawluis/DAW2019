
function muestraInformacion1(event){
  var e= event || window.event;
  var coordenadaX = e.clientX;
  var coordenadaY = e.clientY;
  var altura= innerHeight;
  var ancho= innerWidth;
  if(coordenadaY < altura/2 && coordenadaX < ancho/2){
    principal.innerHTML="<h2>izquierda arriva</h2>";
  }
  if(coordenadaY < altura/2 && coordenadaX > ancho/2){
    principal.innerHTML="<h2>derecha arriva</h2>";
  }
  if(coordenadaY > altura/2 && coordenadaX < ancho/2){
    principal.innerHTML="<h2>izquierda abajo</h2>";
  }
  if(coordenadaY > altura/2 && coordenadaX > ancho/2){
    principal.innerHTML="<h2>derecha abajo</h2>";
  } 
}
document.onclick= muestraInformacion1;
document.onmousemove= muestraInformacion1;