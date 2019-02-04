$(document).ready(function () {

    $('input:required').bind("blur",function(){
        if($(this).val()==""){
            $(this).css("border","0 solid red").animate({
                borderWidth: '5',
                height: '55px'
            },100,"swing").animate({
                borderWidth: '3',
                height: '40px'
            },500);
        }else{
            $(this).css("border","0 solid green").animate({
                borderWidth: '4',
                height: '55px'
            },100).animate({
                borderWidth: '1',
                height: '40px'
            },500);
            
            //.css("border","3px solid blue");//.delay(3000).css("border","inherit");
        }
    });

    $('input[name=telefono]').blur(function(){
        if($(this).val().length != 9){
            alert("numeros incorrectos");
        }
    });
    $('input[name=EmailRepe]').blur(function(){
        if($(this).val()==$('input[name=email]').val()){
            alert("emails iguales");
        }else{
            alert("emails no son iguales");
        
        }
    });

    $('select[name=provincia]').change(function(){
        var valorSelect=$(this).val();
        var Valencia= ["Requena","Quart de Poblecito","Alboraia"];
        var Castellon=["Villareal","Oropesa","Peñiscola"];
        var Alicante=["Ibi", "Alcoy", "Denia"];
        $('select[name=localidad]').attr("disabled",false);
        console.log(Valencia.length);
        $('select[name=localidad]').html("");
        if(valorSelect=="Valencia"){
            for(var i=0 ; i < Valencia.length ; i++){
                $('select[name=localidad]').append("<option name='provincia' value='"+Valencia[i]+"'>"+Valencia[i]+"</option>");
            }
        }
        if(valorSelect=="Castellon"){
            for(var i=0 ; i < Castellon.length ; i++){
                $('select[name=localidad]').append("<option name='provincia' value='"+Castellon[i]+"'>"+Castellon[i]+"</option>");
            }
        }
        if(valorSelect=="Alicante"){
            for(var i=0 ; i < Alicante.length ; i++){
                $('select[name=localidad]').append("<option name='provincia' value='"+Alicante[i]+"'>"+Alicante[i]+"</option>");
            }
        }
        

    });

    $("form").submit(function(){
       
            var resultado=$('input[name=email]').val().indexOf("@");
            if(resultado == -1){
                alert("email incorrecto le falta la @");
                return false;
            }else{
                alert("email correcto tiene la @");

            }
        
        /**DNI COMPROBACIONES */
        /*if($("input[name=dni]").val()=="" || $("input[name=letra]").val()==""){
            alert("dni vacio");
            return false;
        }else{
            var dni=$("input[name=dni]").val();
            dni=parseInt(dni);
            if(!isNaN(dni)){
                var letra;
                var resto= dni%23;
                console.log(resto);
                switch(resto){
                    case 0:
                    letra="T";
                    break;
                    case 1:
                    letra="R";
                    break;
                    case 2:
                    letra="W";
                    break;
                    case 3:
                    letra="A";
                    break;
                    case 4:
                    letra="G";
                    break;
                    case 5:
                    letra="M";
                    break;
                    case 6:
                    letra="Y";
                    break;
                    case 7:
                    letra="F";
                    break;
                    case 8:
                    letra="P";
                    break;
                    case 9:
                    letra="D";
                    break;
                    case 10:
                    letra="X";
                    break;
                    case 11:
                    letra="B";
                    break;
                    case 12:
                    letra="N";
                    break;
                    case 13:
                    letra="J";
                    break;
                    case 14:
                    letra="Z";
                    break;
                    case 15:
                    letra="S";
                    break;
                    case 16:
                    letra="Q";
                    break;
                    case 17:
                    letra="V";
                    break;
                    case 18:
                    letra="H";
                    break;
                    case 19:
                    letra="L";
                    break;
                    case 20:
                    letra="C";
                    break;
                    case 21:
                    letra="K";
                    break;
                    case 22:
                    letra="E";
                    break;
                    default: letra="DNI INCORRECTO";
                    break;
                }

                if($('input[name=letra]').val()==letra){
                    alert("DNI CORRECTO");
                }else{
                    alert("DNI INCORRECTO");
                    return false;
                }
            }else{
                alert("el dni no es numero");
                return false;
            } 
        }*/

        
        
      });


  });