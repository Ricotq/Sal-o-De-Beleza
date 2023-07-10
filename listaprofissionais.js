var n=0;
var chaveEscolhida=[];
var nomeEscolhido=[];

window.onload = function() {
      procurarProfissional();
};


var profissionalId = [];

function populateTable(nome, url, prof_id, n){
    
                var onediv = document.createElement('div');
                onediv.id="block"+n;
                
                document.getElementsByTagName('body')[0].appendChild(onediv);
                var insideDiv = document.getElementById("block"+n);
               
                insideDiv.innerHTML="<div class = 'block'> <table class='tabela' id='tb_imagem"+n+"'></div>";
                
                var table = document.getElementById("tb_imagem"+n);
                table.width='840px';
                table.style="margin-left: 40px;";
                var row = table.insertRow();
                
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                
                cell1.width='300px';
                cell2.width='400px';
                cell3.width='400px';
                cell4.width='400px';
                
                var image = document.createElement("img");
                image.src = url;
                
                
                cell1.innerHTML="<td><img src='"+url+"' style='display: block; margin-left:100px;' height='200' width='280' id='idimage'></br><p style='width: 350px;'></p></td>";
                cell2.innerHTML ="<td><span width='200' style='font-size: 22px;'>"+ nome +"</span></br><p style='width: 350px;'></p></td>";
                cell3.innerHTML = "<td><input type='button' id='btnAgendal' class='divBotao' value='Agenda' onClick='agenda("+n+");'/></td>";
                cell4.innerHTML = "<td><input type='button' id='btnprofissional' class='divBotao' value='Alterar' onClick='selecionar_prof("+n+");'/></td>";
}

function selecionar_prof(n, prof_id){
    sessionStorage.setItem('idProfissional',profissionalId[n][1]);
    sessionStorage.setItem('nomeProfissional',profissionalId[n][0]);
    window.location="alterarprof.html";
}
function agenda(n, prof_id){
    sessionStorage.setItem('chave_profissional',profissionalId[n][1]);
    sessionStorage.setItem('nome_profissional',profissionalId[n][0]);
    window.location="agendaprofissionalX.html";
}

function procurarProfissional(){
    var i=0;
    var populateRef = firebase.database().ref('profissional/').orderByChild('nome_prof');
    populateRef.once('value', function(snapshot){
        var postArray = snapshot.val();
            snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                profissionalId.push([childData.nome_prof,childData.id_prof,i]);
                i++;
	});
        buscarUrl();
        
    });
}

function buscarUrl(){
    var populateRef = firebase.database().ref('posts/');
        
        populateRef.once('value', function(snapshot){
        snapshot.forEach(function (childSnapshot){
                var childData = childSnapshot.val();
                for(var i=0; i<profissionalId.length; i++){
                    if(childData.prof_id===profissionalId[i][1]){
                        profissionalId[i][3]=childData.url;
                    }
                }
            });
            criarTabela();
        });
        
}
function criarTabela(){
    for(var i=0; i<profissionalId.length; i++){
        populateTable(profissionalId[i][0], profissionalId[i][3],profissionalId[i][1], i);
    }
}