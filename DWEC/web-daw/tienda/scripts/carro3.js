$(function(){
    var sumaPrecio=0;
    var iStock;
    var ArticulosComprados;
    var bool=false;
    var anchoInicialCarrito=$("#cart_items").css('width');
    var pos=$("#cart_items").offset();
    var posicionInicialLeft=pos.left;

    $('.item').on('click',function(e){
         /*****************STOCK**************************************** */
        var x=e.target.parentNode.id;
        console.log(x);
         if(e.target.parentNode.id=="item_container"){
            var x=e.target.id;
        }else{
            var x=e.target.parentNode.id;
        }
        var stock=$('#'+x).children("label:contains('Stock')").text();
        var partes= stock.split(" ");
        iStock=parseInt(partes[1]);
        /********************PRECIO************************************* */
        var precio=$('#'+x).children("label:contains('€')").text();
        var sPrecio=parseInt(precio.substring(0,2));
        /**********************ARTICULOS COMPRADOS*********************************** */
        ArticulosComprados=parseInt($('#citem').val());
        iStock--;
        console.log(iStock);
         
        if(iStock == 0){
            $('#'+x).children("label:contains('Stock')").text("Stock 0").addClass('agotado');
            $('#'+x).children("label:contains('Stock')").text("Stock "+iStock);
            //Suben los articulos comprados
            ArticulosComprados++;
            $('#citem').val(ArticulosComprados);
            //Se suma el precio de los objetos clickados
            sumaPrecio=sumaPrecio+sPrecio;
            $('#cprice').attr("value",sumaPrecio+" €");
            //$(this).off('click');
            //Copia
           copia(x);
        }else if(iStock < 0){
            iStock=0;
        }else{
            $(this).on('click');
            //Baja el stock
            console.log("mas item");
            $('#'+x).children("label:contains('Stock')").text("Stock "+iStock);
            //Suben los articulos comprados
            ArticulosComprados++;
            $('#citem').val(ArticulosComprados);
            //Se suma el precio de los objetos clickados
            sumaPrecio=sumaPrecio+sPrecio;
            console.log(sumaPrecio);
            $('#cprice').attr("value",sumaPrecio+" €");
            //Copia
           copia(x);
           $("#cart_items").css('width', '+=120');
        }
    });
    //funcion Copia
    function copia(x){
        var copia=$('#'+x).clone().attr("id","c"+x).addClass("icart").fadeIn('slow');
        copia.children("label:contains('Stock')").hide();
        copia.css("cursor","default").children().css("cursor","default");
        var $delete = $('<a class="delete"></a>').fadeIn('slow');
        copia.prepend($delete);
        $('#cart_items').prepend(copia);
       
        /*************************ELIMINAR ITEM *****************-********/
        $delete.click(function(){
            //OBTENEMOS ID
            var padre=$(this).parent().attr("id");
            var id= padre.substring(1);
            //AUMENTAMOS EL STOCK
            var stockPadre=$('#'+id).children("label:contains('Stock')").text();
            var partesPadre= stockPadre.split(" ");
            console.log(partesPadre[1]);
            var iStockPadre=parseInt(partesPadre[1]);
           
            if(iStockPadre==0){
                    $('#'+id).children("label:contains('Stock')").removeClass("agotado");
                    iStockPadre++;
                    $('#'+id).children("label:contains('Stock')").text("Stock "+iStockPadre);

                }else{
                    iStockPadre++;
                    $('#'+id).children("label:contains('Stock')").text("Stock "+iStockPadre);

                }
            //Bajan los articulos comprados
            ArticulosComprados--;
            $('#citem').val(ArticulosComprados);
            
            //Quitamos el valor de precio
            var precio=$('#'+id).children("label:contains('€')").text();
            var sPrecio=parseInt(precio.substring(0,2));
            //Se suma el precio de los objetos clickados
            sumaPrecio=sumaPrecio-sPrecio;
            $('#cprice').attr("value",sumaPrecio+" €");
               
            
           //LO HACEMOS DESAPARECER CON EFECTO FADE OUT
            copia.fadeOut(100,function(){
            copia.remove();
            });
            /*if($("#cart_items").children().length > 4){
                $("#cart_items").css('width', '-=120');
            }*/


        });
       
    }

    $('#btn_clear').on('click',function(){
        $('#cart_items').children().remove();
        $('#citem').val('0');
        sumaPrecio=0;
        $('#cprice').attr("value",sumaPrecio+" €");
        $('.item').children("label:contains('Stock')").text("Stock 10");
        $('.item').children("label:contains('Stock')").removeClass("agotado");
        iStock=10;
        var posActual=$("#cart_items").offset();
            var posActualLeft=posActual.left;
        $('#cart_items').css('width',anchoInicialCarrito);
        $('#cart_items').css('left','0');
        
       
    });
 

    $('#btn_prev').on('click',function(){
        var numArticulos= $("#cart_items").children().length;
        if(numArticulos>1){
            var ancho= parseInt(numArticulos)*120;
            var posActual=$("#cart_items").offset();
            var posActualLeft=posActual.left;
            if(posActualLeft > posicionInicialLeft){
               

            }else{
            $("#cart_items").css('left','+=50');
            }
        }
    });
    $('#btn_next').on('click',function(){
        var numArticulos= $("#cart_items").children().length;
        if(numArticulos > 4){
            var posActual=$("#cart_items").offset();
            var posActualLeft=posActual.left;
            console.log("posActualLeft"+posActualLeft);
            var anchoActual=$("#cart_items").css('width');
            console.log("anchoActual"+parseInt(anchoActual));
            var sumaActual= parseInt(posActualLeft)+parseInt(anchoActual);
            var sumaInicial= parseInt(posicionInicialLeft)+parseInt(anchoInicialCarrito);
            var anchoInt=parseInt(anchoActual);
            console.log("suma actual "+sumaActual);
            console.log("suma inicial"+sumaInicial);
            if(sumaActual < sumaInicial){
                
            }else{
                $("#cart_items").css('left','-=50');
            }
        }
    });
    
});