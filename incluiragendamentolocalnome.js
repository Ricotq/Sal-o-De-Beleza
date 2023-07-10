var n=0;
var chaveEscolhida=[];
var nomeEscolhido=[];
var qtyDivs = 0;
var nome = document.getElementById('nome').value;

document.getElementById("nome").focus();

//var numTel = document.dodument.getElementById('telefone');
function buscar(){
    var nome = document.getElementById('nome').value;
    //alert('tel = '+numTel);
    //alert('qtyDivs = '+qtyDivs);
    if(qtyDivs>0){
        //alert('indo para limpar tabelas');
        limparTabela(qtyDivs);
    }
    testeDeTabelas(nome);
}
window.onload = function() {
      //initApp();
      testeDeTabelas();
};

var flag=0;
var flagUsuarioExiste=0;
var clienteId = [];
var clienteNome = [];
function testeDeTabelas(nome){
    
    qtyDivs=0;
    var i=0;
    var populateRef = firebase.database().ref('users/');
    //alert('populateRef  3');
    populateRef.once('value', function(snapshot){
        var postArray = snapshot.val();
            snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                //alert('childData = '+childData);
                //alert('childData.prof_id = '+childData.prof_id);
                //alert('childData.prof_name = '+childData.prof_name);
                //alert('url = '+childData.url);
                //clienteId.push(childData.user_id);
                //clienteNome.push(childData.user_name);
                //alert('profissionalId = '+profissionalId);
                //sessionStorage.setItem('idProfissional',childData.prof_id);
                if(nome===childData.user_name){
                    clienteId.push(childData.user_id);
                    clienteNome.push(childData.user_name);
                    populateTable(childData.user_name,childData.url,childData.user_id,i,childData.user_email,childData.user_tel);
                    i++;
                    qtyDivs++;
                    
                    flagUsuarioExiste=1;
                }else{
                    
                }
                    
               
                
                
	});
        flag++;
        if (flag>1 && flagUsuarioExiste===0){
            //alert('(nao é a primeira rodada) flag = '+flag+'   e (usuario nao encontrado) flagUsuarioExiste = '+flagUsuarioExiste);
            alert('Usuário não encontrado...');
            
        }else{
            flagUsuarioExiste=0;
        }
    });

}
function populateTable(nome, url, user_id, n, email, tel){
    
                var onediv = document.createElement('div');
                onediv.id="block"+n;
                
                document.getElementsByTagName('body')[0].appendChild(onediv);
                var insideDiv = document.getElementById("block"+n);
               
                insideDiv.innerHTML="<div class = 'blockClientes'> <table class='tabela' id='tb_imagem"+n+"'></div>";
                
                var table = document.getElementById("tb_imagem"+n);
                table.width='1200px';
                table.style="margin-left: 30px;";
                var row = table.insertRow();
                
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                //var cell4 = row.insertCell(2);
                
                var image = document.createElement("img");
                image.src = url;
                
                
                cell1.innerHTML="<td><img src='"+url+"' style='display: block; margin-top: 2px;' height='80' id='idimage'></td>";
                cell2.innerHTML ="<td style='background-color: blue;'><span style='font-size: 20px; width: 300px; margin-top: 5px;'>Nome: &nbsp&nbsp&nbsp"+ nome +"</span></br><span style='font-size: 16px; width: 300px; margin-top: 0px;'>Tel.::&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ tel +"</span></br><span style='font-size: 16px; width: 300px; margin-top: -20px;'>E-mail:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ email +"</span></td>";
                //cell3.innerHTML = "<td><input type='button' id='btnAlterarCliente' class='divBotao' value='Alterar' onClick='selecionar_prof("+n+");'/></td>";
                cell3.innerHTML = "<td><input type='button' id='btnAgendarCliente' class='divBotao' value='Agendar' onClick='agendar_cli("+n+");'/></td>";
}

function selecionar_prof(n, prof_id){
    //alert('prof_id em listarprof = '+n);
    //alert('profissionalId em listarprof = '+profissionalId[n]);
    sessionStorage.setItem('idusuario',clienteId[n]);
    window.location="alteraruser.html";
}
function agendar_cli(n, nome){
    //alert('prof_id em listarprof = '+n);
    //alert('profissionalId em listarprof = '+profissionalId[n]);
    sessionStorage.setItem('idcliente',clienteId[n]);
    sessionStorage.setItem('nome_usuario',clienteNome[n]);
    //alert('clienteNome = '+clienteNome);
    //alert("clienteId["+n+"] = "+clienteId[n]);
    //alert("clienteNome[n] = "+clienteNome[n]);
    window.location="incluiragendamentolocal.html";
}
function limparTabela(qtyDivs){
    //alert('Dentro de LimparTabelas');
    
        //ressetarEspecialidadesFiltradas();
        
            for(var i=0; i<qtyDivs; i++){
                //alert('i = '+i);
                var divDelete = document.getElementById("block"+i);
                divDelete.parentNode.removeChild(divDelete);
                clienteId = [];
                clienteNome = [];
                
        
    }
}

function pesquisarNome(){
    var nome = document.getElementById("nome").value;
    alert("pesquisarNome() "+nome);
}
    