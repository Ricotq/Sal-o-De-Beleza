var n=0;
var chaveEscolhida=[];
var nomeEscolhido=[];
var qtyDivs=0;
var image=[];

window.onload = function() {
      //initApp();
      testeDeTabelas();
};


var clienteId = [];
var clienteNome = [];
var clienteUrl = [];
function testeDeTabelas(){
    var i=0;
    //var ref = firebase.database().ref("agenda/"+agendaKey[i]).orderByChild('agenda_horario');
    var populateRef = firebase.database().ref('users/').orderByChild('user_name');
    //alert('populateRef  3');
    populateRef.once('value', function(snapshot){
        var postArray = snapshot.val();
            snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                
                clienteId.push(childData.user_id);
                clienteNome.push(childData.user_name);
                clienteUrl.push(childData.url);
                image.push(childData.image_name);
                populateTable(childData.user_name,childData.url,childData.user_id,i,childData.user_email,childData.user_tel,childData.user_nif);
                i++;
                qtyDivs++;
	});
    });

}
function populateTable(nome, url, user_id, n, email, tel, nif,imageName){
                
                var onediv = document.createElement('div');
                onediv.id="block"+n;
                
                document.getElementsByTagName('body')[0].appendChild(onediv);
                var insideDiv = document.getElementById("block"+n);
               
                insideDiv.innerHTML="<div class = 'blockClientes'> <table class='tabela' id='tb_imagem"+n+"'></div>";
                //insideDiv.innerHTML="<div class = 'blockClientes'> <table id='tb_imagem"+n+"'></div>";
                
                var table = document.getElementById("tb_imagem"+n);
//                table.width='1200px';
                table.width='1300px';
                table.style="margin-left: 30px;";
                var row = table.insertRow();
                
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                
                cell1.width='120px';
                cell2.width='400px';
                cell3.width='400px';
                cell4.width='100px';
                cell5.width='100px';
                cell6.width='100px';
                cell7.width='100px';
                
                var image = document.createElement("img");
                image.src = url;
                
                
                cell1.innerHTML="<td style='border: 2px #B22222 solid;'><span style='width: 400px;'></span><img src='"+url+"' style='display: block; margin-top: 2px;' height='80' id='idimage'></td>";
                cell2.innerHTML ="<td><span style='font-size: 20px; margin-top: 5px;'>Nome: &nbsp&nbsp&nbsp"+ nome +"</span></br><span style='font-size: 16px; margin-top: 0px;'>Tel.::&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ tel +"</span></td>";
                cell3.innerHTML ="<td><span style='font-size: 16px; margin-top: 5px;'>NIF: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ nif +"</span></br><span style='font-size: 16px; margin-top: -20px;'>E-mail:&nbsp&nbsp"+ email +"</span></td>";
                cell4.innerHTML = "<td><input type='button' id='btnRelatorioCliente' class='divBotao' value='Relatórios' onClick='relatorios_cli("+n+");'/></td>";
                cell5.innerHTML = "<td><input type='button' id='btnAlterarCliente' class='divBotao' value='Alterar' onClick='selecionar_cli("+n+");'/></td>";
                cell6.innerHTML = "<td><input type='button' class='divBotao' value='Agendar' onClick='agendar_cli("+n+");'/></td>";
                cell7.innerHTML = "<td><input type='button' id='btnAlterarCliente' class='divBotao' value='Excluir' onClick='excluir_cli("+n+");'/></td>";
                //cell4.innerHTML = "<td><input type='button' id='btnAlterarCliente' class='divBotao' value='Excluir' onClick='excluir_cli("+n+","+imageName+");'/></td>";
                
    //cell4.innerHTML = "<td><input type='button' id='btnAgendarCliente' class='divBotao' value='Agendar' onClick='agendar_cli("+n+");'/></td>";
}

function selecionar_cli(n, prof_id){
    //alert('prof_id em listarprof = '+n);
    //alert('profissionalId em listarprof = '+profissionalId[n]);
    sessionStorage.setItem('idcliente',clienteId[n]);
    window.location="alteraruser.html";
}
function relatorios_cli(n){
    //alert('prof_id em listarprof = '+n);
    //alert('profissionalId em listarprof = '+profissionalId[n]);
    sessionStorage.setItem('idcliente',clienteId[n]);
    sessionStorage.setItem('nome_usuario',clienteNome[n]);
    sessionStorage.setItem('urlcliente',clienteUrl[n]);
    window.location="relatorios.html";
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

function excluir_cli(n){
//    alert("image = "+image[n]);

    var r = confirm("Confirma a Exclusão?");
    if (r === true) {
          var database = firebase.database();
          var databaseRef = database.ref('users/'+clienteId[n]);
          databaseRef.remove();
          apagarTabelas();
          apagarImagem(image[n]);
    } 

}

function apagarTabelas(){
    for(var i=0; i<qtyDivs; i++){
        //alert('i = '+i);
        var divDelete = document.getElementById("block"+i);
        divDelete.parentNode.removeChild(divDelete);  
    }
    qtyDivs=0;
    clienteId = [];
    testeDeTabelas();
}

function apagarImagem(imagem){
    //alert("image = "+image);
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
    image=[];
}
