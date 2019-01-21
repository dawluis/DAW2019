$(document).ready(function(){
/* GÉNERO PUZZLE ORDENADO CON LA IMAGENES ORDENADAS */
    var imagen="perro";
    var tempo
    var intentos=0;
    var time=0;
    var seconds=0;
    var minuts=0;
    var bool=false;
    var imagenQuitada=0;
    var vacioRandom=0;
    var contador=0;
    
    var content="<table><h1>";
    for(var i=1; i < 5 ; i++){
        content +='<tr>';
        for(var z=1 ;z < 5 ; z++){
            contador++;
            content +='<td id=c'+contador+'><img id="'+contador+'" src="perro/'+contador+'.jpg" width=100px></td>';
        }
        content +='</tr>';
    }
    content+='</table>';
    $('#puzzle').append(content);
    //$('#puzzle table td').css('width', '64px').css('height','64px');
    $('#buttons').prepend("<button id='perro' class='elije'><img src='perro.jfif' width='100px'></button>");
    $('#buttons').prepend("<button id='labrador' class='elije'><img src='labrador.jfif' width='100px'></button>");
    $('#buttons').append("<br><br><br><h3 style='text-align:center'>INTENTOS</h3><div id='intentos'>0</div>");
    $('#buttons').append("<br><br><br><div><img id='imagenAyuda' src='perro.jfif' width=100%></div>");
   
    $('#buttons div').css("display", "flex").css('justify-content','center').css("align-items","center");
    /* fin */
    
    $('#aleatorio').bind('click', generaAleatorio);
    $('#ayuda').bind('click', ayudar);
    
  
    $('#perro').click({img:"perro"},generaImagen);
    $('#labrador').click({img:"labrador"},generaImagen);
    
    /********************GENERA PUZZLE ALEATORIO **************************/
    function generaAleatorio(){
        clearInterval(tempo);
        intentos=0;
        time=0;
        $('#intentos').html(intentos);
        var casillas= document.getElementsByTagName('td');
        var aleatorios=aleatorio();
        vacioRandom=Math.floor(Math.random() *16)+1;
        for(var i=0 ; i< casillas.length; i++){
            if(i+1 == vacioRandom){
                casillas[i].innerHTML=" ";
                imagenQuitada=aleatorios[i];
            }else{
                casillas[i].innerHTML="<img id='"+aleatorios[i]+"' src='"+imagen+"/"+aleatorios[i]+".jpg' width=100x>";
            }

        }
        $('#puzzle table').css('margin', 'auto');
        $('#puzzle table td').css('width', '64px').css('height','64px');
        
        $('img').bind('click' , mover);
        $('img').on("contextmenu", ventaja);
       
        console.log(vacioRandom)
        console.log("imagen quitada es la imagen: "+imagenQuitada);
        tempo= setInterval(cronometro,1000);
        $('#comodines').html("1");
    }
    
    /*********************MOVER IMAGEN, COMPROBAR SI ES CORRECTO Y MUCHO MAS*******************/
    function mover(e){
        /*decalramos las variables necesarias*/
        var casillas=document.getElementsByTagName('td');
        var x= e.target;
        var imagenId= x.id;
        var casillaId= x.parentNode.id;
        
        /* AQUI ELIMINAMOS LA COLA DE PARPADEO DE LA CASILLA INCORRECTA*/
        $('#'+casillaId).clearQueue();
        
        /*AVERIGUAR CASILLA VACIA*/
        for(var i=0 ; i< casillas.length; i++){
            if(casillas[i].textContent == " "){
                var casillaVaciaId=casillas[i].id;
            }
        }
        /**PRUEBAS PARA SABER LOS ELEMENTOS PULSADOS */
        console.log("HAS PULSADO EN LA CASILLA : "+casillaId);
        console.log("EL ID DE LA IMAGEN PULSADA ES : "+imagenId);
        console.log("ID DE LA CASILLA VACIA : "+casillaVaciaId);
        console.log("LA IMAGEN QUITADA INCIALMENTE ES LA IMAGEN: "+imagenQuitada);

        /*********INSERTAR IMAGEN CLICKADA EN IMAGEN VACIA Y VACIAR LA CLIKADA********/
        var numeroCasillaVacia=casillaVaciaId.replace("c","");
        var numeroCasillaPulsada=casillaId.replace("c","");
        var casillaOrigen="";
        var casillaDestino="none";
        
        /**AQUI LE LIMITAMOS LOS MOVIMIENTOS SOLO A SUS ADYACENTES */
        switch(casillaId){
            case "c1":
            if(casillaVaciaId=="c2" || casillaVaciaId=="c5"){
                casillaDestino=casillaVaciaId;
            }else{
               
            }
            break;
            
            case "c2":
            if(casillaVaciaId=="c1" || casillaVaciaId=="c3" || casillaVaciaId=="c6"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
            
            case "c3":
            if(casillaVaciaId=="c2" || casillaVaciaId=="c4" || casillaVaciaId=="c7"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
            
            case "c4":
            if(casillaVaciaId=="c3" || casillaVaciaId=="c8"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
            
            case "c5":
            if(casillaVaciaId=="c1" || casillaVaciaId=="c6"|| casillaVaciaId=="c9"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
            
            case "c6":
            if(casillaVaciaId=="c2" || casillaVaciaId=="c7"|| casillaVaciaId=="c10"|| casillaVaciaId=="c5"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
            
            case "c7":
            if(casillaVaciaId=="c3" || casillaVaciaId=="c8"|| casillaVaciaId=="c11"|| casillaVaciaId=="c6"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
           
            case "c8":
            if(casillaVaciaId=="c7" || casillaVaciaId=="c4"|| casillaVaciaId=="c12"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
            
            case "c9":
            if(casillaVaciaId=="c5" || casillaVaciaId=="c10"|| casillaVaciaId=="c13"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
            
            case "c10":
            if(casillaVaciaId=="c9" || casillaVaciaId=="c11"|| casillaVaciaId=="c6"|| casillaVaciaId=="c14"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
            
            case "c11":
            if(casillaVaciaId=="c10" || casillaVaciaId=="c12"|| casillaVaciaId=="c7"|| casillaVaciaId=="c15"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break; 
            
            case "c12":
            if(casillaVaciaId=="c8" || casillaVaciaId=="c11"|| casillaVaciaId=="c16"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
            case "c13":
            if(casillaVaciaId=="c9" || casillaVaciaId=="c14"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
            case "c14":
            if(casillaVaciaId=="c13" || casillaVaciaId=="c10"|| casillaVaciaId=="c15"){casillaDestino=casillaVaciaId;}else{

            }
            break;
            case "c15":
            if(casillaVaciaId=="c14" || casillaVaciaId=="c16"|| casillaVaciaId=="c11"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
            case "c16":
            if(casillaVaciaId=="c15" || casillaVaciaId=="c12"){
                casillaDestino=casillaVaciaId;
            }else{

            }
            break;
        }
        /**SI LA CASILLADESTINO SIGUE SIENDO NONE ES QUE NO SE HA PODIDO MOVER LA FICHA */
        if(casillaDestino=="none"){
            /**AQUI REALIZAMOS UN PEQUEÑO PARPADEO PARA QUE SE SEPA QUE ESTA MAL LA SELECCIONADA */
            $('#'+casillaId).animate({
                opacity:"0.1"
            },10).animate({
                opacity:"1"
            },10).css("background","red");
            $('#'+casillaId).css("background","white");
           
        }else{
            $("#"+casillaDestino).html("<img id='"+imagenId+"' src='"+imagen+"/"+imagenId+".jpg' width='100px'>");
            $("#"+casillaId).html(" ");
            $('img').bind('click' , mover);
            intentos++;
        }
       // $("#"+casillaVaciaId).html("<img id='"+imagenId+"' src='perro/"+imagenId+".jpg' width='100px'>");
        //$("#"+casillaId).html(" ");
        console.log("NUMERO DE INTENTOS "+intentos);
        $('#intentos').html(intentos);
        
        
        var casillaVaciaPost=casillaId;
        var str=casillaVaciaPost.replace("c","");
        //console.log("id de casilla vacia sin la letra : "+str);
        var cont=0;

        /*Comprobar si es correcto el puzzle*/
        for(var i=0 ; i< casillas.length; i++){
           if(str == imagenQuitada){
                bool=true;
                console.log("aasdaasd LA IMAGEN QUE FALTA ESTA EN LA CASILLA QUE HE PULSADO");
            }
            var str=casillas[i].id.replace("c","");
            //console.log("En la casilla"+i+" el id es: "+str);
            //console.log("En la casilla"+i+" el di del hijo es "+casillas[i].firstChild.id);
            if(str==casillas[i].firstChild.id){
                cont++;
            }
        }



        console.log("coincide "+cont+" veces ");
        /*********COMPROBAMOS SI LAS COINZIDENCIAS SON CORRECTAS************** */
        if(cont==15 && bool==true){
            alert("correcto");
            clearInterval(tempo);
            $('img').unbind('click' , mover);
            $('img').off("contextmenu", ventaja);
        }else{
            $('img').on("contextmenu", ventaja);
        }
        
    }
   
    /***********************AYUDA**********************/
    function ayudar(){
        console.log($('#buttons img').css('display'));
       
        if($('#buttons img').css('display') == 'block'){
            $('img').off("contextmenu", ventaja);
        }else{
            $('img').on("contextmenu", ventaja);
        }
        $('#buttons img').slideToggle(2000);
       
        
    }

    function aleatorio(){
        var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        var ranNums=[];
        var i= nums.length;
        var j= 0;
        while(i--){
            j=Math.floor(Math.random() * (i+1));
            ranNums.push(nums[j]);
            nums.splice(j,1);
        }
        return ranNums;
    }

    function ventaja(e){
    if($('#comodines').html() == "1"){
        $('#comodines').html("0");
        var casillas=document.getElementsByTagName('td');
        console.log("VENTAJA APLICAAAAAAAA");
        var x= e.target;
        var imagenId= x.id;
        var casillaId= x.parentNode.id;
        
        
        /*AVERIGUAR CASILLA VACIA*/
        for(var i=0 ; i< casillas.length; i++){
            if(casillas[i].textContent == " "){
                var casillaVaciaId=casillas[i].id;
            }
        }
        $("#"+casillaVaciaId).html("<img id='"+imagenId+"' src='"+imagen+"/"+imagenId+".jpg' width='100px'>");
        $("#"+casillaId).html(" ");
        $('img').bind('click' , mover);
        intentos++;
        $('#intentos').html(intentos);

    }else{
            console.log("no te quedan comodines");
            $('#comodines').html("<span style:'color:red'>NO TE QUEDAN COMODINES</span>");

    }
        

    }
    function cronometro(){
        time++;
        if(time >= 10){
        if(time >= 60){
            time=0
            minuts++
            if(minuts >= 10){
                $('#tiempo').html("00:"+minuts+":"+time);

            }else{
                $('#tiempo').html("00:0"+minuts+":0"+time);
            }
        }else{
            if(minuts > 0 ){
                if(minuts >= 10){
                    $('#tiempo').html("00:"+minuts+":"+time);
                }else{
                    $('#tiempo').html("00:0"+minuts+":"+time);
                }
               
            }else{
                $('#tiempo').html("00:00:"+time);
            }
           
        }
    }else{
        if(minuts > 0 ){
            if(minuts >= 10){
                $('#tiempo').html("00:"+minuts+":0"+time);
            }else{
                $('#tiempo').html("00:0"+minuts+":0"+time);
            }
           
        }else{
            $('#tiempo').html("00:00:0"+time);
        }
    }
       


    }
    function generaImagen(img){
        //alert(img.data.img); PASAR PARAMETROS JQUERY
        var imag=img.data.img;
        imagen=imag;
        alert(imag);
        contador=0;
        var content="<table><h1>";
        for(var i=1; i < 5 ; i++){
        content +='<tr>';
        for(var z=1 ;z < 5 ; z++){
            contador++;
            content +='<td id=c'+contador+'><img id="'+contador+'" src="'+imag+'/'+contador+'.jpg" width=100px></td>';
        }
        content +='</tr>';
    }
    content+='</table>';
    $('#puzzle').html(content);

    $('#imagenAyuda').attr('src', imagen+'.jfif');

    }


    /*function generaPuzzle(){
        var contador=0;
        var content="<table>";
        for(var i=1; i < 5 ; i++){
            content +='<tr>';
            for(var z=1 ;z < 5 ; z++){
                contador++;
                content +='<td id='+contador+'><img src="perro/'+contador+'.jpg" width=100x></td>';
            }
            content +='</tr>';
        }
        content+='</table>';
        $('#puzzle').append(content);
        $('#puzzle table').css('margin', 'auto');
        $('#puzzle table td').css('width', '64px').css('height','64px');
        $('#generar').unbind();
    }*/

});