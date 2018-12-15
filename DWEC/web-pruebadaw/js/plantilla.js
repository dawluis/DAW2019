$(document).ready(function(){
  var x= $('#efecto').position();
  $('#efecto').hide();
  $(document).scroll(function(){
    var distancia=($(document).scrollTop());
    if(distancia > x.top/2){
        //$('#efecto').fadeIn('slow');
        $('#efecto').animate({left: '250px'});
    }else if($(document).scrollTop() < x.top){
        $('#efecto').fadeOut('slow');
    }
  });
 

});