var n=0;
var chaveEscolhida=[];
var nomeEscolhido=[];
var clientesArray=[];
var qtyDivs = 0;
var nome = document.getElementById('nome').value;

document.getElementById("nome").disabled = true;

function buscar(){
    var nome = document.getElementById('nome').value;
    
    limparTabela(qtyDivs);
    mostrarClientes(nome);
}
window.onload = function() {
      
      populateClientesArray();
      
      document.getElementById("nome").disabled = false;
      document.getElementById("nome").focus();
};

var flag=0;
var flagUsuarioExiste=0;
var clienteId = [];
var clienteNome = [];
function populateClientesArray(){
    //alert('populateClientesArray');
    qtyDivs=0;
    var i=0;
    var populateRef = firebase.database().ref('users/');
    //alert('populateRef  3');
    populateRef.once('value', function(snapshot){
        var postArray = snapshot.val();
            snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                
                clienteId.push(childData.user_id);
                clienteNome.push(childData.user_name);
                clientesArray.push([childData.user_name,childData.url,childData.user_id,i,childData.user_email,childData.user_tel,childData.user_nif,childData.user_tipo,childData.image_name]);
	});
       
    });
    //alert(clientesArray[0][0]);
    //acionarDigitacao();
}

function mostrarClientes(nome){
    //alert("mostrarClientes("+nome+")");
    for (var i=0; i<clientesArray.length; i++){
        //alert("clientesArray["+i+"] = "+clientesArray[i][0]);
        var text = clientesArray[i][0];
        //alert("text ="+text);
        var res = text.match(nome);
        //alert("res ="+res);
        if (res){
            //alert("contains "+res);
            populateTable(clientesArray[i][0],clientesArray[i][1],clientesArray[i][2],qtyDivs,clientesArray[i][4],clientesArray[i][5],clientesArray[i][6],clientesArray[i][7],i);
            qtyDivs++;
        }
    }
    
}

function populateTable(nome, url, user_id, q, email, tel, nif, tipo, n){
    //alert("nome = "+nome);
    //alert("url = "+url);
    //alert("user_id = "+user_id);
    //alert("n = "+n);
    //alert("email = "+email);
    //alert("tel = "+tel);
    //alert("nif = "+nif);
    //alert("tipo = "+tipo);
    
                var onediv = document.createElement('div');
                onediv.id="block"+q;
                
                document.getElementsByTagName('body')[0].appendChild(onediv);
                var insideDiv = document.getElementById("block"+q);
               
                insideDiv.innerHTML="<div class = 'blockClientes'> <table class='tabela' id='tb_imagem"+q+"'></div>";
                
                var table = document.getElementById("tb_imagem"+q);
                table.width='1200px';
                table.style="margin-left: 30px;";
                var row = table.insertRow();
                
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                
                cell1.width='120px';
                cell2.width='400px';
                cell3.width='100px';
                cell4.width='100px';
                cell5.width='100px';
                cell5.width='100px';
                
                
                var image = document.createElement("img");
                image.src = url;
                
                
                cell1.innerHTML="<td><img src='"+url+"' style='display: block; margin-top: 2px;' height='80' id='idimage'></td>";
                cell2.innerHTML ="<td style='background-color: blue;'><span style='font-size: 24px; margin-top: 5px;'>Nome: &nbsp"+ nome +"</span></br>\n\
                                    <span style='font-size: 16px; width: 300px; margin-top: 0px;'>Tel.::&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ tel +"</span></br>\n\
                                    <span style='font-size: 16px; width: 300px; margin-top: -20px;'>E-mail:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ email +"</span></br>\n\
                                    <span style='font-size: 16px; margin-top: -20px;'>NIF:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ nif +"</span></td>";
                cell3.innerHTML = "<td><input type='button' class='divBotao' value='Relatórios' onClick='relatorios_cli("+n+");'/></td>";
                cell4.innerHTML = "<td><input type='button' class='divBotao' value='Alterar' onClick='alterarCliente("+n+");'/></td>";
                cell5.innerHTML = "<td><input type='button' class='divBotao' value='Agendar' onClick='agendar_cli("+n+");'/></td>";
                cell6.innerHTML = "<td><input type='button' class='divBotao' value='Excluir' onClick='excluir_cli("+n+");'/></td>";
                
}

function alterarCliente(n){
    //alert('alterarCliente = '+n);
    //alert('idcliente = '+clientesArray[n][2]);
    sessionStorage.setItem('idcliente',clientesArray[n][2]);
    window.location="alteraruser.html";
}
function agendar_cli(n){
    //alert('prof_id em listarprof = '+n);
    //alert('profissionalId em listarprof = '+profissionalId[n]);
    sessionStorage.setItem('idcliente',clientesArray[n][2]);
    sessionStorage.setItem('nome_usuario',clientesArray[n][0]);
    //alert('clienteNome = '+clienteNome);
    //alert("clienteId["+n+"] = "+clienteId[n]);
    //alert("clienteNome[n] = "+clienteNome[n]);
    window.location="incluiragendamentolocal.html";
}
function limparTabela(qtyDivsoes){
    //alert('Dentro de LimparTabelas '+qtyDivsoes);
    
        //ressetarEspecialidadesFiltradas();
        
            for(var i=0; i<qtyDivsoes; i++){
                //alert('i = '+i);
                var divDelete = document.getElementById("block"+i);
                divDelete.parentNode.removeChild(divDelete);
                clienteId = [];
                clienteNome = [];
            }
            qtyDivs=0;
}

function excluir_cli(n){
    //alert("image = "+clientesArray[n][8]);

    var r = confirm("Confirma a Exclusão?");
    if (r === true) {
          var database = firebase.database();
          var databaseRef = database.ref('users/'+clientesArray[n][2]);
          databaseRef.remove();
          apagarImagem(clientesArray[n][8]);
          //alert("image = "+clientesArray[n][8]);
    } 

}

function apagarImagem(imagem){
    //alert("image = "+imagem);
    var storage = firebase.storage();
    var storageRef=storage.ref();
    var imageRef = storageRef.child('images/'+imagem);
            //alert('Passou por desertref');
        // Delete the file
    imageRef.delete().then(function() {
          // File deleted successfully
          //alert('Imagem Apagada...');
    }).catch(function(error) {
          // Uh-oh, an error occurred!
          //alert('Imagem NAO APAGOU...');
    });
    limparTabela(qtyDivs);
    limparClientesArray();
    
    populateClientesArray();
    mostrarClientes(nome);
}

function limparClientesArray(){
    clientesArray=[];
}

function relatorios_cli(n){
    //alert('prof_id em listarprof = '+n);
    //alert('profissionalId em listarprof = '+profissionalId[n]);
    sessionStorage.setItem('idcliente',clientesArray[n][2]);
    sessionStorage.setItem('nome_usuario',clientesArray[n][0]);
    sessionStorage.setItem('urlcliente',clientesArray[n][1]);
    window.location="relatorios.html";
} 