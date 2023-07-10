    let chave_profissional = sessionStorage.getItem('chave_profissional');
    let nome_profissional = sessionStorage.getItem('nome_profissional');
    let valor = sessionStorage.getItem('valor');
    
    let nome_usuario = sessionStorage.getItem('nome_usuario');
    let id_usuario = sessionStorage.getItem('idcliente');
    
    let nome_especialidade = sessionStorage.getItem('nome_especialidade');
    let cor_especialidade = sessionStorage.getItem('cor_especialidade');
    let periodos = sessionStorage.getItem('periodos');
 
    var date = new Date();
    var novaData = new Date();
    var _diadasemana = novaData.getDay();
    var weakDay = 0;
    var flag=0;
    var dataFinal = new Date();
    
    var n=85;
    var agendaIdOrigem="";
    
    var hora=1;
    var minCounter=0;
    var min="";
 
    var flag=0;
    var flag45=0;
    var flagBancoAlterado=0;
    var texto="";
    
    var texto1="a";
    var texto2="a";
    var texto3="a";
    var texto4="a";
    var texto5="a";
    var texto6="a";
    var texto7="a";
    
    var mensagem="Quantidade de períodos insuficiente...";
    var mensagemFlag=0;
    
    prepararData(date);
    diaDaSemana(_diadasemana);
    
    criarTabela();
    
    checarDisponibilidade(weakDay);
    
    
    
    window.onload = function() {
        
        var database = firebase.database();
        var databaseRef = database.ref('agenda/');
        //alert("AQUI");
        databaseRef.on('value', function(snapshot){
            snapshot.forEach(function (childSnapshot){
                var childData = childSnapshot.val();
                ressetarTabela();
                checarDisponibilidade(weakDay);
                //buscarCompromissos();
            });
            //window.location.reload();
        });
    //buscarCompromissos();
//    flagBancoAlterado=0;
 /*   var database = firebase.database();
    var databaseRef = database.ref('agenda/');
    databaseRef.on('value', function(snapshot){
        snapshot.forEach(function (childSnapshot){
            var childData = childSnapshot.val();
            
            ressetarTabela();
            //checarDisponibilidade(weakDay);
            //buscarCompromissos();
            
//            
//            
	});
        //window.location.reload();
    }); */

    };
    
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
        dataFinal = new Date(_data);
        dataShow = d+'/'+m+'/'+y;
        document.getElementById("innerDataShow").innerHTML=dataShow;
        
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
    document.getElementById('principal').innerHTML = "<span style='font-size: 21px; margin-left: 50px;'>Profissional "+nome_profissional+": Incluindo "+nome_especialidade+" para cliente "+nome_usuario+".</span>";
    //document.getElementById('tb1').innerHTML = "<tr><td><input type='button' class='divBotao' id='ant' width='50' value='<=' onClick='diaAnterior();'/></td><td><h2>&nbsp;&nbsp;&nbsp;"+dataShow+"</h2></td><td width='120'>&nbsp;"+dia+"&nbsp;&nbsp;</td><td><input type='button' class='divBotao' id='seg' width='50' value='=>' onClick='diaSeguinte();'/></td><td><input type='button' class='divBotao' id='hj' value='Hoje' onClick='diaHoje();'/></td><td><input type='date' id='ideal' onchange='diaIdeal(); ' style='border-style: solid; border-radius: 10px; outline: none; height: 30px;'/></td></tr>";

    }
    function diaAnterior(){
            //alert('dia ='+date);
            var dataDeHoje = new Date();
            if(novaData<dataDeHoje){
                alert('nao é possível agendar em data anterior...');
            }else{
                //alert(novaData+' ≠ '+dataDeHoje);
                novaData.setDate(novaData.getDate()-1);
                document.getElementById('ant').disabled = false;
                _diadasemana = novaData.getDay();
                //alert('Dia anterior ='+novaData);
                prepararData(novaData);
                diaDaSemana(_diadasemana);

                //exibirTabelaCompleta();
                ressetarTabela();
                checarDisponibilidade(weakDay);
                //buscarCompromissos();
                
            }  
    }
    function diaSeguinte(){
            //alert('dia ='+date);
            novaData.setDate(novaData.getDate()+1);
            _diadasemana = novaData.getDay();
            //alert('Dia anterior ='+novaData);
            prepararData(novaData);
            diaDaSemana(_diadasemana);
            
            ressetarTabela();
            checarDisponibilidade(weakDay);
            //buscarCompromissos();
            
    }
    
    function diaHoje(){
            novaData= new Date();
            _diadasemana = novaData.getDay();
            prepararData(novaData);
            diaDaSemana(_diadasemana);
            
            ressetarTabela();
            checarDisponibilidade(weakDay);
            //buscarCompromissos();
            
    }
    
    function diaIdeal(){
        //alert('diaIdeal()');
        var ideal = document.getElementById('ideal').value;
        var diaIdeal = new Date(ideal);
        //alert('diaIdeal = '+diaIdeal);
        
        novaData= diaIdeal;
        var dataDeHoje = new Date();
        
        var anoAtual = dataDeHoje.getFullYear();
        var mesAtual = dataDeHoje.getMonth();
        var diaAtual = dataDeHoje.getDate();
        
        var anoDigitado = novaData.getFullYear();
        var mesDigitado = novaData.getMonth();
        var diaDigitado = novaData.getDate();
        flag=0;
        if(diaDigitado<diaAtual && mesDigitado<=mesAtual && anoDigitado<=anoAtual){
            alert('nao é possível agendar em data anterior...');
            flag=1;
        }
        if(mesDigitado<mesAtual && anoDigitado<=anoAtual && flag===0){
            alert('nao é possível agendar em data anterior...');
            flag=1;
        }
        if(flag===0){
            _diadasemana = novaData.getDay();
            prepararData(novaData);
            diaDaSemana(_diadasemana);

            document.getElementById('ideal').innerHTML=diaIdeal;

            ressetarTabela();
            checarDisponibilidade(weakDay);
            //buscarCompromissos();
            
        }
    }

    console.log("chave = "+chave_profissional);
    console.log("nome = "+nome_profissional);
    
    
    
    
    //var n=25;
    
    
    
    
    function criarTabela(){
        //alert('criarTabela()');
        for(var i=84; i>0 ; i--){
            var tabela = document.getElementById('tabelaAgendaProfissional');
            var newRow = tabela.insertRow(0);
            newRow.id="rowId"+i;
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            
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
            
            //cell1.innerHTML = "<p style='width: 100px;'"+texto+"</p>";
            //cell1.innerHTML = "<span style='width: 100px;'"+texto+"</span>";
            cell1.innerHTML = "<p style='width: 40px; font-size: 18px; margin-top: -5px; margin-bottom: -5px;'>"+texto+"</p>";
            cell2.innerHTML = "<p class='textoMenorC' style='font-size: 18px; margin-left: 30px' size='30' name='seg800' id='idTime"+i+"'></p>";
            cell3.innerHTML = "<p class='textoMenorC' style='font-size: 18px; margin-left: 30px' size='30' name='seg800' id='nome"+i+"'></p>";
            cell4.innerHTML = "<p style='width: 130px; margin-top: -12px;'></p><input type='button' class='divBotaoLista' id='btn"+i+"' style='margin-left: 10px;' value = 'Registrar' onClick='ordenarAgendar("+i+");'></button></td></tr>";
            cell5.innerHTML = "<p style='width: 130px; margin-top: -12px;'></p><input type='button' class='divBotaoLista' id='btnDel"+i+"' style='margin-left: 10px;' value = 'Excluir' onClick='ordenarExcluir("+i+");'></button></td></tr>";
            
            document.getElementById("btnDel"+i).style.display="none";
        }
    }
    
