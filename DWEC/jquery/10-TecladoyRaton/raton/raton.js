function muestraInformacion(e){
  var principal= document.getElementById("principal");
  var coordenadaX = e.clientX;
  var coordenadaY = e.clientY;
  principal.innerHTML="AHORA MISMO LA CAMISETA ESTA EN LA POSICION" + coordenadaX + ", " +coordenadaY;
  var camiseta=document.getElementById('camiseta');
  camiseta.style.position="absolute";
  camiseta.style.top=coordenadaY+"px";
  camiseta.style.left=coordenadaX+"px";

}
document.onmousemove = muestraInformacion;