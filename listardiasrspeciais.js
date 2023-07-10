var n=0;
var chaveEscolhida=[];
var nomeEscolhido=[];
var dataShow="";

var qtyDivs=0;

var deleteKey="";
var imagemParaApagar ="";

var hoje = new Date();
var diaDoEvento=new Date();
hoje.setDate(hoje.getDate()-1);
//alert(hoje);


window.onload = function() {
      procurarDiaEspecial();
};


var diaEspecialId = [];

function populateTable(nome, url, prof_id, n, duracao, dataEvento, valor){
    
                qtyDivs++;
    
                var onediv = document.createElement('div');
                onediv.id="block"+n;
                
                document.getElementsByTagName('body')[0].appendChild(onediv);
                var insideDiv = document.getElementById("block"+n);
               
                insideDiv.innerHTML="<div class = 'block'> <table class='tabela' id='tb_imagem"+n+"'></div>";
                
                var table = document.getElementById("tb_imagem"+n);
                table.width='1240px';
                table.style="margin-left: 40px;";
                var row = table.insertRow();
                
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                
                cell2.width='500px';
                cell3.width='10px';
                //cell4.padding='10px';
                
                var image = document.createElement("img");
                image.src = url;
                
                
                cell1.innerHTML="<td><img src='"+url+"' style='display: block' height='200' width='280' id='idimage'></td>";
                cell2.innerHTML ="<td><span style='font-size: 26px;'>"+ nome +"</span></br><span style='font-size: 26px;'>Data: "+ dataShow +"</span></br><span style='font-size: 18px;'>Duração: "+ duracao +"</span></br><span style='font-size: 18px;'>Valor: €"+ valor +"</span></td>";
                cell3.innerHTML = "<td><input type='button' id='btnAgendal' class='divBotaoDiaEspecial' value='Listar Horários' onClick='agenda("+n+");'/></td>";
                cell4.innerHTML = "<td><input type='button' id='btnAlterar' class='divBotao' value='Alterar' onClick='alterar("+n+");'/></td>";
                cell5.innerHTML = "<td><input type='button' id='btnDel' class='divBotao' value='Deletar' onClick='deletar("+n+");'/></td>";
}

function selecionar_prof(n, prof_id){
    sessionStorage.setItem('idProfissional',diaEspecialId[n][1]);
    window.location="alterarprof.html";
}
function agenda(n, prof_id){
    sessionStorage.setItem('diaEspecial',diaEspecialId[n][0]);
    sessionStorage.setItem('dataDiaEspecial',diaEspecialId[n][5]);
    //sessionStorage.setItem('nome_profissional',diaEspecialId[n][0]);
    window.location="agendaDiaEspecialLista.html";
}

function procurarDiaEspecial(){
    var i=0;
    var populateRef = firebase.database().ref('eventos/');
    populateRef.once('value', function(snapshot){
        var postArray = snapshot.val();
            snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                diaDoEvento=new Date(childData.data_evento);
                deleteKey=childKey;
                imagemParaApagar=childData.image_name;
                //alert(diaDoEvento);
                //if(hoje<diaDoEvento){
                    //alert(childData.data_evento);
                    diaEspecialId.push([childData.nome_evento,childKey,i,childData.url,childData.duracao,childData.data_evento,childData.valor]);
                
//                }else{
//                    var deleteRef = firebase.database().ref('eventos/'+childKey);
//                    deleteRef.remove();
//                    apagarImagem(childData.image_name);
//                    deleteKey=childKey;
//                    imagemParaApagar=childData.image_name;
//                }
                i++;
	});
        //buscarUrl();
        criarTabela();
    });
}

function buscarUrl(){
    var populateRef = firebase.database().ref('posts/');
        
        populateRef.once('value', function(snapshot){
        snapshot.forEach(function (childSnapshot){
                var childData = childSnapshot.val();
                for(var i=0; i<diaEspecialId.length; i++){
                    if(childData.prof_id===profissionalId[i][1]){
                        diaEspecialId[i][3]=childData.url;
                    }
                }
            });
            criarTabela();
            
        });
        
}
function criarTabela(){
    //alert(diaEspecialId);
    for(var i=0; i<diaEspecialId.length; i++){
        prepararData(diaEspecialId[i][5]);
        populateTable(diaEspecialId[i][0], diaEspecialId[i][3],diaEspecialId[i][1], i,diaEspecialId[i][4],diaEspecialId[i][5],diaEspecialId[i][6]);
    }
}

function alterar(n){
    sessionStorage.setItem('diaEspecial',diaEspecialId[n][0]);
    sessionStorage.setItem('eventoId',diaEspecialId[n][1]);
    sessionStorage.setItem('eventoUrl',diaEspecialId[n][3]);
    
    window.location="alterarDiaEspecial.html";
}

function prepararData(data){
        //alert('prepararData(date): '+data);
        var date = new Date(data);
        var d = date.getDate();
        var m = date.getMonth()+1;
        var y = date.getFullYear();
        if(d<10){
             d = '0'+d;
        }
        if(m<10){
            m='0'+m;
        }
        dataShow = d+'/'+m+'/'+y;
        //document.getElementById("innerDataShow").innerHTML=dataShow;
        
    }
    
    function apagarImagem(nome){
        //alert(nome);
        var storage = firebase.storage();
        var storageRef=storage.ref();
        var imageRef = storageRef.child('images/'+nome);
        imageRef.delete().then(function() {
          // File deleted successfully
          //alert('Imagem Apagada...');
        }).catch(function(error) {
          // Uh-oh, an error occurred!
          //alert('Imagem NAO APAGOU...');
        });
    }
    
    function deletar(n){
        //alert("deletar "+n);
        var deleteRef = firebase.database().ref('eventos/'+deleteKey);
        deleteRef.remove();
        apagarImagem(imagemParaApagar);
        apagarDivs();
        procurarDiaEspecial();
    }
    
    function apagarDivs(){
        alert("qtyDivs = "+qtyDivs);
        for(var i=0; i<qtyDivs; i++){
            document.getElementById("block"+i).remove();
            diaEspecialId=[];
        }
    }
    
