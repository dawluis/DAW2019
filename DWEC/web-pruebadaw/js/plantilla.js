$(document).ready(function(){
  $('.princi').hover(function (e) {
    // over
    var x= e.target;
    $(x).children('.secun').slideDown('fast');
    
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
  $(x).children('.terc').slideUp('fast');
}
);
$('.terc li').hover(function (e) {
  // over
 
  
}, function (e) {
  // out
  var x= e.target;
  $(x).children().slideUp('fast');
}
);







/*$('.secun li ul li').mouseout(function (e) {
  var x= e.target;
  console.log("has salido del tercero");
  $('.terc').slideUp('slow');
});*/


$('section,aside,img').mouseover(function(){
 $('.secun').slideUp('slow');
 $('.terc').slideUp('slow');
});


});