var pantalla= document.getElementById("texto");
var valor="";
var resultado=0;
var ope="";
var cadena="";
var val2="";
var tabla= document.getElementsByTagName("table");
var pantalla2= document.getElementById("texto2");
var teclaPulsada="";
var bool=false;


//FUNCION QUE ME COMPRUEBA LOS RESULTADOS ANTERIORES PARA ENCADENAR OPERACIONES
function comprueba(ope , resultado){
    var result=0;
    var content=pantalla.value;
    var number=parseFloat(content);
   
    switch(ope){
        case "+":
            result= number+resultado;
            console.log("dentro de la funcion comprueba despues de la suma el resultado es "+result);
            return result;
            
            break;

        case "-":
                result=resultado - number;
            return result;
            
            break;

        case "x":
            if(resultado==0){
                result=number;
            }
            else{
                result= resultado*number;
            }
            
            return result;
            
            break;

        case "/":
        if(resultado==0){
            result=number;
        }
        else{
            result= resultado/number;
        }
            return result;
            
            break;
    }

}

//FUNCION PRINCIPAL QUE NOS ENCUENTRA EL ELEMENTO PULSADO DENTRO DE LA TABLA, ESCRIBE , GUARDA, OPERA Y MUESTRA LOS RESULTADOS EN FUNCION DE EL BOTON CLICKADO//

