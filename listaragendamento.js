    let chave = sessionStorage.getItem('chave');
    let nome = sessionStorage.getItem('nome');
    
    var date = new Date();
    var novaData = new Date();
    var _diadasemana = novaData.getDay();
    
    prepararData(date);
    diaDaSemana(_diadasemana);
    
    function prepararData(_data){
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
        
    document.getElementById('principal').innerHTML = "<h2>Agenda do profissional "+nome+"</h2>";
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
    

    
    console.log("chave = "+chave);
    console.log("nome = "+nome);
    
    
    
    var n=25;
    var hora=20;
    var min="00";
    var flag=0;
    var texto="";
    
    criarTabela();
    
    function criarTabela(){
        
        for(var i=26; i>0 ; i--){
            var tabela = document.getElementById('tabelaAgendaProfissional');
            var newRow = tabela.insertRow(0);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            
            if(hora<10){
                texto = '0'+hora+":"+min;
            }else{
                texto = hora+":"+min;
            }
            cell1.innerHTML = texto;
            cell2.innerHTML = "<input type='text' style='font-size: 14px' size='30' name='seg800' id='idseg800' placeholder='Cliente'>";
            cell3.innerHTML = "<select name='nameServico' id='select"+i+"' style='margin-left: 10px'><option>----------Servico----------</option></select></td></tr>";
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
        
