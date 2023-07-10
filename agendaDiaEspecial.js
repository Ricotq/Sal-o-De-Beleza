    let chave_profissional = sessionStorage.getItem('chave_profissional');
    let nome_profissional = sessionStorage.getItem('nome_profissional');
    
    let nome_usuario = sessionStorage.getItem('nome_usuario');
    let id_usuario = sessionStorage.getItem('idcliente');
    
    let nome_especialidade = sessionStorage.getItem('nome_especialidade');
    let cor_especialidade = sessionStorage.getItem('cor_especialidade');
    let periodos = sessionStorage.getItem('periodos');
    
    let diaEspecial = sessionStorage.getItem('diaEspecial');
 
    var date = new Date();
    var novaData = new Date();
    
    var weakDay = 0;
    var flag=0;
    var dia = "";
    
    var dataDoEvento="";
    var horaInicio=0;
    var horaTermino=0;
    var duracao="";
    
    var eventoKey="";
    
    var n=25;
    var hora=1;
    var flag=0;
    var texto="";
    
    var minCounter=0;
    var min="";
    var flag45=0;
    
    window.onload = function() {
        buscarDadosIniciais();
    };
    
    //prepararData(date);
    //diaDaSemana(_diadasemana);
    //checarDisponibilidade(weakDay);
    
    function prepararData(_data){
        //alert('prepararData(date)');
        var d = _data.getDate();
        var m = _data.getMonth()+1;
        var y = _data.getFullYear();
        if(d<10){
             d = '0'+d;
        }
        if(m<10){
            m='0'+m;
        }
        dataShow = d+'/'+m+'/'+y;
        document.getElementById("innerDataShow").innerHTML=dataShow;
        var _diadasemana = _data.getDay();
        diaDaSemana(_diadasemana);
        
    }
    
    function diaDaSemana(dia){
        //alert('diaDaSemana(dia');
        switch(dia){
        case 1: 
            dia="Segunda-feira";
            weakDay=1;
            break;
        case 2: 
            dia="Terça-feira";
            weakDay=2;
            break;
        case 3: 
            dia="Quarta-feira";
            weakDay=3;
            break;
        case 4: 
            dia="Quinta-feira";
            weakDay=4;
            break;
        case 5: 
            dia="Sexta-feira";
            weakDay=5;
            break;
        case 6: 
            dia="Sábado";
            weakDay=6;
            break;
        case 0: 
            dia="Domingo";
            weakDay=7;
            break;
        }
    document.getElementById("innerDiaDaSemana").innerHTML=dia;
    document.getElementById('principal').innerHTML = "<div style='font-size: 40px;'>"+diaEspecial+"</div><div style='color: #000000; font-size: 20px;'>Incluindo horário para "+nome_usuario+".</div>";
    //document.getElementById('tb1').innerHTML = "<tr><td><input type='button' class='divBotao' id='ant' width='50' value='<=' onClick='diaAnterior();'/></td><td><h2>&nbsp;&nbsp;&nbsp;"+dataShow+"</h2></td><td width='120'>&nbsp;"+dia+"&nbsp;&nbsp;</td><td><input type='button' class='divBotao' id='seg' width='50' value='=>' onClick='diaSeguinte();'/></td><td><input type='button' class='divBotao' id='hj' value='Hoje' onClick='diaHoje();'/></td><td><input type='date' id='ideal' onchange='diaIdeal(); ' style='border-style: solid; border-radius: 10px; outline: none; height: 30px;'/></td></tr>";
    //document.getElementById('data').innerHTML ="<div style='font-size: 28px;'>"+dataShow+"&nbsp;&nbsp;&nbsp;"+dia+".</div>";
    }
    
    function buscarDadosIniciais(){
        
        var database = firebase.database();
        var databaseRef = database.ref('eventos/');
        databaseRef.once('value', function(snapshot){
            snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                if(childData.nome_evento === diaEspecial){
                        //alert('childData.agenda_horario = '+childData.agenda_horario+'  e n-1 = '+(n-1));
                        //alert('agenda_data = '+childData.agenda_data);
                   //alert("childData.nome_evento = "+childData.nome_evento);
                   dataDoEvento=childData.data_evento.split("-");
                   let data = new Date(dataDoEvento[0], dataDoEvento[1]-1, dataDoEvento[2]);
                   console.log( data.toString() );
                   console.log( data.toLocaleDateString("pt-BR") );
                   prepararData(data);

                   horaInicio=childData.hora_inicio;
                   horaTermino=childData.hora_termino;
                   duracao=childData.duracao;
                   eventoKey=childKey;
                   sessionStorage.setItem('eventoId',eventoKey);
                }
            });
            criarTabela();
        });
    }
    
    function criarTabela(){
        //alert('eventoKey = '+eventoKey);
        //if(duracao==="1 Hora"){
            for(var i=84; i>0 ; i--){
                var tabela = document.getElementById('tabelaAgendaProfissional');
                var newRow = tabela.insertRow(0);
                newRow.id="rowId"+i;
                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);

                switch(minCounter){
                    case 0:
                        min="45";
                        break;
                    case 1:
                        min="30";
                        break;
                    case 2:
                        min="15";
                        break;
                    case 3:
                        min="00";
                        break;
                }
                minCounter++;
                //if(hora<0){
                if(i===80){
                        hora=25;
                    }
                if(min==="45" && i<81){
                    hora--;
                }
                if(minCounter>3){
                    minCounter=0;
                }


                if(hora<10){
                    texto = '0'+hora+":"+min;
                }else{
                    texto = hora+":"+min;
                }
                if(hora===24){
                    texto="00:"+min;
                }
                cell1.innerHTML = "<p  style='width: 50px; margin-bottom: -10px; margin-top: -10px;'>"+texto+"</p>";
                cell2.innerHTML = "<p class='textoMenor' style='font-size: 18px; margin-left: 30px' size='30' name='seg800' id='idTime"+i+"'></p>";
                cell3.innerHTML = "<p  style='width: 120px; margin-bottom: -10px; margin-top: 0px;'> <input type='button' class='divBotaoLista' id='btn"+i+"' style='margin-left: 30px' value = 'Registrar' onClick='agendar("+i+");'></button></p>";
                cell4.innerHTML = "<input type='button' class='divBotaoLista' id='btnDel"+i+"' style='margin-left: 30px' value = 'Excluir' onClick='excluir("+i+");'></button>";

                
            }
        buscarAgendamentos();
        trimTable();
        
    }
    
    function buscarAgendamentos(){
        //alert('buscarAgendamentos()');
        var database = firebase.database();
        var databaseRef = database.ref('eventos/');
        databaseRef.once('value', function(snapshot){
            snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                if(childData.nome_evento === diaEspecial){
                        //alert('childData.agenda_horario = '+childData.agenda_horario+'  e n-1 = '+(n-1));
                        //alert('agenda_data = '+childData.agenda_data);
                   //alert("childData.nome_evento = "+childData.nome_evento);
                   //alert("childData.horario_1_cliente = "+childData.horario_1_cliente);
                   //alert("childData.horario_1_cliente_id = "+childData.horario_1_cliente_id);
                   if(childData.horario_1_cliente){
                       document.getElementById("idTime1").innerHTML=childData.horario_1_cliente;
                       document.getElementById("btn1").style.display="none";
                   }else{
                       document.getElementById("btnDel1").style.display="none";
                   }
                   if(childData.horario_2_cliente){
                       document.getElementById("idTime2").innerHTML=childData.horario_2_cliente;
                       document.getElementById("btn2").style.display="none";
                   }else{
                       document.getElementById("btnDel2").style.display="none";
                   }
                   if(childData.horario_3_cliente){
                       document.getElementById("idTime3").innerHTML=childData.horario_3_cliente;
                       document.getElementById("btn3").style.display="none";
                   }else{
                       document.getElementById("btnDel3").style.display="none";
                   }
                   if(childData.horario_4_cliente){
                       document.getElementById("idTime4").innerHTML=childData.horario_4_cliente;
                       document.getElementById("btn4").style.display="none";
                   }else{
                       document.getElementById("btnDel4").style.display="none";
                   }
                   if(childData.horario_5_cliente){
                       document.getElementById("idTime5").innerHTML=childData.horario_5_cliente;
                       document.getElementById("btn5").style.display="none";
                   }else{
                       document.getElementById("btnDel5").style.display="none";
                   }
                   if(childData.horario_6_cliente){
                       document.getElementById("idTime6").innerHTML=childData.horario_6_cliente;
                       document.getElementById("btn6").style.display="none";
                   }else{
                       document.getElementById("btnDel6").style.display="none";
                   }
                   if(childData.horario_7_cliente){
                       document.getElementById("idTime7").innerHTML=childData.horario_7_cliente;
                       document.getElementById("btn7").style.display="none";
                   }else{
                       document.getElementById("btnDel7").style.display="none";
                   }
                   if(childData.horario_8_cliente){
                       document.getElementById("idTime8").innerHTML=childData.horario_8_cliente;
                       document.getElementById("btn8").style.display="none";
                   }else{
                       document.getElementById("btnDel8").style.display="none";
                   }
                   if(childData.horario_9_cliente){
                       document.getElementById("idTime9").innerHTML=childData.horario_9_cliente;
                       document.getElementById("btn9").style.display="none";
                   }else{
                       document.getElementById("btnDel9").style.display="none";
                   }
                   if(childData.horario_10_cliente){
                       document.getElementById("idTime10").innerHTML=childData.horario_10_cliente;
                       document.getElementById("btn10").style.display="none";
                   }else{
                       document.getElementById("btnDel10").style.display="none";
                   }
                   if(childData.horario_11_cliente){
                       document.getElementById("idTime11").innerHTML=childData.horario_11_cliente;
                       document.getElementById("btn11").style.display="none";
                   }else{
                       document.getElementById("btnDel11").style.display="none";
                   }
                   if(childData.horario_12_cliente){
                       document.getElementById("idTime12").innerHTML=childData.horario_12_cliente;
                       document.getElementById("btn12").style.display="none";
                   }else{
                       document.getElementById("btnDel12").style.display="none";
                   }
                   if(childData.horario_13_cliente){
                       document.getElementById("idTime13").innerHTML=childData.horario_13_cliente;
                       document.getElementById("btn13").style.display="none";
                   }else{
                       document.getElementById("btnDel13").style.display="none";
                   }
                   if(childData.horario_14_cliente){
                       document.getElementById("idTime14").innerHTML=childData.horario_14_cliente;
                       document.getElementById("btn14").style.display="none";
                   }else{
                       document.getElementById("btnDel14").style.display="none";
                   }
                   if(childData.horario_15_cliente){
                       document.getElementById("idTime15").innerHTML=childData.horario_15_cliente;
                       document.getElementById("btn15").style.display="none";
                   }else{
                       document.getElementById("btnDel15").style.display="none";
                   }
                   if(childData.horario_16_cliente){
                       document.getElementById("idTime16").innerHTML=childData.horario_16_cliente;
                       document.getElementById("btn16").style.display="none";
                   }else{
                       document.getElementById("btnDel16").style.display="none";
                   }
                   if(childData.horario_17_cliente){
                       document.getElementById("idTime17").innerHTML=childData.horario_17_cliente;
                       document.getElementById("btn17").style.display="none";
                   }else{
                       document.getElementById("btnDel17").style.display="none";
                   }
                   if(childData.horario_18_cliente){
                       document.getElementById("idTime18").innerHTML=childData.horario_18_cliente;
                       document.getElementById("btn18").style.display="none";
                   }else{
                       document.getElementById("btnDel18").style.display="none";
                   }
                   if(childData.horario_19_cliente){
                       document.getElementById("idTime19").innerHTML=childData.horario_19_cliente;
                       document.getElementById("btn19").style.display="none";
                   }else{
                       document.getElementById("btnDel19").style.display="none";
                   }
                   if(childData.horario_20_cliente){
                       document.getElementById("idTime20").innerHTML=childData.horario_20_cliente;
                       document.getElementById("btn20").style.display="none";
                   }else{
                       document.getElementById("btnDel20").style.display="none";
                   }
                   if(childData.horario_21_cliente){
                       document.getElementById("idTime21").innerHTML=childData.horario_21_cliente;
                       document.getElementById("btn21").style.display="none";
                   }else{
                       document.getElementById("btnDel21").style.display="none";
                   }
                   if(childData.horario_22_cliente){
                       document.getElementById("idTime22").innerHTML=childData.horario_22_cliente;
                       document.getElementById("btn22").style.display="none";
                   }else{
                       document.getElementById("btnDel22").style.display="none";
                   }
                   if(childData.horario_23_cliente){
                       document.getElementById("idTime23").innerHTML=childData.horario_23_cliente;
                       document.getElementById("btn23").style.display="none";
                   }else{
                       document.getElementById("btnDel23").style.display="none";
                   }
                   if(childData.horario_24_cliente){
                       document.getElementById("idTime24").innerHTML=childData.horario_24_cliente;
                       document.getElementById("btn24").style.display="none";
                   }else{
                       document.getElementById("btnDel24").style.display="none";
                   }
                   if(childData.horario_25_cliente){
                       document.getElementById("idTime25").innerHTML=childData.horario_25_cliente;
                       document.getElementById("btn25").style.display="none";
                   }else{
                       document.getElementById("btnDel25").style.display="none";
                   }
                   if(childData.horario_26_cliente){
                       document.getElementById("idTime26").innerHTML=childData.horario_26_cliente;
                       document.getElementById("btn26").style.display="none";
                   }else{
                       document.getElementById("btnDel26").style.display="none";
                   }
                   if(childData.horario_27_cliente){
                       document.getElementById("idTime27").innerHTML=childData.horario_27_cliente;
                       document.getElementById("btn27").style.display="none";
                   }else{
                       document.getElementById("btnDel27").style.display="none";
                   }
                   if(childData.horario_28_cliente){
                       document.getElementById("idTime28").innerHTML=childData.horario_28_cliente;
                       document.getElementById("btn28").style.display="none";
                   }else{
                       document.getElementById("btnDel28").style.display="none";
                   }
                   if(childData.horario_29_cliente){
                       document.getElementById("idTime29").innerHTML=childData.horario_29_cliente;
                       document.getElementById("btn29").style.display="none";
                   }else{
                       document.getElementById("btnDel29").style.display="none";
                   }
                   if(childData.horario_30_cliente){
                       document.getElementById("idTime30").innerHTML=childData.horario_30_cliente;
                       document.getElementById("btn30").style.display="none";
                   }else{
                       document.getElementById("btnDel30").style.display="none";
                   }
                   if(childData.horario_31_cliente){
                       document.getElementById("idTime31").innerHTML=childData.horario_31_cliente;
                       document.getElementById("btn31").style.display="none";
                   }else{
                       document.getElementById("btnDel31").style.display="none";
                   }
                   if(childData.horario_32_cliente){
                       document.getElementById("idTime32").innerHTML=childData.horario_32_cliente;
                       document.getElementById("btn32").style.display="none";
                   }else{
                       document.getElementById("btnDel32").style.display="none";
                   }
                   if(childData.horario_33_cliente){
                       document.getElementById("idTime33").innerHTML=childData.horario_33_cliente;
                       document.getElementById("btn33").style.display="none";
                   }else{
                       document.getElementById("btnDel33").style.display="none";
                   }
                   if(childData.horario_34_cliente){
                       document.getElementById("idTime34").innerHTML=childData.horario_34_cliente;
                       document.getElementById("btn34").style.display="none";
                   }else{
                       document.getElementById("btnDel34").style.display="none";
                   }
                   if(childData.horario_35_cliente){
                       document.getElementById("idTime35").innerHTML=childData.horario_35_cliente;
                       document.getElementById("btn35").style.display="none";
                   }else{
                       document.getElementById("btnDel35").style.display="none";
                   }
                   if(childData.horario_36_cliente){
                       document.getElementById("idTime36").innerHTML=childData.horario_36_cliente;
                       document.getElementById("btn36").style.display="none";
                   }else{
                       document.getElementById("btnDel36").style.display="none";
                   }
                   if(childData.horario_37_cliente){
                       document.getElementById("idTime37").innerHTML=childData.horario_37_cliente;
                       document.getElementById("btn37").style.display="none";
                   }else{
                       document.getElementById("btnDel37").style.display="none";
                   }
                   if(childData.horario_38_cliente){
                       document.getElementById("idTime38").innerHTML=childData.horario_38_cliente;
                       document.getElementById("btn38").style.display="none";
                   }else{
                       document.getElementById("btnDel38").style.display="none";
                   }
                   if(childData.horario_39_cliente){
                       document.getElementById("idTime39").innerHTML=childData.horario_39_cliente;
                       document.getElementById("btn39").style.display="none";
                   }else{
                       document.getElementById("btnDel39").style.display="none";
                   }
                   if(childData.horario_40_cliente){
                       document.getElementById("idTime40").innerHTML=childData.horario_40_cliente;
                       document.getElementById("btn40").style.display="none";
                   }else{
                       document.getElementById("btnDel40").style.display="none";
                   }
                   if(childData.horario_41_cliente){
                       document.getElementById("idTime41").innerHTML=childData.horario_41_cliente;
                       document.getElementById("btn41").style.display="none";
                   }else{
                       document.getElementById("btnDel41").style.display="none";
                   }
                   if(childData.horario_42_cliente){
                       document.getElementById("idTime42").innerHTML=childData.horario_42_cliente;
                       document.getElementById("btn42").style.display="none";
                   }else{
                       document.getElementById("btnDel42").style.display="none";
                   }
                   if(childData.horario_43_cliente){
                       document.getElementById("idTime43").innerHTML=childData.horario_43_cliente;
                       document.getElementById("btn43").style.display="none";
                   }else{
                       document.getElementById("btnDel43").style.display="none";
                   }
                   if(childData.horario_44_cliente){
                       document.getElementById("idTime44").innerHTML=childData.horario_44_cliente;
                       document.getElementById("btn44").style.display="none";
                   }else{
                       document.getElementById("btnDel44").style.display="none";
                   }
                   if(childData.horario_45_cliente){
                       document.getElementById("idTime45").innerHTML=childData.horario_45_cliente;
                       document.getElementById("btn45").style.display="none";
                   }else{
                       document.getElementById("btnDel45").style.display="none";
                   }
                   if(childData.horario_46_cliente){
                       document.getElementById("idTime46").innerHTML=childData.horario_46_cliente;
                       document.getElementById("btn46").style.display="none";
                   }else{
                       document.getElementById("btnDel46").style.display="none";
                   }
                   if(childData.horario_47_cliente){
                       document.getElementById("idTime47").innerHTML=childData.horario_47_cliente;
                       document.getElementById("btn47").style.display="none";
                   }else{
                       document.getElementById("btnDel47").style.display="none";
                   }
                   if(childData.horario_48_cliente){
                       document.getElementById("idTime48").innerHTML=childData.horario_48_cliente;
                       document.getElementById("btn48").style.display="none";
                   }else{
                       document.getElementById("btnDel48").style.display="none";
                   }
                   if(childData.horario_49_cliente){
                       document.getElementById("idTime49").innerHTML=childData.horario_49_cliente;
                       document.getElementById("btn49").style.display="none";
                   }else{
                       document.getElementById("btnDel49").style.display="none";
                   }
                   if(childData.horario_50_cliente){
                       document.getElementById("idTime50").innerHTML=childData.horario_50_cliente;
                       document.getElementById("btn50").style.display="none";
                   }else{
                       document.getElementById("btnDel50").style.display="none";
                   }
                   if(childData.horario_51_cliente){
                       document.getElementById("idTime51").innerHTML=childData.horario_51_cliente;
                       document.getElementById("btn51").style.display="none";
                   }else{
                       document.getElementById("btnDel51").style.display="none";
                   }
                   if(childData.horario_52_cliente){
                       document.getElementById("idTime52").innerHTML=childData.horario_52_cliente;
                       document.getElementById("btn52").style.display="none";
                   }else{
                       document.getElementById("btnDel52").style.display="none";
                   }
                   if(childData.horario_53_cliente){
                       document.getElementById("idTime53").innerHTML=childData.horario_53_cliente;
                       document.getElementById("btn53").style.display="none";
                   }else{
                       document.getElementById("btnDel53").style.display="none";
                   }
                   if(childData.horario_54_cliente){
                       document.getElementById("idTime54").innerHTML=childData.horario_54_cliente;
                       document.getElementById("btn54").style.display="none";
                   }else{
                       document.getElementById("btnDel54").style.display="none";
                   }
                   if(childData.horario_55_cliente){
                       document.getElementById("idTime55").innerHTML=childData.horario_55_cliente;
                       document.getElementById("btn55").style.display="none";
                   }else{
                       document.getElementById("btnDel55").style.display="none";
                   }
                   if(childData.horario_56_cliente){
                       document.getElementById("idTime56").innerHTML=childData.horario_56_cliente;
                       document.getElementById("btn56").style.display="none";
                   }else{
                       document.getElementById("btnDel56").style.display="none";
                   }
                   if(childData.horario_57_cliente){
                       document.getElementById("idTime57").innerHTML=childData.horario_57_cliente;
                       document.getElementById("btn57").style.display="none";
                   }else{
                       document.getElementById("btnDel57").style.display="none";
                   }
                   if(childData.horario_58_cliente){
                       document.getElementById("idTime58").innerHTML=childData.horario_58_cliente;
                       document.getElementById("btn58").style.display="none";
                   }else{
                       document.getElementById("btnDel58").style.display="none";
                   }
                   if(childData.horario_59_cliente){
                       document.getElementById("idTime59").innerHTML=childData.horario_59_cliente;
                       document.getElementById("btn59").style.display="none";
                   }else{
                       document.getElementById("btnDel59").style.display="none";
                   }
                   if(childData.horario_60_cliente){
                       document.getElementById("idTime60").innerHTML=childData.horario_60_cliente;
                       document.getElementById("btn60").style.display="none";
                   }else{
                       document.getElementById("btnDel60").style.display="none";
                   }
                   if(childData.horario_61_cliente){
                       document.getElementById("idTime61").innerHTML=childData.horario_61_cliente;
                       document.getElementById("btn61").style.display="none";
                   }else{
                       document.getElementById("btnDel61").style.display="none";
                   }
                   if(childData.horario_62_cliente){
                       document.getElementById("idTime62").innerHTML=childData.horario_62_cliente;
                       document.getElementById("btn62").style.display="none";
                   }else{
                       document.getElementById("btnDel62").style.display="none";
                   }
                   if(childData.horario_63_cliente){
                       document.getElementById("idTime63").innerHTML=childData.horario_63_cliente;
                       document.getElementById("btn63").style.display="none";
                   }else{
                       document.getElementById("btnDel63").style.display="none";
                   }
                   if(childData.horario_64_cliente){
                       document.getElementById("idTime64").innerHTML=childData.horario_64_cliente;
                       document.getElementById("btn64").style.display="none";
                   }else{
                       document.getElementById("btnDel64").style.display="none";
                   }
                   if(childData.horario_65_cliente){
                       document.getElementById("idTime65").innerHTML=childData.horario_65_cliente;
                       document.getElementById("btn65").style.display="none";
                   }else{
                       document.getElementById("btnDel65").style.display="none";
                   }
                   if(childData.horario_66_cliente){
                       document.getElementById("idTime66").innerHTML=childData.horario_66_cliente;
                       document.getElementById("btn66").style.display="none";
                   }else{
                       document.getElementById("btnDel66").style.display="none";
                   }
                   if(childData.horario_67_cliente){
                       document.getElementById("idTime67").innerHTML=childData.horario_67_cliente;
                       document.getElementById("btn67").style.display="none";
                   }else{
                       document.getElementById("btnDel67").style.display="none";
                   }
                   if(childData.horario_68_cliente){
                       document.getElementById("idTime68").innerHTML=childData.horario_68_cliente;
                       document.getElementById("btn68").style.display="none";
                   }else{
                       document.getElementById("btnDel68").style.display="none";
                   }
                   if(childData.horario_69_cliente){
                       document.getElementById("idTime69").innerHTML=childData.horario_69_cliente;
                       document.getElementById("btn69").style.display="none";
                   }else{
                       document.getElementById("btnDel69").style.display="none";
                   }
                   if(childData.horario_70_cliente){
                       document.getElementById("idTime70").innerHTML=childData.horario_70_cliente;
                       document.getElementById("btn70").style.display="none";
                   }else{
                       document.getElementById("btnDel70").style.display="none";
                   }
                   if(childData.horario_71_cliente){
                       document.getElementById("idTime71").innerHTML=childData.horario_71_cliente;
                       document.getElementById("btn71").style.display="none";
                   }else{
                       document.getElementById("btnDel71").style.display="none";
                   }
                   if(childData.horario_72_cliente){
                       document.getElementById("idTime72").innerHTML=childData.horario_72_cliente;
                       document.getElementById("btn72").style.display="none";
                   }else{
                       document.getElementById("btnDel72").style.display="none";
                   }
                   if(childData.horario_73_cliente){
                       document.getElementById("idTime73").innerHTML=childData.horario_73_cliente;
                       document.getElementById("btn73").style.display="none";
                   }else{
                       document.getElementById("btnDel73").style.display="none";
                   }
                   if(childData.horario_74_cliente){
                       document.getElementById("idTime74").innerHTML=childData.horario_74_cliente;
                       document.getElementById("btn74").style.display="none";
                   }else{
                       document.getElementById("btnDel74").style.display="none";
                   }
                   if(childData.horario_75_cliente){
                       document.getElementById("idTime75").innerHTML=childData.horario_75_cliente;
                       document.getElementById("btn75").style.display="none";
                   }else{
                       document.getElementById("btnDel75").style.display="none";
                   }
                   if(childData.horario_76_cliente){
                       document.getElementById("idTime76").innerHTML=childData.horario_76_cliente;
                       document.getElementById("btn76").style.display="none";
                   }else{
                       document.getElementById("btnDel76").style.display="none";
                   }
                   if(childData.horario_77_cliente){
                       document.getElementById("idTime77").innerHTML=childData.horario_77_cliente;
                       document.getElementById("btn77").style.display="none";
                   }else{
                       document.getElementById("btnDel77").style.display="none";
                   }
                   if(childData.horario_78_cliente){
                       document.getElementById("idTime78").innerHTML=childData.horario_78_cliente;
                       document.getElementById("btn78").style.display="none";
                   }else{
                       document.getElementById("btnDel78").style.display="none";
                   }
                   if(childData.horario_79_cliente){
                       document.getElementById("idTime79").innerHTML=childData.horario_79_cliente;
                       document.getElementById("btn79").style.display="none";
                   }else{
                       document.getElementById("btnDel79").style.display="none";
                   }
                   if(childData.horario_80_cliente){
                       document.getElementById("idTime80").innerHTML=childData.horario_80_cliente;
                       document.getElementById("btn80").style.display="none";
                   }else{
                       document.getElementById("btnDel80").style.display="none";
                   }
                   if(childData.horario_81_cliente){
                       document.getElementById("idTime81").innerHTML=childData.horario_81_cliente;
                       document.getElementById("btn81").style.display="none";
                   }else{
                       document.getElementById("btnDel81").style.display="none";
                   }
                   if(childData.horario_82_cliente){
                       document.getElementById("idTime82").innerHTML=childData.horario_82_cliente;
                       document.getElementById("btn82").style.display="none";
                   }else{
                       document.getElementById("btnDel82").style.display="none";
                   }
                   if(childData.horario_83_cliente){
                       document.getElementById("idTime83").innerHTML=childData.horario_83_cliente;
                       document.getElementById("btn83").style.display="none";
                   }else{
                       document.getElementById("btnDel83").style.display="none";
                   }
                   if(childData.horario_84_cliente){
                       document.getElementById("idTime84").innerHTML=childData.horario_84_cliente;
                       document.getElementById("btn84").style.display="none";
                   }else{
                       document.getElementById("btnDel84").style.display="none";
                   }
               }
            });
        });
    }
    
    function trimTable(){
        
        
        if(duracao==="15 Minutos"){
            for(var i=1; i<85; i++){
                if(i<horaInicio || i>horaTermino-1){
//                    alert("i = "+i);
//                    alert("horaInicio = "+horaInicio);
//                    alert("horaTermino-1 = "+(horaTermino-1));
                    document.getElementById("rowId"+i).style.display="none";
                }
            }
        }
        if(duracao==="30 Minutos"){
            //alert('duracao===30 Minutos');
            var x=0;
            var y=0;
            for(var i=1; i<85; i++){
                
                if(i<horaInicio || i>horaTermino-1){
                    //alert("i = "+i);
                    //alert("horaInicio = "+horaInicio);
                    //alert("horaTermino-1 = "+(horaTermino-1));
                    document.getElementById("rowId"+i).style.display="none";
                    
                }
                if(horaInicio<=i && i<=horaTermino){
                    y=x%2;
                    if(y===1){
                        document.getElementById("rowId"+i).style.display="none";
                    }
                    x++;
                    //alert("x = "+x);
                }
                
                
            } 

        }
        if(duracao==="45 Minutos"){
            var x=0;
            var y=1;
            for(var i=1; i<85; i++){
                
                if(i<horaInicio || i>horaTermino-1){
                    document.getElementById("rowId"+i).style.display="none";
                }
                if(horaInicio<=i && i<=horaTermino){
                    //alert("x = "+x);
                    //alert("y = "+y);
                    if(y===0){
                        //alert("i = "+i);
                        //alert("x = "+x);
                        document.getElementById("rowId"+i).style.display="none";
                        y=1;
                        
                    }
                    x++;
                    if(x<3){
                        y=0;
                    }else{
                        y=1;
                        x=0;
                    }
                }
            }
        }
        if(duracao==="1 Hora"){
            var x=0;
            var y=1;
            for(var i=1; i<85; i++){
                
                if(i<horaInicio || i>horaTermino-1){
                    document.getElementById("rowId"+i).style.display="none";
                }
                if(horaInicio<=i && i<=horaTermino){
                    if(y===0){
                        document.getElementById("rowId"+i).style.display="none";
                        y=1;
                    }
                    x++;
                    if(x<4){
                        y=0;
                    }else{
                        y=1;
                        x=0;
                    }
                }
            }
        }
        if(duracao==="1 Hora e 30"){
            var x=0;
            var y=1;
            for(var i=1; i<85; i++){
                
                if(i<horaInicio || i>horaTermino-1){
                    document.getElementById("rowId"+i).style.display="none";
                }
                if(horaInicio<=i && i<=horaTermino){
                    if(y===0){
                        document.getElementById("rowId"+i).style.display="none";
                        y=1;
                    }
                    x++;
                    if(x<6){
                        y=0;
                    }else{
                        y=1;
                        x=0;
                    }
                }
            }
        }
        if(duracao==="2 Horas"){
            var x=0;
            var y=1;
            for(var i=1; i<85; i++){
                
                if(i<horaInicio || i>horaTermino-1){
                    document.getElementById("rowId"+i).style.display="none";
                }
                if(horaInicio<=i && i<=horaTermino){
                    if(y===0){
                        document.getElementById("rowId"+i).style.display="none";
                        y=1;
                    }
                    x++;
                    if(x<8){
                        y=0;
                    }else{
                        y=1;
                        x=0;
                    }
                }
            }
        }
    }
    
    function agendar(i){
        let eventoId = sessionStorage.getItem('eventoId');
        //alert('eventoId = '+eventoId);
        //alert('i = '+i);
        var database = firebase.database();
        var databaseRef = database.ref('eventos/'+eventoId);
        switch(i){
            case 1:
                databaseRef.update({
                    horario_1_cliente: nome_usuario,
                    horario_1_cliente_id: id_usuario
                });
                document.getElementById("btnDel1").style.display="initial";
            break;
            case 2:
                databaseRef.update({
                    horario_2_cliente: nome_usuario,
                    horario_2_cliente_id: id_usuario
                });
                document.getElementById("btnDel2").style.display="initial";
            break;
            case 3:
                databaseRef.update({
                    horario_3_cliente: nome_usuario,
                    horario_3_cliente_id: id_usuario
                });
                document.getElementById("btnDel3").style.display="initial";
            break;
            case 4:
                databaseRef.update({
                    horario_4_cliente: nome_usuario,
                    horario_4_cliente_id: id_usuario
                });
                document.getElementById("btnDel4").style.display="initial";
            break;
            case 5:
                databaseRef.update({
                    horario_5_cliente: nome_usuario,
                    horario_5_cliente_id: id_usuario
                });
                document.getElementById("btnDel5").style.display="initial";
            break;
            case 6:
                databaseRef.update({
                    horario_6_cliente: nome_usuario,
                    horario_6_cliente_id: id_usuario
                });
                document.getElementById("btnDel6").style.display="initial";
            break;
            case 7:
                databaseRef.update({
                    horario_7_cliente: nome_usuario,
                    horario_7_cliente_id: id_usuario
                });
                document.getElementById("btnDel7").style.display="initial";
            break;
            case 8:
                databaseRef.update({
                    horario_8_cliente: nome_usuario,
                    horario_8_cliente_id: id_usuario
                });
                document.getElementById("btnDel8").style.display="initial";
            break;
            case 9:
                databaseRef.update({
                    horario_9_cliente: nome_usuario,
                    horario_9_cliente_id: id_usuario
                });
                document.getElementById("btnDel9").style.display="initial";
            break;
            case 10:
                databaseRef.update({
                    horario_10_cliente: nome_usuario,
                    horario_10_cliente_id: id_usuario
                });
                document.getElementById("btnDel10").style.display="initial";
            break;
            case 11:
                databaseRef.update({
                    horario_11_cliente: nome_usuario,
                    horario_11_cliente_id: id_usuario
                });
                document.getElementById("btnDel11").style.display="initial";
            break;
            case 12:
                databaseRef.update({
                    horario_12_cliente: nome_usuario,
                    horario_12_cliente_id: id_usuario
                });
                document.getElementById("btnDel12").style.display="initial";
            break;
            case 13:
                databaseRef.update({
                    horario_13_cliente: nome_usuario,
                    horario_13_cliente_id: id_usuario
                });
                document.getElementById("btnDel13").style.display="initial";
            break;
            case 14:
                databaseRef.update({
                    horario_14_cliente: nome_usuario,
                    horario_14_cliente_id: id_usuario
                });
                document.getElementById("btnDel14").style.display="initial";
            break;
            case 15:
                databaseRef.update({
                    horario_15_cliente: nome_usuario,
                    horario_15_cliente_id: id_usuario
                });
                document.getElementById("btnDel15").style.display="initial";
            break;
            case 16:
                databaseRef.update({
                    horario_16_cliente: nome_usuario,
                    horario_16_cliente_id: id_usuario
                });
                document.getElementById("btnDel16").style.display="initial";
            break;
            case 17:
                databaseRef.update({
                    horario_17_cliente: nome_usuario,
                    horario_17_cliente_id: id_usuario
                });
                document.getElementById("btnDel17").style.display="initial";
            break;
            case 18:
                databaseRef.update({
                    horario_18_cliente: nome_usuario,
                    horario_18_cliente_id: id_usuario
                });
                document.getElementById("btnDel18").style.display="initial";
            break;
            case 19:
                databaseRef.update({
                    horario_19_cliente: nome_usuario,
                    horario_19_cliente_id: id_usuario
                });
                document.getElementById("btnDel19").style.display="initial";
            break;
            case 20:
                databaseRef.update({
                    horario_20_cliente: nome_usuario,
                    horario_20_cliente_id: id_usuario
                });
                document.getElementById("btnDel20").style.display="initial";
            break;
            case 21:
                databaseRef.update({
                    horario_21_cliente: nome_usuario,
                    horario_21_cliente_id: id_usuario
                });
                document.getElementById("btnDel21").style.display="initial";
            break;
            case 22:
                databaseRef.update({
                    horario_22_cliente: nome_usuario,
                    horario_22_cliente_id: id_usuario
                });
                document.getElementById("btnDel22").style.display="initial";
            break;
            case 23:
                databaseRef.update({
                    horario_23_cliente: nome_usuario,
                    horario_23_cliente_id: id_usuario
                });
                document.getElementById("btnDel23").style.display="initial";
            break;
            case 24:
                databaseRef.update({
                    horario_24_cliente: nome_usuario,
                    horario_24_cliente_id: id_usuario
                });
                document.getElementById("btnDel24").style.display="initial";
            break;
            case 25:
                databaseRef.update({
                    horario_25_cliente: nome_usuario,
                    horario_25_cliente_id: id_usuario
                });
                document.getElementById("btnDel25").style.display="initial";
            break;
            case 26:
                databaseRef.update({
                    horario_26_cliente: nome_usuario,
                    horario_26_cliente_id: id_usuario
                });
                document.getElementById("btnDel26").style.display="initial";
            break;
            case 27:
                databaseRef.update({
                    horario_27_cliente: nome_usuario,
                    horario_27_cliente_id: id_usuario
                });
                document.getElementById("btnDel27").style.display="initial";
            break;
            case 28:
                databaseRef.update({
                    horario_28_cliente: nome_usuario,
                    horario_28_cliente_id: id_usuario
                });
                document.getElementById("btnDel28").style.display="initial";
            break;
            case 29:
                databaseRef.update({
                    horario_29_cliente: nome_usuario,
                    horario_29_cliente_id: id_usuario
                });
                document.getElementById("btnDel29").style.display="initial";
            break;
            case 30:
                databaseRef.update({
                    horario_30_cliente: nome_usuario,
                    horario_30_cliente_id: id_usuario
                });
                document.getElementById("btnDel30").style.display="initial";
            break;
            case 31:
                databaseRef.update({
                    horario_31_cliente: nome_usuario,
                    horario_31_cliente_id: id_usuario
                });
                document.getElementById("btnDel31").style.display="initial";
            break;
            case 32:
                databaseRef.update({
                    horario_32_cliente: nome_usuario,
                    horario_32_cliente_id: id_usuario
                });
                document.getElementById("btnDel32").style.display="initial";
            break;
            case 33:
                databaseRef.update({
                    horario_33_cliente: nome_usuario,
                    horario_33_cliente_id: id_usuario
                });
                document.getElementById("btnDel33").style.display="initial";
            break;
            case 34:
                databaseRef.update({
                    horario_34_cliente: nome_usuario,
                    horario_34_cliente_id: id_usuario
                });
                document.getElementById("btnDel34").style.display="initial";
            break;
            case 35:
                databaseRef.update({
                    horario_35_cliente: nome_usuario,
                    horario_35_cliente_id: id_usuario
                });
                document.getElementById("btnDel35").style.display="initial";
            break;
            case 36:
                databaseRef.update({
                    horario_36_cliente: nome_usuario,
                    horario_36_cliente_id: id_usuario
                });
                document.getElementById("btnDel36").style.display="initial";
            break;
            case 37:
                databaseRef.update({
                    horario_37_cliente: nome_usuario,
                    horario_37_cliente_id: id_usuario
                });
                document.getElementById("btnDel37").style.display="initial";
            break;
            case 38:
                databaseRef.update({
                    horario_38_cliente: nome_usuario,
                    horario_38_cliente_id: id_usuario
                });
                document.getElementById("btnDel38").style.display="initial";
            break;
            case 39:
                databaseRef.update({
                    horario_39_cliente: nome_usuario,
                    horario_39_cliente_id: id_usuario
                });
                document.getElementById("btnDel39").style.display="initial";
            break;
            case 40:
                databaseRef.update({
                    horario_40_cliente: nome_usuario,
                    horario_40_cliente_id: id_usuario
                });
                document.getElementById("btnDel40").style.display="initial";
            break;
            case 41:
                databaseRef.update({
                    horario_41_cliente: nome_usuario,
                    horario_41_cliente_id: id_usuario
                });
                document.getElementById("btnDel41").style.display="initial";
            break;
            case 42:
                databaseRef.update({
                    horario_42_cliente: nome_usuario,
                    horario_42_cliente_id: id_usuario
                });
                document.getElementById("btnDel42").style.display="initial";
            break;
            case 43:
                databaseRef.update({
                    horario_43_cliente: nome_usuario,
                    horario_43_cliente_id: id_usuario
                });
                document.getElementById("btnDel43").style.display="initial";
            break;
            case 44:
                databaseRef.update({
                    horario_44_cliente: nome_usuario,
                    horario_44_cliente_id: id_usuario
                });
                document.getElementById("btnDel44").style.display="initial";
            break;
            case 45:
                databaseRef.update({
                    horario_45_cliente: nome_usuario,
                    horario_45_cliente_id: id_usuario
                });
                document.getElementById("btnDel45").style.display="initial";
            break;
            case 46:
                databaseRef.update({
                    horario_46_cliente: nome_usuario,
                    horario_46_cliente_id: id_usuario
                });
                document.getElementById("btnDel46").style.display="initial";
            break;
            case 47:
                databaseRef.update({
                    horario_47_cliente: nome_usuario,
                    horario_47_cliente_id: id_usuario
                });
                document.getElementById("btnDel47").style.display="initial";
            break;
            case 48:
                databaseRef.update({
                    horario_48_cliente: nome_usuario,
                    horario_48_cliente_id: id_usuario
                });
                document.getElementById("btnDel48").style.display="initial";
            break;
            case 49:
                databaseRef.update({
                    horario_49_cliente: nome_usuario,
                    horario_49_cliente_id: id_usuario
                });
                document.getElementById("btnDel49").style.display="initial";
            break;
            case 50:
                databaseRef.update({
                    horario_50_cliente: nome_usuario,
                    horario_50_cliente_id: id_usuario
                });
                document.getElementById("btnDel50").style.display="initial";
            break;
            case 51:
                databaseRef.update({
                    horario_51_cliente: nome_usuario,
                    horario_51_cliente_id: id_usuario
                });
                document.getElementById("btnDel51").style.display="initial";
            break;
            case 52:
                databaseRef.update({
                    horario_52_cliente: nome_usuario,
                    horario_52_cliente_id: id_usuario
                });
                document.getElementById("btnDel52").style.display="initial";
            break;
            case 53:
                databaseRef.update({
                    horario_53_cliente: nome_usuario,
                    horario_53_cliente_id: id_usuario
                });
                document.getElementById("btnDel53").style.display="initial";
            break;
            case 54:
                databaseRef.update({
                    horario_54_cliente: nome_usuario,
                    horario_54_cliente_id: id_usuario
                });
                document.getElementById("btnDel54").style.display="initial";
            break;
            case 55:
                databaseRef.update({
                    horario_55_cliente: nome_usuario,
                    horario_55_cliente_id: id_usuario
                });
                document.getElementById("btnDel55").style.display="initial";
            break;
            case 56:
                databaseRef.update({
                    horario_56_cliente: nome_usuario,
                    horario_56_cliente_id: id_usuario
                });
                document.getElementById("btnDel56").style.display="initial";
            break;
            case 57:
                databaseRef.update({
                    horario_57_cliente: nome_usuario,
                    horario_57_cliente_id: id_usuario
                });
                document.getElementById("btnDel57").style.display="initial";
            break;
            case 58:
                databaseRef.update({
                    horario_58_cliente: nome_usuario,
                    horario_58_cliente_id: id_usuario
                });
                document.getElementById("btnDel58").style.display="initial";
            break;
            case 59:
                databaseRef.update({
                    horario_59_cliente: nome_usuario,
                    horario_59_cliente_id: id_usuario
                });
                document.getElementById("btnDel59").style.display="initial";
            break;
            case 60:
                databaseRef.update({
                    horario_60_cliente: nome_usuario,
                    horario_60_cliente_id: id_usuario
                });
                document.getElementById("btnDel60").style.display="initial";
            break;
            case 61:
                databaseRef.update({
                    horario_61_cliente: nome_usuario,
                    horario_61_cliente_id: id_usuario
                });
                document.getElementById("btnDel61").style.display="initial";
            break;
            case 62:
                databaseRef.update({
                    horario_62_cliente: nome_usuario,
                    horario_62_cliente_id: id_usuario
                });
                document.getElementById("btnDel62").style.display="initial";
            break;
            case 63:
                databaseRef.update({
                    horario_63_cliente: nome_usuario,
                    horario_63_cliente_id: id_usuario
                });
                document.getElementById("btnDel63").style.display="initial";
            break;
            case 64:
                databaseRef.update({
                    horario_64_cliente: nome_usuario,
                    horario_64_cliente_id: id_usuario
                });
                document.getElementById("btnDel64").style.display="initial";
            break;
            case 65:
                databaseRef.update({
                    horario_65_cliente: nome_usuario,
                    horario_65_cliente_id: id_usuario
                });
                document.getElementById("btnDel65").style.display="initial";
            break;
            case 66:
                databaseRef.update({
                    horario_66_cliente: nome_usuario,
                    horario_66_cliente_id: id_usuario
                });
                document.getElementById("btnDel66").style.display="initial";
            break;
            case 67:
                databaseRef.update({
                    horario_67_cliente: nome_usuario,
                    horario_67_cliente_id: id_usuario
                });
                document.getElementById("btnDel67").style.display="initial";
            break;
            case 68:
                databaseRef.update({
                    horario_68_cliente: nome_usuario,
                    horario_68_cliente_id: id_usuario
                });
                document.getElementById("btnDel68").style.display="initial";
            break;
            case 69:
                databaseRef.update({
                    horario_69_cliente: nome_usuario,
                    horario_69_cliente_id: id_usuario
                });
                document.getElementById("btnDel69").style.display="initial";
            break;
            case 70:
                databaseRef.update({
                    horario_70_cliente: nome_usuario,
                    horario_70_cliente_id: id_usuario
                });
                document.getElementById("btnDel70").style.display="initial";
            break;
            case 71:
                databaseRef.update({
                    horario_71_cliente: nome_usuario,
                    horario_71_cliente_id: id_usuario
                });
                document.getElementById("btnDel71").style.display="initial";
            break;
            case 72:
                databaseRef.update({
                    horario_72_cliente: nome_usuario,
                    horario_72_cliente_id: id_usuario
                });
                document.getElementById("btnDel72").style.display="initial";
            break;
            case 73:
                databaseRef.update({
                    horario_73_cliente: nome_usuario,
                    horario_73_cliente_id: id_usuario
                });
                document.getElementById("btnDel73").style.display="initial";
            break;
            case 74:
                databaseRef.update({
                    horario_74_cliente: nome_usuario,
                    horario_74_cliente_id: id_usuario
                });
                document.getElementById("btnDel74").style.display="initial";
            break;
            case 75:
                databaseRef.update({
                    horario_75_cliente: nome_usuario,
                    horario_75_cliente_id: id_usuario
                });
                document.getElementById("btnDel75").style.display="initial";
            break;
            case 76:
                databaseRef.update({
                    horario_76_cliente: nome_usuario,
                    horario_76_cliente_id: id_usuario
                });
                document.getElementById("btnDel76").style.display="initial";
            break;
            case 77:
                databaseRef.update({
                    horario_77_cliente: nome_usuario,
                    horario_77_cliente_id: id_usuario
                });
                document.getElementById("btnDel77").style.display="initial";
            break;
            case 78:
                databaseRef.update({
                    horario_78_cliente: nome_usuario,
                    horario_78_cliente_id: id_usuario
                });
                document.getElementById("btnDel78").style.display="initial";
            break;
            case 79:
                databaseRef.update({
                    horario_79_cliente: nome_usuario,
                    horario_79_cliente_id: id_usuario
                });
                document.getElementById("btnDel79").style.display="initial";
            break;
            case 80:
                databaseRef.update({
                    horario_80_cliente: nome_usuario,
                    horario_80_cliente_id: id_usuario
                });
                document.getElementById("btnDel80").style.display="initial";
            break;
            case 81:
                databaseRef.update({
                    horario_81_cliente: nome_usuario,
                    horario_81_cliente_id: id_usuario
                });
                document.getElementById("btnDel81").style.display="initial";
            break;
            case 82:
                databaseRef.update({
                    horario_82_cliente: nome_usuario,
                    horario_82_cliente_id: id_usuario
                });
                document.getElementById("btnDel82").style.display="initial";
            break;
            case 83:
                databaseRef.update({
                    horario_83_cliente: nome_usuario,
                    horario_83_cliente_id: id_usuario
                });
                document.getElementById("btnDel83").style.display="initial";
            break;
            case 84:
                databaseRef.update({
                    horario_84_cliente: nome_usuario,
                    horario_84_cliente_id: id_usuario
                });
                document.getElementById("btnDel84").style.display="initial";
            break;
        }
        buscarAgendamentos();
    }
    