function ordenarAgendar(n){
    document.getElementById("btn"+n).style.display="none";
    var num = 85-n;
    //alert('num = '+num);
    agendar(num,n);
}
function ordenarExcluir(n){
    document.getElementById("btnDel"+n).style.display="none";
    var num = 85-n;
    //alert('num = '+num);
    excluir(num);
}

function agendar(n,i){
    if(periodos==="15 Minutos"){
        var database = firebase.database();
        var databaseRef = database.ref('agenda/'+chave_profissional);
        var agendaId = databaseRef.push().key;
        agendaIdOrigem=agendaId;
        var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
        adicionarRef.update({
            agenda_id: agendaId,
            agenda_id_origem: agendaIdOrigem,
            valor: valor,
            prof_id: chave_profissional,
            prof_nome: nome_profissional,
            agenda_horario: n,
            user_id: id_usuario,
            user_nome: nome_usuario,
            especialidade_nome: nome_especialidade,
            agenda_data: dataFinal,
            espec_cor: cor_especialidade,
            horario_origem: n
        });
        buscarCompromissos();
    }
    
    if(periodos==="30 Minutos"){
        
        var texto1 = document.getElementById('idTime'+(i+1)).innerHTML;
        
        if(texto1===""){
            var database = firebase.database();
            var databaseRef = database.ref('agenda/'+chave_profissional);
            var agendaId = databaseRef.push().key;
            agendaIdOrigem=agendaId;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                valor: valor,
                prof_id: chave_profissional,
                prof_nome: nome_profissional,
                agenda_horario: n,
                user_id: id_usuario,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-1,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-1))).style.display="none";
            buscarCompromissos();
        }else{
            alert(nome_especialidade+" necessita 2 períodos livres...");
            document.getElementById("btn"+(85-(n))).style.display="initial";
        }
    }
    
    if(periodos==="45 Minutos"){
        
        var texto1 = document.getElementById('idTime'+(i+1)).innerHTML;
        var texto2 = document.getElementById('idTime'+(i+2)).innerHTML;
        
        if(texto1==="" && texto2===""){
            var database = firebase.database();
            var databaseRef = database.ref('agenda/'+chave_profissional);
            var agendaId = databaseRef.push().key;
            agendaIdOrigem=agendaId;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                valor: valor,
                prof_id: chave_profissional,
                prof_nome: nome_profissional,
                agenda_horario: n,
                user_id: id_usuario,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-1,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-2,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-1))).style.display="none";
            buscarCompromissos();
        }else{
            alert(nome_especialidade+" necessita 3 períodos livres...");
            document.getElementById("btn"+(85-(n))).style.display="initial";
        }
    }
    
    if(periodos==="1 Hora"){
        
        var texto1 = document.getElementById('idTime'+(i+1)).innerHTML;
        var texto2 = document.getElementById('idTime'+(i+2)).innerHTML;
        var texto3 = document.getElementById('idTime'+(i+3)).innerHTML;
        
        if(texto1==="" && texto2==="" && texto3===""){
            var database = firebase.database();
            var databaseRef = database.ref('agenda/'+chave_profissional);
            var agendaId = databaseRef.push().key;
            agendaIdOrigem=agendaId;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                valor: valor,
                prof_id: chave_profissional,
                prof_nome: nome_profissional,
                agenda_horario: n,
                user_id: id_usuario,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-1,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-1))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-2,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-2))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-3,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-3))).style.display="none";
            buscarCompromissos();
        }else{
            alert(nome_especialidade+" necessita 4 períodos livres...");
            document.getElementById("btn"+(85-(n))).style.display="initial";
        }
    }
    if(periodos==="1 Hora e 30"){
        var texto1 = document.getElementById('idTime'+(i+1)).innerHTML;
        var texto2 = document.getElementById('idTime'+(i+2)).innerHTML;
        var texto3 = document.getElementById('idTime'+(i+3)).innerHTML;
        var texto4 = document.getElementById('idTime'+(i+4)).innerHTML;
        var texto5 = document.getElementById('idTime'+(i+5)).innerHTML;
        if(texto1==="" && texto2==="" && texto3==="" && texto4==="" && texto5===""){
            var database = firebase.database();
            var databaseRef = database.ref('agenda/'+chave_profissional);
            var agendaId = databaseRef.push().key;
            agendaIdOrigem=agendaId;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                valor: valor,
                prof_id: chave_profissional,
                prof_nome: nome_profissional,
                agenda_horario: n,
                user_id: id_usuario,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-1,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-1))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-2,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-2))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-3,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-3))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-4,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-4))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-5,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-5))).style.display="none";
            buscarCompromissos();
        }else{
            alert(nome_especialidade+" necessita 6 períodos livres...");
            document.getElementById("btn"+(85-(n))).style.display="initial";
        }
    }
    if(periodos==="2 Horas"){
        
        var texto1 = document.getElementById('idTime'+(i+1)).innerHTML;
        var texto2 = document.getElementById('idTime'+(i+2)).innerHTML;
        var texto3 = document.getElementById('idTime'+(i+3)).innerHTML;
        var texto4 = document.getElementById('idTime'+(i+4)).innerHTML;
        var texto5 = document.getElementById('idTime'+(i+5)).innerHTML;
        var texto6 = document.getElementById('idTime'+(i+6)).innerHTML;
        var texto7 = document.getElementById('idTime'+(i+7)).innerHTML;
        if(texto1==="" && texto2==="" && texto3==="" && texto4==="" && texto5==="" && texto6==="" && texto7===""){
            var database = firebase.database();
            var databaseRef = database.ref('agenda/'+chave_profissional);
            var agendaId = databaseRef.push().key;
            agendaIdOrigem=agendaId;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                valor: valor,
                prof_id: chave_profissional,
                prof_nome: nome_profissional,
                agenda_horario: n,
                user_id: id_usuario,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-1,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-1))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-2,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-2))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-3,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-3))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-4,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-4))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-5,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-5))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-6,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-6))).style.display="none";
            var agendaId = databaseRef.push().key;
            var adicionarRef = firebase.database().ref('agenda/'+chave_profissional+'/'+agendaId);
            adicionarRef.update({
                agenda_id: agendaId,
                agenda_id_origem: agendaIdOrigem,
                agenda_horario: n-7,
                user_nome: nome_usuario,
                especialidade_nome: nome_especialidade,
                agenda_data: dataFinal,
                espec_cor: cor_especialidade,
                horario_origem: n
            });
            document.getElementById("btnDel"+(85-(n-7))).style.display="none";
            buscarCompromissos();
        }else{
            alert(nome_especialidade+" necessita 8 períodos livres...");
            document.getElementById("btn"+(85-(n))).style.display="initial";
        }
    }
}



