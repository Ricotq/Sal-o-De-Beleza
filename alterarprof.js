//alert('alterarprof');

    //ESTE SCRIPT TEM COMO FINALIDADE BUSCAR DADOS DO PROFISSIONAL E MOSTRAR NA TELA
    var id_Profissional = sessionStorage.getItem('idProfissional');
    //alert("id_Profissional em alterarprof = "+id_Profissional);
var diaSeg=false;
var diaTer=false;
var diaQua=false;
var diaQui=false;
var diaSex=false;
var diaSab=false;
var diaDom=false;

var diaSegWkIn=0;
var diaTerWkIn=0;
var diaQuaWkIn=0;
var diaQuiWkIn=0;
var diaSexWkIn=0;
var diaSabWkIn=0;
var diaDomWkIn=0;

var diaSegWkOut=0;
var diaTerWkOut=0;
var diaQuaWkOut=0;
var diaQuiWkOut=0;
var diaSexWkOut=0;
var diaSabWkOut=0;
var diaDomWkOut=0;

var diaSegBkIn=0;
var diaTerBkIn=0;
var diaQuaBkIn=0;
var diaQuiBkIn=0;
var diaSexBkIn=0;
var diaSabBkIn=0;
var diaDomBkIn=0;

var diaSegBkOut=0;
var diaTerBkOut=0;
var diaQuaBkOut=0;
var diaQuiBkOut=0;
var diaSexBkOut=0;
var diaSabBkOut=0;
var diaDomBkOut=0;



    buscarDadosDoProfissional();
    function buscarDadosDoProfissional(){
        //alert('buscarDadosDoProfissional');
        var nomeprofissional = document.getElementById('prof_name');
        var nifprofissional = document.getElementById('prof_nif');
        var endprofissional = document.getElementById('prof_end');
        var telprofissional = document.getElementById('prof_tel');
        var emailprofissional = document.getElementById('prof_email');
        //nomeprofissional.innerHTML="jjjj";
        var profissionalRef = firebase.database().ref('profissional/');
        profissionalRef.once('value', function(snapshot){
            snapshot.forEach(function (childSnapshot){

                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();

                if(id_Profissional===childData.id_prof){
                    nomeprofissional.innerHTML=childData.nome_prof;
                    sessionStorage.setItem('nomeProfissional',childData.nome_prof);
                    sessionStorage.setItem('idProfissional',childData.id_prof);
                    nifprofissional.value=childData.prof_nif;
                    endprofissional.value=childData.prof_end;
                    telprofissional.value=childData.prof_tel;
                    emailprofissional.value=childData.prof_email;
                    
                    diaSeg=childData.diaSeg;
                    //alert('diaSeg = '+diaSeg);
                    diaTer=childData.diaTer;
                    diaQua=childData.diaQua;
                    diaQui=childData.diaQui;
                    diaSex=childData.diaSex;
                    diaSab=childData.diaSab;
                    diaDom=childData.diaDom;

                    diaSegWkIn=childData.diaSegWkIn;
                    //alert('diaSegWkIn = '+diaSegWkIn);
                    diaTerWkIn=childData.diaTerWkIn;
                    diaQuaWkIn=childData.diaQuaWkIn;
                    diaQuiWkIn=childData.diaQuiWkIn;
                    diaSexWkIn=childData.diaSexWkIn;
                    diaSabWkIn=childData.diaSabWkIn;
                    diaDomWkIn=childData.diaDomWkIn;

                    diaSegWkOut=childData.diaSegWkOut;
                    //alert('diaSegWkOut = '+diaSegWkOut);
                    diaTerWkOut=childData.diaTerWkOut;
                    diaQuaWkOut=childData.diaQuaWkOut;
                    diaQuiWkOut=childData.diaQuiWkOut;
                    diaSexWkOut=childData.diaSexWkOut;
                    diaSabWkOut=childData.diaSabWkOut;
                    diaDomWkOut=childData.diaDomWkOut;

                    diaSegBkIn=childData.diaSegBkIn;
                    diaTerBkIn=childData.diaTerBkIn;
                    diaQuaBkIn=childData.diaQuaBkIn;
                    diaQuiBkIn=childData.diaQuiBkIn;
                    diaSexBkIn=childData.diaSexBkIn;
                    diaSabBkIn=childData.diaSabBkIn;
                    diaDomBkIn=childData.diaDomBkIn;

                    diaSegBkOut=childData.diaSegBkOut;
                    diaTerBkOut=childData.diaTerBkOut;
                    diaQuaBkOut=childData.diaQuaBkOut;
                    diaQuiBkOut=childData.diaQuiBkOut;
                    diaSexBkOut=childData.diaSexBkOut;
                    diaSabBkOut=childData.diaSabBkOut;
                    diaDomBkOut=childData.diaDomBkOut;

                }
                especialidades.push(childData.espec_name);
            });mostrarHorarios();
        });
    }
    
    function mostrarHorarios(){
        if(diaSeg){
            Seg.checked=true;
        }else{
            document.getElementById('horaEntradaSeg').style.display = "none";
            document.getElementById('horaSaidaSeg').style.display = "none";
            document.getElementById('lbhoraEntradaSeg').style.display = "none";
            document.getElementById('lbhoraSaidaSeg').style.display = "none";
            document.getElementById('intEntradaSeg').style.display = "none";
            document.getElementById('intSaidaSeg').style.display = "none";
            document.getElementById('lbintEntradaSeg').style.display = "none";
            document.getElementById('lbintSaidaSeg').style.display = "none";
                    }
        if(diaTer){
            Ter.checked=true;
        }else{
            document.getElementById('horaEntradaTer').style.display = "none";
            document.getElementById('horaSaidaTer').style.display = "none";
            document.getElementById('lbhoraEntradaTer').style.display = "none";
            document.getElementById('lbhoraSaidaTer').style.display = "none";
            document.getElementById('intEntradaTer').style.display = "none";
            document.getElementById('intSaidaTer').style.display = "none";
            document.getElementById('lbintEntradaTer').style.display = "none";
            document.getElementById('lbintSaidaTer').style.display = "none";
        }
        if(diaQua){
            Qua.checked=true;
        }else{
            document.getElementById('horaEntradaQua').style.display = "none";
            document.getElementById('horaSaidaQua').style.display = "none";
            document.getElementById('lbhoraEntradaQua').style.display = "none";
            document.getElementById('lbhoraSaidaQua').style.display = "none";
            document.getElementById('intEntradaQua').style.display = "none";
            document.getElementById('intSaidaQua').style.display = "none";
            document.getElementById('lbintEntradaQua').style.display = "none";
            document.getElementById('lbintSaidaQua').style.display = "none";
        }
        if(diaQui){
            Qui.checked=true;
        }else{
            document.getElementById('horaEntradaQui').style.display = "none";
            document.getElementById('horaSaidaQui').style.display = "none";
            document.getElementById('lbhoraEntradaQui').style.display = "none";
            document.getElementById('lbhoraSaidaQui').style.display = "none";
            document.getElementById('intEntradaQui').style.display = "none";
            document.getElementById('intSaidaQui').style.display = "none";
            document.getElementById('lbintEntradaQui').style.display = "none";
            document.getElementById('lbintSaidaQui').style.display = "none";
        }
        if(diaSex){
            Sex.checked=true;
        }else{
            document.getElementById('horaEntradaSex').style.display = "none";
            document.getElementById('horaSaidaSex').style.display = "none";
            document.getElementById('lbhoraEntradaSex').style.display = "none";
            document.getElementById('lbhoraSaidaSex').style.display = "none";
            document.getElementById('intEntradaSex').style.display = "none";
            document.getElementById('intSaidaSex').style.display = "none";
            document.getElementById('lbintEntradaSex').style.display = "none";
            document.getElementById('lbintSaidaSex').style.display = "none";
        }
        if(diaSab){
            Sab.checked=true;
        }else{
            document.getElementById('horaEntradaSab').style.display = "none";
            document.getElementById('horaSaidaSab').style.display = "none";
            document.getElementById('lbhoraEntradaSab').style.display = "none";
            document.getElementById('lbhoraSaidaSab').style.display = "none";
            document.getElementById('intEntradaSab').style.display = "none";
            document.getElementById('intSaidaSab').style.display = "none";
            document.getElementById('lbintEntradaSab').style.display = "none";
            document.getElementById('lbintSaidaSab').style.display = "none";
        }
        if(diaDom){
            Dom.checked=true;
        }else{
            document.getElementById('horaEntradaDom').style.display = "none";
            document.getElementById('horaSaidaDom').style.display = "none";
            document.getElementById('lbhoraEntradaDom').style.display = "none";
            document.getElementById('lbhoraSaidaDom').style.display = "none";
            document.getElementById('intEntradaDom').style.display = "none";
            document.getElementById('intSaidaDom').style.display = "none";
            document.getElementById('lbintEntradaDom').style.display = "none";
            document.getElementById('lbintSaidaDom').style.display = "none";
        }
        
        document.getElementById('horaEntradaSeg').value = diaSegWkIn;
        document.getElementById('horaSaidaSeg').value = diaSegWkOut;
        document.getElementById('intEntradaSeg').value = diaSegBkIn;
        document.getElementById('intSaidaSeg').value = diaSegBkOut;
        
        document.getElementById('horaEntradaTer').value = diaTerWkIn;
        document.getElementById('horaSaidaTer').value = diaTerWkOut;
        document.getElementById('intEntradaTer').value = diaTerBkIn;
        document.getElementById('intSaidaTer').value = diaTerBkOut;
        
        document.getElementById('horaEntradaQua').value = diaQuaWkIn;
        document.getElementById('horaSaidaQua').value = diaQuaWkOut;
        document.getElementById('intEntradaQua').value = diaQuaBkIn;
        document.getElementById('intSaidaQua').value = diaQuaBkOut;
        
        document.getElementById('horaEntradaQui').value = diaQuiWkIn;
        document.getElementById('horaSaidaQui').value = diaQuiWkOut;
        document.getElementById('intEntradaQui').value = diaQuiBkIn;
        document.getElementById('intSaidaQui').value = diaQuiBkOut;
        
        document.getElementById('horaEntradaSex').value = diaSexWkIn;
        document.getElementById('horaSaidaSex').value = diaSexWkOut;
        document.getElementById('intEntradaSex').value = diaSexBkIn;
        document.getElementById('intSaidaSex').value = diaSexBkOut;
        
        document.getElementById('horaEntradaSab').value = diaSabWkIn;
        document.getElementById('horaSaidaSab').value = diaSabWkOut;
        document.getElementById('intEntradaSab').value = diaSabBkIn;
        document.getElementById('intSaidaSab').value = diaSabBkOut;
        
        document.getElementById('horaEntradaDom').value = diaDomWkIn;
        document.getElementById('horaSaidaDom').value = diaDomWkOut;
        document.getElementById('intEntradaDom').value = diaDomBkIn;
        document.getElementById('intSaidaDom').value = diaDomBkOut;
        }

    var geteArrayspecialidadesInicial=[];
    var geteArrayspecialidadesFinal=[];
    var getcounter = 0;
    //buscar chave dentro da chave "especialidades" e construir array.
    buscarEspecialidades();
    function buscarEspecialidades(){
        //alert('buscarespec');
        var populateRef = firebase.database().ref('especialidades/');
        
        //alert('buscarespec1');
        populateRef.once('value', function(snapshot){
            snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();

                //inserirCheckBox(childData.espec_name,i);
                //alert('childData.prof_name = '+childData.espec_id);
                //alert('getcounter = '+getcounter);
                getcounter++;
                //**** incluir [0] no final do array para indicar checkStatus Final****
                geteArrayspecialidadesInicial.push([[getcounter],[childData.espec_name],[childData.espec_id],[],[]]);
                //geteArrayspecialidadesFinal.push([[getcounter],[childData.espec_name],[childData.espec_id],[0]]);

            });;
            //alert('getespecialidades = '+getespecialidades);
            //alert('getespecialidades[] = '+getespecialidades[7][0]);
            //buscar especialidade do profissional
            buscarEspecialidadeDoProfissional();
            
        });
    }
    function buscarEspecialidadeDoProfissional(){
        //alert('getespecialidades[] = '+getespecialidades[7]);
        for(var i=0; i<geteArrayspecialidadesInicial.length; i++){
            inserirCkeckMarcs(i);
        }
        
        
    }
    
    function inserirCkeckMarcs(n){
        
        
        //alert("getespecialidades["+n+"] = "+getespecialidades[n][2]);
            var populateRef = firebase.database().ref("especialidades/"+geteArrayspecialidadesInicial[n][2]);
            populateRef.once('value', function(snapshot){
            snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                
                if(id_Profissional===childData.prof_id){
                    var num =n+1;
                    var cbcf = document.getElementById('check'+num);
                     cbcf.checked=true;
                     //alert(n+' em IF = '+n);
                     geteArrayspecialidadesInicial[n][3]=1;
                     //alert('especialidades = '+geteArrayspecialidadesInicial);
                }
            });;
        });
    }


