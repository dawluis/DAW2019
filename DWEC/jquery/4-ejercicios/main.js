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

$("#rrss").click(function(){
    $(".link-noticias").removeClass("marcado");
    $(".link-otros").removeClass("marcado");
    $(".link-redes").addClass("marcado");
});

$("#info").click(function(){
    $(".link-redes").removeClass("marcado");
    $(".link-otros").removeClass("marcado");
    $(".link-noticias").addClass("marcado");
});
$("#otros").click(function(){
    $(".link-redes").removeClass("marcado");
    $(".link-noticias").removeClass("marcado");
    $(".link-otros").addClass("marcado");
});
/************************************************ */
$("#deportes").click(function(){
    $(".link-deportes").toggleClass("marcado");

});

$("#empleo").click(function(){
    $(".link-empleo").toggleClass("marcado");

});
$("#apuestas").click(function(){
    $(".link-apuestas").toggleClass("marcado");

});








});