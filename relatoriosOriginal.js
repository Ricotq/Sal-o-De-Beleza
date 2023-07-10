//alert("Relatorios");
var nome_usuario = sessionStorage.getItem('nome_usuario');
var urlcliente = sessionStorage.getItem('urlcliente');
var idcliente = sessionStorage.getItem('idcliente');

var titulo = document.getElementById("titulo");

var agendaKeys=[];
var agendaGeral=[];
var agendaArray2=[];

var deleteKey="";
var deleteKeySequence="";

var count=0;

var min="00";

//alert("urlcliente = "+urlcliente);
//alert("nome_usuario = "+nome_usuario);
//alert("idcliente = "+idcliente);

titulo.innerHTML="Cliente "+nome_usuario;

var image = document.getElementById("image");
image.src = urlcliente;
image.style.display = "block";




window.onload = function() {
    buscarAgendamentosDoCliente();
    
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
    });
}
function buscarAgendamentosDoCliente2(){
    //alert("buscarAgendamentosDoCliente2()");
    for(var i=0; i<agendaKeys.length; i++){
        //alert(agendaKeys[i]);
        var agendaKeyPrimeira=agendaKeys[i];
        var database = firebase.database();
        var databaseRef = database.ref('agenda/'+agendaKeys[i]).orderByChild('agenda_data');
        databaseRef.once('value', function(snapshot){
            snapshot.forEach(function (childSnapshot){
                var childData = childSnapshot.val();
                var agenda_key = childSnapshot.key;
                //agenda.push([childData]);
                //agendaKeys.push(agenda_key);
                //alert("childData.especialidade_nome = "+childData.especialidade_nome);
                //alert('childData.agenda_id = '+childData.agenda_id+' e idcliente = '+idcliente);
                
                if(childData.agenda_id===childData.agenda_id_origem && idcliente===childData.user_id){
                    
                    var profId = agendaKeyPrimeira;
                    //alert("profId = "+profId);
                    var data = childData.agenda_data;
                    var hora = childData.agenda_horario;
                    var userNome = childData.user_nome;
                    var profNome = childData.prof_nome;
                    var especialidade = childData.especialidade_nome;
                    var profNome = childData.prof_nome;
                    var valor = childData.valor;
                    var desconto = childData.valor_desc;
                    var valorFinal = childData.valor_rec;
                    var cor = childData.espec_cor;
                    var compareceu = childData.compareceu;
                    var pagou = childData.pagou;
                    var tipoDesconto = childData.tipo_de_desconto;
                    
                    //populateAgendaGeral(data,hora,especialidade,userNome,profNome,cor,count,compareceu,pagou,valor,desconto,valorFinal, tipoDesconto);
                    criarTabela(data,hora,especialidade,userNome,profNome,cor,count,compareceu,pagou,valor,desconto,valorFinal, tipoDesconto);
                    agendaArray2.push([data,hora,especialidade,userNome,profNome,cor,count,compareceu,pagou,valor,desconto,valorFinal, tipoDesconto,profId,agenda_key]);
                    agendaArray2.reverse();
                    count++;
//                    alert("agendaGeral = "+agendaGeral);
//                    alert("childData.user_nome = "+childData.user_nome);
//                    alert("childData.childData.user_id = "+childData.user_id);
//                    alert("childData.especialidade_nome = "+childData.especialidade_nome);
//                    alert("childData.agenda_data = "+childData.agenda_data);
//                    
//                    alert("childData.prof_nome = "+childData.prof_nome);
//                    alert("childData.valor_rec = "+childData.valor_rec);
                    
                }
                
            });
            
        });
        
    }
    //sortArrayPorData();
}

//function sortArrayPorData(){
//    agendaArray2.sort((a, b) => a - b);
//    console.log("agendaArray2");
//    console.log(agendaArray2);
//}
//function populateAgendaGeral(data,hora,userNome,profNome,especialidade,valorCombinado,valorDesconto,valorRecebido){
//    agendaGeral.push([data,hora,userNome,profNome,especialidade,valorCombinado,valorDesconto,valorRecebido]);
//    //alert("mostrarAgendaGeral() em populate"+agendaGeral);
//    //alert(data,hora,userNome,profNome,especialidade,valorCombinado,valorDesconto,valorRecebido);
////    alert("data ="+data);
////    alert("dahorata ="+hora);
////    alert("userNome ="+userNome);
////    alert("especialidade ="+especialidade);
//}