function buscarCompromissos(){
    // --- buscar compromissos do profissional e mostrar na tabela ---
    var database = firebase.database();
    var databaseRef = database.ref('agenda/'+chave_profissional);
    databaseRef.once('value', function(snapshot){
        snapshot.forEach(function (childSnapshot){
            var childData = childSnapshot.val();
            var data = new Date(childData.agenda_data);
//            alert(dataFinal.getFullYear());
//            alert(data.getFullYear());
            
            if(dataFinal.getDate() ===data.getDate() && dataFinal.getMonth()===data.getMonth() && dataFinal.getFullYear()===data.getFullYear()){
               document.getElementById('idTime'+(85-childData.agenda_horario)).innerHTML = childData.especialidade_nome;
               document.getElementById('idTime'+(85-childData.agenda_horario)).style='background-color:'+childData.espec_cor+'; margin-left: 30px; margin-top: 0px; margin-bottom: 0px; font_sixe: 18px;';
               document.getElementById('nome'+(85-childData.agenda_horario)).innerHTML = childData.user_nome;
               document.getElementById('nome'+(85-childData.agenda_horario)).style='background-color:'+childData.espec_cor+'; margin-left: 30px; margin-top: 0px; margin-bottom: 0px; font_sixe: 18px;';
               document.getElementById("btn"+(85-childData.agenda_horario)).style.display="none";
               document.getElementById("btnDel"+(85-childData.agenda_horario)).style.display="initial";
               if(childData.agenda_id===childData.agenda_id_origem){
                   document.getElementById("btnDel"+(85-childData.agenda_horario)).style.display="initial";
               }else{
                   //alert(childData.agenda_id+"==="+childData.agenda_id_origem);
                   document.getElementById("btnDel"+(85-childData.agenda_horario)).style.display="none";
                   document.getElementById("rowId"+(85-childData.agenda_horario)).style.display="none";
               }
               
            }
                                        
	});
    });
}

