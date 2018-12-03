/*

*/
$(document).ready(function(){
var bool1=false;
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
    if(bool1==false){
        for(var i=0 ; i < imagenes.length; i++){
            if((imagenes[i].id=="1")||(imagenes[i].id=="3")||(imagenes[i].id=="6")||(imagenes[i].id=="9")||(imagenes[i].id=="15")||(imagenes[i].id=="16")||(imagenes[i].id=="12")||(imagenes[i].id=="18")||(imagenes[i].id=="17")||(imagenes[i].id=="11")){
                if(imagenes[i].style.display=="none"){
                    imagenes[i].style.display="inline-block";
                }
                imagenes[i].setAttribute("src","imagenes/color/"+imagenes[i].id+".jfif");
            }else{
                imagenes[i].style.display="none";
               
            }
            bool1=true;
        }
        
    }else if(bool1==true){
        for(var i=0 ; i < imagenes.length; i++){
            if((imagenes[i].id=="1")||(imagenes[i].id=="3")||(imagenes[i].id=="6")||(imagenes[i].id=="9")||(imagenes[i].id=="15")||(imagenes[i].id=="16")||(imagenes[i].id=="12")||(imagenes[i].id=="18")||(imagenes[i].id=="17")||(imagenes[i].id=="11")){
                if(imagenes[i].style.display=="none"){
                    imagenes[i].style.display="inline-block";
                }else{
                    imagenes[i].setAttribute("src","imagenes/bn/"+imagenes[i].id+".jpg");
                }
                
            }else{
                imagenes[i].style.display="inline-block";
            }
        }
        bool1=false;
    }
    
});

$('#medianos').click(function(){
    for(var i=0 ; i < imagenes.length; i++){
        if((imagenes[i].id=="4")||(imagenes[i].id=="2")||(imagenes[i].id=="10")||(imagenes[i].id=="20")||(imagenes[i].id=="13")){
            if(imagenes[i].style.display=="none"){
                imagenes[i].style.display="inline-block";
            }
            imagenes[i].setAttribute("src","imagenes/color/"+imagenes[i].id+".jfif");
        }else{
            imagenes[i].style.display="none";
           
        }
    }
});

$('#peques').click(function(){
    for(var i=0 ; i < imagenes.length; i++){
        if((imagenes[i].id=="5")||(imagenes[i].id=="7")||(imagenes[i].id=="8")||(imagenes[i].id=="14")||(imagenes[i].id=="19")){
            if(imagenes[i].style.display=="none"){
                imagenes[i].style.display="inline-block";
            }
            imagenes[i].setAttribute("src","imagenes/color/"+imagenes[i].id+".jfif");
        }else{
            imagenes[i].style.display="none";
           
        }
    }
});

$('#danger').click(function(){
    for(var i=0 ; i < imagenes.length; i++){
        if((imagenes[i].id=="2")||(imagenes[i].id=="7")||(imagenes[i].id=="19")){
            if(imagenes[i].style.display=="none"){
                imagenes[i].style.display="inline-block";
            }
            imagenes[i].setAttribute("src","imagenes/color/"+imagenes[i].id+".jfif");
        }else{
            imagenes[i].style.display="none";
           
        }
    }
});

$('#reset').click(function(){
    for(var i=0 ; i < imagenes.length; i++){
                imagenes[i].style.display="inline-block";
                imagenes[i].setAttribute("src","imagenes/bn/"+imagenes[i].id+".jpg");
    }
});






$('#reset').click(function(){
    for(var i=0 ; i < imagenes.length; i++){
                imagenes[i].style.display="inline-block";
                imagenes[i].setAttribute("src","imagenes/bn/"+imagenes[i].id+".jpg");
    }
    if($('#grandes').attr('checked', true)){
        $('#grandes').prop('checked', false);
    }
    if($('#medianos').attr('checked', true)){
        $('#medianos').prop('checked', false);
    }
    if($('#peques').attr('checked', true)){
        $('#peques').prop('checked', false);
    }
    if($('#danger').attr('checked', true)){ 
        $('#danger').prop('checked', false);

    }

});

});

/*


$('#grandes').click(function(){
    if($('#grandes').prop('checked')){
        for(var i=0 ; i < imagenes.length; i++){
            if((imagenes[i].id=="1")||(imagenes[i].id=="3")||(imagenes[i].id=="6")||(imagenes[i].id=="9")||(imagenes[i].id=="15")||(imagenes[i].id=="16")||(imagenes[i].id=="12")||(imagenes[i].id=="18")||(imagenes[i].id=="17")||(imagenes[i].id=="11")){
                if(imagenes[i].style.display=="none"){
                    imagenes[i].style.display="inline-block";
                }
                imagenes[i].setAttribute("src","imagenes/color/"+imagenes[i].id+".jfif");
            }else{
                imagenes[i].style.display="none";
               
            }
        }
    }else{
        for(var i=0 ; i < imagenes.length; i++){
            imagenes[i].style.display="inline-block";
            imagenes[i].setAttribute("src","imagenes/bn/"+imagenes[i].id+".jpg");
}
    }
});


$('#medianos').click(function(){
    if($('#medianos').prop('checked')){
    for(var i=0 ; i < imagenes.length; i++){
        if((imagenes[i].id=="4")||(imagenes[i].id=="2")||(imagenes[i].id=="10")||(imagenes[i].id=="20")||(imagenes[i].id=="13")){
            if(imagenes[i].style.display=="none"){
                imagenes[i].style.display="inline-block";
            }
            imagenes[i].setAttribute("src","imagenes/color/"+imagenes[i].id+".jfif");
        }else{
            imagenes[i].style.display="none";
           
        }
        
    }
}else{
    for(var i=0 ; i < imagenes.length; i++){
        imagenes[i].style.display="inline-block";
        imagenes[i].setAttribute("src","imagenes/bn/"+imagenes[i].id+".jpg");
}
}
});

$('#peques').click(function(){
    if($('#peques').prop('checked')){
    for(var i=0 ; i < imagenes.length; i++){
        if((imagenes[i].id=="5")||(imagenes[i].id=="7")||(imagenes[i].id=="8")||(imagenes[i].id=="14")||(imagenes[i].id=="19")){
            if(imagenes[i].style.display=="none"){
                imagenes[i].style.display="inline-block";
            }
            imagenes[i].setAttribute("src","imagenes/color/"+imagenes[i].id+".jfif");
        }else{
            imagenes[i].style.display="none";
           
        }
    }
    }else{
    for(var i=0 ; i < imagenes.length; i++){
        imagenes[i].style.display="inline-block";
        imagenes[i].setAttribute("src","imagenes/bn/"+imagenes[i].id+".jpg");
    }
}
});

$('#danger').click(function(){
    if($('#danger').prop('checked')){
    for(var i=0 ; i < imagenes.length; i++){
        if((imagenes[i].id=="2")||(imagenes[i].id=="7")||(imagenes[i].id=="19")){
            if(imagenes[i].style.display=="none"){
                imagenes[i].style.display="inline-block";
            }
            imagenes[i].setAttribute("src","imagenes/color/"+imagenes[i].id+".jfif");
        }else{
            imagenes[i].style.display="none";
           
        }
    }
}else{
    for(var i=0 ; i < imagenes.length; i++){
        imagenes[i].style.display="inline-block";
        imagenes[i].setAttribute("src","imagenes/bn/"+imagenes[i].id+".jpg");
}
}
});

*/
