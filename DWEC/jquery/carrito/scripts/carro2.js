$(function(){
    var sumaPrecio=0;
    var iStock;
    var ArticulosComprados;
    
    $('.item').click(function(e){
         /*****************STOCK**************************************** */
        var x=e.target.parentNode.id;
        console.log(x);
        var stock=$('#'+x).children("label:contains('Stock')").text();
        var partes= stock.split(" ");
        iStock=parseInt(partes[1]);
        /********************PRECIO************************************* */
        var precio=$('#'+x).children("label:contains('€')").text();
        var sPrecio=parseInt(precio.substring(0,2));
        /**********************ARTICULOS COMPRADOS*********************************** */
        ArticulosComprados=parseInt($('#citem').val());
        
        if(iStock<=0){
            $('#'+x).children("label:contains('Stock')").text("Stock "+iStock).addClass('agotado');
        }else{
            //Baja el stock
            iStock--;
            $('#'+x).children("label:contains('Stock')").text("Stock "+iStock);
            //Suben los articulos comprados
            ArticulosComprados++;
            $('#citem').val(ArticulosComprados);
            //Se suma el precio de los objetos clickados
            sumaPrecio=sumaPrecio+sPrecio;
            $('#cprice').attr("value",sumaPrecio+" €");
            //Copia
           copia(x);


        }


    });

    $('a.delete').click(function(){
        console.log("pulsado");
    });

   


    //funcion Copia
    function copia(x){
        var copia=$('#'+x).clone().attr("id","c"+x).addClass("icart").fadeIn('slow');
        copia.children("label:contains('Stock')").hide();
        copia.css("cursor","default").children().css("cursor","default");
        var $delete = $('<a class="delete"></a>').fadeIn('slow');
        copia.prepend($delete);
        $('#cart_items').prepend(copia);
        
        /*************************ELIMINAR ITEM */
        $delete.click(function(){
            copia.fadeOut(500,function(){
               copia.remove();
            });


        });
       
    }

});

