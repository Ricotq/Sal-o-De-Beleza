
var flagSeg=0;
var flagTer=0;
var flagQua=0;
var flagQui=0;
var flagSex=0;
var flagSab=0;
var flagDom=0;

var flagheSeg=0;
var flagheTer=0;
var flagheQua=0;
var flagheQui=0;
var flagheSex=0;
var flagheSab=0;
var flagheDom=0;

var contraFlagheSeg=0;
var contraFlagheTer=0;
var contraFlagheQua=0;
var contraFlagheQui=0;
var contraFlagheSex=0;
var contraFlagheSab=0;
var contraFlagheDom=0;

var flagheBSeg=0;
var flagheBTer=0;
var flagheBQua=0;
var flagheBQui=0;
var flagheBSex=0;
var flagheBSab=0;
var flagheBDom=0;

var contraFlagheBSeg=0;
var contraFlagheBTer=0;
var contraFlagheBQua=0;
var contraFlagheBQui=0;
var contraFlagheBSex=0;
var contraFlagheBSab=0;
var contraFlagheBDom=0;


function ativar(dia){
    
    switch (dia) {
        case "Seg":
            if(flagSeg===0){
                Seg.checked=true;
                document.getElementById('expediente').style.display = "initial";
                document.getElementById('intervalo').style.display = "initial";
                
                document.getElementById('horaEntrada'+dia).style.display = "initial";
                document.getElementById('horaSaida'+dia).style.display = "initial";
                document.getElementById('lbhoraEntrada'+dia).style.display = "initial";
                document.getElementById('lbhoraSaida'+dia).style.display = "initial";

                document.getElementById('intEntrada'+dia).style.display = "initial";
                document.getElementById('intSaida'+dia).style.display = "initial";
                document.getElementById('lbintEntrada'+dia).style.display = "initial";
                document.getElementById('lbintSaida'+dia).style.display = "initial";
                //alert('flagSeg===0');
                flagSeg=1;
            }else{
                Seg.checked=false;
                document.getElementById('horaEntrada'+dia).style.display = "none";
                document.getElementById('horaSaida'+dia).style.display = "none";
                document.getElementById('lbhoraEntrada'+dia).style.display = "none";
                document.getElementById('lbhoraSaida'+dia).style.display = "none";

                document.getElementById('intEntrada'+dia).style.display = "none";
                document.getElementById('intSaida'+dia).style.display = "none";
                document.getElementById('lbintEntrada'+dia).style.display = "none";
                document.getElementById('lbintSaida'+dia).style.display = "none";
                //alert('ELSE flagSeg===1');
                flagSeg=0;
            }
            break;
        case "Ter":
            if(flagTer===0){
                Ter.checked=true;
                document.getElementById('expediente').style.display = "initial";
                document.getElementById('intervalo').style.display = "initial";
                
                document.getElementById('horaEntrada'+dia).style.display = "initial";
                document.getElementById('horaSaida'+dia).style.display = "initial";
                document.getElementById('lbhoraEntrada'+dia).style.display = "initial";
                document.getElementById('lbhoraSaida'+dia).style.display = "initial";

                document.getElementById('intEntrada'+dia).style.display = "initial";
                document.getElementById('intSaida'+dia).style.display = "initial";
                document.getElementById('lbintEntrada'+dia).style.display = "initial";
                document.getElementById('lbintSaida'+dia).style.display = "initial";
                //alert('flagSeg===0');
                flagTer=1;
            }else{
                Ter.checked=false;
                document.getElementById('horaEntrada'+dia).style.display = "none";
                document.getElementById('horaSaida'+dia).style.display = "none";
                document.getElementById('lbhoraEntrada'+dia).style.display = "none";
                document.getElementById('lbhoraSaida'+dia).style.display = "none";

                document.getElementById('intEntrada'+dia).style.display = "none";
                document.getElementById('intSaida'+dia).style.display = "none";
                document.getElementById('lbintEntrada'+dia).style.display = "none";
                document.getElementById('lbintSaida'+dia).style.display = "none";
                //alert('ELSE flagSeg===1');
                flagTer=0;
            }
            break;
        case "Qua":
            if(flagQua===0){
                Qua.checked=true;
                document.getElementById('expediente').style.display = "initial";
                document.getElementById('intervalo').style.display = "initial";
                
                document.getElementById('horaEntrada'+dia).style.display = "initial";
                document.getElementById('horaSaida'+dia).style.display = "initial";
                document.getElementById('lbhoraEntrada'+dia).style.display = "initial";
                document.getElementById('lbhoraSaida'+dia).style.display = "initial";

                document.getElementById('intEntrada'+dia).style.display = "initial";
                document.getElementById('intSaida'+dia).style.display = "initial";
                document.getElementById('lbintEntrada'+dia).style.display = "initial";
                document.getElementById('lbintSaida'+dia).style.display = "initial";
                //alert('flagSeg===0');
                flagQua=1;
            }else{
                Qua.checked=false;
                document.getElementById('horaEntrada'+dia).style.display = "none";
                document.getElementById('horaSaida'+dia).style.display = "none";
                document.getElementById('lbhoraEntrada'+dia).style.display = "none";
                document.getElementById('lbhoraSaida'+dia).style.display = "none";

                document.getElementById('intEntrada'+dia).style.display = "none";
                document.getElementById('intSaida'+dia).style.display = "none";
                document.getElementById('lbintEntrada'+dia).style.display = "none";
                document.getElementById('lbintSaida'+dia).style.display = "none";
                //alert('ELSE flagSeg===1');
                flagQua=0;
            }
            break;
        case "Qui":
            if(flagQui===0){
                Qui.checked=true;
                document.getElementById('expediente').style.display = "initial";
                document.getElementById('intervalo').style.display = "initial";
                
                document.getElementById('horaEntrada'+dia).style.display = "initial";
                document.getElementById('horaSaida'+dia).style.display = "initial";
                document.getElementById('lbhoraEntrada'+dia).style.display = "initial";
                document.getElementById('lbhoraSaida'+dia).style.display = "initial";

                document.getElementById('intEntrada'+dia).style.display = "initial";
                document.getElementById('intSaida'+dia).style.display = "initial";
                document.getElementById('lbintEntrada'+dia).style.display = "initial";
                document.getElementById('lbintSaida'+dia).style.display = "initial";
                //alert('flagSeg===0');
                flagQui=1;
            }else{
                Qui.checked=false;
                document.getElementById('horaEntrada'+dia).style.display = "none";
                document.getElementById('horaSaida'+dia).style.display = "none";
                document.getElementById('lbhoraEntrada'+dia).style.display = "none";
                document.getElementById('lbhoraSaida'+dia).style.display = "none";

                document.getElementById('intEntrada'+dia).style.display = "none";
                document.getElementById('intSaida'+dia).style.display = "none";
                document.getElementById('lbintEntrada'+dia).style.display = "none";
                document.getElementById('lbintSaida'+dia).style.display = "none";
                //alert('ELSE flagSeg===1');
                flagQui=0;
            }
            break;
        case "Sex":
            if(flagSex===0){
                Sex.checked=true;
                document.getElementById('expediente').style.display = "initial";
                document.getElementById('intervalo').style.display = "initial";
                
                document.getElementById('horaEntrada'+dia).style.display = "initial";
                document.getElementById('horaSaida'+dia).style.display = "initial";
                document.getElementById('lbhoraEntrada'+dia).style.display = "initial";
                document.getElementById('lbhoraSaida'+dia).style.display = "initial";

                document.getElementById('intEntrada'+dia).style.display = "initial";
                document.getElementById('intSaida'+dia).style.display = "initial";
                document.getElementById('lbintEntrada'+dia).style.display = "initial";
                document.getElementById('lbintSaida'+dia).style.display = "initial";
                //alert('flagSeg===0');
                flagSex=1;
            }else{
                Sex.checked=false;
                document.getElementById('horaEntrada'+dia).style.display = "none";
                document.getElementById('horaSaida'+dia).style.display = "none";
                document.getElementById('lbhoraEntrada'+dia).style.display = "none";
                document.getElementById('lbhoraSaida'+dia).style.display = "none";

                document.getElementById('intEntrada'+dia).style.display = "none";
                document.getElementById('intSaida'+dia).style.display = "none";
                document.getElementById('lbintEntrada'+dia).style.display = "none";
                document.getElementById('lbintSaida'+dia).style.display = "none";
                //alert('ELSE flagSeg===1');
                flagSex=0;
            }
            break;
        case "Sab":
            if(flagSab===0){
                Sab.checked=true;
                document.getElementById('expediente').style.display = "initial";
                document.getElementById('intervalo').style.display = "initial";
                
                document.getElementById('horaEntrada'+dia).style.display = "initial";
                document.getElementById('horaSaida'+dia).style.display = "initial";
                document.getElementById('lbhoraEntrada'+dia).style.display = "initial";
                document.getElementById('lbhoraSaida'+dia).style.display = "initial";

                document.getElementById('intEntrada'+dia).style.display = "initial";
                document.getElementById('intSaida'+dia).style.display = "initial";
                document.getElementById('lbintEntrada'+dia).style.display = "initial";
                document.getElementById('lbintSaida'+dia).style.display = "initial";
                //alert('flagSeg===0');
                flagSab=1;
            }else{
                Sab.checked=false;
                document.getElementById('horaEntrada'+dia).style.display = "none";
                document.getElementById('horaSaida'+dia).style.display = "none";
                document.getElementById('lbhoraEntrada'+dia).style.display = "none";
                document.getElementById('lbhoraSaida'+dia).style.display = "none";

                document.getElementById('intEntrada'+dia).style.display = "none";
                document.getElementById('intSaida'+dia).style.display = "none";
                document.getElementById('lbintEntrada'+dia).style.display = "none";
                document.getElementById('lbintSaida'+dia).style.display = "none";
                //alert('ELSE flagSeg===1');
                flagSab=0;
            }
            break;
        case "Dom":
            if(flagDom===0){
                Dom.checked=true;
                document.getElementById('expediente').style.display = "initial";
                document.getElementById('intervalo').style.display = "initial";
                
                document.getElementById('horaEntrada'+dia).style.display = "initial";
                document.getElementById('horaSaida'+dia).style.display = "initial";
                document.getElementById('lbhoraEntrada'+dia).style.display = "initial";
                document.getElementById('lbhoraSaida'+dia).style.display = "initial";

                document.getElementById('intEntrada'+dia).style.display = "initial";
                document.getElementById('intSaida'+dia).style.display = "initial";
                document.getElementById('lbintEntrada'+dia).style.display = "initial";
                document.getElementById('lbintSaida'+dia).style.display = "initial";
                //alert('flagSeg===0');
                flagDom=1;
            }else{
                Dom.checked=false;
                document.getElementById('horaEntrada'+dia).style.display = "none";
                document.getElementById('horaSaida'+dia).style.display = "none";
                document.getElementById('lbhoraEntrada'+dia).style.display = "none";
                document.getElementById('lbhoraSaida'+dia).style.display = "none";

                document.getElementById('intEntrada'+dia).style.display = "none";
                document.getElementById('intSaida'+dia).style.display = "none";
                document.getElementById('lbintEntrada'+dia).style.display = "none";
                document.getElementById('lbintSaida'+dia).style.display = "none";
                //alert('ELSE flagSeg===1');
                flagDom=0;
            }
            break;        
    }   
}

