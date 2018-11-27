$(document).ready(function(){

var imagenes= document.querySelectorAll('section img');

var imgs=$('section img');



$('section img').mouseover(function(e){
     var clickado=e.target;
     var id=e.target.id;
     var cambio=
    $(clickado).attr("src","imagenes/color/"+id+".jfif");
    $(clickado).addClass("marcado");
});
$('section img').mouseout(function(e){
    var clickado=e.target;
    var id=e.target.id;
   $(clickado).attr("src","imagenes/bn/"+id+".jpg");
   $(clickado).removeClass("marcado");
});



$('#grandes').click(function(){
    for(var i=0 ; i < imagenes.length; i++){
        if((imagenes[i].id=="1")||(imagenes[i].id=="3")||(imagenes[i].id=="6")||(imagenes[i].id=="9")||(imagenes[i].id=="15")||(imagenes[i].id=="16")||(imagenes[i].id=="12")||(imagenes[i].id=="18")||(imagenes[i].id=="17")||(imagenes[i].id=="11")){
            imagenes[i].setAttribute("src","imagenes/color/"+imagenes[i].id+".jfif");
            //console.log("entra al 1");
        }else{
            imagenes[i].setAttribute("src","imagenes/bn/"+imagenes[i].id+".jpg");
           
        }
    }
});

$('#medianos').click(function(){
    for(var i=0 ; i < imagenes.length; i++){
        if((imagenes[i].id=="4")||(imagenes[i].id=="2")||(imagenes[i].id=="10")||(imagenes[i].id=="20")||(imagenes[i].id=="13")){
            imagenes[i].setAttribute("src","imagenes/color/"+imagenes[i].id+".jfif");
         
        }else{
            imagenes[i].setAttribute("src","imagenes/bn/"+imagenes[i].id+".jpg");
           
        }
    }
});

$('#peques').click(function(){
    for(var i=0 ; i < imagenes.length; i++){
        if((imagenes[i].id=="5")||(imagenes[i].id=="7")||(imagenes[i].id=="8")||(imagenes[i].id=="14")||(imagenes[i].id=="19")){
            imagenes[i].setAttribute("src","imagenes/color/"+imagenes[i].id+".jfif");
            //console.log("entra al 1");
        }else{
            imagenes[i].setAttribute("src","imagenes/bn/"+imagenes[i].id+".jpg");
           
        }
    }
});

});