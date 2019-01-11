$(document).ready(function(){
    var x= $('#efecto').position();
    $('#efecto').hide();
    $(document).scroll(function(){
      var distancia=($(document).scrollTop());
      console.log(distancia);
      var boole=false;
      if(distancia > x.top/2){
        boole=true;
      }
      if(boole==true){
        $('#efecto').fadeIn('slow');
        $("#efecto").show()
        .animate({
          width:'100%',
          opacity:'0.7'
        },1000,'swing')
        .animate({
            height:'40vh',
            fontSize:'50px'
        },1000,'swing');
        boole=false; 
      }
    
    });
    $('#cosas').click(function(){
        $('#espacio').toggleClass('fade-in-element');
    });
  
  
  });
  /* var x= $('#efecto').position();
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
*/