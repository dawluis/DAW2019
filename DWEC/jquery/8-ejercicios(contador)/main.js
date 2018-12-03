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


$('#numero').click(function(e){
    var number=parseInt($('#numero').text());
    $('#numero').text(++number);
});



});