var nome_usuario = sessionStorage.getItem('nome_usuario');
var urlcliente = sessionStorage.getItem('urlcliente');
var idcliente = sessionStorage.getItem('idcliente');

var titulo = document.getElementById("titulo");

var porPeriodoFlag = false;

var dia="";

var agendaKeys=[];
var agendaGeral=[];
var agendaArray2=[];
var agendaKeyPrimeira="";

var deleteKey="";
var deleteKeySequence="";

var count=0;

var min="00";


titulo.innerHTML="Cliente "+nome_usuario;

var image = document.getElementById("image");
image.src = urlcliente;
image.style.display = "block";




window.onload = function() {
    buscarAgendamentosDoCliente();
    document.getElementById("dataInicio").style.display="none";
    document.getElementById("spanDataInicio").style.display="none";
    document.getElementById("dataFim").style.display="none";
    document.getElementById("spanDataFim").style.display="none";
    
};

function buscarAgendamentosDoCliente(){
    //alert("buscarAgendamentosDoCliente()");
    var database = firebase.database();
    var databaseRef = database.ref('agenda'); //.orderByChild('agenda_horario');
    databaseRef.once('value', function(snapshot){
        snapshot.forEach(function (childSnapshot){
            var childData = childSnapshot.val();
            var agenda_key = childSnapshot.key;
            agendaKeys.push(agenda_key);
	});
        console.log(agendaKeys);
        //alert(agendaKeys);
        buscarAgendamentosDoCliente2();
        //alert(agendaArray2);
        
    });
}
function buscarAgendamentosDoCliente2(){
    
    //alert("buscarAgendamentosDoCliente2()");
    for(var i=0; i<agendaKeys.length; i++){

        buscarAgendamentosDoCliente3(agendaKeys[i]);

}

function buscarAgendamentosDoCliente3(key1){
    var dataInicio = document.getElementById('dataInicio').value;
    var data_Inicio = new Date(dataInicio);
    var data_InicioB = new Date(dataInicio);
    data_InicioB.setDate(data_InicioB.getDate()-1);
    
    var dataFim = document.getElementById('dataFim').value;
    var data_Fim = new Date(dataFim);
    var data_FimB = new Date(dataFim);
    data_FimB.setDate(data_FimB.getDate()+1);
    
    if(data_Inicio>data_Fim){
        alert("Data Inicial não pode ser maior do que a Data Final...");
    }else{
        if(dataInicio){
            //alert("data_Inicio = "+data_Inicio);
        }
        if(dataFim){
            //alert("data_Fim = "+data_Fim);
        }
        var database = firebase.database();
            var databaseRef = database.ref('agenda/'+key1).orderByChild('agenda_data');

            databaseRef.once('value', function(snapshot){
                snapshot.forEach(function (childSnapshot){
                    var childData = childSnapshot.val();
                    var agenda_key = childSnapshot.key;
                    var profId = key1;

                    var data = childData.agenda_data;
                    var hora = childData.agenda_horario;
                    var userNome = childData.user_nome;
                    var profNome = childData.prof_nome;
                    var especialidade = childData.especialidade_nome;
                    var profNome = childData.prof_nome;
                    var valor = childData.valor;
                    var desconto = childData.valor_desc;
                    if(childData.valor_rec){
                        var valorFinal = childData.valor_rec;
                    }else{
                        var valorFinal = "";
                    }
                    
                    var cor = childData.espec_cor;
                    var compareceu = childData.compareceu;
                    var pagou = childData.pagou;
                    var tipoDesconto = childData.tipo_de_desconto;
                    var dataRec = childData.data_rec;

                    var data_ano = data.substring(0, 4);
                    var data_mes = data.substring(5, 7);
                    var data_dia = data.substring(8, 10);
                    var dataDeComparacao = data_ano+"/"+data_mes+"/"+data_dia;
                    var data_de_comparacao = new Date(dataDeComparacao);

                    if(childData.agenda_horario===childData.horario_origem && idcliente===childData.user_id && !childData.pagou){
                        if(!dataInicio && !dataFim){
                            //alert("data em primeiro if = "+data);
                            criarTabela(data,hora,especialidade,userNome,profNome,cor,count,compareceu,pagou,valor,desconto,valorFinal, tipoDesconto,dataRec);
                            agendaArray2.push([data,hora,especialidade,userNome,profNome,cor,count,compareceu,pagou,valor,desconto,valorFinal, tipoDesconto,profId,agenda_key]);
                            console.log("agendaArray2");
                            console.log(agendaArray2);

                            count++;
                        }
                        if(dataInicio && !dataFim){
                            if(data_InicioB<=data_de_comparacao){
                                criarTabela(data,hora,especialidade,userNome,profNome,cor,count,compareceu,pagou,valor,desconto,valorFinal, tipoDesconto,dataRec);
                                agendaArray2.push([data,hora,especialidade,userNome,profNome,cor,count,compareceu,pagou,valor,desconto,valorFinal, tipoDesconto,profId,agenda_key]);
                                console.log("agendaArray2");
                                console.log(agendaArray2);

                                count++; 
                            }
                        }
                        if(dataInicio && dataFim){
                            if(data_Fim>=data_Inicio){
                                if(data_InicioB<=data_de_comparacao && data_Fim>=data_de_comparacao){
                                    criarTabela(data,hora,especialidade,userNome,profNome,cor,count,compareceu,pagou,valor,desconto,valorFinal, tipoDesconto,dataRec);
                                    agendaArray2.push([data,hora,especialidade,userNome,profNome,cor,count,compareceu,pagou,valor,desconto,valorFinal, tipoDesconto,profId,agenda_key]);
                                    console.log("agendaArray2");
                                    console.log(agendaArray2);

                                    count++; 
                            }
                        }
                    }

                    }

                });

                criarLinhaDeSeparacao();
            });
    }
    
    
        
}
function imprimirNomeProfissional(key){
    //alert("imprimirNomeProfissional(key)");
    var profNome="";
    var database = firebase.database();
        var databaseRef = database.ref('profissional/');
        databaseRef.once('value', function(snapshot){
            snapshot.forEach(function (childSnapshot){
                var childData = childSnapshot.val();
                var agenda_key = childSnapshot.key;
                
                if(key===childData.id_prof){
                    
                    profNome = childData.nome_prof;
                    //alert("profNome = "+profNome);
                    criarLinhaDeProfissional(profNome,key);
                }
                
            });
            
        });
        
    }
}

