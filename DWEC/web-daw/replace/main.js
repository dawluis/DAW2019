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

var imagenes= document.querySelectorAll("#principal img");

for(var i=0; i < imagenes.length; i++){

    imagenes[i].addEventListener("click", replace , false);

}

function replace (e){
    switch(e.target.id){
        case "imagen-1":
        $('#imagen-1').replaceWith('<img id="imagen-4" src="img/4.png" alt="" value="3"><br>');
        break;
        case "imagen-2":
        $('#imagen-2').replaceWith('<img id="imagen-4" src="img/4.png" alt="" value="3"><br>');
        break;
        case "imagen-3":
        $('#imagen-3').replaceWith('<img id="imagen-4" src="img/4.png" alt="" value="3"><br>');
        break;
    }
}

});