
var play= document.getElementById("play");
var stop= document.getElementById("stop");
var masvol= document.getElementById("masvol");
var menosvol= document.getElementById("menosvol");
var player=document.getElementById('player');

play.onclick=function(){
    player.play();
}
stop.onclick=function(){
    player.pause();
}

masvol.onclick=function(){
    player.volumen+=0.1;
}

menosvol.onclick=function(){
    player.volumen-=0.1;
}