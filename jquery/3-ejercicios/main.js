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

var img1= document.getElementById("imagen-1");
var img2= document.getElementById("imagen-2");
var img3= document.getElementById("imagen-3");

function replace1(){

    $('#imagen-1').replaceWith('<img id="imagen-4" src="img/4.png" alt="" value="3"><br>');

}
function replace2(){

    $('#imagen-2').replaceWith('<img id="imagen-4" src="img/4.png" alt="" value="3"><br>');

}

function replace3(){

    $('#imagen-3').replaceWith('<img id="imagen-4" src="img/4.png" alt="" value="3"><br>');

}



img1.addEventListener("click", replace1, false);
img2.addEventListener("click", replace2, false);
img3.addEventListener("click", replace3, false);



});