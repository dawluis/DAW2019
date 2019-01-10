$(document).ready(function(){
  $('.princi').hover(function (e) {
           // over
           var x= e.target;
           console.log(x);
           $(x).children('ul').slideDown('fast');
           
       }, function (e) {
           // out
           var x= e.target;
           console.log(x);
           $(x).children('ul').slideUp('fast');
        }
   );

   $('section,aside').mouseover(function(){
        $('.secun').slideUp();
   });
   

});