function mostrarAgendaGeral(){
    alert("mostrarAgendaGeral()"+agendaGeral);
}

    function criarTabela(data,horario,especialidade,userNome,profNome,cor,count,compareceu,pagou,valor,desconto,valorFinal, tipoDesconto){
        
            //alert("tipoDeDesconto = "+tipoDeDesconto);
        
            formatarHorario(horario);
            
            var tabela = document.getElementById('tabelaAgendaProfissional');
            var newRow = tabela.insertRow(0);
            
            //tabela.height="50px";
            //cell1.width='120px';
            
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
            var cell11 = newRow.insertCell(9);
            
            //cell1.width='520px';
            
            if(hora<10){
                texto = '0'+hora+":"+min;
            }else{
                texto = hora+":"+min;
            }
            
            cell1.innerHTML = "<p class='textoMenor100'>"+data+"</p>";
            cell2.innerHTML = "<p class='textoMenor80'>"+hora+"</p>";
            cell3.innerHTML = "<p class='textoMenor300'>"+profNome+"</p>";
            cell4.innerHTML = "<p class='textoMenor300' style= 'background-color: "+cor+";' >"+especialidade+"</p>";
            //cell4.innerHTML = "<p class='textoMenor300' >"+userNome+"</p>";
            cell5.innerHTML = "<p class='textoMenor90A' id='valor"+count+"' >€"+valor+"</p>";
            cell6.innerHTML = "<p style= 'width:140px; margin-left: 0px; margin-top: -5px; margin-bottom: -5px;'><input type='radio' id='compareceu"+count+"' onclick='compareceu("+count+");'/><label for='compareceu"+count+"'>Compareceu</label></p>";
            if(compareceu){
                document.getElementById('compareceu'+count).checked= true;
            }else{
                document.getElementById('compareceu'+count).checked= false;
            }
            cell7.innerHTML = "<label for='porcento'  style='margin-left: -30px; margin-right: 0px;'></label><select id='porcento"+count+"' onchange='acertarNumeroSelect("+count+");' style='font-size: 14px; outline: none;'><option value='0'>€</option><option value='1'>%</option></select>";
            
            if(tipoDesconto==="0"){
                //alert("tipoDeDesconto==='0'");
                document.getElementById("porcento"+count).value="0";
                
            }
            if(tipoDesconto==="1"){
                //alert("tipoDeDesconto==='1'");
                document.getElementById("porcento"+count).value="1";
            }
            
            cell8.innerHTML = "<input type='number' min='0.00' max='1000.00' step='0.01' class='textoMenor90ABC' id='valorDesconto"+count+"' onchange='acertarNumero("+count+");'/>";
                    
            
            cell9.innerHTML = "<p class='textoMenor90A' id='valorFinal"+count+"' >€"+valorFinal+"</p>";
            
            cell10.innerHTML = "<p style='width: 150px; margin-top: -2px; margin-bottom: -5px; margin-left: -40px;'><input type='button' class='divBotaoLista' id='btnDel"+count+"' style='margin-left: 0px;' value = 'Excluir' onClick='excluirA("+count+");'></button></p>";
            
            cell11.innerHTML = "<p style= 'width:70px; margin-left: 0px; margin-top: -5px; margin-bottom: -5px;'><input type='radio' id='pagou"+count+"' onclick='pagou("+count+");'/><label for='pagou"+count+"'>Pagou</label></p>";
            if(pagou){
                document.getElementById('pagou'+count).checked= true;
                document.getElementById('valorDesconto'+count).disabled= true;
                document.getElementById('porcento'+count).disabled= true;
                //document.getElementById('valorFinal'+count).disabled= true;
            }else{
                document.getElementById('pagou'+count).checked= false;
                document.getElementById('valorDesconto'+count).disabled= false;
                //document.getElementById('valorFinal'+count).disabled= false;
            }
            document.getElementById('valorDesconto'+count).value= desconto;
            
            
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
    
//    function excluirA(n){
//        for(var i=0; i<agendaKeys.length; i++){
//            excluirB(i,n);
//        }
//    }
//    function excluirB(indexAgendaKey, indexAgendaArray){
//        //alert("excluirB");
//        
//        
//        
//            var agendaId = "";
//            var agendaIdOrigem = "";
//            //alert("excluirB = true");
//            var ref = firebase.database().ref("agenda/"+agendaKeys[indexAgendaKey]);
//            
//            ref.once('value', function(snapshot){
//                snapshot.forEach(function (childSnapshot){
//                    var childKey = childSnapshot.key;
//                    var childData = childSnapshot.val();
//                    
//                    var data = childData.agenda_data;
//                    var horario = childData.agenda_horario;
//                    var cliente = childData.user_nome;
//                    var profissional = childData.prof_nome;
//                    var servico = childData.especialidade_nome;
//                    var cor = childData.espec_cor;
//                    agendaId = childData.agenda_id;
//                    agendaIdOrigem = childData.agenda_id_origem;
//
//                    if(childKey===agendaArray[indexAgendaArray]){
//                        deleteKey=agendaKey[indexAgendaKey];
//                        deleteKeySequence=childKey;
//                        deletarSequencia();
//                    }
//                  }); 
//                });
//    }
    
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
                    
                    //alert("childData.agenda_id = "+childData.agenda_id);
                    //alert("childData.agenda_id_origem = "+childData.agenda_id_origem);
                    //alert("deleteKeySequence = "+deleteKeySequence);
                    //alert("agIg = "+agIg);
                    //alert("agIgOr = "+agIgOr);
                    
                    if(childData.agenda_id_origem===deleteKeySequence){
                        //alert("childData.agenda_id = "+childData.agenda_id);
                        //alert("childData.agenda_id_origem = "+childData.agenda_id_origem);
                        var deleteRef = firebase.database().ref('agenda/'+deleteKey+'/'+agIg);
                        deleteRef.remove();
                    }
                  }); 
                });

            agendaArray2=[];
            limparTabela();
            //pesquisarAgenda();
        }
    }
    
    function compareceu(n){
        //alert('compareceu(n) = '+n);
        //alert("agendaArray2 = "+agendaArray2);
        //alert("agendaArray2["+n+"][1] = "+agendaArray2[n][1]);
        //alert("agendaArray2["+n+"][2] = "+agendaArray2[n][2]);
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
        //pesquisarAgenda();
    }
    
    function pagou(n){
        //alert('pagou(n) = '+n);
        //alert('agendaArray2[n][13] = profId = '+agendaArray2[n][13]);
        //alert('agendaArray2[n][14] = agendaKey = '+agendaArray2[n][14]);
        var desconto=document.getElementById('valorDesconto'+n).value;
        var porcento = document.getElementById('porcento'+n).value;
        //desconto = desconto.toFixed(2);
        //alert("desconto = "+desconto);
        //alert('agendaArray2[n][8] = pagou = '+agendaArray2[n][8]);
        if(agendaArray2[n][8]){
            document.getElementById('pagou'+n).checked= false;
            var ref = firebase.database().ref("agenda/"+agendaArray2[n][13]+"/"+agendaArray2[n][14]);
            ref.update({
                tipo_de_desconto:0,
		pagou: false,
                valor_desc:"",
                valor_rec:0
            });
        }else{
            //var valorRecebido = (agendaArray2[n][5]-desconto).toFixed(2);
            var porcento = document.getElementById('porcento'+n).value;
            
            var valor = document.getElementById("valor"+n).innerHTML;
            var stringValor = valor.substring(1);
            var numvalor = Number(stringValor);
            
            var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
            var valorFinal = valorRecebido.substring(1);
            var numvalorFinal = Number(valorFinal);
            
            var valorDesconto = document.getElementById('valorDesconto'+n).value;
            var valorDescontoDecimal = Number(valorDesconto);
            //valorDescontoDecimal = valorDesconto.toFixed(2);
            
            if(porcento==="0"){
                numvalorFinal=numvalor-valorDesconto;
                numvalorFinal = numvalorFinal.toFixed(2);
            }
            if(porcento==="1"){
                numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                numvalorFinal = numvalorFinal.toFixed(2);
            }
            
            //alert("numvalor = "+numvalor);
            
            document.getElementById('pagou'+n).checked= true;
            var ref = firebase.database().ref("agenda/"+agendaArray2[n][13]+"/"+agendaArray2[n][14]);
            ref.update({
                tipo_de_desconto:porcento,
		pagou: true,
                valor_desc: valorDescontoDecimal.toFixed(2),
                valor_rec: numvalorFinal
            });
        }
        agendaArray2=[];
        limparTabela();
        //pesquisarAgenda();
    }
    
    function acertarNumero(n){
      var valor = document.getElementById("valor"+n).innerHTML;
      var stringValor = valor.substring(1);
       var numvalor = Number(stringValor);
      //alert("numvalor = "+numvalor);
      var desconto = document.getElementById('valorDesconto'+n).value;
      desconto = Number(desconto);
      var valorFinal = document.getElementById('valorFinal'+n).innerHTML;
      var stringValorFinal = valorFinal.substring(1);
      var numvalorFinal = Number(stringValorFinal);
      //alert("numvalorFinal = "+numvalorFinal);
      var porcento = document.getElementById('porcento'+n).value;
      //alert("porcento = "+porcento);
      //alert("numvalor = "+numvalor);
      //alert("desconto = "+desconto);
      if(desconto>numvalor){
          if(porcento==="0"){
              //alert(desconto+">"+numvalor);
            alert("O desconto não pode ser maior do que o valor do serviço...");
            document.getElementById('valorDesconto'+n).value="";
          }
      }else{
          if(porcento==="0"){
            //alert("porcento = $");
            var valorComDesconto=numvalor-desconto;
            valorComDesconto=Number(valorComDesconto).toFixed(2);
            document.getElementById('valorFinal'+n).innerHTML="€"+valorComDesconto;
          }
      }
      if(porcento==="1"){
            //alert("porcento = %");
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
        //var n=table.rows.length;
        //alert("n = "+n);
        //for(var i=1; i<n+1; i++){
        //    deletarRow(0);
        //}
            
    }
    