function excluir(i){
    let eventoId = sessionStorage.getItem('eventoId');
    //alert('eventoId = '+eventoId);
    //alert('i = '+i);
    var database = firebase.database();
    //var databaseRef = database.ref('eventos/'+eventoId);
    switch(i){
            case 1:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_1_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_1_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime1").innerHTML="";
                document.getElementById("btn1").style.display="initial";
            break;
            case 2:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_2_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_2_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime2").innerHTML="";
                document.getElementById("btn2").style.display="initial";
            break;
            case 3:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_3_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_3_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime3").innerHTML="";
                document.getElementById("btn3").style.display="initial";
            break;
            case 4:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_4_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_4_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime4").innerHTML="";
                document.getElementById("btn4").style.display="initial";
            break;
            case 5:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_5_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_5_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime5").innerHTML="";
                document.getElementById("btn5").style.display="initial";
            break;
            case 6:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_6_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_6_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime6").innerHTML="";
                document.getElementById("btn6").style.display="initial";
            break;
            case 7:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_7_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_7_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime7").innerHTML="";
                document.getElementById("btn7").style.display="initial";
            break;
            case 8:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_8_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_8_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime8").innerHTML="";
                document.getElementById("btn8").style.display="initial";
            break;
            case 9:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_9_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_9_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime9").innerHTML="";
                document.getElementById("btn9").style.display="initial";
            break;
            case 10:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_10_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_10_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime10").innerHTML="";
                document.getElementById("btn10").style.display="initial";
            break;
            case 11:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_11_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_11_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime11").innerHTML="";
                document.getElementById("btn11").style.display="initial";
            break;
            case 12:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_12_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_12_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime12").innerHTML="";
                document.getElementById("btn12").style.display="initial";
            break;
            case 13:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_13_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_13_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime13").innerHTML="";
                document.getElementById("btn13").style.display="initial";
            break;
            case 14:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_14_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_14_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime14").innerHTML="";
                document.getElementById("btn14").style.display="initial";
            break;
            case 15:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_15_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_15_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime15").innerHTML="";
                document.getElementById("btn15").style.display="initial";
            break;
            case 16:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_16_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_16_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime16").innerHTML="";
                document.getElementById("btn16").style.display="initial";
            break;
            case 17:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_17_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_17_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime17").innerHTML="";
                document.getElementById("btn17").style.display="initial";
            break;
            case 18:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_18_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_18_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime18").innerHTML="";
                document.getElementById("btn18").style.display="initial";
            break;
            case 19:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_19_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_19_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime19").innerHTML="";
                document.getElementById("btn19").style.display="initial";
            break;
            case 20:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_20_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_20_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime20").innerHTML="";
                document.getElementById("btn20").style.display="initial";
            break;
            case 21:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_21_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_21_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime21").innerHTML="";
                document.getElementById("btn21").style.display="initial";
            break;
            case 22:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_22_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_22_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime22").innerHTML="";
                document.getElementById("btn22").style.display="initial";
            break;
            case 23:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_23_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_23_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime23").innerHTML="";
                document.getElementById("btn23").style.display="initial";
            break;
            case 24:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_24_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_24_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime24").innerHTML="";
                document.getElementById("btn24").style.display="initial";
            break;
            case 25:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_25_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_25_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime25").innerHTML="";
                document.getElementById("btn25").style.display="initial";
            break;
            case 26:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_26_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_26_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime26").innerHTML="";
                document.getElementById("btn26").style.display="initial";
            break;
            case 27:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_27_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_27_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime27").innerHTML="";
                document.getElementById("btn27").style.display="initial";
            break;
            case 28:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_28_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_28_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime28").innerHTML="";
                document.getElementById("btn28").style.display="initial";
            break;
            case 29:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_29_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_29_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime29").innerHTML="";
                document.getElementById("btn29").style.display="initial";
            break;
            case 30:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_30_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_30_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime30").innerHTML="";
                document.getElementById("btn30").style.display="initial";
            break;
            case 31:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_31_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_31_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime31").innerHTML="";
                document.getElementById("btn31").style.display="initial";
            break;
            case 32:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_32_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_32_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime32").innerHTML="";
                document.getElementById("btn32").style.display="initial";
            break;
            case 33:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_33_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_33_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime33").innerHTML="";
                document.getElementById("btn33").style.display="initial";
            break;
            case 34:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_34_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime44").innerHTML="";
                document.getElementById("btn34").style.display="initial";
            break;
            case 35:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_35_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_35_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime35").innerHTML="";
                document.getElementById("btn35").style.display="initial";
            break;
            case 36:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_36_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_36_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime36").innerHTML="";
                document.getElementById("btn36").style.display="initial";
            break;
            case 37:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_37_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_37_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime37").innerHTML="";
                document.getElementById("btn37").style.display="initial";
            break;
            case 38:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_38_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_38_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime38").innerHTML="";
                document.getElementById("btn38").style.display="initial";
            break;
            case 39:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_39_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_39_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime39").innerHTML="";
                document.getElementById("btn39").style.display="initial";
            break;
            case 40:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_40_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_40_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime40").innerHTML="";
                document.getElementById("btn40").style.display="initial";
            break;
            case 41:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_41_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_41_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime41").innerHTML="";
                document.getElementById("btn41").style.display="initial";
            break;
            case 42:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_42_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_42_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime42").innerHTML="";
                document.getElementById("btn42").style.display="initial";
            break;
            case 43:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_43_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_43_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime43").innerHTML="";
                document.getElementById("btn43").style.display="initial";
            break;
            case 44:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime44").innerHTML="";
                document.getElementById("btn44").style.display="initial";
            break;
            case 45:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_45_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_45_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime45").innerHTML="";
                document.getElementById("btn45").style.display="initial";
            break;
            case 46:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_46_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_46_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime46").innerHTML="";
                document.getElementById("btn46").style.display="initial";
            break;
            case 47:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_47_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_47_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime47").innerHTML="";
                document.getElementById("btn47").style.display="initial";
            break;
            case 48:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_48_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_48_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime48").innerHTML="";
                document.getElementById("btn48").style.display="initial";
            break;
            case 49:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_49_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_49_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime49").innerHTML="";
                document.getElementById("btn49").style.display="initial";
            break;
            case 50:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_50_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_50_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime50").innerHTML="";
                document.getElementById("btn50").style.display="initial";
            break;
            case 51:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_51_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_51_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime51").innerHTML="";
                document.getElementById("btn51").style.display="initial";
            break;
            case 52:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_52_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_52_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime52").innerHTML="";
                document.getElementById("btn52").style.display="initial";
            break;
            case 53:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_53_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_53_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime53").innerHTML="";
                document.getElementById("btn53").style.display="initial";
            break;
            case 54:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_54_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_54_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime54").innerHTML="";
                document.getElementById("btn54").style.display="initial";
            break;
            case 55:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_55_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_55_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime55").innerHTML="";
                document.getElementById("btn55").style.display="initial";
            break;
            case 56:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_56_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_56_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime56").innerHTML="";
                document.getElementById("btn56").style.display="initial";
            break;
            case 57:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_57_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_57_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime57").innerHTML="";
                document.getElementById("btn57").style.display="initial";
            break;
            case 58:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_58_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_58_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime58").innerHTML="";
                document.getElementById("btn58").style.display="initial";
            break;
            case 59:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_59_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_59_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime59").innerHTML="";
                document.getElementById("btn59").style.display="initial";
            break;
            case 60:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_60_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_60_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime60").innerHTML="";
                document.getElementById("btn60").style.display="initial";
            break;
            case 61:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_61_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_61_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime61").innerHTML="";
                document.getElementById("btn61").style.display="initial";
            break;
            case 62:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_62_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_62_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime62").innerHTML="";
                document.getElementById("btn62").style.display="initial";
            break;
            case 63:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_63_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_63_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime63").innerHTML="";
                document.getElementById("btn63").style.display="initial";
            break;
            case 64:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_64_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_64_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime64").innerHTML="";
                document.getElementById("btn64").style.display="initial";
            break;
            case 65:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_65_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_65_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime65").innerHTML="";
                document.getElementById("btn65").style.display="initial";
            break;
            case 66:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_66_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_66_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime66").innerHTML="";
                document.getElementById("btn66").style.display="initial";
            break;
            case 67:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_67_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_67_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime67").innerHTML="";
                document.getElementById("btn67").style.display="initial";
            break;
            case 68:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_68_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_68_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime68").innerHTML="";
                document.getElementById("btn68").style.display="initial";
            break;
            case 69:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_69_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_69_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime69").innerHTML="";
                document.getElementById("btn69").style.display="initial";
            break;
            case 70:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_70_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_70_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime70").innerHTML="";
                document.getElementById("btn70").style.display="initial";
            break;
            case 71:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_71_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_71_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime71").innerHTML="";
                document.getElementById("btn71").style.display="initial";
            break;
            case 72:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_72_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_72_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime72").innerHTML="";
                document.getElementById("btn72").style.display="initial";
            break;
            case 73:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_73_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_73_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime73").innerHTML="";
                document.getElementById("btn73").style.display="initial";
            break;
            case 74:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_74_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_74_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime74").innerHTML="";
                document.getElementById("btn74").style.display="initial";
            break;
            case 75:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_75_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_75_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime75").innerHTML="";
                document.getElementById("btn75").style.display="initial";
            break;
            case 76:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_76_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_76_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime76").innerHTML="";
                document.getElementById("btn76").style.display="initial";
            break;
            case 77:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_77_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_77_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime77").innerHTML="";
                document.getElementById("btn77").style.display="initial";
            break;
            case 78:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_78_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_78_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime78").innerHTML="";
                document.getElementById("btn78").style.display="initial";
            break;
            case 79:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_79_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_79_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime79").innerHTML="";
                document.getElementById("btn79").style.display="initial";
            break;
            case 80:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_80_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_80_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime80").innerHTML="";
                document.getElementById("btn80").style.display="initial";
            break;
            case 81:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_81_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_81_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime81").innerHTML="";
                document.getElementById("btn81").style.display="initial";
            break;
            case 82:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_82_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_82_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime82").innerHTML="";
                document.getElementById("btn82").style.display="initial";
            break;
            case 83:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_83_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_83_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime83").innerHTML="";
                document.getElementById("btn83").style.display="initial";
            break;
            case 84:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_84_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_84_cliente_id');
                databaseRef.remove();
                document.getElementById("idTime84").innerHTML="";
                document.getElementById("btn84").style.display="initial";
            break;
        }
        //alert('Compromisso Removido');
        buscarAgendamentos();
}