tabla[0].addEventListener( 'click' , function(e){
    var x= e.target; //Seleccionamos el elemento clickado
    var casillaClickada= x.textContent;//averiguamos el contenido del boton
    var clickado= x.value;

    if(clickado==undefined){

    }else{
    
    if((clickado=="+")||(clickado=="-")||(clickado=="x")||(clickado=="/")||(clickado=="=")||(clickado=="B")||(clickado=="CE")||(clickado==".")||(clickado=="C")){
            
            var contenido=pantalla.value;
            var numero=parseFloat(contenido);
            switch(clickado){
        //-------------------------------------------------------//
                case "+":
                    console.log("EL NUMERO QUE VA A COGER EL OPERANDO + ES "+numero);
                    if(ope!=""){
                        console.log(" entras a la suma cunado ya hay una ope aqui la ope es= "+ope+"y el resultado es "+resultado);
                        resultado= comprueba(ope,resultado);
                        console.log("ahora el resultado es "+resultado);
                        pantalla.value=resultado;
                        valor="";
                        ope='+';

                    }else{
                    resultado=numero+resultado;
                    valor="";
                    ope='+';}
                    
                    val2=val2+"+";
                    pantalla2.innerHTML=val2;
                    
                    bool=false;

                    break;
         //-----------------------------------------------------//
                case ".":
                    var busca=contenido.indexOf('.');
                    if(busca >= 0){
                    }else{
                        valor=contenido+".";
                        pantalla.value=valor;
                        pantalla2.innerHTML+=clickado;
                        val2=val2+".";
                        pantalla2.innerHTML=val2;
                    }
                    contenido="";
                    
                   
                break;
        //-----------------------------------------------------//
                case "-":
                if(pantalla.value==""){
                    pantalla.value="-";
                    valor="-";
                    val2=val2+"-";
                    pantalla2.innerHTML=val2;
                }else{
                if(ope!=""){
                        console.log(" entras a la suma cunado ya hay una ope aqui la ope es= "+ope+"y el resultado es "+resultado);
                        resultado= comprueba(ope,resultado);
                        console.log("ahora el resultado es "+resultado);
                        valor="";
                        pantalla.value=resultado;
                        ope='-';
                        val2=val2+"-";
                        pantalla2.innerHTML=val2;
                }else{
                    console.log(resultado);
                    resultado=numero-resultado;
                    valor="";
                    ope='-';
                    val2=val2+"-";
                    pantalla2.innerHTML=val2;}}
                    bool=false;
                break;
        //-------------------------------------------------------//
                case "x":
                if(ope!=""){
                    console.log(" entras a la suma cunado ya hay una ope aqui la ope es= "+ope+"y el resultado es "+resultado);
                    resultado= comprueba(ope,resultado);
                    console.log("ahora el resultado es "+resultado);
                    valor="";
                    pantalla.value=resultado;
                    val2=val2+"x";
                    pantalla2.innerHTML=val2;
                    ope='x';
                }else{
                    if(resultado==0){
                        resultado=numero;
                        valor="";
                        ope='x';
                        val2=val2+"x";
                        pantalla2.innerHTML=val2;
                    
                    }
                    else{
                        resultado=resultado*numero;
                        valor="";
                        ope='*';
                        val2=val2+"x";
                        pantalla2.innerHTML=val2;
                    }}
                    bool=false;
                break;
                //------------------------------------------------------------ */
                case "/":
                if(ope!=""){
                        console.log(" entras a la suma cunado ya hay una ope aqui la ope es= "+ope+"y el resultado es "+resultado);
                        resultado= comprueba(ope,resultado);
                        console.log("ahora el resultado es "+resultado);
                        valor="";
                        pantalla.value=resultado;
                        ope='/';
                        val2=val2+"/";
                        pantalla2.innerHTML=val2;
                }else{
                    if(resultado==0){
                        resultado=numero;
                    
                    }else{
                        resultado=resultado/numero;
                }
                    
                    valor="";
                    ope='/';
                    val2=val2+"/";
                    pantalla2.innerHTML=val2;
                }
                bool=false;
                break;
        
        //-------------------------------------------------------------//
                case "CE":
                    pantalla.value="";
                    valor="";
                    resultado=0;
                    ope="";
                    pantalla2.innerHTML="";
                    val2="";
        
                break;


        //-------------------------------------------------------------//
                 case "C":
                 pantalla.value="";
                 valor="";
     
             break;
        //--------------------------------------------------------------//
                case "=":
                    if(ope == '+'){
                        console.log("has entradoa ala suma");
                        contenido=pantalla.value;
                        numero=parseFloat(contenido);
                        console.log("el numero es "+numero);
                        console.log("el resultado es "+resultado);
                        resultado=numero+resultado;
                        if(isNaN(resultado)){
                            pantalla.value="Sintax error";
                            resultado=0;
                        }else{
                        pantalla.value=resultado;
                        val2=val2+"="+resultado;
                        pantalla2.innerHTML=val2;
                        resultado=0;
                    }
                    }else if(ope == '-'){
                        console.log("has entradoa ala  resta");
                        contenido=pantalla.value;
                        numero=parseFloat(contenido);
                        resultado=resultado-numero;
                        ope="";
                        if(isNaN(resultado)){
                            pantalla.value="Sintax error";
                            resultado=0;
                        }else{
                        val2=val2+"="+resultado;
                        pantalla2.innerHTML=val2;
                        pantalla.value=resultado;
                        resultado=0;
                        }
                    }else if(ope == 'x'){
                        console.log("has entradoa ala  multi");
                        contenido=pantalla.value;
                        numero=parseFloat(contenido);
                        console.log(numero);
                        console.log(resultado);
                        resultado=resultado*numero
                        if(isNaN(resultado)){
                            pantalla.value="Sintax error";
                            resultado=0;
                        }else{
                        val2=val2+"="+resultado;
                        pantalla2.innerHTML=val2;
                        pantalla.value=resultado;
                        resultado=0;
                        }
                    }else if(ope == '/'){
                        console.log("has entradoa ala divi");
                        contenido=pantalla.value;
                        numero=parseFloat(contenido);
                        resultado=resultado/numero
                        if(isNaN(resultado)){
                            pantalla.value="Sintax error";
                            resultado=0;
                        }else{
                        val2=val2+"="+resultado;
                        pantalla2.innerHTML=val2;
                        pantalla.value=resultado;
                        resultado=0;
                        
                    }
                    }else{
                        
                    }
                    
                    bool=true;

                    
                break;
        
                case "B":
                    var array=[];
                    var valorBorrar= pantalla.value;
                    var string="";
                    for(var i=0 ; i < valorBorrar.length-1 ; i++){
                        array[i]=valorBorrar[i];
                        string=string+array[i];
                    }
                    pantalla.value=string;
                    pantalla2.innerHTML=string;
                    valor=string;
                    val2=string;
                
                break;
            }

        }else{
            console.log(bool);
            if(bool==true){
                valor="";
                if((clickado=="0")||(clickado=="1")||(clickado=="2")||(clickado=="3")||(clickado=="4")||(clickado=="5")||(clickado=="6")||(clickado=="7")||(clickado=="8")||(clickado=="9")){
                    val2=val2+"<br>";
                    pantalla2.innerHTML=val2;
                }
                
                bool=false;
            }
            console.log(bool);
            contenido="";
            valor=valor+clickado;
            val2=val2+clickado;
            pantalla.value=valor;
            pantalla2.innerHTML=val2;
            var cont=0;
        }

        if(isNaN(resultado)){
           
        }
    }});