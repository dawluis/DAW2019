$(document).ready(function(){
    $('#galeria').hide();
    $(document).bind("click keypress", quitarImagen);
    $('#principal img').bind("click", muestraImagen);
   
    function muestraImagen(e){
        e.stopPropagation();
       var src= $(this).attr('src');
        console.log(src);
        $('#galeria').fadeIn(500);
        $('#galeria img').fadeOut(1);
        $('#galeria img').fadeIn(500);
        $('#galeria img').attr("src",src)
        .attr("width", "100%");
        
    }

    function quitarImagen(e){
        $('#galeria').fadeOut(500);
    }





});