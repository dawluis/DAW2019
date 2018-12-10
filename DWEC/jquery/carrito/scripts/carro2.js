$(function(){
    $('.item').click(function(e){
       var x=e.target.parentNode.id;
        var stock=$('#'+x).children("label:contains('Stock')").text();
        var partes= stock.split(" ");
        var Iprecio=parseInt(partes[1]);
        
        if(Iprecio<=0){
            $('#'+x).children("label:contains('Stock')").text("Stock "+Iprecio).css("color","red");
        }else{
            Iprecio--;
            $('#'+x).children("label:contains('Stock')").text("Stock "+Iprecio);

        }


    });
});