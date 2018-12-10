$(function(){
    var sumaPrecio=0;
    
    $('.item').click(function(e){
         /*****************STOCK**************************************** */
        var x=e.target.parentNode.id;
        var stock=$('#'+x).children("label:contains('Stock')").text();
        var partes= stock.split(" ");
        var iStock=parseInt(partes[1]);
        
        /********************PRECIO************************************* */
        var precio=$('#'+x).children("label:contains('€')").text();
        var sPrecio=parseInt(precio.substring(0,2));
        /**********************ARTICULOS COMPRADOS*********************************** */
        var ArticulosComprados=parseInt($('#citem').val());
        
        if(iStock<=0){
            $('#'+x).children("label:contains('Stock')").text("Stock "+iStock).addClass('agotado');
        }else{
            iStock--;
            ArticulosComprados++;
            sumaPrecio=sumaPrecio+sPrecio;
            console.log(sumaPrecio);
           
            $('#citem').val(ArticulosComprados);
    
            $('#citem').text(ArticulosComprados);
            $('#cprice').attr("value",sumaPrecio+" €");
            $('#'+x).children("label:contains('Stock')").text("Stock "+iStock);
            $('#'+x).children("label:contains('€')").val(sumaPrecio);
        }


    });
});