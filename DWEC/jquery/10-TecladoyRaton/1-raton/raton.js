
function muestraInformacion(event){
  var e= event || window.event;
  var coordenadaX = e.clientX;
  var coordenadaY = e.clientY;
  var cordX= e.screenX;
  var cordY= e.screenY;
  raton.innerHTML="<h2>Ratón</h2><p>Navegador ["+coordenadaX+ " , "+coordenadaY+"]</p> <p> Página ["+cordX+ " , "+cordY+"]</p>";
}
document.onmousemove = muestraInformacion;