var horaEntradaSeg = parseInt(document.getElementById('horaEntradaSeg').value);
var horaSaidaSeg = parseInt(document.getElementById('horaSaidaSeg').value);
var horaEntradaTer = parseInt(document.getElementById('horaEntradaTer').value);
var horaSaidaTer = parseInt(document.getElementById('horaSaidaTer').value);
var horaEntradaQua = parseInt(document.getElementById('horaEntradaQua').value);
var horaSaidaQua = parseInt(document.getElementById('horaSaidaQua').value);
var horaEntradaQui = parseInt(document.getElementById('horaEntradaQui').value);
var horaSaidaQui = parseInt(document.getElementById('horaSaidaQui').value);
var horaEntradaSex = parseInt(document.getElementById('horaEntradaSex').value);
var horaSaidaSex = parseInt(document.getElementById('horaSaidaSex').value);
var horaEntradaSab = parseInt(document.getElementById('horaEntradaSab').value);
var horaSaidaSab = parseInt(document.getElementById('horaSaidaSab').value);
var horaEntradaDom = parseInt(document.getElementById('horaEntradaDom').value);
var horaSaidaDom = parseInt(document.getElementById('horaSaidaDom').value);

var intEntradaSeg = parseInt(document.getElementById('intEntradaSeg').value);
var intSaidaSeg = parseInt(document.getElementById('intSaidaSeg').value);
var intEntradaTer = parseInt(document.getElementById('intEntradaTer').value);
var intSaidaTer = parseInt(document.getElementById('intSaidaTer').value);
var intEntradaQua = parseInt(document.getElementById('intEntradaQua').value);
var intSaidaQua = parseInt(document.getElementById('intSaidaQua').value);
var intEntradaQui = parseInt(document.getElementById('intEntradaQui').value);
var intSaidaQui = parseInt(document.getElementById('intSaidaQui').value);
var intEntradaSex = parseInt(document.getElementById('intEntradaSex').value);
var intSaidaSex = parseInt(document.getElementById('intSaidaSex').value);
var intEntradaSab = parseInt(document.getElementById('intEntradaSab').value);
var intSaidaSab = parseInt(document.getElementById('intSaidaSab').value);
var intEntradaDom = parseInt(document.getElementById('intEntradaDom').value);
var intSaidaDom = parseInt(document.getElementById('intSaidaDom').value);

