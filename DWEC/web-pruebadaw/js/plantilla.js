$(document).ready(function(){
  var x= $('#efecto').position();
  $('#efecto').hide();
  $(document).scroll(function(){
    var distancia=($(document).scrollTop());
    console.log(distancia);
    if(distancia > x.top/2){
      $('#efecto').fadeIn('slow');
      $("#efecto")
      .animate({
        marginLeft: "20%"
       // borderRadius: "100px"
      },'slow') 
      .animate({
       width: "50%",
       opacity: 0.7
      },'slow');
      console.log("dime algo");
      
    }
  });


});