function criarLinhaDeProfissional(profNome,key){
    var tabela = document.getElementById('tabelaAgendaProfissional');
    var newRow = tabela.insertRow(-1);
    var cell1 = newRow.insertCell(0);
   
    cell1.innerHTML = "<p style='font-size: 22px;'>Profissional: "+profNome+"</p>";
    
    buscarAgendamentosDoCliente3(key);
}
function criarLinhaDeSeparacao(){
        //alert("criarLinhaDeSeparacao()");
        var tabela = document.getElementById('tabelaAgendaProfissional');
            var newRow = tabela.insertRow(-1);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            cell1.innerHTML = "<p>"+""+"</p>";
            cell2.innerHTML = "<p>"+""+"</p>";
            cell3.innerHTML = "<p>"+""+"</p>";
            cell4.innerHTML = "<p>"+""+"</p>";
    }

    function criarTabela(data,horario,especialidade,userNome,profNome,cor,countador,compareceu,pagou,valor,desconto,valorFinal, tipoDesconto,dataRec){
        
            formatarHorario(horario);
            formatarData(data);
            
            var tabela = document.getElementById('tabelaAgendaProfissional');
            var newRow = tabela.insertRow(-1);
            
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);
            var cell7 = newRow.insertCell(6);
            var cell8 = newRow.insertCell(7);
            var cell9 = newRow.insertCell(8);
            var cell10 = newRow.insertCell(9);
            var cell11 = newRow.insertCell(10);
            var cell12 = newRow.insertCell(11);
            
            if(hora<10){
                texto = '0'+hora+":"+min;
            }else{
                texto = hora+":"+min;
            }
            
            cell1.innerHTML = "<p class='textoMenor100'>"+dia+"</p>";
            cell2.innerHTML = "<p class='textoMenor80'>"+hora+"</p>";
            cell3.innerHTML = "<p class='textoMenor300'>"+profNome+"</p>";
            cell4.innerHTML = "<p class='textoMenor300' style= 'background-color: "+cor+";' >"+especialidade+"</p>";
            //cell4.innerHTML = "<p class='textoMenor300' >"+userNome+"</p>";
            cell5.innerHTML = "<p class='textoMenor90A' id='valor"+countador+"' >€"+valor+"</p>";
            cell6.innerHTML = "<p style= 'width:140px; margin-left: 0px; margin-top: -5px; margin-bottom: -5px;'><input type='radio' id='compareceu"+countador+"' onclick='compareceu("+countador+");'/><label for='compareceu"+countador+"'>Compareceu</label></p>";
            if(compareceu){
                document.getElementById('compareceu'+countador).checked= true;
            }else{
                document.getElementById('compareceu'+countador).checked= false;
            }
            cell7.innerHTML = "<label for='porcento'  style='margin-left: -30px; margin-right: 0px;'></label><select id='porcento"+countador+"' onchange='acertarNumeroSelect("+countador+");' style='font-size: 14px; outline: none;'><option value='0'>€</option><option value='1'>%</option></select>";
            
            if(tipoDesconto==="0"){
                //alert("tipoDeDesconto==='0'");
                document.getElementById("porcento"+countador).value="0";
                
            }
            if(tipoDesconto==="1"){
                //alert("tipoDeDesconto==='1'");
                document.getElementById("porcento"+countador).value="1";
            }
            
            cell8.innerHTML = "<input type='number' min='0.00' max='1000.00' step='0.01' class='textoMenor90ABC' id='valorDesconto"+countador+"' onchange='acertarNumero("+countador+");'/>";
                    
            
            cell9.innerHTML = "<p class='textoMenor90A' id='valorFinal"+countador+"' >€"+valorFinal+"</p>";
            
            cell10.innerHTML = "<input type='date' id='dataRecebimento"+countador+"' class='divBotaoLista' style='width: 125px; font-size:12px;'/>";
            
            
            cell11.innerHTML = "<p style= 'width:70px; margin-left: 0px; margin-top: -5px; margin-bottom: -5px;'><input type='radio' id='pagou"+countador+"' onclick='pagou("+countador+");'/><label for='pagou"+countador+"'>Pagou</label></p>";
            if(pagou){
                document.getElementById('pagou'+countador).checked= true;
                document.getElementById('valorDesconto'+countador).disabled= true;
                document.getElementById('porcento'+countador).disabled= true;
                document.getElementById('dataRecebimento'+count).disabled= true;
            }else{
                document.getElementById('pagou'+countador).checked= false;
                document.getElementById('valorDesconto'+countador).disabled= false;
                document.getElementById('dataRecebimento'+count).disabled= false;
            }
            
            cell12.innerHTML = "<p style='width: 150px; margin-top: -2px; margin-bottom: -5px; margin-left: -40px;'><input type='button' class='divBotaoLista' id='btnDel"+countador+"' style='margin-left: 0px;' value = 'Excluir' onClick='excluirA("+countador+");'></button></p>";
            
            document.getElementById('valorDesconto'+countador).value= desconto;
            document.getElementById('dataRecebimento'+countador).value = dataRec;
            
    }
    
    function formatarData(data){
        var data_ano = data.substring(0, 4);
        var data_mes = data.substring(5, 7);
        var data_dia = data.substring(8, 10);
        dia=data_dia+"/"+data_mes+"/"+data_ano;
    }
    
    function formatarHorario(horario){
        
        switch (horario) {
            case 84:
              hora = "05:00 hs";
              break;
            case 83:
              hora = "05:15 hs";
              break;
            case 82:
              hora = "05:30 hs";
              break;
            case 81:
              hora = "05:45 hs";
              break;
            case 80:
              hora = "06:00 hs";
              break;
            case 79:
              hora = "06:15 hs";
              break;
            case 78:
              hora = "06:30 hs";
              break;
            case 77:
              hora = "06:45 hs";
              break;
            case 76:
              hora = "07:00 hs";
              break;
            case 75:
              hora = "07:15 hs";
              break;
            case 74:
              hora = "07:30 hs";
              break;
            case 73:
              hora = "07:45 hs";
              break;
            case 72:
              hora = "08:00 hs";
              break;
            case 71:
              hora = "08:15 hs";
              break;
            case 70:
              hora = "08:30 hs";
              break;
            case 69:
              hora = "08:45 hs";
              break;
            case 68:
              hora = "09:00 hs";
              break;
            case 67:
              hora = "09:15 hs";
              break;
            case 66:
              hora = "09:30 hs";
              break;
            case 65:
              hora = "09:45 hs";
              break;
            case 64:
              hora = "10:00 hs";
              break;
            case 63:
              hora = "10:15 hs";
              break;
            case 62:
              hora = "10:30 hs";
              break;
            case 61:
              hora = "10:45 hs";
              break;
            case 60:
              hora = "11:00 hs";
              break;
            case 59:
              hora = "11:15 hs";
              break;
            case 58:
              hora = "11:30 hs";
              break;
            case 57:
              hora = "11:45 hs";
              break;
            case 56:
              hora = "12:00 hs";
              break;
            case 55:
              hora = "12:15 hs";
              break;
            case 54:
              hora = "12:30 hs";
              break;
            case 53:
              hora = "12:45 hs";
              break;
            case 52:
              hora = "13:00 hs";
              break;
            case 51:
              hora = "13:15 hs";
              break;
            case 50:
              hora = "13:30 hs";
              break;
            case 49:
              hora = "13:45 hs";
              break;
            case 48:
              hora = "14:00 hs";
              break;
            case 47:
              hora = "14:15 hs";
              break;
            case 46:
              hora = "14:30 hs";
              break;
            case 45:
              hora = "14:45 hs";
              break;
            case 44:
              hora = "15:00 hs";
              break;
            case 43:
              hora = "15:15 hs";
              break;
            case 42:
              hora = "15:30 hs";
              break;
            case 41:
              hora = "15:45 hs";
              break;
            case 40:
              hora = "16:00 hs";
              break;
            case 39:
              hora = "16:15 hs";
              break;
            case 38:
              hora = "16:30 hs";
              break;
            case 37:
              hora = "16:45 hs";
              break;
            case 36:
              hora = "17:00 hs";
              break;
            case 35:
              hora = "17:15 hs";
              break;
            case 34:
              hora = "17:30 hs";
              break;
            case 33:
              hora = "17:45 hs";
              break;
            case 32:
              hora = "18:00 hs";
              break;
            case 31:
              hora = "18:15 hs";
              break;
            case 30:
              hora = "18:30 hs";
              break;
            case 29:
              hora = "18:45 hs";
              break;
            case 28:
              hora = "19:00 hs";
              break;
            case 27:
              hora = "19:15 hs";
              break;
            case 26:
              hora = "19:30 hs";
              break;
            case 25:
              hora = "19:45 hs";
              break;
            case 24:
              hora = "20:00 hs";
              break;
            case 23:
              hora = "20:15 hs";
              break;
            case 22:
              hora = "20:30 hs";
              break;
            case 21:
              hora = "20:45 hs";
              break;
            case 20:
              hora = "21:00 hs";
              break;
            case 19:
              hora = "21:15 hs";
              break;
            case 18:
              hora = "21:30 hs";
              break;
            case 17:
              hora = "21:45 hs";
              break;
            case 16:
              hora = "22:00 hs";
              break;
            case 15:
              hora = "22:15 hs";
              break;
            case 14:
              hora = "22:30 hs";
              break;
            case 13:
              hora = "22:45 hs";
              break;
            case 12:
              hora = "23:00 hs";
              break;
            case 11:
              hora = "23:15 hs";
              break;
            case 10:
              hora = "23:30 hs";
              break;
            case 9:
              hora = "23:45 hs";
              break;
            case 8:
              hora = "24:00 hs";
              break;
            case 7:
              hora = "00:15 hs";
              break;
            case 6:
              hora = "00:30 hs";
              break;
            case 5:
              hora = "00:45 hs";
              break;
            case 4:
              hora = "01:00 hs";
              break;
            case 3:
              hora = "01:15 hs";
              break;
            case 2:
              hora = "01:30 hs";
              break;
            case 1:
              hora = "01:45 hs";
              break;
        }
    }
    
    function excluirA(n){
        var ref = firebase.database().ref("agenda/"+agendaArray2[n][13]);
        ref.once('value', function(snapshot){
                snapshot.forEach(function (childSnapshot){
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    if(childKey===agendaArray2[n][14]){
                        deleteKey=agendaArray2[n][13];
                        deleteKeySequence=agendaArray2[n][14];
                        deletarSequencia();
                    }
                }); 
        });
    }
    

    
    function deletarSequencia(){
        //alert("deleteKey = "+deleteKey);
        //alert("deleteKeySequence = "+deleteKeySequence);
        var r = confirm("Confirma a Exclusão?");
        if (r === true) {
            var ref = firebase.database().ref("agenda/"+deleteKey);
            ref.once('value', function(snapshot){
                snapshot.forEach(function (childSnapshot){
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    
                    var agIg = childData.agenda_id;
                    var agIgOr = childData.agenda_id_origem;
                    
                    if(childData.agenda_id_origem===deleteKeySequence){
                        
                        var deleteRef = firebase.database().ref('agenda/'+deleteKey+'/'+agIg);
                        deleteRef.remove();
                    }
                  }); 
                });

            agendaArray2=[];
            limparTabela();
            
        }
    }
    
    function compareceu(n){
        
        if(agendaArray2[n][7]){
            
            document.getElementById('compareceu'+n).checked= false;
            var ref = firebase.database().ref("agenda/"+agendaArray2[n][13]+"/"+agendaArray2[n][14]);
            ref.update({
		compareceu: false
            });
        }else{
            
            document.getElementById('compareceu'+n).checked= true;
            var ref = firebase.database().ref("agenda/"+agendaArray2[n][13]+"/"+agendaArray2[n][14]);
            ref.update({
		compareceu: true
            });
        }
        agendaArray2=[];
        limparTabela();
    }
    
    function pagou(n){
        
        //var desconto=document.getElementById('valorDesconto'+n).value;
        var porcento = document.getElementById('porcento'+n).value;
        
        var dataRec = document.getElementById('dataRecebimento'+n).value;
        var dataRecValue = new Date(dataRec);
        
        var hoje = new Date();
        var data_ano = hoje.getFullYear();
        var data_mes = hoje.getMonth();
        data_mes++;
        if(data_mes<10){
            data_mes="0"+data_mes;
        }
        var data_dia = hoje.getDate();
        if(data_dia<10){
            data_dia="0"+data_dia;
        }
        var diaDeHoje=data_ano+"-"+data_mes+"-"+data_dia;
        
        
        
        //alert("dataRec = "+dataRec);
        //alert("dataRecValue = "+dataRecValue);
        if(!dataRec){
            dataRec=diaDeHoje;
            var dataRecValue = new Date();
        }
        //alert("dataRec = "+dataRec);
        //alert("diaDeHoje = "+diaDeHoje);
        if(agendaArray2[n][8]){
            document.getElementById('pagou'+n).checked= false;
            var ref = firebase.database().ref("agenda/"+agendaArray2[n][13]+"/"+agendaArray2[n][14]);
            ref.update({
                tipo_de_desconto:0,
		pagou: false,
                valor_desc:"",
                valor_rec:0,
                data_rec:"",
                data_rec_value:""
            });
        }else{
            
            var porcento = document.getElementById('porcento'+n).value;
            
            var valor = document.getElementById("valor"+n).innerHTML;
            var stringValor = valor.substring(1);
            var numvalor = Number(stringValor);
            
            var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
            var valorFinal = valorRecebido.substring(1);
            var numvalorFinal = Number(valorFinal);
            
            var valorDesconto = document.getElementById('valorDesconto'+n).value;
            var valorDescontoDecimal = Number(valorDesconto);
            
            if(porcento==="0"){
                numvalorFinal=numvalor-valorDesconto;
                numvalorFinal = numvalorFinal.toFixed(2);
            }
            if(porcento==="1"){
                numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                numvalorFinal = numvalorFinal.toFixed(2);
            }
            
            document.getElementById('pagou'+n).checked= true;
            var ref = firebase.database().ref("agenda/"+agendaArray2[n][13]+"/"+agendaArray2[n][14]);
            ref.update({
                tipo_de_desconto:porcento,
		pagou: true,
                valor_desc: valorDescontoDecimal.toFixed(2),
                valor_rec: numvalorFinal,
                data_rec: dataRec,
                data_rec_value: dataRecValue
            });
        }
        agendaArray2=[];
        limparTabela();
        
    }
    
    function acertarNumero(n){
      var valor = document.getElementById("valor"+n).innerHTML;
      var stringValor = valor.substring(1);
       var numvalor = Number(stringValor);
      
      var desconto = document.getElementById('valorDesconto'+n).value;
      desconto = Number(desconto);
      var valorFinal = document.getElementById('valorFinal'+n).innerHTML;
      var stringValorFinal = valorFinal.substring(1);
      var numvalorFinal = Number(stringValorFinal);
      
      var porcento = document.getElementById('porcento'+n).value;
      
      if(desconto>numvalor){
          if(porcento==="0"){
            alert("O desconto não pode ser maior do que o valor do serviço...");
            document.getElementById('valorDesconto'+n).value="";
          }
      }else{
          if(porcento==="0"){
            var valorComDesconto=numvalor-desconto;
            valorComDesconto=Number(valorComDesconto).toFixed(2);
            document.getElementById('valorFinal'+n).innerHTML="€"+valorComDesconto;
          }
      }
      if(porcento==="1"){
            var percentual=(numvalor-(numvalor*desconto)/100);
            percentual=Number(percentual).toFixed(2);
            document.getElementById('valorFinal'+n).innerHTML="€"+percentual;
      }
    }
    
    function acertarNumeroSelect(n){
        document.getElementById('valorDesconto'+n).value="";
        document.getElementById('valorFinal'+n).innerHTML="€";
        
        document.getElementById('valorDesconto'+n).focus();
    }
    
    function limparTabela(){
        //agendaKey=[];
        agendaArray=[];
        count=0;
        countFinal=0;
        chavePrimaria="";
        //var table = document.getElementById("tabelaAgendaProfissional");
        document.getElementById("tabelaAgendaProfissional").innerHTML="";
        agendaArray2=[];
        agendaKeys=[];
        buscarAgendamentosDoCliente();
        
    }
    
    function ativarPorPeriodo(){
        
        //porPeriodo = document.getElementById("porPeriodo").checked;
        //alert("porPeriodoFlag = "+porPeriodoFlag);
        if(!porPeriodoFlag){
            porPeriodo.checked=true;
            //document.getElementById("porPeriodo").checked=false;
            document.getElementById("dataInicio").style.display="initial";
            document.getElementById("spanDataInicio").style.display="initial";
            document.getElementById("dataFim").style.display="initial";
            document.getElementById("spanDataFim").style.display="initial";
            porPeriodoFlag=true;
        }else{
            porPeriodo.checked=false;
            document.getElementById("dataInicio").style.display="none";
            document.getElementById("spanDataInicio").style.display="none";
            document.getElementById("dataFim").style.display="none";
            document.getElementById("spanDataFim").style.display="none";
            porPeriodoFlag=false;
            document.getElementById('dataInicio').value="";
            document.getElementById('dataFim').value="";
            limparTabela();
        }
    }