function ressetarTabela(){
    for(var i=84; i>0 ; i--){
        document.getElementById('idTime'+i).style="background-color: #FFFFFF; margin-left: 30px;";
        document.getElementById('idTime'+i).innerHTML = "";
        document.getElementById('nome'+i).style="background-color: #FFFFFF; margin-left: 30px;";
        document.getElementById('nome'+i).innerHTML = "";
        document.getElementById("btn"+i).style.display="initial";
        document.getElementById("btnDel"+i).style.display="none";
    }
}

function excluir(n){
    
    var database = firebase.database();
    var databaseRef = database.ref('agenda/'+chave_profissional);
    //alert('Dentro de excluir()');
    databaseRef.once('value', function(snapshot){
        snapshot.forEach(function (childSnapshot){
            //var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            var data = new Date(childData.agenda_data);
            //if(dataFinal.getDate() ===data.getDate() && dataFinal.getMonth()===data.getMonth() && dataFinal.getFullYear()===data.getFullYear()){
            if((dataFinal.getDate() ===data.getDate() && dataFinal.getMonth()===data.getMonth() && dataFinal.getFullYear()===data.getFullYear()) && childData.agenda_horario === n){
                var deleteRef = database.ref('agenda/'+chave_profissional+'/'+childData.agenda_id);
                deleteRef.remove();
            }
            if(((dataFinal.getDate() ===data.getDate() && dataFinal.getMonth()===data.getMonth() && dataFinal.getFullYear()===data.getFullYear()) && childData.agenda_horario === n)||((dataFinal.getDate() ===data.getDate() && dataFinal.getMonth()===data.getMonth() && dataFinal.getFullYear()===data.getFullYear()) && childData.horario_origem === n)){
                var deleteRef = database.ref('agenda/'+chave_profissional+'/'+childData.agenda_id);
                deleteRef.remove();
            }
	});
        ressetarTabela();
        checarDisponibilidade(weakDay);
        //buscarCompromissos();
        
    });
    
}