function validarHora(hora){
    //alert('validarHora(horaSaida)');
    //inicializarCampos(hora);
    
    /**/
    switch (hora){
        case "heSeg":
            //alert('hora entrada= '+hora);
            horaEntradaSeg = parseInt(document.getElementById('horaEntradaSeg').value);
            horaSaidaSeg = parseInt(document.getElementById('horaSaidaSeg').value);
            
            document.getElementById('f1').innerHTML=horaEntradaSeg;
            document.getElementById('f2').innerHTML=horaSaidaSeg;
            
            if(horaSaidaSeg>0){
                //alert('NO IF horaSaidaSeg > 0');
                if(horaEntradaSeg>=horaSaidaSeg){
                    //alert('horaEntradaSeg = '+horaEntradaSeg+' > horaSaidaSeg = '+horaSaidaSeg);
                    alert('Hora de entrada não pode ser maior que a hora da saída.');
                    document.getElementById('horaEntradaSeg').value=0;
                }
            }
            
            break;
        case "hsSeg":
            //alert('hora saida= '+hora);
            horaEntradaSeg = parseInt(document.getElementById('horaEntradaSeg').value);
            horaSaidaSeg = parseInt(document.getElementById('horaSaidaSeg').value);
            
            document.getElementById('f1').innerHTML=horaEntradaSeg;
            document.getElementById('f2').innerHTML=horaSaidaSeg;
            
            if(horaEntradaSeg>=horaSaidaSeg){
                alert('Hora de entrada não pode ser maior que a hora da saída.');
                document.getElementById('horaSaidaSeg').value=0;
                }
            break;
        
        case "heTer":
            horaEntradaTer = parseInt(document.getElementById('horaEntradaTer').value);
            horaSaidaTer = parseInt(document.getElementById('horaSaidaTer').value);
            if(horaSaidaTer>0){
                //alert('NO IF horaSaidaSeg > 0');
                if(horaEntradaTer>=horaSaidaTer){
                    alert('Hora de entrada não pode ser maior que a hora da saída.');
                    document.getElementById('horaEntradaTer').value=0;
                }
            }
            break;
            
        case "hsTer":
            horaEntradaTer = parseInt(document.getElementById('horaEntradaTer').value);
            horaSaidaTer = parseInt(document.getElementById('horaSaidaTer').value);
            if(horaEntradaTer>=horaSaidaTer){
                alert('Hora de entrada não pode ser maior que a hora da saída.');
                document.getElementById('horaSaidaTer').value=0;
                }
            break;
            
        case "heQua":
            horaEntradaQua = parseInt(document.getElementById('horaEntradaQua').value);
            horaSaidaQua = parseInt(document.getElementById('horaSaidaQua').value);
            if(horaSaidaQua>0){
                //alert('NO IF horaSaidaSeg > 0');
                if(horaEntradaQua>=horaSaidaQua){
                    alert('Hora de entrada não pode ser maior que a hora da saída.');
                    document.getElementById('horaEntradaQua').value=0;
                }
            }
            break;
            
        case "hsQua":
            horaEntradaQua = parseInt(document.getElementById('horaEntradaQua').value);
            horaSaidaQua = parseInt(document.getElementById('horaSaidaQua').value);
            if(horaEntradaQua>=horaSaidaQua){
                alert('Hora de entrada não pode ser maior que a hora da saída.');
                document.getElementById('horaSaidaQua').value=0;
                }
            break;
            
        case "heQui":
            horaEntradaQui = parseInt(document.getElementById('horaEntradaQui').value);
            horaSaidaQui = parseInt(document.getElementById('horaSaidaQui').value);
            if(horaSaidaQui>0){
                if(horaEntradaQui>=horaSaidaQui){
                    alert('Hora de entrada não pode ser maior que a hora da saída.');
                    document.getElementById('horaEntradaQui').value=0;
                }
            }
            break;
            
        case "hsQui":
            horaEntradaQui = parseInt(document.getElementById('horaEntradaQui').value);
            horaSaidaQui = parseInt(document.getElementById('horaSaidaQui').value);
            if(horaEntradaQui>=horaSaidaQui){
                alert('Hora de entrada não pode ser maior que a hora da saída.');
                document.getElementById('horaSaidaQui').value=0;
                }
            break;
            
        case "heSex":
            horaEntradaSex = parseInt(document.getElementById('horaEntradaSex').value);
            horaSaidaSex = parseInt(document.getElementById('horaSaidaSex').value);
            if(horaSaidaSex>0){
                if(horaEntradaSex>=horaSaidaSex){
                    alert('Hora de entrada não pode ser maior que a hora da saída.');
                    document.getElementById('horaEntradaSex').value=0;
                }
            }
            break;
            
        case "hsSex":
            horaEntradaSex = parseInt(document.getElementById('horaEntradaSex').value);
            horaSaidaSex = parseInt(document.getElementById('horaSaidaSex').value);
            if(horaEntradaSex>=horaSaidaSex){
                alert('Hora de entrada não pode ser maior que a hora da saída.');
                document.getElementById('horaSaidaSex').value=0;
                }
            break;
            
        case "heSab":
            horaEntradaSab = parseInt(document.getElementById('horaEntradaSab').value);
            horaSaidaSab = parseInt(document.getElementById('horaSaidaSab').value);
            if(horaSaidaSab>0){
                if(horaEntradaSab>=horaSaidaSab){
                    alert('Hora de entrada não pode ser maior que a hora da saída.');
                    document.getElementById('horaEntradaSab').value=0;
                }
            }
            break;
            
        case "hsSab":
            horaEntradaSab = parseInt(document.getElementById('horaEntradaSab').value);
            horaSaidaSab = parseInt(document.getElementById('horaSaidaSab').value);
            if(horaEntradaSab>=horaSaidaSab){
                alert('Hora de entrada não pode ser maior que a hora da saída.');
                document.getElementById('horaSaidaSab').value=0;
                }
            break;
            
        case "heDom":
            horaEntradaDom = parseInt(document.getElementById('horaEntradaDom').value);
            horaSaidaDom = parseInt(document.getElementById('horaSaidaDom').value);
            if(horaSaidaDom>0){
                if(horaEntradaDom>=horaSaidaDom){
                    alert('Hora de entrada não pode ser maior que a hora da saída.');
                    document.getElementById('horaEntradaDom').value=0;
                }
            }
            break;
            
        case "hsDom":
            horaEntradaDom = parseInt(document.getElementById('horaEntradaDom').value);
            horaSaidaDom = parseInt(document.getElementById('horaSaidaDom').value);
            if(horaEntradaDom>=horaSaidaDom){
                alert('Hora de entrada não pode ser maior que a hora da saída.');
                document.getElementById('horaSaidaDom').value=0;
                }
            break;
            
        case "beSeg":
            //alert("Breake entra segunda");
            intEntradaSeg = parseInt(document.getElementById('intEntradaSeg').value);
            intSaidaSeg = parseInt(document.getElementById('intSaidaSeg').value);
            horaEntradaSeg = parseInt(document.getElementById('horaEntradaSeg').value);
            horaSaidaSeg = parseInt(document.getElementById('horaSaidaSeg').value);
            if(intEntradaSeg<horaSaidaSeg && intEntradaSeg>horaEntradaSeg){
                if(intSaidaSeg>0){
                    if(intEntradaSeg<=horaEntradaSeg || intEntradaSeg>=horaSaidaSeg || intEntradaSeg>=intSaidaSeg){
                        alert('Hora de entrada de intervalo não é válida!');
                        document.getElementById('intEntradaSeg').value=0;
                    }
                }
            }else{
                alert('Hora de entrada de intervalo não é válida!');
                document.getElementById('intEntradaSeg').value=0;
            }
            break;
        case "bsSeg":
            //alert("Breake saida segunda");
            intEntradaSeg = parseInt(document.getElementById('intEntradaSeg').value);
            intSaidaSeg = parseInt(document.getElementById('intSaidaSeg').value);
            if(intSaidaSeg<=horaEntradaSeg || intSaidaSeg>=horaSaidaSeg || intSaidaSeg<=intEntradaSeg){
                alert('Hora de saída de intervalo não é válida!');
                document.getElementById('intSaidaSeg').value=0;
            }
            break;
            
        case "beTer":
            intEntradaTer = parseInt(document.getElementById('intEntradaTer').value);
            intSaidaTer = parseInt(document.getElementById('intSaidaTer').value);
            horaEntradaTer = parseInt(document.getElementById('horaEntradaTer').value);
            horaSaidaTer = parseInt(document.getElementById('horaSaidaTer').value);
            if(intEntradaTer<horaSaidaTer && intEntradaTer>horaEntradaTer){
                //alert('intEntradaTer<horaSaidaTer && intEntradaTer>horaEntradaTer');
                if(intSaidaTer>0){
                    if(intEntradaTer<=horaEntradaTer || intEntradaTer>=horaSaidaTer || intEntradaTer>=intSaidaTer){
                        
                        alert('Hora de entrada de intervalo não é válida!');
                        document.getElementById('intEntradaTer').value=0;
                    }
                    else{
                        //alert("intEntradaTer<=horaEntradaTer = "+ intEntradaTer<=horaEntradaTer+"|| intEntradaTer>=horaSaidaTer = "+intEntradaTer>=horaSaidaTer+" || intEntradaTer>=intSaidaTer = "+intEntradaTer>=intSaidaTer);
                    }
                }else{
                    //alert('intSaidaTer>0 FALSE')
                }
            }else{
                alert('Hora de entrada de intervalo não é válida!');
                document.getElementById('intEntradaTer').value=0;
            }
            break;
        case "bsTer":
            intEntradaTer = parseInt(document.getElementById('intEntradaTer').value);
            intSaidaTer = parseInt(document.getElementById('intSaidaTer').value);
            if(intSaidaTer<=horaEntradaTer || intSaidaTer>=horaSaidaTer || intSaidaTer<=intEntradaTer){
                alert('Hora de saída de intervalo não é válida!');
                document.getElementById('intSaidaTer').value=0;
            }
            break;
            
        case "beQua":
            intEntradaQua = parseInt(document.getElementById('intEntradaQua').value);
            intSaidaQua = parseInt(document.getElementById('intSaidaQua').value);
            horaEntradaQua = parseInt(document.getElementById('horaEntradaQua').value);
            horaSaidaQua = parseInt(document.getElementById('horaSaidaQua').value);
            if(intEntradaQua<horaSaidaQua && intEntradaQua>horaEntradaQua){
                if(intSaidaQua>0){
                    if(intEntradaQua<=horaEntradaQua || intEntradaQua>=horaSaidaQua || intEntradaQua>=intSaidaQua){
                        alert('Hora de entrada de intervalo não é válida!');
                        document.getElementById('intEntradaQua').value=0;
                    }
                }
            }else{
                alert('Hora de entrada de intervalo não é válida!');
                document.getElementById('intEntradaQua').value=0;
            }
            break;
        case "bsQua":
            intEntradaQua = parseInt(document.getElementById('intEntradaQua').value);
            intSaidaQua = parseInt(document.getElementById('intSaidaQua').value);
            if(intSaidaQua<=horaEntradaQua || intSaidaQua>=horaSaidaQua || intSaidaQua<=intEntradaQua){
                alert('Hora de saída de intervalo não é válida!');
                document.getElementById('intSaidaQua').value=0;
            }
            break;
            
        case "beQui":
            intEntradaQui = parseInt(document.getElementById('intEntradaQui').value);
            intSaidaQui = parseInt(document.getElementById('intSaidaQui').value);
            horaEntradaQui = parseInt(document.getElementById('horaEntradaQui').value);
            horaSaidaQui = parseInt(document.getElementById('horaSaidaQui').value);
            if(intEntradaQui<horaSaidaQui && intEntradaQui>horaEntradaQui){
                if(intSaidaQui>0){
                    if(intEntradaQui<=horaEntradaQui || intEntradaQui>=horaSaidaQui || intEntradaQui>=intSaidaQui){
                        alert('Hora de entrada de intervalo não é válida!');
                        document.getElementById('intEntradaQui').value=0;
                    }
                }
            }else{
                alert('Hora de entrada de intervalo não é válida!');
                document.getElementById('intEntradaQui').value=0;
            }
            break;
        case "bsQui":
            intEntradaQui = parseInt(document.getElementById('intEntradaQui').value);
            intSaidaQui = parseInt(document.getElementById('intSaidaQui').value);
            if(intSaidaQui<=horaEntradaQui || intSaidaQui>=horaSaidaQui || intSaidaQui<=intEntradaQui){
                alert('Hora de saída de intervalo não é válida!');
                document.getElementById('intSaidaQui').value=0;
            }
            break;
            
        case "beSex":
            intEntradaSex = parseInt(document.getElementById('intEntradaSex').value);
            intSaidaSex = parseInt(document.getElementById('intSaidaSex').value);
            horaEntradaSex = parseInt(document.getElementById('horaEntradaSex').value);
            horaSaidaSex = parseInt(document.getElementById('horaSaidaSex').value);
            if(intEntradaSex<horaSaidaSex && intEntradaSex>horaEntradaSex){
                if(intSaidaSex>0){
                    if(intEntradaSex<=horaEntradaSex || intEntradaSex>=horaSaidaSex || intEntradaSex>=intSaidaSex){
                        alert('Hora de entrada de intervalo não é válida!');
                        document.getElementById('intEntradaSex').value=0;
                    }
                }
            }else{
                alert('Hora de entrada de intervalo não é válida!');
                document.getElementById('intEntradaSex').value=0;
            }
            break;
        case "bsSex":
            intEntradaSex = parseInt(document.getElementById('intEntradaSex').value);
            intSaidaSex = parseInt(document.getElementById('intSaidaSex').value);
            if(intSaidaSex<=horaEntradaSex || intSaidaSex>=horaSaidaSex || intSaidaSex<=intEntradaSex){
                alert('Hora de saída de intervalo não é válida!');
                document.getElementById('intSaidaSex').value=0;
            }
            break;
            
        case "beSab":
            intEntradaSab = parseInt(document.getElementById('intEntradaSab').value);
            intSaidaSab = parseInt(document.getElementById('intSaidaSab').value);
            horaEntradaSab = parseInt(document.getElementById('horaEntradaSab').value);
            horaSaidaSab = parseInt(document.getElementById('horaSaidaSab').value);
            if(intEntradaSab<horaSaidaSab && intEntradaSab>horaEntradaSab){
                if(intSaidaSab>0){
                    if(intEntradaSab<=horaEntradaSab || intEntradaSab>=horaSaidaSab || intEntradaSab>=intSaidaSab){
                        alert('Hora de entrada de intervalo não é válida!');
                        document.getElementById('intEntradaSab').value=0;
                    }
                }
            }else{
                alert('Hora de entrada de intervalo não é válida!');
                document.getElementById('intEntradaSab').value=0;
            }
            break;
        case "bsSab":
            intEntradaSab = parseInt(document.getElementById('intEntradaSab').value);
            intSaidaSab = parseInt(document.getElementById('intSaidaSab').value);
            if(intSaidaSab<=horaEntradaSab || intSaidaSab>=horaSaidaSab || intSaidaSab<=intEntradaSab){
                alert('Hora de saída de intervalo não é válida!');
                document.getElementById('intSaidaSab').value=0;
            }
            break;
            
        case "beDom":
            intEntradaDom = parseInt(document.getElementById('intEntradaDom').value);
            intSaidaDom = parseInt(document.getElementById('intSaidaDom').value);
            horaEntradaDom = parseInt(document.getElementById('horaEntradaDom').value);
            horaSaidaDom = parseInt(document.getElementById('horaSaidaDom').value);
            if(intEntradaDom<horaSaidaDom && intEntradaDom>horaEntradaDom){
                if(intSaidaDom>0){
                    if(intEntradaDom<=horaEntradaDom || intEntradaDom>=horaSaidaDom || intEntradaDom>=intSaidaDom){
                        alert('Hora de entrada de intervalo não é válida!');
                        document.getElementById('intEntradaDom').value=0;
                    }
                }
            }else{
                alert('Hora de entrada de intervalo não é válida!');
                document.getElementById('intEntradaDom').value=0;
            }
            break;
        case "bsDom":
            intEntradaDom = parseInt(document.getElementById('intEntradaDom').value);
            intSaidaDom = parseInt(document.getElementById('intSaidaDom').value);
            if(intSaidaDom<=horaEntradaDom || intSaidaDom>=horaSaidaDom || intSaidaDom<=intEntradaDom){
                alert('Hora de saída de intervalo não é válida!');
                document.getElementById('intSaidaDom').value=0;
            }
            break;
            
        
    }
}


