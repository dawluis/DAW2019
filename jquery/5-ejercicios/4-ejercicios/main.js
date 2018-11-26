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
.addClass() Añadir nombre de una clase
.removeClass() Eliminar clase 
*/

var botones= document.querySelectorAll('button');

for(var i=0; i < botones.length ; i++){

    botones[i].addEventListener("click", aumenta, false);
    botones[i].addEventListener("click", disminuye, false);
}




function aumenta(e){
    var hola;
    if(e.target.id=="aumenta1"){
        hola="#texto1";
    }else if(e.target.id=="aumenta2"){
        hola="#texto2";
    }else if(e.target.id=="aumenta3"){
        hola="#texto3";
    }

    var tamano=$(hola).css("font-size");
    var size=parseInt(tamano);
    $(hola).css("font-size", size*1.1);

}

function disminuye(e){
    var hola;
    if(e.target.id=="disminuye1"){
        hola="#texto1";
    }else if(e.target.id=="disminuye2"){
        hola="#texto2";
    }else if(e.target.id=="disminuye3"){
        hola="#texto3";
    }

    var tamano=$(hola).css("font-size");
    var size=parseInt(tamano);
    $(hola).css("font-size", size-1.1);

}

});