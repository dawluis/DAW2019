$(document).ready(function(){
  /*************************************MENU DESPLEGABLE SUBNIVELES*********************************************/
  $('.princi').hover(function (e) {
    // over
    $('.secun').slideUp('slow');
    var x= e.target;
    $(x).children('.secun').stop(true).slideDown('fast');
    
}, function (e) {
    // out
    var x= e.target;
    $(x).children('.secun').slideUp('slow');
 }
);
$('.secun li').hover(function (e) {
  // over
  var x= e.target;
  $(x).children('.terc').slideDown('fast');
  
}, function (e) {
  // out
  var x= e.target;
  $(x).children('.terc').slideUp(10);
}
);
$('.terc').hover(function (e) {
  // over
}, function (e) {
  // out
  var x= e.target;
  $('.terc').slideUp('fast');
}
);

$('section,aside,img').mouseover(function(){
 $('.secun').delay('fast').slideUp('slow');
 $('.terc').slideUp('slow');
});
  /*************************************FIN MENU*********************************************/

$('#img-portada').animate({
  width:'100%',
  height:'100%'
},1000,'swing');

$('.ico').animate({
  width:'100px'
},500,'linear').animate({
  width:'60px'
},500,'swing');
var alto=document.getElementById("uno").offsetTop;
console.log(document.getElementById("uno").offsetTop);
var bol=false;
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  console.log(scroll);
  // Do something
  console.log(alto);
  //alto=parseInt(alto)-100;
  if(bol==false){
    if((scroll+400) > alto){
      console.log("has llegado al punto");
      $('#uno').animate({
          width:'100%'
      },10);
      bol=true;
    }else{
      
    }
   

  }
  
});






});