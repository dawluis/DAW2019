$(document).ready(function(){
     var inter= setInterval(tiempo,100);

function tiempo(){
     var d = new Date();
     var hour= d.getHours();
     var minute= d.getMinutes();
     var seconds= d.getSeconds();
   
     $('#time').text(hour+":"+minute+":"+seconds);
}

});

/* JAVASCRIPT PURO
 var inter= setInterval(tiempo,10);
function tiempo(){
     var d = new Date();
     var hour= d.getHours();
     var minute= d.getMinutes();
     var seconds= d.getSeconds();
     time.innerHTML=hour+":"+minute+":"+seconds;
}
*/