function checarDisponibilidade(weakDay){
    var database = firebase.database();
    var databaseRef = database.ref('profissional/');
    databaseRef.once('value', function(snapshot){
        snapshot.forEach(function (childSnapshot){
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            if(chave_profissional===childKey){
                switch (weakDay){
                    case 1:
                        if(childData.diaSeg){
                            document.getElementById('tabelaAgendaProfissional').style.display = "initial";
                            var WkIn = childData.diaSegWkIn; 
                            var WkOut = childData.diaSegWkOut; 
                            var BkIn = childData.diaSegBkIn; 
                            var BkOut = childData.diaSegBkOut;
                            //alert('childData.diaSegWkIn = '+WkIn);
                            //alert('childData.diaSegWkOut = '+WkOut);
                            //alert('childData.diaSegBkIn = '+BkIn);
                            //alert('childData.diaSegBkOut = '+BkOut);
                            acertarHorarios(WkIn, WkOut, BkIn, BkOut);
                        }else{
                            //alert(childData.nome_prof+' Não trabalha as segundas-feiras');
                            indisponibilizarHorarios();
                        }
                        break;
                    case 2:
                        if(childData.diaTer){
                            document.getElementById('tabelaAgendaProfissional').style.display = "initial";
                            var WkIn = childData.diaTerWkIn; 
                            var WkOut = childData.diaTerWkOut; 
                            var BkIn = childData.diaTerBkIn; 
                            var BkOut = childData.diaTerBkOut;
                            acertarHorarios(WkIn, WkOut, BkIn, BkOut);
                        }else{
                            indisponibilizarHorarios();
                        }
                        break;
                    case 3:
                        if(childData.diaQua){
                            document.getElementById('tabelaAgendaProfissional').style.display = "initial";
                            var WkIn = childData.diaQuaWkIn; 
                            var WkOut = childData.diaQuaWkOut; 
                            var BkIn = childData.diaQuaBkIn; 
                            var BkOut = childData.diaQuaBkOut;
                            acertarHorarios(WkIn, WkOut, BkIn, BkOut);
                        }else{
                            indisponibilizarHorarios();
                        }
                        break;
                    case 4:
                        if(childData.diaQui){
                            document.getElementById('tabelaAgendaProfissional').style.display = "initial";
                            var WkIn = childData.diaQuiWkIn; 
                            var WkOut = childData.diaQuiWkOut; 
                            var BkIn = childData.diaQuiBkIn; 
                            var BkOut = childData.diaQuiBkOut;
                            acertarHorarios(WkIn, WkOut, BkIn, BkOut);
                        }else{
                            indisponibilizarHorarios();
                        }
                        break;
                    case 5:
                        if(childData.diaSex){
                            document.getElementById('tabelaAgendaProfissional').style.display = "initial";
                            var WkIn = childData.diaSexWkIn; 
                            var WkOut = childData.diaSexWkOut; 
                            var BkIn = childData.diaSexBkIn; 
                            var BkOut = childData.diaSexBkOut;
                            acertarHorarios(WkIn, WkOut, BkIn, BkOut);
                        }else{
                            indisponibilizarHorarios();
                        }
                        break;
                    case 6:
                        if(childData.diaSab){
                            document.getElementById('tabelaAgendaProfissional').style.display = "initial";
                            var WkIn = childData.diaSabWkIn; 
                            var WkOut = childData.diaSabWkOut; 
                            var BkIn = childData.diaSabBkIn; 
                            var BkOut = childData.diaSabBkOut;
                            acertarHorarios(WkIn, WkOut, BkIn, BkOut);
                        }else{
                            //alert(childData.nome_prof+' Não trabalha aos sábados');
                            indisponibilizarHorarios();
                        }
                        break;
                    case 7:
                        if(childData.diaDom){
                            document.getElementById('tabelaAgendaProfissional').style.display = "initial";
                            var WkIn = childData.diaDomWkIn; 
                            var WkOut = childData.diaDomWkOut; 
                            var BkIn = childData.diaDomBkIn; 
                            var BkOut = childData.diaDomBkOut;
                            acertarHorarios(WkIn, WkOut, BkIn, BkOut);
                        }else{
                            indisponibilizarHorarios();
                        }
                        break;
                }
            }
	});
    });
}

