$(document).ready(function(){
/*
.text(inserta texto)
.html(inserta texto, cambiandolo)
.append(inserta texto, detras de lo que haya)
.prepend (inserta texte, delante de lo que haya)
.before( inserta antes)
.after(inserta elemento despues de lo que haya)
.remove()
.replaceWith() Cambiar e contenido de lo que hay por lo que le ponga

*/



var boton= document.getElementById("boton-banner");
var banner= document.getElementById("banner");

function cerrar_banner(banner){

   $('#banner').remove()
    
    }


boton.addEventListener("click", cerrar_banner, false);



});