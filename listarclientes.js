var n=0;
var chaveEscolhida=[];
var nomeEscolhido=[];


window.onload = function() {
      //initApp();
      testeDeTabelas();
};


var clienteId = [];
var clienteNome = [];
function testeDeTabelas(){
    var i=0;
    var populateRef = firebase.database().ref('users/').orderByChild('user_name');
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
                clienteId.push(childData.user_id);
                clienteNome.push(childData.user_name);
                //alert('profissionalId = '+profissionalId);
                //sessionStorage.setItem('idProfissional',childData.prof_id);
                populateTable(childData.user_name,childData.url,childData.user_id,i,childData.user_email,childData.user_tel,childData.user_nif);
                i++;
	});
    });

}
function populateTable(nome, url, user_id, n, email, tel, nif){
    
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
                var cell4 = row.insertCell(3);
                
                cell1.width='120px';
                cell2.width='400px';
                cell3.width='400px';
                cell4.width='100px';
                
                var image = document.createElement("img");
                image.src = url;
                
                
                cell1.innerHTML="<td style='border: 2px #B22222 solid;'><span style='width: 400px;'></span><img src='"+url+"' style='display: block; margin-top: 2px;' height='80' id='idimage'></td>";
                cell2.innerHTML ="<td><span style='font-size: 20px; margin-top: 5px;'>Nome: &nbsp&nbsp&nbsp"+ nome +"</span></br><span style='font-size: 16px; margin-top: 0px;'>Tel.::&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ tel +"</span></td>";
                cell3.innerHTML ="<td><span style='font-size: 16px; margin-top: 5px;'>NIF: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ nif +"</span></br><span style='font-size: 16px; margin-top: -20px;'>E-mail:&nbsp&nbsp"+ email +"</span></td>";
                cell4.innerHTML = "<td><input type='button' id='btnAgendarCliente' class='divBotao' value='Agendar' onClick='agendar_cli("+n+");'/></td>";
}

function selecionar_cli(n, prof_id){
    //alert('prof_id em listarprof = '+n);
    //alert('profissionalId em listarprof = '+profissionalId[n]);
    sessionStorage.setItem('idcliente',clienteId[n]);
    window.location="alteraruser.html";
}
function agendar_cli(n, nome){
    //alert('prof_id em listarprof = '+n);
    //alert('profissionalId em listarprof = '+profissionalId[n]);
    sessionStorage.setItem('idcliente',clienteId[n]);
    sessionStorage.setItem('nome_usuario',clienteNome[n]);
    //alert("clienteId["+n+"] = "+clienteId[n]);
    //alert("clienteNome[n] = "+clienteNome[n]);
    window.location="incluiragendamentolocal.html";
}
    