function indisponibilizarHorarios(){
    //alert('indisponibilizarHorarios()');
    for(var i=1; i<85 ; i++){
        document.getElementById('tabelaAgendaProfissional').style.display = "none";
        //document.getElementById('idTime'+i).value = "INDISPONÍVEL";
    }
    
}

function acertarHorarios(WI, WO, BI, BO){
    //alert('WI = '+WI+', WO = '+WO+', BI = '+BI+' e BO = '+BO);
    for(var i=1; i<85; i++){
        //alert(WI);
        if (WI>i){
            //alert(WI+">"+i);
            document.getElementById('rowId'+i).style.display = "none";
        }else{
            document.getElementById('rowId'+i).style.display = "initial";
        }
        if (WO<i){
            document.getElementById('rowId'+i).style.display = "none";
        }//else{
            //document.getElementById('rowId'+i).style.display = "initial";
        //}
        if (BI<=i && BO>i){
            document.getElementById('btn'+i).style.display = "none";
            document.getElementById('btnDel'+i).style.display = "none";
            document.getElementById('idTime'+i).innerHTML="Horário de Intervalo";
            document.getElementById('idTime'+i).style="background-color: #FFC0CB; margin-left: 30px;";
            //document.getElementById('idTime'+i).style="background-color: #FFC0CB;";
        }
    }
    buscarCompromissos();
}
