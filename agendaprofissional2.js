    let chave_profissional = sessionStorage.getItem('chave_profissional');
    let nome_profissional = sessionStorage.getItem('nome_profissional');
    
    let nome_usuario = sessionStorage.getItem('nome_usuario');
    let id_usuario = sessionStorage.getItem('id_usuario');
    
    alert('chave_profissional em agendaprofissional ='+chave_profissional);
    alert('nome_profissional ='+nome_profissional);
    alert('nome_usuario ='+nome_usuario);
    alert('id_usuario ='+id_usuario);
    
    var date = new Date();
    var novaData = new Date();
    var _diadasemana = novaData.getDay();
    
    prepararData(date);
    diaDaSemana(_diadasemana);
    
    function prepararData(_data){
        alert('prepararData(date)');
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
        
    }
    
    function diaDaSemana(dia){
        alert('diaDaSemana(dia');
        switch(dia){
        case 1: 
            dia="Segunda-feira";
            break;
        case 2: 
            dia="Terça-feira";
            break;
        case 3: 
            dia="Quarta-feira";
            break;
        case 4: 
            dia="Quinta-feira";
            break;
        case 5: 
            dia="Sexta-feira";
            break;
        case 6: 
            dia="Sábado";
            break;
        case 0: 
            dia="Domingo";
            break;
        }
        
    document.getElementById('principal').innerHTML = "<h2>Agenda do profissional "+nome_profissional+"</h2>";
    document.getElementById('tb1').innerHTML = "<tr><td><input type='button' id='ant' value='<=' onClick='diaAnterior();'/></td><td>"+dataShow+"</td><td>"+dia+"</td><td><input type='button' id='seg' value='=>' onClick='diaSeguinte();'/></td></tr>";

    }
    function diaAnterior(){
            //alert('dia ='+date);
            novaData.setDate(novaData.getDate()-1);
            _diadasemana = novaData.getDay();
            //alert('Dia anterior ='+novaData);
            prepararData(novaData);
            diaDaSemana(_diadasemana);
    }
    function diaSeguinte(){
            //alert('dia ='+date);
            novaData.setDate(novaData.getDate()+1);
            _diadasemana = novaData.getDay();
            //alert('Dia anterior ='+novaData);
            prepararData(novaData);
            diaDaSemana(_diadasemana);
    }
    

    
    console.log("chave = "+chave_profissional);
    console.log("nome = "+nome_profissional);
    
    
    
    
    var n=25;
    var hora=20;
    var min="00";
    var flag=0;
    var texto="";
    
    criarTabela();
    
    function criarTabela(){
        alert('criarTabela()');
        for(var i=26; i>0 ; i--){
            var tabela = document.getElementById('tabelaAgendaProfissional');
            var newRow = tabela.insertRow(0);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            
            if(hora<10){
                texto = '0'+hora+":"+min;
            }else{
                texto = hora+":"+min;
            }
            cell1.innerHTML = texto;
            cell2.innerHTML = "<input type='text' style='font-size: 14px' size='30' name='seg800' id='idseg800' placeholder='Cliente'>";
            cell3.innerHTML = "<select name='nameServico' id='select"+i+"' style='margin-left: 10px'><option>----------Servico----------</option></select></td></tr>";
            cell4.innerHTML = "<input type='button' id='btn"+i+"' style='margin-left: 10px' value = 'Registrar' onClick='agendar("+i+",select"+i+");'></button></td></tr>";
            
            //alert('id = select'+i);
            if(flag===0){
                flag=1;
                min="30";
                hora--;
            }else{
                flag=0;
                min="00";
            }
        }
    }
    
    
    
var arr = [];
var arr_espec_id = [];
var populateRef = firebase.database().ref('especialidades/');
populateRef.once('value', function(snapshot){
    snapshot.forEach(function (childSnapshot){
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    var arr1=childData.espec_name;
    pushArray(arr1);
    });
    carregarArray(arr);
});
    
function pushArray(itemDaLista){
    arr.push(itemDaLista);
    //alert('arr = '+arr)
 }

var sel = "";
populateOption();
function populateOption(){ 
    
}
        
	

function carregarArray(array){
        //alert('array ='+array);
    for(var n=26; n>0 ; n--){
        //alert('i ='+i);
        sel="select"+n;
        //alert('selection ='+sel);
        var select = document.getElementById(sel);
        for(var i = 0; i < array.length; i++){
            var option = document.createElement("OPTION");
            var txt = document.createTextNode(array[i]);
            option.appendChild(txt);
            option.setAttribute("value", arr[i]);
            select.insertBefore(option, select.lastChild);  
        }
        
    } 
}
      
function agendar(n, s){
    alert('o registro é o múmero '+n);
    var especiali = document.getElementById("select"+n).value;
    var especialidadeKey="";
    getEspecialidadeKey(especiali);
    alert('a seleção escolhida foi: '+especiali);
    alert('chave_profissional = '+chave_profissional);
    // -- CHAVE É O CÓDIGO DO PROFISSIONAL ---
    
    var database = firebase.database();
    
    var databaseRef = database.ref('agenda/'+chave_profissional);
    var agendaId = databaseRef.push().key;
    var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
    adicionarRef.update({
        agenda_id: agendaId,
        prof_id: chave_profissional,
        prof_nome: nome_profissional,
        agenda_horario: n,
        user_id: id_usuario,
        user_nome: nome_usuario,
        especialidade_nome: especiali
    });
}

function getEspecialidadeKey(espec_key){
    
}