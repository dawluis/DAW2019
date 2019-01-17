$(document).ready(function(){
/* GÉNERO PUZZLE ORDENADO CON LA IMAGENES ORDENADAS */
    var contador=0;
    var content="<table>";
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
    $('#puzzle table').css('margin', 'auto');
    $('#puzzle table td').css('width', '64px').css('height','64px');
/* fin */
    
    $('#aleatorio').bind('click', generaAleatorio);
   
        
       


    function generaAleatorio(){
        
        var casillas= document.getElementsByTagName('td');
        var aleatorios=aleatorio();
        var random=Math.floor(Math.random() * (16+1));
        for(var i=0 ; i< casillas.length; i++){
            if(i == random){
                casillas[i].innerHTML=" ";
            }else{
                casillas[i].innerHTML="<img id='"+aleatorios[i]+"' src='perro/"+aleatorios[i]+".jpg' width=100x>";
            }

        }
        $('#puzzle table').css('margin', 'auto');
        $('#puzzle table td').css('width', '64px').css('height','64px');
        $('img').bind('click' , mover);
    }
    function mover(e){
        var casillas=document.getElementsByTagName('td');
        var x= e.target;
        var imagenId= x.id;
        var casillaId= x.parentNode.id;
        
        /*AVERIGUAR CASILLA VACIA*/
        for(var i=0 ; i< casillas.length; i++){
            if(casillas[i].textContent == " "){
                var casillaVaciaId=casillas[i].id;
            }
        }
        console.log("ID DE LA IMAGEN: "+imagenId);
        console.log("ID DE LA CASILLA: "+casillaId);
        console.log("ID DE LA CASILLA VACIA: "+casillaVaciaId);

        $("#"+casillaVaciaId).html("<img id='"+imagenId+"' src='perro/"+imagenId+".jpg' width='100px'>");
        $("#"+casillaId).html(" ");

        $('img').bind('click' , mover);

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