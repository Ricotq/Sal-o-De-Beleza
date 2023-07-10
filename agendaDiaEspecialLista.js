    let chave_profissional = sessionStorage.getItem('chave_profissional');
    let nome_profissional = sessionStorage.getItem('nome_profissional');
    
    let nome_usuario = sessionStorage.getItem('nome_usuario');
    let id_usuario = sessionStorage.getItem('idcliente');
    
    let nome_especialidade = sessionStorage.getItem('nome_especialidade');
    let cor_especialidade = sessionStorage.getItem('cor_especialidade');
    let periodos = sessionStorage.getItem('periodos');
    
    let diaEspecial = sessionStorage.getItem('diaEspecial');
    let dataDiaEspecial = sessionStorage.getItem('dataDiaEspecial');
    //alert("dataDiaEspecial = "+dataDiaEspecial);
 
    var date = new Date();
    var novaData = new Date();
    
    var weakDay = 0;
    var flag=0;
    var dia = "";
    
    var dataDoEvento="";
    var horaInicio=0;
    var horaTermino=0;
    var duracao="";
    var valor=0;
    
    var tipoDesconto=0;
    
    var compareceu1=false;
    var compareceu2=false;
    var compareceu3=false;
    var compareceu4=false;
    var compareceu5=false;
    var compareceu6=false;
    var compareceu7=false;
    var compareceu8=false;
    var compareceu9=false;
    var compareceu10=false;
    var compareceu11=false;
    var compareceu12=false;
    var compareceu13=false;
    var compareceu14=false;
    var compareceu15=false;
    var compareceu16=false;
    var compareceu17=false;
    var compareceu18=false;
    var compareceu19=false;
    var compareceu20=false;
    var compareceu21=false;
    var compareceu22=false;
    var compareceu23=false;
    var compareceu24=false;
    var compareceu25=false;
    var compareceu26=false;
    var compareceu27=false;
    var compareceu28=false;
    var compareceu29=false;
    var compareceu30=false;
    var compareceu31=false;
    var compareceu32=false;
    var compareceu33=false;
    var compareceu34=false;
    var compareceu35=false;
    var compareceu36=false;
    var compareceu37=false;
    var compareceu38=false;
    var compareceu39=false;
    var compareceu40=false;
    var compareceu41=false;
    var compareceu42=false;
    var compareceu43=false;
    var compareceu44=false;
    var compareceu45=false;
    var compareceu46=false;
    var compareceu47=false;
    var compareceu48=false;
    var compareceu49=false;
    var compareceu50=false;
    var compareceu51=false;
    var compareceu52=false;
    var compareceu53=false;
    var compareceu54=false;
    var compareceu55=false;
    var compareceu56=false;
    var compareceu57=false;
    var compareceu58=false;
    var compareceu59=false;
    var compareceu60=false;
    var compareceu61=false;
    var compareceu62=false;
    var compareceu63=false;
    var compareceu64=false;
    var compareceu65=false;
    var compareceu66=false;
    var compareceu67=false;
    var compareceu68=false;
    var compareceu69=false;
    var compareceu70=false;
    var compareceu71=false;
    var compareceu72=false;
    var compareceu73=false;
    var compareceu74=false;
    var compareceu75=false;
    var compareceu76=false;
    var compareceu77=false;
    var compareceu78=false;
    var compareceu79=false;
    var compareceu80=false;
    var compareceu81=false;
    var compareceu82=false;
    var compareceu83=false;
    var compareceu84=false;
    
    var pagou1=false;
    var pagou2=false;
    var pagou3=false;
    var pagou4=false;
    var pagou5=false;
    var pagou6=false;
    var pagou7=false;
    var pagou8=false;
    var pagou9=false;
    var pagou10=false;
    var pagou11=false;
    var pagou12=false;
    var pagou13=false;
    var pagou14=false;
    var pagou15=false;
    var pagou16=false;
    var pagou17=false;
    var pagou18=false;
    var pagou19=false;
    var pagou20=false;
    var pagou21=false;
    var pagou22=false;
    var pagou23=false;
    var pagou24=false;
    var pagou25=false;
    var pagou26=false;
    var pagou27=false;
    var pagou28=false;
    var pagou29=false;
    var pagou30=false;
    var pagou31=false;
    var pagou32=false;
    var pagou33=false;
    var pagou34=false;
    var pagou35=false;
    var pagou36=false;
    var pagou37=false;
    var pagou38=false;
    var pagou39=false;
    var pagou40=false;
    var pagou41=false;
    var pagou42=false;
    var pagou43=false;
    var pagou44=false;
    var pagou45=false;
    var pagou46=false;
    var pagou47=false;
    var pagou48=false;
    var pagou49=false;
    var pagou50=false;
    var pagou51=false;
    var pagou52=false;
    var pagou53=false;
    var pagou54=false;
    var pagou55=false;
    var pagou56=false;
    var pagou57=false;
    var pagou58=false;
    var pagou59=false;
    var pagou60=false;
    var pagou61=false;
    var pagou62=false;
    var pagou63=false;
    var pagou64=false;
    var pagou65=false;
    var pagou66=false;
    var pagou67=false;
    var pagou68=false;
    var pagou69=false;
    var pagou70=false;
    var pagou71=false;
    var pagou72=false;
    var pagou73=false;
    var pagou74=false;
    var pagou75=false;
    var pagou76=false;
    var pagou77=false;
    var pagou78=false;
    var pagou79=false;
    var pagou80=false;
    var pagou81=false;
    var pagou82=false;
    var pagou83=false;
    var pagou84=false;
    
    var valorFinal1=0;
    var valorFinal2=0;
    var valorFinal3=0;
    var valorFinal4=0;
    var valorFinal5=0;
    var valorFinal6=0;
    var valorFinal7=0;
    var valorFinal8=0;
    var valorFinal9=0;
    var valorFinal10=0;
    var valorFinal11=0;
    var valorFinal12=0;
    var valorFinal13=0;
    var valorFinal14=0;
    var valorFinal15=0;
    var valorFinal16=0;
    var valorFinal17=0;
    var valorFinal18=0;
    var valorFinal19=0;
    var valorFinal20=0;
    var valorFinal21=0;
    var valorFinal22=0;
    var valorFinal23=0;
    var valorFinal24=0;
    var valorFinal25=0;
    var valorFinal26=0;
    var valorFinal27=0;
    var valorFinal28=0;
    var valorFinal29=0;
    var valorFinal30=0;
    var valorFinal31=0;
    var valorFinal32=0;
    var valorFinal33=0;
    var valorFinal34=0;
    var valorFinal35=0;
    var valorFinal36=0;
    var valorFinal37=0;
    var valorFinal38=0;
    var valorFinal39=0;
    var valorFinal40=0;
    var valorFinal41=0;
    var valorFinal42=0;
    var valorFinal43=0;
    var valorFinal44=0;
    var valorFinal45=0;
    var valorFinal46=0;
    var valorFinal47=0;
    var valorFinal48=0;
    var valorFinal49=0;
    var valorFinal50=0;
    var valorFinal51=0;
    var valorFinal52=0;
    var valorFinal53=0;
    var valorFinal54=0;
    var valorFinal55=0;
    var valorFinal56=0;
    var valorFinal57=0;
    var valorFinal58=0;
    var valorFinal59=0;
    var valorFinal60=0;
    var valorFinal61=0;
    var valorFinal62=0;
    var valorFinal63=0;
    var valorFinal64=0;
    var valorFinal65=0;
    var valorFinal66=0;
    var valorFinal67=0;
    var valorFinal68=0;
    var valorFinal69=0;
    var valorFinal70=0;
    var valorFinal71=0;
    var valorFinal72=0;
    var valorFinal73=0;
    var valorFinal74=0;
    var valorFinal75=0;
    var valorFinal76=0;
    var valorFinal77=0;
    var valorFinal78=0;
    var valorFinal79=0;
    var valorFinal80=0;
    var valorFinal81=0;
    var valorFinal82=0;
    var valorFinal83=0;
    var valorFinal84=0;
    
    var valorDesconto1=0;
    var valorDesconto2=0;
    var valorDesconto3=0;
    var valorDesconto4=0;
    var valorDesconto5=0;
    var valorDesconto6=0;
    var valorDesconto7=0;
    var valorDesconto8=0;
    var valorDesconto9=0;
    var valorDesconto10=0;
    var valorDesconto11=0;
    var valorDesconto12=0;
    var valorDesconto13=0;
    var valorDesconto14=0;
    var valorDesconto15=0;
    var valorDesconto16=0;
    var valorDesconto17=0;
    var valorDesconto18=0;
    var valorDesconto19=0;
    var valorDesconto20=0;
    var valorDesconto21=0;
    var valorDesconto22=0;
    var valorDesconto23=0;
    var valorDesconto24=0;
    var valorDesconto25=0;
    var valorDesconto26=0;
    var valorDesconto27=0;
    var valorDesconto28=0;
    var valorDesconto29=0;
    var valorDesconto30=0;
    var valorDesconto31=0;
    var valorDesconto32=0;
    var valorDesconto33=0;
    var valorDesconto34=0;
    var valorDesconto35=0;
    var valorDesconto36=0;
    var valorDesconto37=0;
    var valorDesconto38=0;
    var valorDesconto39=0;
    var valorDesconto40=0;
    var valorDesconto41=0;
    var valorDesconto42=0;
    var valorDesconto43=0;
    var valorDesconto44=0;
    var valorDesconto45=0;
    var valorDesconto46=0;
    var valorDesconto47=0;
    var valorDesconto48=0;
    var valorDesconto49=0;
    var valorDesconto50=0;
    var valorDesconto51=0;
    var valorDesconto52=0;
    var valorDesconto53=0;
    var valorDesconto54=0;
    var valorDesconto55=0;
    var valorDesconto56=0;
    var valorDesconto57=0;
    var valorDesconto58=0;
    var valorDesconto59=0;
    var valorDesconto60=0;
    var valorDesconto61=0;
    var valorDesconto62=0;
    var valorDesconto63=0;
    var valorDesconto64=0;
    var valorDesconto65=0;
    var valorDesconto66=0;
    var valorDesconto67=0;
    var valorDesconto68=0;
    var valorDesconto69=0;
    var valorDesconto70=0;
    var valorDesconto71=0;
    var valorDesconto72=0;
    var valorDesconto73=0;
    var valorDesconto74=0;
    var valorDesconto75=0;
    var valorDesconto76=0;
    var valorDesconto77=0;
    var valorDesconto78=0;
    var valorDesconto79=0;
    var valorDesconto80=0;
    var valorDesconto81=0;
    var valorDesconto82=0;
    var valorDesconto83=0;
    var valorDesconto84=0;
    
    dataRec1="";
    dataRec2="";
    dataRec3="";
    dataRec4="";
    dataRec5="";
    dataRec6="";
    dataRec7="";
    dataRec8="";
    dataRec9="";
    dataRec10="";
    dataRec11="";
    dataRec12="";
    dataRec13="";
    dataRec14="";
    dataRec15="";
    dataRec16="";
    dataRec17="";
    dataRec18="";
    dataRec19="";
    dataRec20="";
    dataRec21="";
    dataRec22="";
    dataRec23="";
    dataRec24="";
    dataRec25="";
    dataRec26="";
    dataRec27="";
    dataRec28="";
    dataRec29="";
    dataRec30="";
    dataRec31="";
    dataRec32="";
    dataRec33="";
    dataRec34="";
    dataRec35="";
    dataRec36="";
    dataRec37="";
    dataRec38="";
    dataRec39="";
    dataRec40="";
    dataRec41="";
    dataRec42="";
    dataRec43="";
    dataRec44="";
    dataRec45="";
    dataRec46="";
    dataRec47="";
    dataRec48="";
    dataRec49="";
    dataRec50="";
    dataRec51="";
    dataRec52="";
    dataRec53="";
    dataRec54="";
    dataRec55="";
    dataRec56="";
    dataRec57="";
    dataRec58="";
    dataRec59="";
    dataRec60="";
    dataRec61="";
    dataRec62="";
    dataRec63="";
    dataRec64="";
    dataRec65="";
    dataRec66="";
    dataRec67="";
    dataRec68="";
    dataRec69="";
    dataRec70="";
    dataRec71="";
    dataRec72="";
    dataRec73="";
    dataRec74="";
    dataRec75="";
    dataRec76="";
    dataRec77="";
    dataRec78="";
    dataRec79="";
    dataRec80="";
    dataRec81="";
    dataRec82="";
    dataRec83="";
    dataRec84="";
    
    
    
    var eventoKey="";
    
    var n=25;
    var hora=1;
    var flag=0;
    var texto="";
    
    var minCounter=0;
    var min="";
    var flag45=0;
    
//    window.onload = function() {
//        buscarDadosIniciais();
//    };
    
    window.onload = function() {
   
    //flagBancoAlterado=0;
    var database = firebase.database();
    var databaseRef = database.ref('eventos/');
    databaseRef.on('value', function(snapshot){
        
        buscarDadosIniciais();
        
        }); 
    };
    
    //prepararData(date);
    //diaDaSemana(_diadasemana);
    //checarDisponibilidade(weakDay);
    
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
        dataShow = d+'/'+m+'/'+y;
        document.getElementById("innerDataShow").innerHTML=dataShow;
        var _diadasemana = _data.getDay();
        diaDaSemana(_diadasemana);
        
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
    document.getElementById('principal').innerHTML = "<div style='font-size: 40px;'>"+diaEspecial+"</div>";
    //document.getElementById('tb1').innerHTML = "<tr><td><input type='button' class='divBotao' id='ant' width='50' value='<=' onClick='diaAnterior();'/></td><td><h2>&nbsp;&nbsp;&nbsp;"+dataShow+"</h2></td><td width='120'>&nbsp;"+dia+"&nbsp;&nbsp;</td><td><input type='button' class='divBotao' id='seg' width='50' value='=>' onClick='diaSeguinte();'/></td><td><input type='button' class='divBotao' id='hj' value='Hoje' onClick='diaHoje();'/></td><td><input type='date' id='ideal' onchange='diaIdeal(); ' style='border-style: solid; border-radius: 10px; outline: none; height: 30px;'/></td></tr>";
    //document.getElementById('data').innerHTML ="<div style='font-size: 28px;'>"+dataShow+"&nbsp;&nbsp;&nbsp;"+dia+".</div>";
    }
    
    function buscarDadosIniciais(){
        
        var database = firebase.database();
        var databaseRef = database.ref('eventos/');
        databaseRef.once('value', function(snapshot){
            snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                if(childData.nome_evento === diaEspecial && childData.data_evento === dataDiaEspecial){
                   
                   dataDoEvento=childData.data_evento.split("-");
                   let data = new Date(dataDoEvento[0], dataDoEvento[1]-1, dataDoEvento[2]);
                   console.log( data.toString() );
                   console.log( data.toLocaleDateString("pt-BR") );
                   prepararData(data);

                   horaInicio=childData.hora_inicio;
                   horaTermino=childData.hora_termino;
                   duracao=childData.duracao;
                   valor=childData.valor;
                    compareceu1=childData.horario_1_compareceu;
                    compareceu2=childData.horario_2_compareceu;
                    compareceu3=childData.horario_3_compareceu;
                    compareceu4=childData.horario_4_compareceu;
                    compareceu5=childData.horario_5_compareceu;
                    compareceu6=childData.horario_6_compareceu;
                    compareceu7=childData.horario_7_compareceu;
                    compareceu8=childData.horario_8_compareceu;
                    compareceu9=childData.horario_9_compareceu;
                    compareceu10=childData.horario_10_compareceu;
                    compareceu11=childData.horario_11_compareceu;
                    compareceu12=childData.horario_12_compareceu;
                    compareceu13=childData.horario_13_compareceu;
                    compareceu14=childData.horario_14_compareceu;
                    compareceu15=childData.horario_15_compareceu;
                    compareceu16=childData.horario_16_compareceu;
                    compareceu17=childData.horario_17_compareceu;
                    compareceu18=childData.horario_18_compareceu;
                    compareceu19=childData.horario_19_compareceu;
                    compareceu20=childData.horario_20_compareceu;
                    compareceu21=childData.horario_21_compareceu;
                    compareceu22=childData.horario_22_compareceu;
                    compareceu23=childData.horario_23_compareceu;
                    compareceu24=childData.horario_24_compareceu;
                    compareceu25=childData.horario_25_compareceu;
                    compareceu26=childData.horario_26_compareceu;
                    compareceu27=childData.horario_27_compareceu;
                    compareceu28=childData.horario_28_compareceu;
                    compareceu29=childData.horario_29_compareceu;
                    compareceu30=childData.horario_30_compareceu;
                    compareceu31=childData.horario_31_compareceu;
                    compareceu32=childData.horario_32_compareceu;
                    compareceu33=childData.horario_33_compareceu;
                    compareceu34=childData.horario_34_compareceu;
                    compareceu35=childData.horario_35_compareceu;
                    compareceu36=childData.horario_36_compareceu;
                    compareceu37=childData.horario_37_compareceu;
                    compareceu38=childData.horario_38_compareceu;
                    compareceu39=childData.horario_39_compareceu;
                    compareceu40=childData.horario_40_compareceu;
                    compareceu41=childData.horario_41_compareceu;
                    compareceu42=childData.horario_42_compareceu;
                    compareceu43=childData.horario_43_compareceu;
                    compareceu44=childData.horario_44_compareceu;
                    compareceu45=childData.horario_45_compareceu;
                    compareceu46=childData.horario_46_compareceu;
                    compareceu47=childData.horario_47_compareceu;
                    compareceu48=childData.horario_48_compareceu;
                    compareceu49=childData.horario_49_compareceu;
                    compareceu50=childData.horario_50_compareceu;
                    compareceu51=childData.horario_51_compareceu;
                    compareceu52=childData.horario_52_compareceu;
                    compareceu53=childData.horario_53_compareceu;
                    compareceu54=childData.horario_54_compareceu;
                    compareceu55=childData.horario_55_compareceu;
                    compareceu56=childData.horario_56_compareceu;
                    compareceu57=childData.horario_57_compareceu;
                    compareceu58=childData.horario_58_compareceu;
                    compareceu59=childData.horario_59_compareceu;
                    compareceu60=childData.horario_60_compareceu;
                    compareceu61=childData.horario_61_compareceu;
                    compareceu62=childData.horario_62_compareceu;
                    compareceu63=childData.horario_63_compareceu;
                    compareceu64=childData.horario_64_compareceu;
                    compareceu65=childData.horario_65_compareceu;
                    compareceu66=childData.horario_66_compareceu;
                    compareceu67=childData.horario_67_compareceu;
                    compareceu68=childData.horario_68_compareceu;
                    compareceu69=childData.horario_69_compareceu;
                    compareceu70=childData.horario_70_compareceu;
                    compareceu71=childData.horario_71_compareceu;
                    compareceu72=childData.horario_72_compareceu;
                    compareceu73=childData.horario_73_compareceu;
                    compareceu74=childData.horario_74_compareceu;
                    compareceu75=childData.horario_75_compareceu;
                    compareceu76=childData.horario_76_compareceu;
                    compareceu77=childData.horario_77_compareceu;
                    compareceu78=childData.horario_78_compareceu;
                    compareceu79=childData.horario_79_compareceu;
                    compareceu80=childData.horario_80_compareceu;
                    compareceu81=childData.horario_81_compareceu;
                    compareceu82=childData.horario_82_compareceu;
                    compareceu83=childData.horario_83_compareceu;
                    compareceu84=childData.horario_84_compareceu;

                    pagou1=childData.horario_1_pagou;
                    pagou2=childData.horario_2_pagou;
                    pagou3=childData.horario_3_pagou;
                    pagou4=childData.horario_4_pagou;
                    pagou5=childData.horario_5_pagou;
                    pagou6=childData.horario_6_pagou;
                    pagou7=childData.horario_7_pagou;
                    pagou8=childData.horario_8_pagou;
                    pagou9=childData.horario_9_pagou;
                    pagou10=childData.horario_10_pagou;
                    pagou11=childData.horario_11_pagou;
                    pagou12=childData.horario_12_pagou;
                    pagou13=childData.horario_13_pagou;
                    pagou14=childData.horario_14_pagou;
                    pagou15=childData.horario_15_pagou;
                    pagou16=childData.horario_16_pagou;
                    pagou17=childData.horario_17_pagou;
                    pagou18=childData.horario_18_pagou;
                    pagou19=childData.horario_19_pagou;
                    pagou20=childData.horario_20_pagou;
                    pagou21=childData.horario_21_pagou;
                    pagou22=childData.horario_22_pagou;
                    pagou23=childData.horario_23_pagou;
                    pagou24=childData.horario_24_pagou;
                    pagou25=childData.horario_25_pagou;
                    pagou26=childData.horario_26_pagou;
                    pagou27=childData.horario_27_pagou;
                    pagou28=childData.horario_28_pagou;
                    pagou29=childData.horario_29_pagou;
                    pagou30=childData.horario_30_pagou;
                    pagou31=childData.horario_31_pagou;
                    pagou32=childData.horario_32_pagou;
                    pagou33=childData.horario_33_pagou;
                    pagou34=childData.horario_34_pagou;
                    pagou35=childData.horario_35_pagou;
                    pagou36=childData.horario_36_pagou;
                    pagou37=childData.horario_37_pagou;
                    pagou38=childData.horario_38_pagou;
                    pagou39=childData.horario_39_pagou;
                    pagou40=childData.horario_40_pagou;
                    pagou41=childData.horario_41_pagou;
                    pagou42=childData.horario_42_pagou;
                    pagou43=childData.horario_43_pagou;
                    pagou44=childData.horario_44_pagou;
                    pagou45=childData.horario_45_pagou;
                    pagou46=childData.horario_46_pagou;
                    pagou47=childData.horario_47_pagou;
                    pagou48=childData.horario_48_pagou;
                    pagou49=childData.horario_49_pagou;
                    pagou50=childData.horario_50_pagou;
                    pagou51=childData.horario_51_pagou;
                    pagou52=childData.horario_52_pagou;
                    pagou53=childData.horario_53_pagou;
                    pagou54=childData.horario_54_pagou;
                    pagou55=childData.horario_55_pagou;
                    pagou56=childData.horario_56_pagou;
                    pagou57=childData.horario_57_pagou;
                    pagou58=childData.horario_58_pagou;
                    pagou59=childData.horario_59_pagou;
                    pagou60=childData.horario_60_pagou;
                    pagou61=childData.horario_61_pagou;
                    pagou62=childData.horario_62_pagou;
                    pagou63=childData.horario_63_pagou;
                    pagou64=childData.horario_64_pagou;
                    pagou65=childData.horario_65_pagou;
                    pagou66=childData.horario_66_pagou;
                    pagou67=childData.horario_67_pagou;
                    pagou68=childData.horario_68_pagou;
                    pagou69=childData.horario_69_pagou;
                    pagou70=childData.horario_70_pagou;
                    pagou71=childData.horario_71_pagou;
                    pagou72=childData.horario_72_pagou;
                    pagou73=childData.horario_73_pagou;
                    pagou74=childData.horario_74_pagou;
                    pagou75=childData.horario_75_pagou;
                    pagou76=childData.horario_76_pagou;
                    pagou77=childData.horario_77_pagou;
                    pagou78=childData.horario_78_pagou;
                    pagou79=childData.horario_79_pagou;
                    pagou80=childData.horario_80_pagou;
                    pagou81=childData.horario_81_pagou;
                    pagou82=childData.horario_82_pagou;
                    pagou83=childData.horario_83_pagou;
                    pagou84=childData.horario_84_pagou;
                    
                    valorDesconto1=childData.horario_1_valor_desc;
                    valorDesconto2=childData.horario_2_valor_desc;
                    valorDesconto3=childData.horario_3_valor_desc;
                    valorDesconto4=childData.horario_4_valor_desc;
                    valorDesconto5=childData.horario_5_valor_desc;
                    valorDesconto6=childData.horario_6_valor_desc;
                    valorDesconto7=childData.horario_7_valor_desc;
                    valorDesconto8=childData.horario_8_valor_desc;
                    valorDesconto9=childData.horario_9_valor_desc;
                    valorDesconto10=childData.horario_10_valor_desc;
                    valorDesconto11=childData.horario_11_valor_desc;
                    valorDesconto12=childData.horario_12_valor_desc;
                    valorDesconto13=childData.horario_13_valor_desc;
                    valorDesconto14=childData.horario_14_valor_desc;
                    valorDesconto15=childData.horario_15_valor_desc;
                    valorDesconto16=childData.horario_16_valor_desc;
                    valorDesconto17=childData.horario_17_valor_desc;
                    valorDesconto18=childData.horario_18_valor_desc;
                    valorDesconto19=childData.horario_19_valor_desc;
                    valorDesconto20=childData.horario_20_valor_desc;
                    valorDesconto21=childData.horario_21_valor_desc;
                    valorDesconto22=childData.horario_22_valor_desc;
                    valorDesconto23=childData.horario_23_valor_desc;
                    valorDesconto24=childData.horario_24_valor_desc;
                    valorDesconto25=childData.horario_25_valor_desc;
                    valorDesconto26=childData.horario_26_valor_desc;
                    valorDesconto27=childData.horario_27_valor_desc;
                    valorDesconto28=childData.horario_28_valor_desc;
                    valorDesconto29=childData.horario_29_valor_desc;
                    valorDesconto30=childData.horario_30_valor_desc;
                    valorDesconto31=childData.horario_31_valor_desc;
                    valorDesconto32=childData.horario_32_valor_desc;
                    valorDesconto33=childData.horario_33_valor_desc;
                    valorDesconto34=childData.horario_34_valor_desc;
                    valorDesconto35=childData.horario_35_valor_desc;
                    valorDesconto36=childData.horario_36_valor_desc;
                    valorDesconto37=childData.horario_37_valor_desc;
                    valorDesconto38=childData.horario_38_valor_desc;
                    valorDesconto39=childData.horario_39_valor_desc;
                    valorDesconto40=childData.horario_40_valor_desc;
                    valorDesconto41=childData.horario_41_valor_desc;
                    valorDesconto42=childData.horario_42_valor_desc;
                    valorDesconto43=childData.horario_43_valor_desc;
                    valorDesconto44=childData.horario_44_valor_desc;
                    valorDesconto45=childData.horario_45_valor_desc;
                    valorDesconto46=childData.horario_46_valor_desc;
                    valorDesconto47=childData.horario_47_valor_desc;
                    valorDesconto48=childData.horario_48_valor_desc;
                    valorDesconto49=childData.horario_49_valor_desc;
                    valorDesconto50=childData.horario_50_valor_desc;
                    valorDesconto51=childData.horario_51_valor_desc;
                    valorDesconto52=childData.horario_52_valor_desc;
                    valorDesconto53=childData.horario_53_valor_desc;
                    valorDesconto54=childData.horario_54_valor_desc;
                    valorDesconto55=childData.horario_55_valor_desc;
                    valorDesconto56=childData.horario_56_valor_desc;
                    valorDesconto57=childData.horario_57_valor_desc;
                    valorDesconto58=childData.horario_58_valor_desc;
                    valorDesconto59=childData.horario_59_valor_desc;
                    valorDesconto60=childData.horario_60_valor_desc;
                    valorDesconto61=childData.horario_61_valor_desc;
                    valorDesconto62=childData.horario_62_valor_desc;
                    valorDesconto63=childData.horario_63_valor_desc;
                    valorDesconto64=childData.horario_64_valor_desc;
                    valorDesconto65=childData.horario_65_valor_desc;
                    valorDesconto66=childData.horario_66_valor_desc;
                    valorDesconto67=childData.horario_67_valor_desc;
                    valorDesconto68=childData.horario_68_valor_desc;
                    valorDesconto69=childData.horario_69_valor_desc;
                    valorDesconto70=childData.horario_70_valor_desc;
                    valorDesconto71=childData.horario_71_valor_desc;
                    valorDesconto72=childData.horario_72_valor_desc;
                    valorDesconto73=childData.horario_73_valor_desc;
                    valorDesconto74=childData.horario_74_valor_desc;
                    valorDesconto75=childData.horario_75_valor_desc;
                    valorDesconto76=childData.horario_76_valor_desc;
                    valorDesconto77=childData.horario_77_valor_desc;
                    valorDesconto78=childData.horario_78_valor_desc;
                    valorDesconto79=childData.horario_79_valor_desc;
                    valorDesconto80=childData.horario_80_valor_desc;
                    valorDesconto81=childData.horario_81_valor_desc;
                    valorDesconto82=childData.horario_82_valor_desc;
                    valorDesconto83=childData.horario_83_valor_desc;
                    valorDesconto84=childData.horario_84_valor_desc;
                    
                    valorFinal1=childData.horario_1_valor_rec;
                    valorFinal2=childData.horario_2_valor_rec;
                    valorFinal3=childData.horario_3_valor_rec;
                    valorFinal4=childData.horario_4_valor_rec;
                    valorFinal5=childData.horario_5_valor_rec;
                    valorFinal6=childData.horario_6_valor_rec;
                    valorFinal7=childData.horario_7_valor_rec;
                    valorFinal8=childData.horario_8_valor_rec;
                    valorFinal9=childData.horario_9_valor_rec;
                    valorFinal10=childData.horario_10_valor_rec;
                    valorFinal11=childData.horario_11_valor_rec;
                    valorFinal12=childData.horario_12_valor_rec;
                    valorFinal13=childData.horario_13_valor_rec;
                    valorFinal14=childData.horario_14_valor_rec;
                    valorFinal15=childData.horario_15_valor_rec;
                    valorFinal16=childData.horario_16_valor_rec;
                    valorFinal17=childData.horario_17_valor_rec;
                    valorFinal18=childData.horario_18_valor_rec;
                    valorFinal19=childData.horario_19_valor_rec;
                    valorFinal20=childData.horario_20_valor_rec;
                    valorFinal21=childData.horario_21_valor_rec;
                    valorFinal22=childData.horario_22_valor_rec;
                    valorFinal23=childData.horario_23_valor_rec;
                    valorFinal24=childData.horario_24_valor_rec;
                    valorFinal25=childData.horario_25_valor_rec;
                    valorFinal26=childData.horario_26_valor_rec;
                    valorFinal27=childData.horario_27_valor_rec;
                    valorFinal28=childData.horario_28_valor_rec;
                    valorFinal29=childData.horario_29_valor_rec;
                    valorFinal30=childData.horario_30_valor_rec;
                    valorFinal31=childData.horario_31_valor_rec;
                    valorFinal32=childData.horario_32_valor_rec;
                    valorFinal33=childData.horario_33_valor_rec;
                    valorFinal34=childData.horario_34_valor_rec;
                    valorFinal35=childData.horario_35_valor_rec;
                    valorFinal36=childData.horario_36_valor_rec;
                    valorFinal37=childData.horario_37_valor_rec;
                    valorFinal38=childData.horario_38_valor_rec;
                    valorFinal39=childData.horario_39_valor_rec;
                    valorFinal40=childData.horario_40_valor_rec;
                    valorFinal41=childData.horario_41_valor_rec;
                    valorFinal42=childData.horario_42_valor_rec;
                    valorFinal43=childData.horario_43_valor_rec;
                    valorFinal44=childData.horario_44_valor_rec;
                    valorFinal45=childData.horario_45_valor_rec;
                    valorFinal46=childData.horario_46_valor_rec;
                    valorFinal47=childData.horario_47_valor_rec;
                    valorFinal48=childData.horario_48_valor_rec;
                    valorFinal49=childData.horario_49_valor_rec;
                    valorFinal50=childData.horario_50_valor_rec;
                    valorFinal51=childData.horario_51_valor_rec;
                    valorFinal52=childData.horario_52_valor_rec;
                    valorFinal53=childData.horario_53_valor_rec;
                    valorFinal54=childData.horario_54_valor_rec;
                    valorFinal55=childData.horario_55_valor_rec;
                    valorFinal56=childData.horario_56_valor_rec;
                    valorFinal57=childData.horario_57_valor_rec;
                    valorFinal58=childData.horario_58_valor_rec;
                    valorFinal59=childData.horario_59_valor_rec;
                    valorFinal60=childData.horario_60_valor_rec;
                    valorFinal61=childData.horario_61_valor_rec;
                    valorFinal62=childData.horario_62_valor_rec;
                    valorFinal63=childData.horario_63_valor_rec;
                    valorFinal64=childData.horario_64_valor_rec;
                    valorFinal65=childData.horario_65_valor_rec;
                    valorFinal66=childData.horario_66_valor_rec;
                    valorFinal67=childData.horario_67_valor_rec;
                    valorFinal68=childData.horario_68_valor_rec;
                    valorFinal69=childData.horario_69_valor_rec;
                    valorFinal70=childData.horario_70_valor_rec;
                    valorFinal71=childData.horario_71_valor_rec;
                    valorFinal72=childData.horario_72_valor_rec;
                    valorFinal73=childData.horario_73_valor_rec;
                    valorFinal74=childData.horario_74_valor_rec;
                    valorFinal75=childData.horario_75_valor_rec;
                    valorFinal76=childData.horario_76_valor_rec;
                    valorFinal77=childData.horario_77_valor_rec;
                    valorFinal78=childData.horario_78_valor_rec;
                    valorFinal79=childData.horario_79_valor_rec;
                    valorFinal80=childData.horario_80_valor_rec;
                    valorFinal81=childData.horario_81_valor_rec;
                    valorFinal82=childData.horario_82_valor_rec;
                    valorFinal83=childData.horario_83_valor_rec;
                    valorFinal84=childData.horario_84_valor_rec;
                    
                    dataRec1=childData.horario_1_data_rec;
                    dataRec2=childData.horario_2_data_rec;
                    dataRec3=childData.horario_3_data_rec;
                    dataRec4=childData.horario_4_data_rec;
                    dataRec5=childData.horario_5_data_rec;
                    dataRec6=childData.horario_6_data_rec;
                    dataRec7=childData.horario_7_data_rec;
                    dataRec8=childData.horario_8_data_rec;
                    dataRec9=childData.horario_9_data_rec;
                    dataRec10=childData.horario_10_data_rec;
                    dataRec11=childData.horario_11_data_rec;
                    dataRec12=childData.horario_12_data_rec;
                    dataRec13=childData.horario_13_data_rec;
                    dataRec14=childData.horario_14_data_rec;
                    dataRec15=childData.horario_15_data_rec;
                    dataRec16=childData.horario_16_data_rec;
                    dataRec17=childData.horario_17_data_rec;
                    dataRec18=childData.horario_18_data_rec;
                    dataRec19=childData.horario_19_data_rec;
                    dataRec20=childData.horario_20_data_rec;
                    dataRec21=childData.horario_21_data_rec;
                    dataRec22=childData.horario_22_data_rec;
                    dataRec23=childData.horario_23_data_rec;
                    dataRec24=childData.horario_24_data_rec;
                    dataRec25=childData.horario_25_data_rec;
                    dataRec26=childData.horario_26_data_rec;
                    dataRec27=childData.horario_27_data_rec;
                    dataRec28=childData.horario_28_data_rec;
                    dataRec29=childData.horario_29_data_rec;
                    dataRec30=childData.horario_30_data_rec;
                    dataRec31=childData.horario_31_data_rec;
                    dataRec32=childData.horario_32_data_rec;
                    dataRec33=childData.horario_33_data_rec;
                    dataRec34=childData.horario_34_data_rec;
                    dataRec35=childData.horario_35_data_rec;
                    dataRec36=childData.horario_36_data_rec;
                    dataRec37=childData.horario_37_data_rec;
                    dataRec38=childData.horario_38_data_rec;
                    dataRec39=childData.horario_39_data_rec;
                    dataRec40=childData.horario_40_data_rec;
                    dataRec41=childData.horario_41_data_rec;
                    dataRec42=childData.horario_42_data_rec;
                    dataRec43=childData.horario_43_data_rec;
                    dataRec44=childData.horario_44_data_rec;
                    dataRec45=childData.horario_45_data_rec;
                    dataRec46=childData.horario_46_data_rec;
                    dataRec47=childData.horario_47_data_rec;
                    dataRec48=childData.horario_48_data_rec;
                    dataRec49=childData.horario_49_data_rec;
                    dataRec50=childData.horario_50_data_rec;
                    dataRec51=childData.horario_51_data_rec;
                    dataRec52=childData.horario_52_data_rec;
                    dataRec53=childData.horario_53_data_rec;
                    dataRec55=childData.horario_55_data_rec;
                    dataRec56=childData.horario_56_data_rec;
                    dataRec57=childData.horario_57_data_rec;
                    dataRec58=childData.horario_58_data_rec;
                    dataRec59=childData.horario_59_data_rec;
                    dataRec60=childData.horario_60_data_rec;
                    dataRec61=childData.horario_61_data_rec;
                    dataRec62=childData.horario_62_data_rec;
                    dataRec63=childData.horario_63_data_rec;
                    dataRec64=childData.horario_64_data_rec;
                    dataRec65=childData.horario_65_data_rec;
                    dataRec66=childData.horario_66_data_rec;
                    dataRec67=childData.horario_67_data_rec;
                    dataRec68=childData.horario_68_data_rec;
                    dataRec69=childData.horario_69_data_rec;
                    dataRec70=childData.horario_70_data_rec;
                    dataRec71=childData.horario_71_data_rec;
                    dataRec72=childData.horario_72_data_rec;
                    dataRec73=childData.horario_73_data_rec;
                    dataRec74=childData.horario_74_data_rec;
                    dataRec75=childData.horario_75_data_rec;
                    dataRec76=childData.horario_76_data_rec;
                    dataRec77=childData.horario_77_data_rec;
                    dataRec78=childData.horario_78_data_rec;
                    dataRec79=childData.horario_79_data_rec;
                    dataRec80=childData.horario_80_data_rec;
                    dataRec81=childData.horario_81_data_rec;
                    dataRec82=childData.horario_82_data_rec;
                    dataRec83=childData.horario_83_data_rec;
                    dataRec84=childData.horario_84_data_rec;

                   
                   eventoKey=childKey;
                   sessionStorage.setItem('eventoId',eventoKey);
                }
            });
            criarTabela();
        });
    }
    
    function criarTabela(){
        //alert('eventoKey = '+eventoKey);
        //if(duracao==="1 Hora"){
            for(var i=84; i>0 ; i--){
                var tabela = document.getElementById('tabelaAgendaProfissional');
                var newRow = tabela.insertRow(0);
                newRow.id="rowId"+i;
                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);
                var cell6 = newRow.insertCell(5);
                var cell7 = newRow.insertCell(6);
                var cell8 = newRow.insertCell(7);
                var cell9 = newRow.insertCell(8);
                var cell10 = newRow.insertCell(9);
                var cell11 = newRow.insertCell(10);

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
                cell1.innerHTML = "<p  style='width: 50px; margin-bottom: -10px; margin-top: -10px;'>"+texto+"</p>";
                cell2.innerHTML = "<p class='textoMenor' style='font-size: 18px; margin-left: 30px' size='30' name='seg800' id='idTime"+i+"'></p>";
                //cell3.innerHTML = "<p  style='width: 120px; margin-bottom: -10px; margin-top: 0px;'> <input type='button' class='divBotaoLista' id='btn"+i+"' style='margin-left: 30px' value = 'Registrar' onClick='agendar("+i+");'></button></p>";
                
                //VALOR.
                cell3.innerHTML = "<p class='textoMenor90A' id='valor"+i+"' >€"+valor+"</p>";
                
                //INPUT RADIO COMPARECEU.
                cell4.innerHTML = "<p style= 'width:140px; margin-left: 0px; margin-top: -5px; margin-bottom: -5px;'><input type='radio' id='compareceu"+i+"' onclick='cCompareceu("+i+");'/><label for='compareceu"+i+"'>Compareceu</label></p>";
                //alert("compareceu"+i);
                
                
                
                //EURO / PORCENTAGEM.
                cell5.innerHTML = "<label for='porcento'  style='margin-left: -30px; margin-right: 0px;'></label><select id='porcento"+i+"' onchange='acertarNumeroSelect("+i+");' style='font-size: 14px; outline: none;'><option value='0'>€</option><option value='1'>%</option></select>";

                if(tipoDesconto==="0"){
                    //alert("tipoDeDesconto==='0'");
                    document.getElementById("porcento"+i).value="0";

                }
                if(tipoDesconto==="1"){
                    //alert("tipoDeDesconto==='1'");
                    document.getElementById("porcento"+i).value="1";
                }

                cell6.innerHTML = "<input type='number' min='0.00' max='1000.00' step='0.01' class='textoMenor90ABC' id='valorDesconto"+i+"' onchange='acertarNumero("+i+");'/>";

                cell7.innerHTML = "<p class='textoMenor90A' id='valorFinal"+i+"' ></p>";

                cell8.innerHTML = "<input type='date' id='dataRecebimento"+i+"' class='divBotaoLista' style='width: 125px; font-size:12px;'/>";


                cell9.innerHTML = "<p style= 'width:70px; margin-left: 0px; margin-top: -5px; margin-bottom: -5px;'><input type='radio' id='pagou"+i+"' onclick='pagou("+i+");'/><label for='pagou"+i+"'>Pagou</label></p>";
//                if(pagou){
//                    document.getElementById('pagou'+i).checked= true;
//                    document.getElementById('valorDesconto'+i).disabled= true;
//                    document.getElementById('porcento'+i).disabled= true;
//                    document.getElementById('dataRecebimento'+i).disabled= true;
//                }else{
//                    document.getElementById('pagou'+i).checked= false;
//                    document.getElementById('valorDesconto'+i).disabled= false;
//                    document.getElementById('dataRecebimento'+i).disabled= false;
//                }

                //cell11.innerHTML = "<p style='width: 150px; margin-top: -2px; margin-bottom: -5px; margin-left: -40px;'><input type='button' class='divBotaoLista' id='btnDel"+i+"' style='margin-left: 0px;' value = 'Excluir' onClick='excluirA("+i+");'></button></p>";

//                document.getElementById('valorDesconto'+i).value= desconto;
//                document.getElementById('dataRecebimento'+i).value = dataRec;
                cell10.innerHTML = "<input type='button' class='divBotaoLista' id='btnDel"+i+"' style='margin-left: 30px' value = 'Excluir' onClick='excluir("+i+");'></button>";

                carregarDetalhes(i);
                }
        buscarAgendamentos();
        //acertarCompareceu();
        trimTable();
        
    }
    
    function buscarAgendamentos(){
        //alert('buscarAgendamentos()');
        var database = firebase.database();
        var databaseRef = database.ref('eventos/');
        databaseRef.once('value', function(snapshot){
            snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                if(childData.nome_evento === diaEspecial){
                   if(childData.horario_1_cliente){
                       document.getElementById("idTime1").innerHTML=childData.horario_1_cliente;
                       //document.getElementById("dataRecebimento1").innerHTML=childData.horario_1_data_rec;
                       document.getElementById("valorDesconto1").value=childData.horario_1_valor_desc;
                       if(childData.horario_1_valor_rec){
                           document.getElementById("valorFinal1").innerHTML="€"+childData.horario_1_valor_rec;
                       }else{
                           document.getElementById("valorFinal1").innerHTML="€";
                       }
                       if(childData.horario_1_tipo_de_desconto){
                           document.getElementById("porcento1").value=childData.horario_1_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento1").value=0;
                       }
                       document.getElementById("compareceu1").disabled=false;
                       document.getElementById("porcento1").disabled=false;
                       document.getElementById("valorDesconto1").disabled=false;
                       document.getElementById("dataRecebimento1").disabled=false;
                       document.getElementById("pagou1").disabled=false;
                   }else{
                       document.getElementById("btnDel1").style.display="none";
                       document.getElementById("compareceu1").disabled=true;
                       document.getElementById("porcento1").disabled=true;
                       document.getElementById("valorDesconto1").disabled=true;
                       document.getElementById("dataRecebimento1").disabled=true;
                       document.getElementById("pagou1").disabled=true;
                   }
                   if(childData.horario_1_pagou){
                       document.getElementById("porcento1").disabled=true;
                       document.getElementById("valorDesconto1").disabled=true;
                       document.getElementById("dataRecebimento1").disabled=true;
                       //document.getElementById("pagou1").disabled=true;
                   }
                   if(childData.horario_2_cliente){
                       document.getElementById("idTime2").innerHTML=childData.horario_2_cliente;
                       //document.getElementById("dataRecebimento2").innerHTML=childData.horario_2_data_rec;
                       document.getElementById("valorDesconto2").value=childData.horario_2_valor_desc;
                       if(childData.horario_2_valor_rec){
                           document.getElementById("valorFinal2").innerHTML="€"+childData.horario_2_valor_rec;
                       }else{
                           document.getElementById("valorFinal2").innerHTML="€";
                       }
                       if(childData.horario_2_tipo_de_desconto){
                           document.getElementById("porcento2").value=childData.horario_2_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento2").value=0;
                       }
                       document.getElementById("compareceu2").disabled=false;
                       document.getElementById("porcento2").disabled=false;
                       document.getElementById("valorDesconto2").disabled=false;
                       document.getElementById("dataRecebimento2").disabled=false;
                       document.getElementById("pagou2").disabled=false;
                   }else{
                       document.getElementById("btnDel2").style.display="none";
                       document.getElementById("compareceu2").disabled=true;
                       document.getElementById("porcento2").disabled=true;
                       document.getElementById("valorDesconto2").disabled=true;
                       document.getElementById("dataRecebimento2").disabled=true;
                       document.getElementById("pagou2").disabled=true;
                   }
                   if(childData.horario_2_pagou){
                       document.getElementById("porcento2").disabled=true;
                       document.getElementById("valorDesconto2").disabled=true;
                       document.getElementById("dataRecebimento2").disabled=true;
                   }
                   if(childData.horario_3_cliente){
                       document.getElementById("idTime3").innerHTML=childData.horario_3_cliente;
                       //document.getElementById("dataRecebimento3").innerHTML=childData.horario_3_data_rec;
                       document.getElementById("valorDesconto3").value=childData.horario_3_valor_desc;
                       if(childData.horario_3_valor_rec){
                           document.getElementById("valorFinal3").innerHTML="€"+childData.horario_3_valor_rec;
                       }else{
                           document.getElementById("valorFinal3").innerHTML="€";
                       }
                       if(childData.horario_3_tipo_de_desconto){
                           document.getElementById("porcento3").value=childData.horario_3_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento3").value=0;
                       }
                       document.getElementById("compareceu3").disabled=false;
                       document.getElementById("porcento3").disabled=false;
                       document.getElementById("valorDesconto3").disabled=false;
                       document.getElementById("dataRecebimento3").disabled=false;
                       document.getElementById("pagou3").disabled=false;
                   }else{
                       document.getElementById("btnDel3").style.display="none";
                       document.getElementById("compareceu3").disabled=true;
                       document.getElementById("porcento3").disabled=true;
                       document.getElementById("valorDesconto3").disabled=true;
                       document.getElementById("dataRecebimento3").disabled=true;
                       document.getElementById("pagou3").disabled=true;
                   }
                   if(childData.horario_3_pagou){
                       document.getElementById("porcento3").disabled=true;
                       document.getElementById("valorDesconto3").disabled=true;
                       document.getElementById("dataRecebimento3").disabled=true;
                   }
                   if(childData.horario_4_cliente){
                       document.getElementById("idTime4").innerHTML=childData.horario_4_cliente;
//                       document.getElementById("dataRecebimento4").innerHTML=childData.horario_4_data_rec;
                       //document.getElementById("dataRecebimento4").innerHTML=dataRec4;
                       //alert("dataRec4 = "+dataRec4);
                       document.getElementById("valorDesconto4").value=childData.horario_4_valor_desc;
                       if(childData.horario_4_valor_rec){
                           document.getElementById("valorFinal4").innerHTML="€"+childData.horario_4_valor_rec;
                       }else{
                           document.getElementById("valorFinal4").innerHTML="€";
                       }
                       if(childData.horario_4_tipo_de_desconto){
                           document.getElementById("porcento4").value=childData.horario_4_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento4").value=0;
                       }
                       document.getElementById("compareceu4").disabled=false;
                       document.getElementById("porcento4").disabled=false;
                       document.getElementById("valorDesconto4").disabled=false;
                       document.getElementById("dataRecebimento4").disabled=false;
                       document.getElementById("pagou4").disabled=false;
                   }else{
                       document.getElementById("btnDel4").style.display="none";
                       document.getElementById("compareceu4").disabled=true;
                       document.getElementById("porcento4").disabled=true;
                       document.getElementById("valorDesconto4").disabled=true;
                       document.getElementById("dataRecebimento4").disabled=true;
                       document.getElementById("pagou4").disabled=true;
                   }
                   if(childData.horario_4_pagou){
                       document.getElementById("porcento4").disabled=true;
                       document.getElementById("valorDesconto4").disabled=true;
                       document.getElementById("dataRecebimento4").disabled=true;
                   }
                   if(childData.horario_5_cliente){
                       document.getElementById("idTime5").innerHTML=childData.horario_5_cliente;
                       //document.getElementById("dataRecebimento5").innerHTML=childData.horario_5_data_rec;
                       document.getElementById("valorDesconto5").value=childData.horario_5_valor_desc;
                       if(childData.horario_5_valor_rec){
                           document.getElementById("valorFinal5").innerHTML="€"+childData.horario_5_valor_rec;
                       }else{
                           document.getElementById("valorFinal5").innerHTML="€";
                       }
                       if(childData.horario_5_tipo_de_desconto){
                           document.getElementById("porcento5").value=childData.horario_5_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento5").value=0;
                       }
                       document.getElementById("compareceu5").disabled=false;
                       document.getElementById("porcento5").disabled=false;
                       document.getElementById("valorDesconto5").disabled=false;
                       document.getElementById("dataRecebimento5").disabled=false;
                       document.getElementById("pagou5").disabled=false;
                   }else{
                       document.getElementById("btnDel5").style.display="none";
                       document.getElementById("compareceu5").disabled=true;
                       document.getElementById("porcento5").disabled=true;
                       document.getElementById("valorDesconto5").disabled=true;
                       document.getElementById("dataRecebimento5").disabled=true;
                       document.getElementById("pagou5").disabled=true;
                   }
                   if(childData.horario_5_pagou){
                       document.getElementById("porcento5").disabled=true;
                       document.getElementById("valorDesconto5").disabled=true;
                       document.getElementById("dataRecebimento5").disabled=true;
                   }
                   if(childData.horario_6_cliente){
                       document.getElementById("idTime6").innerHTML=childData.horario_6_cliente;
                       //document.getElementById("dataRecebimento6").innerHTML=childData.horario_6_data_rec;
                       document.getElementById("valorDesconto6").value=childData.horario_6_valor_desc;
                       if(childData.horario_6_valor_rec){
                           document.getElementById("valorFinal6").innerHTML="€"+childData.horario_6_valor_rec;
                       }else{
                           document.getElementById("valorFinal6").innerHTML="€";
                       }
                       if(childData.horario_6_tipo_de_desconto){
                           document.getElementById("porcento6").value=childData.horario_6_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento6").value=0;
                       }
                       document.getElementById("compareceu6").disabled=false;
                       document.getElementById("porcento6").disabled=false;
                       document.getElementById("valorDesconto6").disabled=false;
                       document.getElementById("dataRecebimento6").disabled=false;
                       document.getElementById("pagou6").disabled=false;
                   }else{
                       document.getElementById("btnDel6").style.display="none";
                       document.getElementById("compareceu6").disabled=true;
                       document.getElementById("porcento6").disabled=true;
                       document.getElementById("valorDesconto6").disabled=true;
                       document.getElementById("dataRecebimento6").disabled=true;
                       document.getElementById("pagou6").disabled=true;
                   }
                   if(childData.horario_6_pagou){
                       document.getElementById("porcento6").disabled=true;
                       document.getElementById("valorDesconto6").disabled=true;
                       document.getElementById("dataRecebimento6").disabled=true;
                   }
                   if(childData.horario_7_cliente){
                       document.getElementById("idTime7").innerHTML=childData.horario_7_cliente;
                       //document.getElementById("dataRecebimento7").innerHTML=childData.horario_7_data_rec;
                       document.getElementById("valorDesconto7").value=childData.horario_7_valor_desc;
                       if(childData.horario_7_valor_rec){
                           document.getElementById("valorFinal7").innerHTML="€"+childData.horario_7_valor_rec;
                       }else{
                           document.getElementById("valorFinal7").innerHTML="€";
                       }
                       if(childData.horario_7_tipo_de_desconto){
                           document.getElementById("porcento7").value=childData.horario_7_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento7").value=0;
                       }
                       document.getElementById("compareceu7").disabled=false;
                       document.getElementById("porcento7").disabled=false;
                       document.getElementById("valorDesconto7").disabled=false;
                       document.getElementById("dataRecebimento7").disabled=false;
                       document.getElementById("pagou7").disabled=false;
                   }else{
                       document.getElementById("btnDel7").style.display="none";
                       document.getElementById("compareceu7").disabled=true;
                       document.getElementById("porcento7").disabled=true;
                       document.getElementById("valorDesconto7").disabled=true;
                       document.getElementById("dataRecebimento7").disabled=true;
                       document.getElementById("pagou7").disabled=true;
                   }
                   if(childData.horario_7_pagou){
                       document.getElementById("porcento7").disabled=true;
                       document.getElementById("valorDesconto7").disabled=true;
                       document.getElementById("dataRecebimento7").disabled=true;
                   }
                   if(childData.horario_8_cliente){
                       document.getElementById("idTime8").innerHTML=childData.horario_8_cliente;
                       //document.getElementById("dataRecebimento8").innerHTML=childData.horario_8_data_rec;
                       document.getElementById("valorDesconto8").value=childData.horario_8_valor_desc;
                       if(childData.horario_8_valor_rec){
                           document.getElementById("valorFinal8").innerHTML="€"+childData.horario_8_valor_rec;
                       }else{
                           document.getElementById("valorFinal8").innerHTML="€";
                       }
                       if(childData.horario_8_tipo_de_desconto){
                           document.getElementById("porcento8").value=childData.horario_8_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento8").value=0;
                       }
                       document.getElementById("compareceu8").disabled=false;
                       document.getElementById("porcento8").disabled=false;
                       document.getElementById("valorDesconto8").disabled=false;
                       document.getElementById("dataRecebimento8").disabled=false;
                       document.getElementById("pagou8").disabled=false;
                   }else{
                       document.getElementById("btnDel8").style.display="none";
                       document.getElementById("compareceu8").disabled=true;
                       document.getElementById("porcento8").disabled=true;
                       document.getElementById("valorDesconto8").disabled=true;
                       document.getElementById("dataRecebimento8").disabled=true;
                       document.getElementById("pagou8").disabled=true;
                   }
                   if(childData.horario_8_pagou){
                       document.getElementById("porcento8").disabled=true;
                       document.getElementById("valorDesconto8").disabled=true;
                       document.getElementById("dataRecebimento8").disabled=true;
                   }
                   if(childData.horario_9_cliente){
                       document.getElementById("idTime9").innerHTML=childData.horario_9_cliente;
                       //document.getElementById("dataRecebimento9").innerHTML=childData.horario_9_data_rec;
                       document.getElementById("valorDesconto9").value=childData.horario_9_valor_desc;
                       if(childData.horario_9_valor_rec){
                           document.getElementById("valorFinal9").innerHTML="€"+childData.horario_9_valor_rec;
                       }else{
                           document.getElementById("valorFinal9").innerHTML="€";
                       }
                       if(childData.horario_9_tipo_de_desconto){
                           document.getElementById("porcento9").value=childData.horario_9_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento9").value=0;
                       }
                       document.getElementById("compareceu9").disabled=false;
                       document.getElementById("porcento9").disabled=false;
                       document.getElementById("valorDesconto9").disabled=false;
                       document.getElementById("dataRecebimento9").disabled=false;
                       document.getElementById("pagou9").disabled=false;
                   }else{
                       document.getElementById("btnDel9").style.display="none";
                       document.getElementById("compareceu9").disabled=true;
                       document.getElementById("porcento9").disabled=true;
                       document.getElementById("valorDesconto9").disabled=true;
                       document.getElementById("dataRecebimento9").disabled=true;
                       document.getElementById("pagou9").disabled=true;
                   }
                   if(childData.horario_9_pagou){
                       document.getElementById("porcento9").disabled=true;
                       document.getElementById("valorDesconto9").disabled=true;
                       document.getElementById("dataRecebimento9").disabled=true;
                   }
                   if(childData.horario_10_cliente){
                       document.getElementById("idTime10").innerHTML=childData.horario_10_cliente;
                       //document.getElementById("dataRecebimento10").innerHTML=childData.horario_10_data_rec;
                       document.getElementById("valorDesconto10").value=childData.horario_10_valor_desc;
                       if(childData.horario_10_valor_rec){
                           document.getElementById("valorFinal10").innerHTML="€"+childData.horario_10_valor_rec;
                       }else{
                           document.getElementById("valorFinal10").innerHTML="€";
                       }
                       if(childData.horario_10_tipo_de_desconto){
                           document.getElementById("porcento10").value=childData.horario_10_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento10").value=0;
                       }
                       document.getElementById("compareceu10").disabled=false;
                       document.getElementById("porcento10").disabled=false;
                       document.getElementById("valorDesconto10").disabled=false;
                       document.getElementById("dataRecebimento10").disabled=false;
                       document.getElementById("pagou10").disabled=false;
                   }else{
                       document.getElementById("btnDel10").style.display="none";
                       document.getElementById("compareceu10").disabled=true;
                       document.getElementById("porcento10").disabled=true;
                       document.getElementById("valorDesconto10").disabled=true;
                       document.getElementById("dataRecebimento10").disabled=true;
                       document.getElementById("pagou10").disabled=true;
                   }
                   if(childData.horario_10_pagou){
                       document.getElementById("porcento10").disabled=true;
                       document.getElementById("valorDesconto10").disabled=true;
                       document.getElementById("dataRecebimento10").disabled=true;
                   }
                   if(childData.horario_11_cliente){
                       document.getElementById("idTime11").innerHTML=childData.horario_11_cliente;
                       //document.getElementById("dataRecebimento11").innerHTML=childData.horario_11_data_rec;
                       document.getElementById("valorDesconto11").value=childData.horario_11_valor_desc;
                       if(childData.horario_11_valor_rec){
                           document.getElementById("valorFinal11").innerHTML="€"+childData.horario_11_valor_rec;
                       }else{
                           document.getElementById("valorFinal11").innerHTML="€";
                       }
                       if(childData.horario_11_tipo_de_desconto){
                           document.getElementById("porcento11").value=childData.horario_11_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento11").value=0;
                       }
                       document.getElementById("compareceu11").disabled=false;
                       document.getElementById("porcento11").disabled=false;
                       document.getElementById("valorDesconto11").disabled=false;
                       document.getElementById("dataRecebimento11").disabled=false;
                       document.getElementById("pagou11").disabled=false;
                   }else{
                       document.getElementById("btnDel11").style.display="none";
                       document.getElementById("compareceu11").disabled=true;
                       document.getElementById("porcento11").disabled=true;
                       document.getElementById("valorDesconto11").disabled=true;
                       document.getElementById("dataRecebimento11").disabled=true;
                       document.getElementById("pagou11").disabled=true;
                   }
                   if(childData.horario_11_pagou){
                       document.getElementById("porcento11").disabled=true;
                       document.getElementById("valorDesconto11").disabled=true;
                       document.getElementById("dataRecebimento11").disabled=true;
                   }
                   if(childData.horario_12_cliente){
                       document.getElementById("idTime12").innerHTML=childData.horario_12_cliente;
                       //document.getElementById("dataRecebimento12").innerHTML=childData.horario_12_data_rec;
                       document.getElementById("valorDesconto12").value=childData.horario_12_valor_desc;
                       if(childData.horario_12_valor_rec){
                           document.getElementById("valorFinal12").innerHTML="€"+childData.horario_12_valor_rec;
                       }else{
                           document.getElementById("valorFinal12").innerHTML="€";
                       }
                       if(childData.horario_12_tipo_de_desconto){
                           document.getElementById("porcento12").value=childData.horario_12_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento12").value=0;
                       }
                       document.getElementById("compareceu12").disabled=false;
                       document.getElementById("porcento12").disabled=false;
                       document.getElementById("valorDesconto12").disabled=false;
                       document.getElementById("dataRecebimento12").disabled=false;
                       document.getElementById("pagou12").disabled=false;
                   }else{
                       document.getElementById("btnDel12").style.display="none";
                       document.getElementById("compareceu12").disabled=true;
                       document.getElementById("porcento12").disabled=true;
                       document.getElementById("valorDesconto12").disabled=true;
                       document.getElementById("dataRecebimento12").disabled=true;
                       document.getElementById("pagou12").disabled=true;
                   }
                   if(childData.horario_12_pagou){
                       document.getElementById("porcento12").disabled=true;
                       document.getElementById("valorDesconto12").disabled=true;
                       document.getElementById("dataRecebimento12").disabled=true;
                   }
                   if(childData.horario_13_cliente){
                       document.getElementById("idTime13").innerHTML=childData.horario_13_cliente;
                       //document.getElementById("dataRecebimento13").innerHTML=childData.horario_13_data_rec;
                       document.getElementById("valorDesconto13").value=childData.horario_13_valor_desc;
                       if(childData.horario_13_valor_rec){
                           document.getElementById("valorFinal13").innerHTML="€"+childData.horario_13_valor_rec;
                       }else{
                           document.getElementById("valorFinal13").innerHTML="€";
                       }
                       if(childData.horario_13_tipo_de_desconto){
                           document.getElementById("porcento13").value=childData.horario_13_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento13").value=0;
                       }
                       document.getElementById("compareceu13").disabled=false;
                       document.getElementById("porcento13").disabled=false;
                       document.getElementById("valorDesconto13").disabled=false;
                       document.getElementById("dataRecebimento13").disabled=false;
                       document.getElementById("pagou13").disabled=false;
                   }else{
                       document.getElementById("btnDel13").style.display="none";
                       document.getElementById("compareceu13").disabled=true;
                       document.getElementById("porcento13").disabled=true;
                       document.getElementById("valorDesconto13").disabled=true;
                       document.getElementById("dataRecebimento13").disabled=true;
                       document.getElementById("pagou13").disabled=true;
                   }
                   if(childData.horario_13_pagou){
                       document.getElementById("porcento13").disabled=true;
                       document.getElementById("valorDesconto13").disabled=true;
                       document.getElementById("dataRecebimento13").disabled=true;
                   }
                   if(childData.horario_14_cliente){
                       document.getElementById("idTime14").innerHTML=childData.horario_14_cliente;
                       //document.getElementById("dataRecebimento14").innerHTML=childData.horario_14_data_rec;
                       document.getElementById("valorDesconto14").value=childData.horario_14_valor_desc;
                       if(childData.horario_14_valor_rec){
                           document.getElementById("valorFinal14").innerHTML="€"+childData.horario_14_valor_rec;
                       }else{
                           document.getElementById("valorFinal14").innerHTML="€";
                       }
                       if(childData.horario_14_tipo_de_desconto){
                           document.getElementById("porcento14").value=childData.horario_14_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento14").value=0;
                       }
                       document.getElementById("compareceu14").disabled=false;
                       document.getElementById("porcento14").disabled=false;
                       document.getElementById("valorDesconto14").disabled=false;
                       document.getElementById("dataRecebimento14").disabled=false;
                       document.getElementById("pagou14").disabled=false;
                   }else{
                       document.getElementById("btnDel14").style.display="none";
                       document.getElementById("compareceu14").disabled=true;
                       document.getElementById("porcento14").disabled=true;
                       document.getElementById("valorDesconto14").disabled=true;
                       document.getElementById("dataRecebimento14").disabled=true;
                       document.getElementById("pagou14").disabled=true;
                   }
                   if(childData.horario_14_pagou){
                       document.getElementById("porcento14").disabled=true;
                       document.getElementById("valorDesconto14").disabled=true;
                       document.getElementById("dataRecebimento14").disabled=true;
                   }
                   if(childData.horario_15_cliente){
                       document.getElementById("idTime15").innerHTML=childData.horario_15_cliente;
                       //document.getElementById("dataRecebimento15").innerHTML=childData.horario_15_data_rec;
                       document.getElementById("valorDesconto15").value=childData.horario_15_valor_desc;
                       if(childData.horario_15_valor_rec){
                           document.getElementById("valorFinal15").innerHTML="€"+childData.horario_15_valor_rec;
                       }else{
                           document.getElementById("valorFinal15").innerHTML="€";
                       }
                       if(childData.horario_15_tipo_de_desconto){
                           document.getElementById("porcento15").value=childData.horario_15_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento15").value=0;
                       }
                       document.getElementById("compareceu15").disabled=false;
                       document.getElementById("porcento15").disabled=false;
                       document.getElementById("valorDesconto15").disabled=false;
                       document.getElementById("dataRecebimento15").disabled=false;
                       document.getElementById("pagou15").disabled=false;
                   }else{
                       document.getElementById("btnDel15").style.display="none";
                       document.getElementById("compareceu15").disabled=true;
                       document.getElementById("porcento15").disabled=true;
                       document.getElementById("valorDesconto15").disabled=true;
                       document.getElementById("dataRecebimento15").disabled=true;
                       document.getElementById("pagou15").disabled=true;
                   }
                   if(childData.horario_15_pagou){
                       document.getElementById("porcento15").disabled=true;
                       document.getElementById("valorDesconto15").disabled=true;
                       document.getElementById("dataRecebimento15").disabled=true;
                   }
                   if(childData.horario_16_cliente){
                       document.getElementById("idTime16").innerHTML=childData.horario_16_cliente;
                       //document.getElementById("dataRecebimento16").innerHTML=childData.horario_16_data_rec;
                       document.getElementById("valorDesconto16").value=childData.horario_16_valor_desc;
                       if(childData.horario_16_valor_rec){
                           document.getElementById("valorFinal16").innerHTML="€"+childData.horario_16_valor_rec;
                       }else{
                           document.getElementById("valorFinal16").innerHTML="€";
                       }
                       if(childData.horario_16_tipo_de_desconto){
                           document.getElementById("porcento16").value=childData.horario_16_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento16").value=0;
                       }
                       document.getElementById("compareceu16").disabled=false;
                       document.getElementById("porcento16").disabled=false;
                       document.getElementById("valorDesconto16").disabled=false;
                       document.getElementById("dataRecebimento16").disabled=false;
                       document.getElementById("pagou16").disabled=false;
                   }else{
                       document.getElementById("btnDel16").style.display="none";
                       document.getElementById("compareceu16").disabled=true;
                       document.getElementById("porcento16").disabled=true;
                       document.getElementById("valorDesconto16").disabled=true;
                       document.getElementById("dataRecebimento16").disabled=true;
                       document.getElementById("pagou16").disabled=true;
                   }
                   if(childData.horario_16_pagou){
                       document.getElementById("porcento16").disabled=true;
                       document.getElementById("valorDesconto16").disabled=true;
                       document.getElementById("dataRecebimento16").disabled=true;
                   }
                   if(childData.horario_17_cliente){
                       document.getElementById("idTime17").innerHTML=childData.horario_17_cliente;
                       //document.getElementById("dataRecebimento17").innerHTML=childData.horario_17_data_rec;
                       document.getElementById("valorDesconto17").value=childData.horario_17_valor_desc;
                       if(childData.horario_17_valor_rec){
                           document.getElementById("valorFinal17").innerHTML="€"+childData.horario_17_valor_rec;
                       }else{
                           document.getElementById("valorFinal17").innerHTML="€";
                       }
                       if(childData.horario_17_tipo_de_desconto){
                           document.getElementById("porcento17").value=childData.horario_17_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento17").value=0;
                       }
                       document.getElementById("compareceu17").disabled=false;
                       document.getElementById("porcento17").disabled=false;
                       document.getElementById("valorDesconto17").disabled=false;
                       document.getElementById("dataRecebimento17").disabled=false;
                       document.getElementById("pagou17").disabled=false;
                   }else{
                       document.getElementById("btnDel17").style.display="none";
                       document.getElementById("compareceu17").disabled=true;
                       document.getElementById("porcento17").disabled=true;
                       document.getElementById("valorDesconto17").disabled=true;
                       document.getElementById("dataRecebimento17").disabled=true;
                       document.getElementById("pagou17").disabled=true;
                   }
                   if(childData.horario_17_pagou){
                       document.getElementById("porcento17").disabled=true;
                       document.getElementById("valorDesconto17").disabled=true;
                       document.getElementById("dataRecebimento17").disabled=true;
                   }
                   if(childData.horario_18_cliente){
                       document.getElementById("idTime18").innerHTML=childData.horario_18_cliente;
                       //document.getElementById("dataRecebimento18").innerHTML=childData.horario_18_data_rec;
                       document.getElementById("valorDesconto18").value=childData.horario_18_valor_desc;
                       if(childData.horario_18_valor_rec){
                           document.getElementById("valorFinal18").innerHTML="€"+childData.horario_18_valor_rec;
                       }else{
                           document.getElementById("valorFinal18").innerHTML="€";
                       }
                       if(childData.horario_18_tipo_de_desconto){
                           document.getElementById("porcento18").value=childData.horario_18_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento18").value=0;
                       }
                       document.getElementById("compareceu18").disabled=false;
                       document.getElementById("porcento18").disabled=false;
                       document.getElementById("valorDesconto18").disabled=false;
                       document.getElementById("dataRecebimento18").disabled=false;
                       document.getElementById("pagou18").disabled=false;
                   }else{
                       document.getElementById("btnDel18").style.display="none";
                       document.getElementById("compareceu18").disabled=true;
                       document.getElementById("porcento18").disabled=true;
                       document.getElementById("valorDesconto18").disabled=true;
                       document.getElementById("dataRecebimento18").disabled=true;
                       document.getElementById("pagou18").disabled=true;
                   }
                   if(childData.horario_18_pagou){
                       document.getElementById("porcento18").disabled=true;
                       document.getElementById("valorDesconto18").disabled=true;
                       document.getElementById("dataRecebimento18").disabled=true;
                   }
                   if(childData.horario_19_cliente){
                       document.getElementById("idTime19").innerHTML=childData.horario_19_cliente;
                      // document.getElementById("dataRecebimento19").innerHTML=childData.horario_19_data_rec;
                       document.getElementById("valorDesconto19").value=childData.horario_19_valor_desc;
                       if(childData.horario_19_valor_rec){
                           document.getElementById("valorFinal19").innerHTML="€"+childData.horario_19_valor_rec;
                       }else{
                           document.getElementById("valorFinal19").innerHTML="€";
                       }
                       if(childData.horario_19_tipo_de_desconto){
                           document.getElementById("porcento19").value=childData.horario_19_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento19").value=0;
                       }
                       document.getElementById("compareceu19").disabled=false;
                       document.getElementById("porcento19").disabled=false;
                       document.getElementById("valorDesconto19").disabled=false;
                       document.getElementById("dataRecebimento19").disabled=false;
                       document.getElementById("pagou19").disabled=false;
                   }else{
                       document.getElementById("btnDel19").style.display="none";
                       document.getElementById("compareceu19").disabled=true;
                       document.getElementById("porcento19").disabled=true;
                       document.getElementById("valorDesconto19").disabled=true;
                       document.getElementById("dataRecebimento19").disabled=true;
                       document.getElementById("pagou19").disabled=true;
                   }
                   if(childData.horario_19_pagou){
                       document.getElementById("porcento19").disabled=true;
                       document.getElementById("valorDesconto19").disabled=true;
                       document.getElementById("dataRecebimento19").disabled=true;
                   }
                   if(childData.horario_20_cliente){
                       document.getElementById("idTime20").innerHTML=childData.horario_20_cliente;
                       //document.getElementById("dataRecebimento20").innerHTML=childData.horario_20_data_rec;
                       document.getElementById("valorDesconto20").value=childData.horario_20_valor_desc;
                       if(childData.horario_20_valor_rec){
                           document.getElementById("valorFinal20").innerHTML="€"+childData.horario_20_valor_rec;
                       }else{
                           document.getElementById("valorFinal20").innerHTML="€";
                       }
                       if(childData.horario_20_tipo_de_desconto){
                           document.getElementById("porcento20").value=childData.horario_20_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento20").value=0;
                       }
                       document.getElementById("compareceu20").disabled=false;
                       document.getElementById("porcento20").disabled=false;
                       document.getElementById("valorDesconto20").disabled=false;
                       document.getElementById("dataRecebimento20").disabled=false;
                       document.getElementById("pagou20").disabled=false;
                   }else{
                       document.getElementById("btnDel20").style.display="none";
                       document.getElementById("compareceu20").disabled=true;
                       document.getElementById("porcento20").disabled=true;
                       document.getElementById("valorDesconto20").disabled=true;
                       document.getElementById("dataRecebimento20").disabled=true;
                       document.getElementById("pagou20").disabled=true;
                   }
                   if(childData.horario_20_pagou){
                       document.getElementById("porcento20").disabled=true;
                       document.getElementById("valorDesconto20").disabled=true;
                       document.getElementById("dataRecebimento20").disabled=true;
                   }
                   if(childData.horario_21_cliente){
                       document.getElementById("idTime21").innerHTML=childData.horario_21_cliente;
                       //document.getElementById("dataRecebimento21").innerHTML=childData.horario_21_data_rec;
                       document.getElementById("valorDesconto21").value=childData.horario_21_valor_desc;
                       if(childData.horario_21_valor_rec){
                           document.getElementById("valorFinal21").innerHTML="€"+childData.horario_21_valor_rec;
                       }else{
                           document.getElementById("valorFinal21").innerHTML="€";
                       }
                       if(childData.horario_21_tipo_de_desconto){
                           document.getElementById("porcento21").value=childData.horario_21_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento21").value=0;
                       }
                       document.getElementById("compareceu21").disabled=false;
                       document.getElementById("porcento21").disabled=false;
                       document.getElementById("valorDesconto21").disabled=false;
                       document.getElementById("dataRecebimento21").disabled=false;
                       document.getElementById("pagou21").disabled=false;
                   }else{
                       document.getElementById("btnDel21").style.display="none";
                       document.getElementById("compareceu21").disabled=true;
                       document.getElementById("porcento21").disabled=true;
                       document.getElementById("valorDesconto21").disabled=true;
                       document.getElementById("dataRecebimento21").disabled=true;
                       document.getElementById("pagou21").disabled=true;
                   }
                   if(childData.horario_21_pagou){
                       document.getElementById("porcento21").disabled=true;
                       document.getElementById("valorDesconto21").disabled=true;
                       document.getElementById("dataRecebimento21").disabled=true;
                   }
                   if(childData.horario_22_cliente){
                       document.getElementById("idTime22").innerHTML=childData.horario_22_cliente;
                       //document.getElementById("dataRecebimento22").innerHTML=childData.horario_22_data_rec;
                       document.getElementById("valorDesconto22").value=childData.horario_22_valor_desc;
                       if(childData.horario_22_valor_rec){
                           document.getElementById("valorFinal22").innerHTML="€"+childData.horario_22_valor_rec;
                       }else{
                           document.getElementById("valorFinal22").innerHTML="€";
                       }
                       if(childData.horario_22_tipo_de_desconto){
                           document.getElementById("porcento22").value=childData.horario_22_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento22").value=0;
                       }
                       document.getElementById("compareceu22").disabled=false;
                       document.getElementById("porcento22").disabled=false;
                       document.getElementById("valorDesconto22").disabled=false;
                       document.getElementById("dataRecebimento22").disabled=false;
                       document.getElementById("pagou22").disabled=false;
                   }else{
                       document.getElementById("btnDel22").style.display="none";
                       document.getElementById("compareceu22").disabled=true;
                       document.getElementById("porcento22").disabled=true;
                       document.getElementById("valorDesconto22").disabled=true;
                       document.getElementById("dataRecebimento22").disabled=true;
                       document.getElementById("pagou22").disabled=true;
                   }
                   if(childData.horario_22_pagou){
                       document.getElementById("porcento22").disabled=true;
                       document.getElementById("valorDesconto22").disabled=true;
                       document.getElementById("dataRecebimento22").disabled=true;
                   }
                   if(childData.horario_23_cliente){
                       document.getElementById("idTime23").innerHTML=childData.horario_23_cliente;
                       //document.getElementById("dataRecebimento23").innerHTML=childData.horario_23_data_rec;
                       document.getElementById("valorDesconto23").value=childData.horario_23_valor_desc;
                       if(childData.horario_23_valor_rec){
                           document.getElementById("valorFinal23").innerHTML="€"+childData.horario_23_valor_rec;
                       }else{
                           document.getElementById("valorFinal23").innerHTML="€";
                       }
                       if(childData.horario_23_tipo_de_desconto){
                           document.getElementById("porcento23").value=childData.horario_23_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento23").value=0;
                       }
                       document.getElementById("compareceu23").disabled=false;
                       document.getElementById("porcento23").disabled=false;
                       document.getElementById("valorDesconto23").disabled=false;
                       document.getElementById("dataRecebimento23").disabled=false;
                       document.getElementById("pagou23").disabled=false;
                   }else{
                       document.getElementById("btnDel23").style.display="none";
                       document.getElementById("compareceu23").disabled=true;
                       document.getElementById("porcento23").disabled=true;
                       document.getElementById("valorDesconto23").disabled=true;
                       document.getElementById("dataRecebimento23").disabled=true;
                       document.getElementById("pagou23").disabled=true;
                   }
                   if(childData.horario_23_pagou){
                       document.getElementById("porcento23").disabled=true;
                       document.getElementById("valorDesconto23").disabled=true;
                       document.getElementById("dataRecebimento23").disabled=true;
                   }
                   if(childData.horario_24_cliente){
                       document.getElementById("idTime24").innerHTML=childData.horario_24_cliente;
                       //document.getElementById("dataRecebimento24").innerHTML=childData.horario_24_data_rec;
                       document.getElementById("valorDesconto24").value=childData.horario_24_valor_desc;
                       if(childData.horario_24_valor_rec){
                           document.getElementById("valorFinal24").innerHTML="€"+childData.horario_24_valor_rec;
                       }else{
                           document.getElementById("valorFinal24").innerHTML="€";
                       }
                       if(childData.horario_24_tipo_de_desconto){
                           document.getElementById("porcento24").value=childData.horario_24_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento24").value=0;
                       }
                       document.getElementById("compareceu24").disabled=false;
                       document.getElementById("porcento24").disabled=false;
                       document.getElementById("valorDesconto24").disabled=false;
                       document.getElementById("dataRecebimento24").disabled=false;
                       document.getElementById("pagou24").disabled=false;
                   }else{
                       document.getElementById("btnDel24").style.display="none";
                       document.getElementById("compareceu24").disabled=true;
                       document.getElementById("porcento24").disabled=true;
                       document.getElementById("valorDesconto24").disabled=true;
                       document.getElementById("dataRecebimento24").disabled=true;
                       document.getElementById("pagou24").disabled=true;
                   }
                   if(childData.horario_24_pagou){
                       document.getElementById("porcento24").disabled=true;
                       document.getElementById("valorDesconto24").disabled=true;
                       document.getElementById("dataRecebimento24").disabled=true;
                   }
                   if(childData.horario_25_cliente){
                       document.getElementById("idTime25").innerHTML=childData.horario_25_cliente;
                       document.getElementById("valorDesconto25").value=childData.horario_25_valor_desc;
                       if(childData.horario_25_valor_rec){
                           document.getElementById("valorFinal25").innerHTML="€"+childData.horario_25_valor_rec;
                       }else{
                           document.getElementById("valorFinal25").innerHTML="€";
                       }
                       if(childData.horario_25_tipo_de_desconto){
                           document.getElementById("porcento25").value=childData.horario_25_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento25").value=0;
                       }
                       document.getElementById("compareceu25").disabled=false;
                       document.getElementById("porcento25").disabled=false;
                       document.getElementById("valorDesconto25").disabled=false;
                       document.getElementById("dataRecebimento25").disabled=false;
                       document.getElementById("pagou25").disabled=false;
                   }else{
                       document.getElementById("btnDel25").style.display="none";
                       document.getElementById("compareceu25").disabled=true;
                       document.getElementById("porcento25").disabled=true;
                       document.getElementById("valorDesconto25").disabled=true;
                       document.getElementById("dataRecebimento25").disabled=true;
                       document.getElementById("pagou25").disabled=true;
                   }
                   if(childData.horario_25_pagou){
                       document.getElementById("porcento25").disabled=true;
                       document.getElementById("valorDesconto25").disabled=true;
                       document.getElementById("dataRecebimento25").disabled=true;
                   }
                   if(childData.horario_26_cliente){
                       document.getElementById("idTime26").innerHTML=childData.horario_26_cliente;
                       document.getElementById("valorDesconto26").value=childData.horario_26_valor_desc;
                       if(childData.horario_26_valor_rec){
                           document.getElementById("valorFinal26").innerHTML="€"+childData.horario_26_valor_rec;
                       }else{
                           document.getElementById("valorFinal26").innerHTML="€";
                       }
                       if(childData.horario_26_tipo_de_desconto){
                           document.getElementById("porcento26").value=childData.horario_26_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento26").value=0;
                       }
                       document.getElementById("compareceu26").disabled=false;
                       document.getElementById("porcento26").disabled=false;
                       document.getElementById("valorDesconto26").disabled=false;
                       document.getElementById("dataRecebimento26").disabled=false;
                       document.getElementById("pagou26").disabled=false;
                   }else{
                       document.getElementById("btnDel26").style.display="none";
                       document.getElementById("compareceu26").disabled=true;
                       document.getElementById("porcento26").disabled=true;
                       document.getElementById("valorDesconto26").disabled=true;
                       document.getElementById("dataRecebimento26").disabled=true;
                       document.getElementById("pagou26").disabled=true;
                   }
                   if(childData.horario_26_pagou){
                       document.getElementById("porcento26").disabled=true;
                       document.getElementById("valorDesconto26").disabled=true;
                       document.getElementById("dataRecebimento26").disabled=true;
                   }
                   if(childData.horario_27_cliente){
                       document.getElementById("idTime27").innerHTML=childData.horario_27_cliente;
                       document.getElementById("valorDesconto27").value=childData.horario_27_valor_desc;
                       if(childData.horario_27_valor_rec){
                           document.getElementById("valorFinal27").innerHTML="€"+childData.horario_27_valor_rec;
                       }else{
                           document.getElementById("valorFinal27").innerHTML="€";
                       }
                       if(childData.horario_27_tipo_de_desconto){
                           document.getElementById("porcento27").value=childData.horario_27_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento27").value=0;
                       }
                       document.getElementById("compareceu27").disabled=false;
                       document.getElementById("porcento27").disabled=false;
                       document.getElementById("valorDesconto27").disabled=false;
                       document.getElementById("dataRecebimento27").disabled=false;
                       document.getElementById("pagou27").disabled=false;
                   }else{
                       document.getElementById("btnDel27").style.display="none";
                       document.getElementById("compareceu27").disabled=true;
                       document.getElementById("porcento27").disabled=true;
                       document.getElementById("valorDesconto27").disabled=true;
                       document.getElementById("dataRecebimento27").disabled=true;
                       document.getElementById("pagou27").disabled=true;
                   }
                   if(childData.horario_27_pagou){
                       document.getElementById("porcento27").disabled=true;
                       document.getElementById("valorDesconto27").disabled=true;
                       document.getElementById("dataRecebimento27").disabled=true;
                   }
                   if(childData.horario_28_cliente){
                       document.getElementById("idTime28").innerHTML=childData.horario_28_cliente;
                       document.getElementById("valorDesconto28").value=childData.horario_28_valor_desc;
                       if(childData.horario_28_valor_rec){
                           document.getElementById("valorFinal28").innerHTML="€"+childData.horario_28_valor_rec;
                       }else{
                           document.getElementById("valorFinal28").innerHTML="€";
                       }
                       if(childData.horario_28_tipo_de_desconto){
                           document.getElementById("porcento28").value=childData.horario_28_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento28").value=0;
                       }
                       document.getElementById("compareceu28").disabled=false;
                       document.getElementById("porcento28").disabled=false;
                       document.getElementById("valorDesconto28").disabled=false;
                       document.getElementById("dataRecebimento28").disabled=false;
                       document.getElementById("pagou28").disabled=false;
                   }else{
                       document.getElementById("btnDel28").style.display="none";
                       document.getElementById("compareceu28").disabled=true;
                       document.getElementById("porcento28").disabled=true;
                       document.getElementById("valorDesconto28").disabled=true;
                       document.getElementById("dataRecebimento28").disabled=true;
                       document.getElementById("pagou28").disabled=true;
                   }
                   if(childData.horario_28_pagou){
                       document.getElementById("porcento28").disabled=true;
                       document.getElementById("valorDesconto28").disabled=true;
                       document.getElementById("dataRecebimento28").disabled=true;
                   }
                   if(childData.horario_29_cliente){
                       document.getElementById("idTime29").innerHTML=childData.horario_29_cliente;
                       document.getElementById("valorDesconto29").value=childData.horario_29_valor_desc;
                       if(childData.horario_29_valor_rec){
                           document.getElementById("valorFinal29").innerHTML="€"+childData.horario_29_valor_rec;
                       }else{
                           document.getElementById("valorFinal29").innerHTML="€";
                       }
                       if(childData.horario_29_tipo_de_desconto){
                           document.getElementById("porcento29").value=childData.horario_29_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento29").value=0;
                       }
                       document.getElementById("compareceu29").disabled=false;
                       document.getElementById("porcento29").disabled=false;
                       document.getElementById("valorDesconto29").disabled=false;
                       document.getElementById("dataRecebimento29").disabled=false;
                       document.getElementById("pagou29").disabled=false;
                   }else{
                       document.getElementById("btnDel29").style.display="none";
                       document.getElementById("compareceu29").disabled=true;
                       document.getElementById("porcento29").disabled=true;
                       document.getElementById("valorDesconto29").disabled=true;
                       document.getElementById("dataRecebimento29").disabled=true;
                       document.getElementById("pagou29").disabled=true;
                   }
                   if(childData.horario_29_pagou){
                       document.getElementById("porcento29").disabled=true;
                       document.getElementById("valorDesconto29").disabled=true;
                       document.getElementById("dataRecebimento29").disabled=true;
                   }
                   if(childData.horario_30_cliente){
                       document.getElementById("idTime30").innerHTML=childData.horario_30_cliente;
                       document.getElementById("valorDesconto30").value=childData.horario_30_valor_desc;
                       if(childData.horario_30_valor_rec){
                           document.getElementById("valorFinal30").innerHTML="€"+childData.horario_30_valor_rec;
                       }else{
                           document.getElementById("valorFinal30").innerHTML="€";
                       }
                       if(childData.horario_30_tipo_de_desconto){
                           document.getElementById("porcento30").value=childData.horario_30_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento30").value=0;
                       }
                       document.getElementById("compareceu30").disabled=false;
                       document.getElementById("porcento30").disabled=false;
                       document.getElementById("valorDesconto30").disabled=false;
                       document.getElementById("dataRecebimento30").disabled=false;
                       document.getElementById("pagou30").disabled=false;
                   }else{
                       document.getElementById("btnDel30").style.display="none";
                       document.getElementById("compareceu30").disabled=true;
                       document.getElementById("porcento30").disabled=true;
                       document.getElementById("valorDesconto30").disabled=true;
                       document.getElementById("dataRecebimento30").disabled=true;
                       document.getElementById("pagou30").disabled=true;
                   }
                   if(childData.horario_30_pagou){
                       document.getElementById("porcento30").disabled=true;
                       document.getElementById("valorDesconto30").disabled=true;
                       document.getElementById("dataRecebimento30").disabled=true;
                   }
                   if(childData.horario_31_cliente){
                       document.getElementById("idTime31").innerHTML=childData.horario_31_cliente;
                       document.getElementById("valorDesconto31").value=childData.horario_31_valor_desc;
                       if(childData.horario_31_valor_rec){
                           document.getElementById("valorFinal31").innerHTML="€"+childData.horario_31_valor_rec;
                       }else{
                           document.getElementById("valorFinal31").innerHTML="€";
                       }
                       if(childData.horario_31_tipo_de_desconto){
                           document.getElementById("porcento31").value=childData.horario_31_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento31").value=0;
                       }
                       document.getElementById("compareceu31").disabled=false;
                       document.getElementById("porcento31").disabled=false;
                       document.getElementById("valorDesconto31").disabled=false;
                       document.getElementById("dataRecebimento31").disabled=false;
                       document.getElementById("pagou31").disabled=false;
                   }else{
                       document.getElementById("btnDel31").style.display="none";
                       document.getElementById("compareceu31").disabled=true;
                       document.getElementById("porcento31").disabled=true;
                       document.getElementById("valorDesconto31").disabled=true;
                       document.getElementById("dataRecebimento31").disabled=true;
                       document.getElementById("pagou31").disabled=true;
                   }
                   if(childData.horario_31_pagou){
                       document.getElementById("porcento31").disabled=true;
                       document.getElementById("valorDesconto31").disabled=true;
                       document.getElementById("dataRecebimento31").disabled=true;
                   }
                   if(childData.horario_32_cliente){
                       document.getElementById("idTime32").innerHTML=childData.horario_32_cliente;
                       document.getElementById("valorDesconto32").value=childData.horario_32_valor_desc;
                       if(childData.horario_32_valor_rec){
                           document.getElementById("valorFinal32").innerHTML="€"+childData.horario_32_valor_rec;
                       }else{
                           document.getElementById("valorFinal32").innerHTML="€";
                       }
                       if(childData.horario_32_tipo_de_desconto){
                           document.getElementById("porcento32").value=childData.horario_32_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento32").value=0;
                       }
                       document.getElementById("compareceu32").disabled=false;
                       document.getElementById("porcento32").disabled=false;
                       document.getElementById("valorDesconto32").disabled=false;
                       document.getElementById("dataRecebimento32").disabled=false;
                       document.getElementById("pagou32").disabled=false;
                   }else{
                       document.getElementById("btnDel32").style.display="none";
                       document.getElementById("compareceu32").disabled=true;
                       document.getElementById("porcento32").disabled=true;
                       document.getElementById("valorDesconto32").disabled=true;
                       document.getElementById("dataRecebimento32").disabled=true;
                       document.getElementById("pagou32").disabled=true;
                   }
                   if(childData.horario_32_pagou){
                       document.getElementById("porcento32").disabled=true;
                       document.getElementById("valorDesconto32").disabled=true;
                       document.getElementById("dataRecebimento32").disabled=true;
                   }
                   if(childData.horario_33_cliente){
                       document.getElementById("idTime33").innerHTML=childData.horario_33_cliente;
                       document.getElementById("valorDesconto33").value=childData.horario_33_valor_desc;
                       if(childData.horario_33_valor_rec){
                           document.getElementById("valorFinal33").innerHTML="€"+childData.horario_33_valor_rec;
                       }else{
                           document.getElementById("valorFinal33").innerHTML="€";
                       }
                       if(childData.horario_33_tipo_de_desconto){
                           document.getElementById("porcento33").value=childData.horario_33_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento33").value=0;
                       }
                       document.getElementById("compareceu33").disabled=false;
                       document.getElementById("porcento33").disabled=false;
                       document.getElementById("valorDesconto33").disabled=false;
                       document.getElementById("dataRecebimento33").disabled=false;
                       document.getElementById("pagou33").disabled=false;
                   }else{
                       document.getElementById("btnDel33").style.display="none";
                       document.getElementById("compareceu33").disabled=true;
                       document.getElementById("porcento33").disabled=true;
                       document.getElementById("valorDesconto33").disabled=true;
                       document.getElementById("dataRecebimento33").disabled=true;
                       document.getElementById("pagou33").disabled=true;
                   }
                   if(childData.horario_33_pagou){
                       document.getElementById("porcento33").disabled=true;
                       document.getElementById("valorDesconto33").disabled=true;
                       document.getElementById("dataRecebimento33").disabled=true;
                   }
                   if(childData.horario_34_cliente){
                       document.getElementById("idTime34").innerHTML=childData.horario_34_cliente;
                       document.getElementById("valorDesconto34").value=childData.horario_34_valor_desc;
                       if(childData.horario_34_valor_rec){
                           document.getElementById("valorFinal34").innerHTML="€"+childData.horario_34_valor_rec;
                       }else{
                           document.getElementById("valorFinal34").innerHTML="€";
                       }
                       if(childData.horario_34_tipo_de_desconto){
                           document.getElementById("porcento34").value=childData.horario_34_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento34").value=0;
                       }
                       document.getElementById("compareceu34").disabled=false;
                       document.getElementById("porcento34").disabled=false;
                       document.getElementById("valorDesconto34").disabled=false;
                       document.getElementById("dataRecebimento34").disabled=false;
                       document.getElementById("pagou34").disabled=false;
                   }else{
                       document.getElementById("btnDel34").style.display="none";
                       document.getElementById("compareceu34").disabled=true;
                       document.getElementById("porcento34").disabled=true;
                       document.getElementById("valorDesconto34").disabled=true;
                       document.getElementById("dataRecebimento34").disabled=true;
                       document.getElementById("pagou34").disabled=true;
                   }
                   if(childData.horario_34_pagou){
                       document.getElementById("porcento34").disabled=true;
                       document.getElementById("valorDesconto34").disabled=true;
                       document.getElementById("dataRecebimento34").disabled=true;
                   }
                   if(childData.horario_35_cliente){
                       document.getElementById("idTime35").innerHTML=childData.horario_35_cliente;
                       document.getElementById("valorDesconto35").value=childData.horario_35_valor_desc;
                       if(childData.horario_35_valor_rec){
                           document.getElementById("valorFinal35").innerHTML="€"+childData.horario_35_valor_rec;
                       }else{
                           document.getElementById("valorFinal35").innerHTML="€";
                       }
                       if(childData.horario_35_tipo_de_desconto){
                           document.getElementById("porcento35").value=childData.horario_35_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento35").value=0;
                       }
                       document.getElementById("compareceu35").disabled=false;
                       document.getElementById("porcento35").disabled=false;
                       document.getElementById("valorDesconto35").disabled=false;
                       document.getElementById("dataRecebimento35").disabled=false;
                       document.getElementById("pagou35").disabled=false;
                   }else{
                       document.getElementById("btnDel35").style.display="none";
                       document.getElementById("compareceu35").disabled=true;
                       document.getElementById("porcento35").disabled=true;
                       document.getElementById("valorDesconto35").disabled=true;
                       document.getElementById("dataRecebimento35").disabled=true;
                       document.getElementById("pagou35").disabled=true;
                   }
                   if(childData.horario_35_pagou){
                       document.getElementById("porcento35").disabled=true;
                       document.getElementById("valorDesconto35").disabled=true;
                       document.getElementById("dataRecebimento35").disabled=true;
                   }
                   if(childData.horario_36_cliente){
                       document.getElementById("idTime36").innerHTML=childData.horario_36_cliente;
                       document.getElementById("valorDesconto36").value=childData.horario_36_valor_desc;
                       if(childData.horario_36_valor_rec){
                           document.getElementById("valorFinal36").innerHTML="€"+childData.horario_36_valor_rec;
                       }else{
                           document.getElementById("valorFinal36").innerHTML="€";
                       }
                       if(childData.horario_36_tipo_de_desconto){
                           document.getElementById("porcento36").value=childData.horario_36_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento36").value=0;
                       }
                       document.getElementById("compareceu36").disabled=false;
                       document.getElementById("porcento36").disabled=false;
                       document.getElementById("valorDesconto36").disabled=false;
                       document.getElementById("dataRecebimento36").disabled=false;
                       document.getElementById("pagou36").disabled=false;
                   }else{
                       document.getElementById("btnDel36").style.display="none";
                       document.getElementById("compareceu36").disabled=true;
                       document.getElementById("porcento36").disabled=true;
                       document.getElementById("valorDesconto36").disabled=true;
                       document.getElementById("dataRecebimento36").disabled=true;
                       document.getElementById("pagou36").disabled=true;
                   }
                   if(childData.horario_36_pagou){
                       document.getElementById("porcento36").disabled=true;
                       document.getElementById("valorDesconto36").disabled=true;
                       document.getElementById("dataRecebimento36").disabled=true;
                   }
                   if(childData.horario_37_cliente){
                       document.getElementById("idTime37").innerHTML=childData.horario_37_cliente;
                       document.getElementById("valorDesconto37").value=childData.horario_37_valor_desc;
                       document.getElementById("valorFinal37").innerHTML="€"+childData.horario_37_valor_rec;
                       if(childData.horario_37_valor_rec){
                           document.getElementById("valorFinal37").innerHTML="€"+childData.horario_37_valor_rec;
                       }else{
                           document.getElementById("valorFinal37").innerHTML="€";
                       }
                       if(childData.horario_37_tipo_de_desconto){
                           document.getElementById("porcento37").value=childData.horario_37_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento37").value=0;
                       }
                       document.getElementById("compareceu37").disabled=false;
                       document.getElementById("porcento37").disabled=false;
                       document.getElementById("valorDesconto37").disabled=false;
                       document.getElementById("dataRecebimento37").disabled=false;
                       document.getElementById("pagou37").disabled=false;
                   }else{
                       document.getElementById("btnDel37").style.display="none";
                       document.getElementById("compareceu37").disabled=true;
                       document.getElementById("porcento37").disabled=true;
                       document.getElementById("valorDesconto37").disabled=true;
                       document.getElementById("dataRecebimento37").disabled=true;
                       document.getElementById("pagou37").disabled=true;
                   }
                   if(childData.horario_37_pagou){
                       document.getElementById("porcento37").disabled=true;
                       document.getElementById("valorDesconto37").disabled=true;
                       document.getElementById("dataRecebimento37").disabled=true;
                   }
                   if(childData.horario_38_cliente){
                       document.getElementById("idTime38").innerHTML=childData.horario_38_cliente;
                       document.getElementById("valorDesconto38").value=childData.horario_38_valor_desc;
                       if(childData.horario_38_valor_rec){
                           document.getElementById("valorFinal38").innerHTML="€"+childData.horario_38_valor_rec;
                       }else{
                           document.getElementById("valorFinal38").innerHTML="€";
                       }
                       if(childData.horario_38_tipo_de_desconto){
                           document.getElementById("porcento38").value=childData.horario_38_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento38").value=0;
                       }
                       document.getElementById("compareceu38").disabled=false;
                       document.getElementById("porcento38").disabled=false;
                       document.getElementById("valorDesconto38").disabled=false;
                       document.getElementById("dataRecebimento38").disabled=false;
                       document.getElementById("pagou38").disabled=false;
                   }else{
                       document.getElementById("btnDel38").style.display="none";
                       document.getElementById("compareceu38").disabled=true;
                       document.getElementById("porcento38").disabled=true;
                       document.getElementById("valorDesconto38").disabled=true;
                       document.getElementById("dataRecebimento38").disabled=true;
                       document.getElementById("pagou38").disabled=true;
                   }
                   if(childData.horario_38_pagou){
                       document.getElementById("porcento38").disabled=true;
                       document.getElementById("valorDesconto38").disabled=true;
                       document.getElementById("dataRecebimento38").disabled=true;
                   }
                   if(childData.horario_39_cliente){
                       document.getElementById("idTime39").innerHTML=childData.horario_39_cliente;
                       document.getElementById("valorDesconto39").value=childData.horario_39_valor_desc;
                       if(childData.horario_39_valor_rec){
                           document.getElementById("valorFinal39").innerHTML="€"+childData.horario_39_valor_rec;
                       }else{
                           document.getElementById("valorFinal39").innerHTML="€";
                       }
                       if(childData.horario_39_tipo_de_desconto){
                           document.getElementById("porcento39").value=childData.horario_39_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento39").value=0;
                       }
                       document.getElementById("compareceu39").disabled=false;
                       document.getElementById("porcento39").disabled=false;
                       document.getElementById("valorDesconto39").disabled=false;
                       document.getElementById("dataRecebimento39").disabled=false;
                       document.getElementById("pagou39").disabled=false;
                   }else{
                       document.getElementById("btnDel39").style.display="none";
                       document.getElementById("compareceu39").disabled=true;
                       document.getElementById("porcento39").disabled=true;
                       document.getElementById("valorDesconto39").disabled=true;
                       document.getElementById("dataRecebimento39").disabled=true;
                       document.getElementById("pagou39").disabled=true;
                   }
                   if(childData.horario_39_pagou){
                       document.getElementById("porcento39").disabled=true;
                       document.getElementById("valorDesconto39").disabled=true;
                       document.getElementById("dataRecebimento39").disabled=true;
                   }
                   if(childData.horario_40_cliente){
                       document.getElementById("idTime40").innerHTML=childData.horario_40_cliente;
                       document.getElementById("valorDesconto40").value=childData.horario_40_valor_desc;
                       if(childData.horario_40_valor_rec){
                           document.getElementById("valorFinal40").innerHTML="€"+childData.horario_40_valor_rec;
                       }else{
                           document.getElementById("valorFinal40").innerHTML="€";
                       }
                       if(childData.horario_40_tipo_de_desconto){
                           document.getElementById("porcento40").value=childData.horario_40_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento40").value=0;
                       }
                       document.getElementById("compareceu40").disabled=false;
                       document.getElementById("porcento40").disabled=false;
                       document.getElementById("valorDesconto40").disabled=false;
                       document.getElementById("dataRecebimento40").disabled=false;
                       document.getElementById("pagou40").disabled=false;
                   }else{
                       document.getElementById("btnDel40").style.display="none";
                       document.getElementById("compareceu40").disabled=true;
                       document.getElementById("porcento40").disabled=true;
                       document.getElementById("valorDesconto40").disabled=true;
                       document.getElementById("dataRecebimento40").disabled=true;
                       document.getElementById("pagou40").disabled=true;
                   }
                   if(childData.horario_40_pagou){
                       document.getElementById("porcento40").disabled=true;
                       document.getElementById("valorDesconto40").disabled=true;
                       document.getElementById("dataRecebimento40").disabled=true;
                   }
                   if(childData.horario_41_cliente){
                       document.getElementById("idTime41").innerHTML=childData.horario_41_cliente;
                       document.getElementById("valorDesconto41").value=childData.horario_41_valor_desc;
                       if(childData.horario_41_valor_rec){
                           document.getElementById("valorFinal41").innerHTML="€"+childData.horario_41_valor_rec;
                       }else{
                           document.getElementById("valorFinal41").innerHTML="€";
                       }
                       if(childData.horario_41_tipo_de_desconto){
                           document.getElementById("porcento41").value=childData.horario_41_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento41").value=0;
                       }
                       document.getElementById("compareceu41").disabled=false;
                       document.getElementById("porcento41").disabled=false;
                       document.getElementById("valorDesconto41").disabled=false;
                       document.getElementById("dataRecebimento41").disabled=false;
                       document.getElementById("pagou41").disabled=false;
                   }else{
                       document.getElementById("btnDel41").style.display="none";
                       document.getElementById("compareceu41").disabled=true;
                       document.getElementById("porcento41").disabled=true;
                       document.getElementById("valorDesconto41").disabled=true;
                       document.getElementById("dataRecebimento41").disabled=true;
                       document.getElementById("pagou41").disabled=true;
                   }
                   if(childData.horario_41_pagou){
                       document.getElementById("porcento41").disabled=true;
                       document.getElementById("valorDesconto41").disabled=true;
                       document.getElementById("dataRecebimento41").disabled=true;
                   }
                   if(childData.horario_42_cliente){
                       document.getElementById("idTime42").innerHTML=childData.horario_42_cliente;
                       document.getElementById("valorDesconto42").value=childData.horario_42_valor_desc;
                       if(childData.horario_42_valor_rec){
                           document.getElementById("valorFinal42").innerHTML="€"+childData.horario_42_valor_rec;
                       }else{
                           document.getElementById("valorFinal42").innerHTML="€";
                       }
                       if(childData.horario_42_tipo_de_desconto){
                           document.getElementById("porcento42").value=childData.horario_42_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento42").value=0;
                       }
                       document.getElementById("compareceu42").disabled=false;
                       document.getElementById("porcento42").disabled=false;
                       document.getElementById("valorDesconto42").disabled=false;
                       document.getElementById("dataRecebimento42").disabled=false;
                       document.getElementById("pagou42").disabled=false;
                   }else{
                       document.getElementById("btnDel42").style.display="none";
                       document.getElementById("compareceu42").disabled=true;
                       document.getElementById("porcento42").disabled=true;
                       document.getElementById("valorDesconto42").disabled=true;
                       document.getElementById("dataRecebimento42").disabled=true;
                       document.getElementById("pagou42").disabled=true;
                   }
                   if(childData.horario_42_pagou){
                       document.getElementById("porcento42").disabled=true;
                       document.getElementById("valorDesconto42").disabled=true;
                       document.getElementById("dataRecebimento42").disabled=true;
                   }
                   if(childData.horario_43_cliente){
                       document.getElementById("idTime43").innerHTML=childData.horario_43_cliente;
                       document.getElementById("valorDesconto43").value=childData.horario_43_valor_desc;
                       if(childData.horario_43_valor_rec){
                           document.getElementById("valorFinal43").innerHTML="€"+childData.horario_43_valor_rec;
                       }else{
                           document.getElementById("valorFinal43").innerHTML="€";
                       }
                       if(childData.horario_43_tipo_de_desconto){
                           document.getElementById("porcento43").value=childData.horario_43_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento43").value=0;
                       }
                       document.getElementById("compareceu43").disabled=false;
                       document.getElementById("porcento43").disabled=false;
                       document.getElementById("valorDesconto43").disabled=false;
                       document.getElementById("dataRecebimento43").disabled=false;
                       document.getElementById("pagou43").disabled=false;
                   }else{
                       document.getElementById("btnDel43").style.display="none";
                       document.getElementById("compareceu43").disabled=true;
                       document.getElementById("porcento43").disabled=true;
                       document.getElementById("valorDesconto43").disabled=true;
                       document.getElementById("dataRecebimento43").disabled=true;
                       document.getElementById("pagou43").disabled=true;
                   }
                   if(childData.horario_43_pagou){
                       document.getElementById("porcento43").disabled=true;
                       document.getElementById("valorDesconto43").disabled=true;
                       document.getElementById("dataRecebimento43").disabled=true;
                   }
                   if(childData.horario_44_cliente){
                       document.getElementById("idTime44").innerHTML=childData.horario_44_cliente;
                       document.getElementById("valorDesconto44").value=childData.horario_44_valor_desc;
                       if(childData.horario_44_valor_rec){
                           document.getElementById("valorFinal44").innerHTML="€"+childData.horario_44_valor_rec;
                       }else{
                           document.getElementById("valorFinal44").innerHTML="€";
                       }
                       if(childData.horario_44_tipo_de_desconto){
                           document.getElementById("porcento44").value=childData.horario_44_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento44").value=0;
                       }
                       document.getElementById("compareceu44").disabled=false;
                       document.getElementById("porcento44").disabled=false;
                       document.getElementById("valorDesconto44").disabled=false;
                       document.getElementById("dataRecebimento44").disabled=false;
                       document.getElementById("pagou44").disabled=false;
                   }else{
                       document.getElementById("btnDel44").style.display="none";
                       document.getElementById("compareceu44").disabled=true;
                       document.getElementById("porcento44").disabled=true;
                       document.getElementById("valorDesconto44").disabled=true;
                       document.getElementById("dataRecebimento44").disabled=true;
                       document.getElementById("pagou44").disabled=true;
                   }
                   if(childData.horario_44_pagou){
                       document.getElementById("porcento44").disabled=true;
                       document.getElementById("valorDesconto44").disabled=true;
                       document.getElementById("dataRecebimento44").disabled=true;
                   }
                   if(childData.horario_45_cliente){
                       document.getElementById("idTime45").innerHTML=childData.horario_45_cliente;
                       document.getElementById("valorDesconto45").value=childData.horario_45_valor_desc;
                       if(childData.horario_45_valor_rec){
                           document.getElementById("valorFinal45").innerHTML="€"+childData.horario_45_valor_rec;
                       }else{
                           document.getElementById("valorFinal45").innerHTML="€";
                       }
                       if(childData.horario_45_tipo_de_desconto){
                           document.getElementById("porcento45").value=childData.horario_45_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento45").value=0;
                       }
                       document.getElementById("compareceu45").disabled=false;
                       document.getElementById("porcento45").disabled=false;
                       document.getElementById("valorDesconto45").disabled=false;
                       document.getElementById("dataRecebimento45").disabled=false;
                       document.getElementById("pagou45").disabled=false;
                   }else{
                       document.getElementById("btnDel45").style.display="none";
                       document.getElementById("compareceu45").disabled=true;
                       document.getElementById("porcento45").disabled=true;
                       document.getElementById("valorDesconto45").disabled=true;
                       document.getElementById("dataRecebimento45").disabled=true;
                       document.getElementById("pagou45").disabled=true;
                   }
                   if(childData.horario_45_pagou){
                       document.getElementById("porcento45").disabled=true;
                       document.getElementById("valorDesconto45").disabled=true;
                       document.getElementById("dataRecebimento45").disabled=true;
                   }
                   if(childData.horario_46_cliente){
                       document.getElementById("idTime46").innerHTML=childData.horario_46_cliente;
                       document.getElementById("valorDesconto46").value=childData.horario_46_valor_desc;
                       if(childData.horario_46_valor_rec){
                           document.getElementById("valorFinal46").innerHTML="€"+childData.horario_46_valor_rec;
                       }else{
                           document.getElementById("valorFinal46").innerHTML="€";
                       }
                       if(childData.horario_46_tipo_de_desconto){
                           document.getElementById("porcento46").value=childData.horario_46_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento46").value=0;
                       }
                       document.getElementById("compareceu46").disabled=false;
                       document.getElementById("porcento46").disabled=false;
                       document.getElementById("valorDesconto46").disabled=false;
                       document.getElementById("dataRecebimento46").disabled=false;
                       document.getElementById("pagou46").disabled=false;
                   }else{
                       document.getElementById("btnDel46").style.display="none";
                       document.getElementById("compareceu46").disabled=true;
                       document.getElementById("porcento46").disabled=true;
                       document.getElementById("valorDesconto46").disabled=true;
                       document.getElementById("dataRecebimento46").disabled=true;
                       document.getElementById("pagou46").disabled=true;
                   }
                   if(childData.horario_46_pagou){
                       document.getElementById("porcento46").disabled=true;
                       document.getElementById("valorDesconto46").disabled=true;
                       document.getElementById("dataRecebimento46").disabled=true;
                   }
                   if(childData.horario_47_cliente){
                       document.getElementById("idTime47").innerHTML=childData.horario_47_cliente;
                       document.getElementById("valorDesconto47").value=childData.horario_47_valor_desc;
                       if(childData.horario_47_valor_rec){
                           document.getElementById("valorFinal47").innerHTML="€"+childData.horario_47_valor_rec;
                       }else{
                           document.getElementById("valorFinal47").innerHTML="€";
                       }
                       if(childData.horario_47_tipo_de_desconto){
                           document.getElementById("porcento47").value=childData.horario_47_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento47").value=0;
                       }
                       document.getElementById("compareceu47").disabled=false;
                       document.getElementById("porcento47").disabled=false;
                       document.getElementById("valorDesconto47").disabled=false;
                       document.getElementById("dataRecebimento47").disabled=false;
                       document.getElementById("pagou47").disabled=false;
                   }else{
                       document.getElementById("btnDel47").style.display="none";
                       document.getElementById("compareceu47").disabled=true;
                       document.getElementById("porcento47").disabled=true;
                       document.getElementById("valorDesconto47").disabled=true;
                       document.getElementById("dataRecebimento47").disabled=true;
                       document.getElementById("pagou47").disabled=true;
                   }
                   if(childData.horario_47_pagou){
                       document.getElementById("porcento47").disabled=true;
                       document.getElementById("valorDesconto47").disabled=true;
                       document.getElementById("dataRecebimento47").disabled=true;
                   }
                   if(childData.horario_48_cliente){
                       document.getElementById("idTime48").innerHTML=childData.horario_48_cliente;
                       document.getElementById("valorDesconto48").value=childData.horario_48_valor_desc;
                       if(childData.horario_48_valor_rec){
                           document.getElementById("valorFinal48").innerHTML="€"+childData.horario_48_valor_rec;
                       }else{
                           document.getElementById("valorFinal48").innerHTML="€";
                       }
                       if(childData.horario_48_tipo_de_desconto){
                           document.getElementById("porcento48").value=childData.horario_48_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento48").value=0;
                       }
                       document.getElementById("compareceu48").disabled=false;
                       document.getElementById("porcento48").disabled=false;
                       document.getElementById("valorDesconto48").disabled=false;
                       document.getElementById("dataRecebimento48").disabled=false;
                       document.getElementById("pagou48").disabled=false;
                   }else{
                       document.getElementById("btnDel48").style.display="none";
                       document.getElementById("compareceu48").disabled=true;
                       document.getElementById("porcento48").disabled=true;
                       document.getElementById("valorDesconto48").disabled=true;
                       document.getElementById("dataRecebimento48").disabled=true;
                       document.getElementById("pagou48").disabled=true;
                   }
                   if(childData.horario_48_pagou){
                       document.getElementById("porcento48").disabled=true;
                       document.getElementById("valorDesconto48").disabled=true;
                       document.getElementById("dataRecebimento48").disabled=true;
                   }
                   if(childData.horario_49_cliente){
                       document.getElementById("idTime49").innerHTML=childData.horario_49_cliente;
                       document.getElementById("valorDesconto49").value=childData.horario_49_valor_desc;
                       if(childData.horario_49_valor_rec){
                           document.getElementById("valorFinal49").innerHTML="€"+childData.horario_49_valor_rec;
                       }else{
                           document.getElementById("valorFinal49").innerHTML="€";
                       }
                       if(childData.horario_49_tipo_de_desconto){
                           document.getElementById("porcento49").value=childData.horario_49_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento49").value=0;
                       }
                       document.getElementById("compareceu49").disabled=false;
                       document.getElementById("porcento49").disabled=false;
                       document.getElementById("valorDesconto49").disabled=false;
                       document.getElementById("dataRecebimento49").disabled=false;
                       document.getElementById("pagou49").disabled=false;
                   }else{
                       document.getElementById("btnDel49").style.display="none";
                       document.getElementById("compareceu49").disabled=true;
                       document.getElementById("porcento49").disabled=true;
                       document.getElementById("valorDesconto49").disabled=true;
                       document.getElementById("dataRecebimento49").disabled=true;
                       document.getElementById("pagou49").disabled=true;
                   }
                   if(childData.horario_49_pagou){
                       document.getElementById("porcento49").disabled=true;
                       document.getElementById("valorDesconto49").disabled=true;
                       document.getElementById("dataRecebimento49").disabled=true;
                   }
                   if(childData.horario_50_cliente){
                       document.getElementById("idTime50").innerHTML=childData.horario_50_cliente;
                       document.getElementById("valorDesconto50").value=childData.horario_50_valor_desc;
                       if(childData.horario_50_valor_rec){
                           document.getElementById("valorFinal50").innerHTML="€"+childData.horario_50_valor_rec;
                       }else{
                           document.getElementById("valorFinal50").innerHTML="€";
                       }
                       if(childData.horario_50_tipo_de_desconto){
                           document.getElementById("porcento50").value=childData.horario_50_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento50").value=0;
                       }
                       document.getElementById("compareceu50").disabled=false;
                       document.getElementById("porcento50").disabled=false;
                       document.getElementById("valorDesconto50").disabled=false;
                       document.getElementById("dataRecebimento50").disabled=false;
                       document.getElementById("pagou50").disabled=false;
                   }else{
                       document.getElementById("btnDel50").style.display="none";
                       document.getElementById("compareceu50").disabled=true;
                       document.getElementById("porcento50").disabled=true;
                       document.getElementById("valorDesconto50").disabled=true;
                       document.getElementById("dataRecebimento50").disabled=true;
                       document.getElementById("pagou50").disabled=true;
                   }
                   if(childData.horario_50_pagou){
                       document.getElementById("porcento50").disabled=true;
                       document.getElementById("valorDesconto50").disabled=true;
                       document.getElementById("dataRecebimento50").disabled=true;
                   }
                   if(childData.horario_51_cliente){
                       document.getElementById("idTime51").innerHTML=childData.horario_51_cliente;
                       document.getElementById("valorDesconto51").value=childData.horario_51_valor_desc;
                       if(childData.horario_51_valor_rec){
                           document.getElementById("valorFinal51").innerHTML="€"+childData.horario_51_valor_rec;
                       }else{
                           document.getElementById("valorFinal51").innerHTML="€";
                       }
                       if(childData.horario_51_tipo_de_desconto){
                           document.getElementById("porcento51").value=childData.horario_51_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento51").value=0;
                       }
                       document.getElementById("compareceu51").disabled=false;
                       document.getElementById("porcento51").disabled=false;
                       document.getElementById("valorDesconto51").disabled=false;
                       document.getElementById("dataRecebimento51").disabled=false;
                       document.getElementById("pagou51").disabled=false;
                   }else{
                       document.getElementById("btnDel51").style.display="none";
                       document.getElementById("compareceu51").disabled=true;
                       document.getElementById("porcento51").disabled=true;
                       document.getElementById("valorDesconto51").disabled=true;
                       document.getElementById("dataRecebimento51").disabled=true;
                       document.getElementById("pagou51").disabled=true;
                   }
                   if(childData.horario_51_pagou){
                       document.getElementById("porcento51").disabled=true;
                       document.getElementById("valorDesconto51").disabled=true;
                       document.getElementById("dataRecebimento51").disabled=true;
                   }
                   if(childData.horario_52_cliente){
                       document.getElementById("idTime52").innerHTML=childData.horario_52_cliente;
                       document.getElementById("valorDesconto52").value=childData.horario_52_valor_desc;
                       if(childData.horario_52_valor_rec){
                           document.getElementById("valorFinal52").innerHTML="€"+childData.horario_52_valor_rec;
                       }else{
                           document.getElementById("valorFinal52").innerHTML="€";
                       }
                       if(childData.horario_52_tipo_de_desconto){
                           document.getElementById("porcento52").value=childData.horario_52_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento52").value=0;
                       }
                       document.getElementById("compareceu52").disabled=false;
                       document.getElementById("porcento52").disabled=false;
                       document.getElementById("valorDesconto52").disabled=false;
                       document.getElementById("dataRecebimento52").disabled=false;
                       document.getElementById("pagou52").disabled=false;
                   }else{
                       document.getElementById("btnDel52").style.display="none";
                       document.getElementById("compareceu52").disabled=true;
                       document.getElementById("porcento52").disabled=true;
                       document.getElementById("valorDesconto52").disabled=true;
                       document.getElementById("dataRecebimento52").disabled=true;
                       document.getElementById("pagou52").disabled=true;
                   }
                   if(childData.horario_52_pagou){
                       document.getElementById("porcento52").disabled=true;
                       document.getElementById("valorDesconto52").disabled=true;
                       document.getElementById("dataRecebimento52").disabled=true;
                   }
                   if(childData.horario_53_cliente){
                       document.getElementById("idTime53").innerHTML=childData.horario_53_cliente;
                       document.getElementById("valorDesconto53").value=childData.horario_53_valor_desc;
                       if(childData.horario_53_valor_rec){
                           document.getElementById("valorFinal53").innerHTML="€"+childData.horario_53_valor_rec;
                       }else{
                           document.getElementById("valorFinal53").innerHTML="€";
                       }
                       if(childData.horario_53_tipo_de_desconto){
                           document.getElementById("porcento53").value=childData.horario_53_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento53").value=0;
                       }
                       document.getElementById("compareceu53").disabled=false;
                       document.getElementById("porcento53").disabled=false;
                       document.getElementById("valorDesconto53").disabled=false;
                       document.getElementById("dataRecebimento53").disabled=false;
                       document.getElementById("pagou53").disabled=false;
                   }else{
                       document.getElementById("btnDel53").style.display="none";
                       document.getElementById("compareceu53").disabled=true;
                       document.getElementById("porcento53").disabled=true;
                       document.getElementById("valorDesconto53").disabled=true;
                       document.getElementById("dataRecebimento53").disabled=true;
                       document.getElementById("pagou53").disabled=true;
                   }
                   if(childData.horario_53_pagou){
                       document.getElementById("porcento53").disabled=true;
                       document.getElementById("valorDesconto53").disabled=true;
                       document.getElementById("dataRecebimento53").disabled=true;
                   }
                   if(childData.horario_54_cliente){
                       document.getElementById("idTime54").innerHTML=childData.horario_54_cliente;
                       document.getElementById("valorDesconto54").value=childData.horario_54_valor_desc;
                       if(childData.horario_54_valor_rec){
                           document.getElementById("valorFinal54").innerHTML="€"+childData.horario_54_valor_rec;
                       }else{
                           document.getElementById("valorFinal54").innerHTML="€";
                       }
                       if(childData.horario_54_tipo_de_desconto){
                           document.getElementById("porcento54").value=childData.horario_54_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento54").value=0;
                       }
                       document.getElementById("compareceu54").disabled=false;
                       document.getElementById("porcento54").disabled=false;
                       document.getElementById("valorDesconto54").disabled=false;
                       document.getElementById("dataRecebimento54").disabled=false;
                       document.getElementById("pagou54").disabled=false;
                   }else{
                       document.getElementById("btnDel54").style.display="none";
                       document.getElementById("compareceu54").disabled=true;
                       document.getElementById("porcento54").disabled=true;
                       document.getElementById("valorDesconto54").disabled=true;
                       document.getElementById("dataRecebimento54").disabled=true;
                       document.getElementById("pagou54").disabled=true;
                   }
                   if(childData.horario_54_pagou){
                       document.getElementById("porcento54").disabled=true;
                       document.getElementById("valorDesconto54").disabled=true;
                       document.getElementById("dataRecebimento54").disabled=true;
                   }
                   if(childData.horario_55_cliente){
                       document.getElementById("idTime55").innerHTML=childData.horario_55_cliente;
                       document.getElementById("valorDesconto55").value=childData.horario_55_valor_desc;
                       if(childData.horario_55_valor_rec){
                           document.getElementById("valorFinal55").innerHTML="€"+childData.horario_55_valor_rec;
                       }else{
                           document.getElementById("valorFinal55").innerHTML="€";
                       }
                       if(childData.horario_55_tipo_de_desconto){
                           document.getElementById("porcento55").value=childData.horario_55_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento55").value=0;
                       }
                       document.getElementById("compareceu55").disabled=false;
                       document.getElementById("porcento55").disabled=false;
                       document.getElementById("valorDesconto55").disabled=false;
                       document.getElementById("dataRecebimento55").disabled=false;
                       document.getElementById("pagou55").disabled=false;
                   }else{
                       document.getElementById("btnDel55").style.display="none";
                       document.getElementById("compareceu55").disabled=true;
                       document.getElementById("porcento55").disabled=true;
                       document.getElementById("valorDesconto55").disabled=true;
                       document.getElementById("dataRecebimento55").disabled=true;
                       document.getElementById("pagou55").disabled=true;
                   }
                   if(childData.horario_55_pagou){
                       document.getElementById("porcento55").disabled=true;
                       document.getElementById("valorDesconto55").disabled=true;
                       document.getElementById("dataRecebimento55").disabled=true;
                   }
                   if(childData.horario_56_cliente){
                       document.getElementById("idTime56").innerHTML=childData.horario_56_cliente;
                       document.getElementById("valorDesconto56").value=childData.horario_56_valor_desc;
                       if(childData.horario_56_valor_rec){
                           document.getElementById("valorFinal56").innerHTML="€"+childData.horario_56_valor_rec;
                       }else{
                           document.getElementById("valorFinal56").innerHTML="€";
                       }
                       if(childData.horario_56_tipo_de_desconto){
                           document.getElementById("porcento56").value=childData.horario_56_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento56").value=0;
                       }
                       document.getElementById("compareceu56").disabled=false;
                       document.getElementById("porcento56").disabled=false;
                       document.getElementById("valorDesconto56").disabled=false;
                       document.getElementById("dataRecebimento56").disabled=false;
                       document.getElementById("pagou56").disabled=false;
                   }else{
                       document.getElementById("btnDel56").style.display="none";
                       document.getElementById("compareceu56").disabled=true;
                       document.getElementById("porcento56").disabled=true;
                       document.getElementById("valorDesconto56").disabled=true;
                       document.getElementById("dataRecebimento56").disabled=true;
                       document.getElementById("pagou56").disabled=true;
                   }
                   if(childData.horario_56_pagou){
                       document.getElementById("porcento56").disabled=true;
                       document.getElementById("valorDesconto56").disabled=true;
                       document.getElementById("dataRecebimento56").disabled=true;
                   }
                   if(childData.horario_57_cliente){
                       document.getElementById("idTime57").innerHTML=childData.horario_57_cliente;
                       document.getElementById("valorDesconto57").value=childData.horario_57_valor_desc;
                       if(childData.horario_57_valor_rec){
                           document.getElementById("valorFinal57").innerHTML="€"+childData.horario_57_valor_rec;
                       }else{
                           document.getElementById("valorFinal57").innerHTML="€";
                       }
                       if(childData.horario_57_tipo_de_desconto){
                           document.getElementById("porcento57").value=childData.horario_57_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento57").value=0;
                       }
                       document.getElementById("compareceu57").disabled=false;
                       document.getElementById("porcento57").disabled=false;
                       document.getElementById("valorDesconto57").disabled=false;
                       document.getElementById("dataRecebimento57").disabled=false;
                       document.getElementById("pagou57").disabled=false;
                   }else{
                       document.getElementById("btnDel57").style.display="none";
                       document.getElementById("compareceu57").disabled=true;
                       document.getElementById("porcento57").disabled=true;
                       document.getElementById("valorDesconto57").disabled=true;
                       document.getElementById("dataRecebimento57").disabled=true;
                       document.getElementById("pagou57").disabled=true;
                   }
                   if(childData.horario_57_pagou){
                       document.getElementById("porcento57").disabled=true;
                       document.getElementById("valorDesconto57").disabled=true;
                       document.getElementById("dataRecebimento57").disabled=true;
                   }
                   if(childData.horario_58_cliente){
                       document.getElementById("idTime58").innerHTML=childData.horario_58_cliente;
                       document.getElementById("valorDesconto58").value=childData.horario_58_valor_desc;
                       if(childData.horario_58_valor_rec){
                           document.getElementById("valorFinal58").innerHTML="€"+childData.horario_58_valor_rec;
                       }else{
                           document.getElementById("valorFinal58").innerHTML="€";
                       }
                       if(childData.horario_58_tipo_de_desconto){
                           document.getElementById("porcento58").value=childData.horario_58_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento58").value=0;
                       }
                       document.getElementById("compareceu58").disabled=false;
                       document.getElementById("porcento58").disabled=false;
                       document.getElementById("valorDesconto58").disabled=false;
                       document.getElementById("dataRecebimento58").disabled=false;
                       document.getElementById("pagou58").disabled=false;
                   }else{
                       document.getElementById("btnDel58").style.display="none";
                       document.getElementById("compareceu58").disabled=true;
                       document.getElementById("porcento58").disabled=true;
                       document.getElementById("valorDesconto58").disabled=true;
                       document.getElementById("dataRecebimento58").disabled=true;
                       document.getElementById("pagou58").disabled=true;
                   }
                   if(childData.horario_58_pagou){
                       document.getElementById("porcento58").disabled=true;
                       document.getElementById("valorDesconto58").disabled=true;
                       document.getElementById("dataRecebimento58").disabled=true;
                   }
                   if(childData.horario_59_cliente){
                       document.getElementById("idTime59").innerHTML=childData.horario_59_cliente;
                       document.getElementById("valorDesconto59").value=childData.horario_59_valor_desc;
                       if(childData.horario_59_valor_rec){
                           document.getElementById("valorFinal59").innerHTML="€"+childData.horario_59_valor_rec;
                       }else{
                           document.getElementById("valorFinal59").innerHTML="€";
                       }
                       if(childData.horario_59_tipo_de_desconto){
                           document.getElementById("porcento59").value=childData.horario_59_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento59").value=0;
                       }
                       document.getElementById("compareceu59").disabled=false;
                       document.getElementById("porcento59").disabled=false;
                       document.getElementById("valorDesconto59").disabled=false;
                       document.getElementById("dataRecebimento59").disabled=false;
                       document.getElementById("pagou59").disabled=false;
                   }else{
                       document.getElementById("btnDel59").style.display="none";
                       document.getElementById("compareceu59").disabled=true;
                       document.getElementById("porcento59").disabled=true;
                       document.getElementById("valorDesconto59").disabled=true;
                       document.getElementById("dataRecebimento59").disabled=true;
                       document.getElementById("pagou59").disabled=true;
                   }
                   if(childData.horario_59_pagou){
                       document.getElementById("porcento59").disabled=true;
                       document.getElementById("valorDesconto59").disabled=true;
                       document.getElementById("dataRecebimento59").disabled=true;
                   }
                   if(childData.horario_60_cliente){
                       document.getElementById("idTime60").innerHTML=childData.horario_60_cliente;
                       document.getElementById("valorDesconto60").value=childData.horario_60_valor_desc;
                       if(childData.horario_60_valor_rec){
                           document.getElementById("valorFinal60").innerHTML="€"+childData.horario_60_valor_rec;
                       }else{
                           document.getElementById("valorFinal60").innerHTML="€";
                       }
                       if(childData.horario_60_tipo_de_desconto){
                           document.getElementById("porcento60").value=childData.horario_60_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento60").value=0;
                       }
                       document.getElementById("compareceu60").disabled=false;
                       document.getElementById("porcento60").disabled=false;
                       document.getElementById("valorDesconto60").disabled=false;
                       document.getElementById("dataRecebimento60").disabled=false;
                       document.getElementById("pagou60").disabled=false;
                   }else{
                       document.getElementById("btnDel60").style.display="none";
                       document.getElementById("compareceu60").disabled=true;
                       document.getElementById("porcento60").disabled=true;
                       document.getElementById("valorDesconto60").disabled=true;
                       document.getElementById("dataRecebimento60").disabled=true;
                       document.getElementById("pagou60").disabled=true;
                   }
                   if(childData.horario_60_pagou){
                       document.getElementById("porcento60").disabled=true;
                       document.getElementById("valorDesconto60").disabled=true;
                       document.getElementById("dataRecebimento60").disabled=true;
                   }
                   if(childData.horario_61_cliente){
                       document.getElementById("idTime61").innerHTML=childData.horario_61_cliente;
                       document.getElementById("valorDesconto61").value=childData.horario_61_valor_desc;
                       if(childData.horario_61_valor_rec){
                           document.getElementById("valorFinal61").innerHTML="€"+childData.horario_61_valor_rec;
                       }else{
                           document.getElementById("valorFinal61").innerHTML="€";
                       }
                       if(childData.horario_61_tipo_de_desconto){
                           document.getElementById("porcento61").value=childData.horario_61_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento61").value=0;
                       }
                       document.getElementById("compareceu61").disabled=false;
                       document.getElementById("porcento61").disabled=false;
                       document.getElementById("valorDesconto61").disabled=false;
                       document.getElementById("dataRecebimento61").disabled=false;
                       document.getElementById("pagou61").disabled=false;
                   }else{
                       document.getElementById("btnDel61").style.display="none";
                       document.getElementById("compareceu61").disabled=true;
                       document.getElementById("porcento61").disabled=true;
                       document.getElementById("valorDesconto61").disabled=true;
                       document.getElementById("dataRecebimento61").disabled=true;
                       document.getElementById("pagou61").disabled=true;
                   }
                   if(childData.horario_61_pagou){
                       document.getElementById("porcento61").disabled=true;
                       document.getElementById("valorDesconto61").disabled=true;
                       document.getElementById("dataRecebimento61").disabled=true;
                   }
                   if(childData.horario_62_cliente){
                       document.getElementById("idTime62").innerHTML=childData.horario_62_cliente;
                       document.getElementById("valorDesconto62").value=childData.horario_62_valor_desc;
                       if(childData.horario_62_valor_rec){
                           document.getElementById("valorFinal62").innerHTML="€"+childData.horario_62_valor_rec;
                       }else{
                           document.getElementById("valorFinal62").innerHTML="€";
                       }
                       if(childData.horario_62_tipo_de_desconto){
                           document.getElementById("porcento62").value=childData.horario_62_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento62").value=0;
                       }
                       document.getElementById("compareceu62").disabled=false;
                       document.getElementById("porcento62").disabled=false;
                       document.getElementById("valorDesconto62").disabled=false;
                       document.getElementById("dataRecebimento62").disabled=false;
                       document.getElementById("pagou62").disabled=false;
                   }else{
                       document.getElementById("btnDel62").style.display="none";
                       document.getElementById("compareceu62").disabled=true;
                       document.getElementById("porcento62").disabled=true;
                       document.getElementById("valorDesconto62").disabled=true;
                       document.getElementById("dataRecebimento62").disabled=true;
                       document.getElementById("pagou62").disabled=true;
                   }
                   if(childData.horario_62_pagou){
                       document.getElementById("porcento62").disabled=true;
                       document.getElementById("valorDesconto62").disabled=true;
                       document.getElementById("dataRecebimento62").disabled=true;
                   }
                   if(childData.horario_63_cliente){
                       document.getElementById("idTime63").innerHTML=childData.horario_63_cliente;
                       document.getElementById("valorDesconto63").value=childData.horario_63_valor_desc;
                       if(childData.horario_63_valor_rec){
                           document.getElementById("valorFinal63").innerHTML="€"+childData.horario_63_valor_rec;
                       }else{
                           document.getElementById("valorFinal63").innerHTML="€";
                       }
                       if(childData.horario_63_tipo_de_desconto){
                           document.getElementById("porcento63").value=childData.horario_63_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento63").value=0;
                       }
                       document.getElementById("compareceu63").disabled=false;
                       document.getElementById("porcento63").disabled=false;
                       document.getElementById("valorDesconto63").disabled=false;
                       document.getElementById("dataRecebimento63").disabled=false;
                       document.getElementById("pagou63").disabled=false;
                   }else{
                       document.getElementById("btnDel63").style.display="none";
                       document.getElementById("compareceu63").disabled=true;
                       document.getElementById("porcento63").disabled=true;
                       document.getElementById("valorDesconto63").disabled=true;
                       document.getElementById("dataRecebimento63").disabled=true;
                       document.getElementById("pagou63").disabled=true;
                   }
                   if(childData.horario_63_pagou){
                       document.getElementById("porcento63").disabled=true;
                       document.getElementById("valorDesconto63").disabled=true;
                       document.getElementById("dataRecebimento63").disabled=true;
                   }
                   if(childData.horario_64_cliente){
                       document.getElementById("idTime64").innerHTML=childData.horario_64_cliente;
                       document.getElementById("valorDesconto64").value=childData.horario_64_valor_desc;
                       if(childData.horario_64_valor_rec){
                           document.getElementById("valorFinal64").innerHTML="€"+childData.horario_64_valor_rec;
                       }else{
                           document.getElementById("valorFinal64").innerHTML="€";
                       }
                       if(childData.horario_64_tipo_de_desconto){
                           document.getElementById("porcento64").value=childData.horario_64_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento64").value=0;
                       }
                       document.getElementById("compareceu64").disabled=false;
                       document.getElementById("porcento64").disabled=false;
                       document.getElementById("valorDesconto64").disabled=false;
                       document.getElementById("dataRecebimento64").disabled=false;
                       document.getElementById("pagou64").disabled=false;
                   }else{
                       document.getElementById("btnDel64").style.display="none";
                       document.getElementById("compareceu64").disabled=true;
                       document.getElementById("porcento64").disabled=true;
                       document.getElementById("valorDesconto64").disabled=true;
                       document.getElementById("dataRecebimento64").disabled=true;
                       document.getElementById("pagou64").disabled=true;
                   }
                   if(childData.horario_64_pagou){
                       document.getElementById("porcento64").disabled=true;
                       document.getElementById("valorDesconto64").disabled=true;
                       document.getElementById("dataRecebimento64").disabled=true;
                   }
                   if(childData.horario_65_cliente){
                       document.getElementById("idTime65").innerHTML=childData.horario_65_cliente;
                       document.getElementById("valorDesconto65").value=childData.horario_65_valor_desc;
                       if(childData.horario_65_valor_rec){
                           document.getElementById("valorFinal65").innerHTML="€"+childData.horario_65_valor_rec;
                       }else{
                           document.getElementById("valorFinal65").innerHTML="€";
                       }
                       if(childData.horario_65_tipo_de_desconto){
                           document.getElementById("porcento65").value=childData.horario_65_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento65").value=0;
                       }
                       document.getElementById("compareceu65").disabled=false;
                       document.getElementById("porcento65").disabled=false;
                       document.getElementById("valorDesconto65").disabled=false;
                       document.getElementById("dataRecebimento65").disabled=false;
                       document.getElementById("pagou65").disabled=false;
                   }else{
                       document.getElementById("btnDel65").style.display="none";
                       document.getElementById("compareceu65").disabled=true;
                       document.getElementById("porcento65").disabled=true;
                       document.getElementById("valorDesconto65").disabled=true;
                       document.getElementById("dataRecebimento65").disabled=true;
                       document.getElementById("pagou65").disabled=true;
                   }
                   if(childData.horario_65_pagou){
                       document.getElementById("porcento65").disabled=true;
                       document.getElementById("valorDesconto65").disabled=true;
                       document.getElementById("dataRecebimento65").disabled=true;
                   }
                   if(childData.horario_66_cliente){
                       document.getElementById("idTime66").innerHTML=childData.horario_66_cliente;
                       document.getElementById("valorDesconto66").value=childData.horario_66_valor_desc;
                       if(childData.horario_66_valor_rec){
                           document.getElementById("valorFinal66").innerHTML="€"+childData.horario_66_valor_rec;
                       }else{
                           document.getElementById("valorFinal66").innerHTML="€";
                       }
                       if(childData.horario_66_tipo_de_desconto){
                           document.getElementById("porcento66").value=childData.horario_66_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento66").value=0;
                       }
                       document.getElementById("compareceu66").disabled=false;
                       document.getElementById("porcento66").disabled=false;
                       document.getElementById("valorDesconto66").disabled=false;
                       document.getElementById("dataRecebimento66").disabled=false;
                       document.getElementById("pagou66").disabled=false;
                   }else{
                       document.getElementById("btnDel66").style.display="none";
                       document.getElementById("compareceu66").disabled=true;
                       document.getElementById("porcento66").disabled=true;
                       document.getElementById("valorDesconto66").disabled=true;
                       document.getElementById("dataRecebimento66").disabled=true;
                       document.getElementById("pagou66").disabled=true;
                   }
                   if(childData.horario_66_pagou){
                       document.getElementById("porcento66").disabled=true;
                       document.getElementById("valorDesconto66").disabled=true;
                       document.getElementById("dataRecebimento66").disabled=true;
                   }
                   if(childData.horario_67_cliente){
                       document.getElementById("idTime67").innerHTML=childData.horario_67_cliente;
                       document.getElementById("valorDesconto67").value=childData.horario_67_valor_desc;
                       if(childData.horario_67_valor_rec){
                           document.getElementById("valorFinal67").innerHTML="€"+childData.horario_67_valor_rec;
                       }else{
                           document.getElementById("valorFinal67").innerHTML="€";
                       }
                       if(childData.horario_67_tipo_de_desconto){
                           document.getElementById("porcento67").value=childData.horario_67_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento67").value=0;
                       }
                       document.getElementById("compareceu67").disabled=false;
                       document.getElementById("porcento67").disabled=false;
                       document.getElementById("valorDesconto67").disabled=false;
                       document.getElementById("dataRecebimento67").disabled=false;
                       document.getElementById("pagou67").disabled=false;
                   }else{
                       document.getElementById("btnDel67").style.display="none";
                       document.getElementById("compareceu67").disabled=true;
                       document.getElementById("porcento67").disabled=true;
                       document.getElementById("valorDesconto67").disabled=true;
                       document.getElementById("dataRecebimento67").disabled=true;
                       document.getElementById("pagou67").disabled=true;
                   }
                   if(childData.horario_67_pagou){
                       document.getElementById("porcento67").disabled=true;
                       document.getElementById("valorDesconto67").disabled=true;
                       document.getElementById("dataRecebimento67").disabled=true;
                   }
                   if(childData.horario_68_cliente){
                       document.getElementById("idTime68").innerHTML=childData.horario_68_cliente;
                       document.getElementById("valorDesconto68").value=childData.horario_68_valor_desc;
                       if(childData.horario_68_valor_rec){
                           document.getElementById("valorFinal68").innerHTML="€"+childData.horario_68_valor_rec;
                       }else{
                           document.getElementById("valorFinal68").innerHTML="€";
                       }
                       if(childData.horario_68_tipo_de_desconto){
                           document.getElementById("porcento68").value=childData.horario_68_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento68").value=0;
                       }
                       document.getElementById("compareceu68").disabled=false;
                       document.getElementById("porcento68").disabled=false;
                       document.getElementById("valorDesconto68").disabled=false;
                       document.getElementById("dataRecebimento68").disabled=false;
                       document.getElementById("pagou68").disabled=false;
                   }else{
                       document.getElementById("btnDel68").style.display="none";
                       document.getElementById("compareceu68").disabled=true;
                       document.getElementById("porcento68").disabled=true;
                       document.getElementById("valorDesconto68").disabled=true;
                       document.getElementById("dataRecebimento68").disabled=true;
                       document.getElementById("pagou68").disabled=true;
                   }
                   if(childData.horario_68_pagou){
                       document.getElementById("porcento68").disabled=true;
                       document.getElementById("valorDesconto68").disabled=true;
                       document.getElementById("dataRecebimento68").disabled=true;
                   }
                   if(childData.horario_69_cliente){
                       document.getElementById("idTime69").innerHTML=childData.horario_69_cliente;
                       document.getElementById("valorDesconto69").value=childData.horario_69_valor_desc;
                       if(childData.horario_69_valor_rec){
                           document.getElementById("valorFinal69").innerHTML="€"+childData.horario_69_valor_rec;
                       }else{
                           document.getElementById("valorFinal69").innerHTML="€";
                       }
                       if(childData.horario_69_tipo_de_desconto){
                           document.getElementById("porcento69").value=childData.horario_69_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento69").value=0;
                       }
                       document.getElementById("compareceu69").disabled=false;
                       document.getElementById("porcento69").disabled=false;
                       document.getElementById("valorDesconto69").disabled=false;
                       document.getElementById("dataRecebimento69").disabled=false;
                       document.getElementById("pagou69").disabled=false;
                   }else{
                       document.getElementById("btnDel69").style.display="none";
                       document.getElementById("compareceu69").disabled=true;
                       document.getElementById("porcento69").disabled=true;
                       document.getElementById("valorDesconto69").disabled=true;
                       document.getElementById("dataRecebimento69").disabled=true;
                       document.getElementById("pagou69").disabled=true;
                   }
                   if(childData.horario_69_pagou){
                       document.getElementById("porcento69").disabled=true;
                       document.getElementById("valorDesconto69").disabled=true;
                       document.getElementById("dataRecebimento69").disabled=true;
                   }
                   if(childData.horario_70_cliente){
                       document.getElementById("idTime70").innerHTML=childData.horario_70_cliente;
                       document.getElementById("valorDesconto70").value=childData.horario_70_valor_desc;
                       if(childData.horario_70_valor_rec){
                           document.getElementById("valorFinal70").innerHTML="€"+childData.horario_70_valor_rec;
                       }else{
                           document.getElementById("valorFinal70").innerHTML="€";
                       }
                       if(childData.horario_70_tipo_de_desconto){
                           document.getElementById("porcento70").value=childData.horario_70_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento70").value=0;
                       }
                       document.getElementById("compareceu70").disabled=false;
                       document.getElementById("porcento70").disabled=false;
                       document.getElementById("valorDesconto70").disabled=false;
                       document.getElementById("dataRecebimento70").disabled=false;
                       document.getElementById("pagou70").disabled=false;
                   }else{
                       document.getElementById("btnDel70").style.display="none";
                       document.getElementById("compareceu70").disabled=true;
                       document.getElementById("porcento70").disabled=true;
                       document.getElementById("valorDesconto70").disabled=true;
                       document.getElementById("dataRecebimento70").disabled=true;
                       document.getElementById("pagou70").disabled=true;
                   }
                   if(childData.horario_70_pagou){
                       document.getElementById("porcento70").disabled=true;
                       document.getElementById("valorDesconto70").disabled=true;
                       document.getElementById("dataRecebimento70").disabled=true;
                   }
                   if(childData.horario_71_cliente){
                       document.getElementById("idTime71").innerHTML=childData.horario_71_cliente;
                       document.getElementById("valorDesconto71").value=childData.horario_71_valor_desc;
                       if(childData.horario_71_valor_rec){
                           document.getElementById("valorFinal71").innerHTML="€"+childData.horario_71_valor_rec;
                       }else{
                           document.getElementById("valorFinal71").innerHTML="€";
                       }
                       if(childData.horario_71_tipo_de_desconto){
                           document.getElementById("porcento71").value=childData.horario_71_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento71").value=0;
                       }
                       document.getElementById("compareceu71").disabled=false;
                       document.getElementById("porcento71").disabled=false;
                       document.getElementById("valorDesconto71").disabled=false;
                       document.getElementById("dataRecebimento71").disabled=false;
                       document.getElementById("pagou71").disabled=false;
                   }else{
                       document.getElementById("btnDel71").style.display="none";
                       document.getElementById("compareceu71").disabled=true;
                       document.getElementById("porcento71").disabled=true;
                       document.getElementById("valorDesconto71").disabled=true;
                       document.getElementById("dataRecebimento71").disabled=true;
                       document.getElementById("pagou71").disabled=true;
                   }
                   if(childData.horario_71_pagou){
                       document.getElementById("porcento71").disabled=true;
                       document.getElementById("valorDesconto71").disabled=true;
                       document.getElementById("dataRecebimento71").disabled=true;
                   }
                   if(childData.horario_72_cliente){
                       document.getElementById("idTime72").innerHTML=childData.horario_72_cliente;
                       document.getElementById("valorDesconto72").value=childData.horario_72_valor_desc;
                       if(childData.horario_72_valor_rec){
                           document.getElementById("valorFinal72").innerHTML="€"+childData.horario_72_valor_rec;
                       }else{
                           document.getElementById("valorFinal72").innerHTML="€";
                       }
                       if(childData.horario_72_tipo_de_desconto){
                           document.getElementById("porcento72").value=childData.horario_72_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento72").value=0;
                       }
                       document.getElementById("compareceu72").disabled=false;
                       document.getElementById("porcento72").disabled=false;
                       document.getElementById("valorDesconto72").disabled=false;
                       document.getElementById("dataRecebimento72").disabled=false;
                       document.getElementById("pagou72").disabled=false;
                   }else{
                       document.getElementById("btnDel72").style.display="none";
                       document.getElementById("compareceu72").disabled=true;
                       document.getElementById("porcento72").disabled=true;
                       document.getElementById("valorDesconto72").disabled=true;
                       document.getElementById("dataRecebimento72").disabled=true;
                       document.getElementById("pagou72").disabled=true;
                   }
                   if(childData.horario_72_pagou){
                       document.getElementById("porcento72").disabled=true;
                       document.getElementById("valorDesconto72").disabled=true;
                       document.getElementById("dataRecebimento72").disabled=true;
                   }
                   if(childData.horario_73_cliente){
                       document.getElementById("idTime73").innerHTML=childData.horario_73_cliente;
                       document.getElementById("valorDesconto73").value=childData.horario_73_valor_desc;
                       if(childData.horario_73_valor_rec){
                           document.getElementById("valorFinal73").innerHTML="€"+childData.horario_73_valor_rec;
                       }else{
                           document.getElementById("valorFinal73").innerHTML="€";
                       }
                       if(childData.horario_73_tipo_de_desconto){
                           document.getElementById("porcento73").value=childData.horario_73_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento73").value=0;
                       }
                       document.getElementById("compareceu73").disabled=false;
                       document.getElementById("porcento73").disabled=false;
                       document.getElementById("valorDesconto73").disabled=false;
                       document.getElementById("dataRecebimento73").disabled=false;
                       document.getElementById("pagou73").disabled=false;
                   }else{
                       document.getElementById("btnDel73").style.display="none";
                       document.getElementById("compareceu73").disabled=true;
                       document.getElementById("porcento73").disabled=true;
                       document.getElementById("valorDesconto73").disabled=true;
                       document.getElementById("dataRecebimento73").disabled=true;
                       document.getElementById("pagou73").disabled=true;
                   }
                   if(childData.horario_73_pagou){
                       document.getElementById("porcento73").disabled=true;
                       document.getElementById("valorDesconto73").disabled=true;
                       document.getElementById("dataRecebimento73").disabled=true;
                   }
                   if(childData.horario_74_cliente){
                       document.getElementById("idTime74").innerHTML=childData.horario_74_cliente;
                       document.getElementById("valorDesconto74").value=childData.horario_74_valor_desc;
                       if(childData.horario_74_valor_rec){
                           document.getElementById("valorFinal74").innerHTML="€"+childData.horario_74_valor_rec;
                       }else{
                           document.getElementById("valorFinal74").innerHTML="€";
                       }
                       if(childData.horario_74_tipo_de_desconto){
                           document.getElementById("porcento74").value=childData.horario_74_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento74").value=0;
                       }
                       document.getElementById("compareceu74").disabled=false;
                       document.getElementById("porcento74").disabled=false;
                       document.getElementById("valorDesconto74").disabled=false;
                       document.getElementById("dataRecebimento74").disabled=false;
                       document.getElementById("pagou74").disabled=false;
                   }else{
                       document.getElementById("btnDel74").style.display="none";
                       document.getElementById("compareceu74").disabled=true;
                       document.getElementById("porcento74").disabled=true;
                       document.getElementById("valorDesconto74").disabled=true;
                       document.getElementById("dataRecebimento74").disabled=true;
                       document.getElementById("pagou74").disabled=true;
                   }
                   if(childData.horario_74_pagou){
                       document.getElementById("porcento74").disabled=true;
                       document.getElementById("valorDesconto74").disabled=true;
                       document.getElementById("dataRecebimento74").disabled=true;
                   }
                   if(childData.horario_75_cliente){
                       document.getElementById("idTime75").innerHTML=childData.horario_75_cliente;
                       document.getElementById("valorDesconto75").value=childData.horario_75_valor_desc;
                       if(childData.horario_75_valor_rec){
                           document.getElementById("valorFinal75").innerHTML="€"+childData.horario_75_valor_rec;
                       }else{
                           document.getElementById("valorFinal75").innerHTML="€";
                       }
                       if(childData.horario_75_tipo_de_desconto){
                           document.getElementById("porcento75").value=childData.horario_75_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento75").value=0;
                       }
                       document.getElementById("compareceu75").disabled=false;
                       document.getElementById("porcento75").disabled=false;
                       document.getElementById("valorDesconto75").disabled=false;
                       document.getElementById("dataRecebimento75").disabled=false;
                       document.getElementById("pagou75").disabled=false;
                   }else{
                       document.getElementById("btnDel75").style.display="none";
                       document.getElementById("compareceu75").disabled=true;
                       document.getElementById("porcento75").disabled=true;
                       document.getElementById("valorDesconto75").disabled=true;
                       document.getElementById("dataRecebimento75").disabled=true;
                       document.getElementById("pagou75").disabled=true;
                   }
                   if(childData.horario_75_pagou){
                       document.getElementById("porcento75").disabled=true;
                       document.getElementById("valorDesconto75").disabled=true;
                       document.getElementById("dataRecebimento75").disabled=true;
                   }
                   if(childData.horario_76_cliente){
                       document.getElementById("idTime76").innerHTML=childData.horario_76_cliente;
                       document.getElementById("valorDesconto76").value=childData.horario_76_valor_desc;
                       if(childData.horario_76_valor_rec){
                           document.getElementById("valorFinal76").innerHTML="€"+childData.horario_76_valor_rec;
                       }else{
                           document.getElementById("valorFinal76").innerHTML="€";
                       }
                       if(childData.horario_76_tipo_de_desconto){
                           document.getElementById("porcento76").value=childData.horario_76_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento76").value=0;
                       }
                       document.getElementById("compareceu76").disabled=false;
                       document.getElementById("porcento76").disabled=false;
                       document.getElementById("valorDesconto76").disabled=false;
                       document.getElementById("dataRecebimento76").disabled=false;
                       document.getElementById("pagou76").disabled=false;
                   }else{
                       document.getElementById("btnDel76").style.display="none";
                       document.getElementById("compareceu76").disabled=true;
                       document.getElementById("porcento76").disabled=true;
                       document.getElementById("valorDesconto76").disabled=true;
                       document.getElementById("dataRecebimento76").disabled=true;
                       document.getElementById("pagou76").disabled=true;
                   }
                   if(childData.horario_76_pagou){
                       document.getElementById("porcento76").disabled=true;
                       document.getElementById("valorDesconto76").disabled=true;
                       document.getElementById("dataRecebimento76").disabled=true;
                   }
                   if(childData.horario_77_cliente){
                       document.getElementById("idTime77").innerHTML=childData.horario_77_cliente;
                       document.getElementById("valorDesconto77").value=childData.horario_77_valor_desc;
                       if(childData.horario_77_valor_rec){
                           document.getElementById("valorFinal77").innerHTML="€"+childData.horario_77_valor_rec;
                       }else{
                           document.getElementById("valorFinal77").innerHTML="€";
                       }
                       if(childData.horario_77_tipo_de_desconto){
                           document.getElementById("porcento77").value=childData.horario_77_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento77").value=0;
                       }
                       document.getElementById("compareceu77").disabled=false;
                       document.getElementById("porcento77").disabled=false;
                       document.getElementById("valorDesconto77").disabled=false;
                       document.getElementById("dataRecebimento77").disabled=false;
                       document.getElementById("pagou77").disabled=false;
                   }else{
                       document.getElementById("btnDel77").style.display="none";
                       document.getElementById("compareceu77").disabled=true;
                       document.getElementById("porcento77").disabled=true;
                       document.getElementById("valorDesconto77").disabled=true;
                       document.getElementById("dataRecebimento77").disabled=true;
                       document.getElementById("pagou77").disabled=true;
                   }
                   if(childData.horario_77_pagou){
                       document.getElementById("porcento77").disabled=true;
                       document.getElementById("valorDesconto77").disabled=true;
                       document.getElementById("dataRecebimento77").disabled=true;
                   }
                   if(childData.horario_78_cliente){
                       document.getElementById("idTime78").innerHTML=childData.horario_78_cliente;
                       document.getElementById("valorDesconto78").value=childData.horario_78_valor_desc;
                       if(childData.horario_78_valor_rec){
                           document.getElementById("valorFinal78").innerHTML="€"+childData.horario_78_valor_rec;
                       }else{
                           document.getElementById("valorFinal78").innerHTML="€";
                       }
                       if(childData.horario_78_tipo_de_desconto){
                           document.getElementById("porcento78").value=childData.horario_78_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento78").value=0;
                       }
                       document.getElementById("compareceu78").disabled=false;
                       document.getElementById("porcento78").disabled=false;
                       document.getElementById("valorDesconto78").disabled=false;
                       document.getElementById("dataRecebimento78").disabled=false;
                       document.getElementById("pagou78").disabled=false;
                   }else{
                       document.getElementById("btnDel78").style.display="none";
                       document.getElementById("compareceu78").disabled=true;
                       document.getElementById("porcento78").disabled=true;
                       document.getElementById("valorDesconto78").disabled=true;
                       document.getElementById("dataRecebimento78").disabled=true;
                       document.getElementById("pagou78").disabled=true;
                   }
                   if(childData.horario_78_pagou){
                       document.getElementById("porcento78").disabled=true;
                       document.getElementById("valorDesconto78").disabled=true;
                       document.getElementById("dataRecebimento78").disabled=true;
                   }
                   if(childData.horario_79_cliente){
                       document.getElementById("idTime79").innerHTML=childData.horario_79_cliente;
                       document.getElementById("valorDesconto79").value=childData.horario_79_valor_desc;
                       if(childData.horario_79_valor_rec){
                           document.getElementById("valorFinal79").innerHTML="€"+childData.horario_79_valor_rec;
                       }else{
                           document.getElementById("valorFinal79").innerHTML="€";
                       }
                       if(childData.horario_79_tipo_de_desconto){
                           document.getElementById("porcento79").value=childData.horario_79_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento79").value=0;
                       }
                       document.getElementById("compareceu79").disabled=false;
                       document.getElementById("porcento79").disabled=false;
                       document.getElementById("valorDesconto79").disabled=false;
                       document.getElementById("dataRecebimento79").disabled=false;
                       document.getElementById("pagou79").disabled=false;
                   }else{
                       document.getElementById("btnDel79").style.display="none";
                       document.getElementById("compareceu79").disabled=true;
                       document.getElementById("porcento79").disabled=true;
                       document.getElementById("valorDesconto79").disabled=true;
                       document.getElementById("dataRecebimento79").disabled=true;
                       document.getElementById("pagou79").disabled=true;
                   }
                   if(childData.horario_79_pagou){
                       document.getElementById("porcento79").disabled=true;
                       document.getElementById("valorDesconto79").disabled=true;
                       document.getElementById("dataRecebimento79").disabled=true;
                   }
                   if(childData.horario_80_cliente){
                       document.getElementById("idTime80").innerHTML=childData.horario_80_cliente;
                       document.getElementById("valorDesconto80").value=childData.horario_80_valor_desc;
                       if(childData.horario_80_valor_rec){
                           document.getElementById("valorFinal80").innerHTML="€"+childData.horario_80_valor_rec;
                       }else{
                           document.getElementById("valorFinal80").innerHTML="€";
                       }
                       if(childData.horario_80_tipo_de_desconto){
                           document.getElementById("porcento80").value=childData.horario_80_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento80").value=0;
                       }
                       document.getElementById("compareceu80").disabled=false;
                       document.getElementById("porcento801").disabled=false;
                       document.getElementById("valorDesconto80").disabled=false;
                       document.getElementById("dataRecebimento80").disabled=false;
                       document.getElementById("pagou80").disabled=false;
                   }else{
                       document.getElementById("btnDel80").style.display="none";
                       document.getElementById("compareceu80").disabled=true;
                       document.getElementById("porcento80").disabled=true;
                       document.getElementById("valorDesconto80").disabled=true;
                       document.getElementById("dataRecebimento80").disabled=true;
                       document.getElementById("pagou80").disabled=true;
                   }
                   if(childData.horario_80_pagou){
                       document.getElementById("porcento80").disabled=true;
                       document.getElementById("valorDesconto80").disabled=true;
                       document.getElementById("dataRecebimento80").disabled=true;
                   }
                   if(childData.horario_81_cliente){
                       document.getElementById("idTime81").innerHTML=childData.horario_81_cliente;
                       document.getElementById("valorDesconto81").value=childData.horario_81_valor_desc;
                       if(childData.horario_81_valor_rec){
                           document.getElementById("valorFinal81").innerHTML="€"+childData.horario_81_valor_rec;
                       }else{
                           document.getElementById("valorFinal81").innerHTML="€";
                       }
                       if(childData.horario_81_tipo_de_desconto){
                           document.getElementById("porcento81").value=childData.horario_81_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento81").value=0;
                       }
                       document.getElementById("compareceu81").disabled=false;
                       document.getElementById("porcento81").disabled=false;
                       document.getElementById("valorDesconto81").disabled=false;
                       document.getElementById("dataRecebimento81").disabled=false;
                       document.getElementById("pagou81").disabled=false;
                   }else{
                       document.getElementById("btnDel81").style.display="none";
                       document.getElementById("compareceu81").disabled=true;
                       document.getElementById("porcento81").disabled=true;
                       document.getElementById("valorDesconto81").disabled=true;
                       document.getElementById("dataRecebimento81").disabled=true;
                       document.getElementById("pagou81").disabled=true;
                   }
                   if(childData.horario_81_pagou){
                       document.getElementById("porcento81").disabled=true;
                       document.getElementById("valorDesconto81").disabled=true;
                       document.getElementById("dataRecebimento81").disabled=true;
                   }
                   if(childData.horario_82_cliente){
                       document.getElementById("idTime82").innerHTML=childData.horario_82_cliente;
                       document.getElementById("valorDesconto82").value=childData.horario_82_valor_desc;
                       if(childData.horario_82_valor_rec){
                           document.getElementById("valorFinal82").innerHTML="€"+childData.horario_82_valor_rec;
                       }else{
                           document.getElementById("valorFinal82").innerHTML="€";
                       }
                       if(childData.horario_82_tipo_de_desconto){
                           document.getElementById("porcento82").value=childData.horario_82_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento82").value=0;
                       }
                       document.getElementById("compareceu82").disabled=false;
                       document.getElementById("porcento82").disabled=false;
                       document.getElementById("valorDesconto82").disabled=false;
                       document.getElementById("dataRecebimento82").disabled=false;
                       document.getElementById("pagou82").disabled=false;
                   }else{
                       document.getElementById("btnDel82").style.display="none";
                       document.getElementById("compareceu82").disabled=true;
                       document.getElementById("porcento82").disabled=true;
                       document.getElementById("valorDesconto82").disabled=true;
                       document.getElementById("dataRecebimento82").disabled=true;
                       document.getElementById("pagou82").disabled=true;
                   }
                   if(childData.horario_82_pagou){
                       document.getElementById("porcento82").disabled=true;
                       document.getElementById("valorDesconto82").disabled=true;
                       document.getElementById("dataRecebimento82").disabled=true;
                   }
                   if(childData.horario_83_cliente){
                       document.getElementById("idTime83").innerHTML=childData.horario_83_cliente;
                       document.getElementById("valorDesconto83").value=childData.horario_83_valor_desc;
                       if(childData.horario_83_valor_rec){
                           document.getElementById("valorFinal83").innerHTML="€"+childData.horario_83_valor_rec;
                       }else{
                           document.getElementById("valorFinal83").innerHTML="€";
                       }
                       if(childData.horario_83_tipo_de_desconto){
                           document.getElementById("porcento83").value=childData.horario_83_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento83").value=0;
                       }
                       document.getElementById("compareceu83").disabled=false;
                       document.getElementById("porcento83").disabled=false;
                       document.getElementById("valorDesconto83").disabled=false;
                       document.getElementById("dataRecebimento83").disabled=false;
                       document.getElementById("pagou83").disabled=false;
                   }else{
                       document.getElementById("btnDel83").style.display="none";
                       document.getElementById("compareceu83").disabled=true;
                       document.getElementById("porcento83").disabled=true;
                       document.getElementById("valorDesconto83").disabled=true;
                       document.getElementById("dataRecebimento83").disabled=true;
                       document.getElementById("pagou83").disabled=true;
                   }
                   if(childData.horario_83_pagou){
                       document.getElementById("porcento83").disabled=true;
                       document.getElementById("valorDesconto83").disabled=true;
                       document.getElementById("dataRecebimento83").disabled=true;
                   }
                   if(childData.horario_84_cliente){
                       document.getElementById("idTime84").innerHTML=childData.horario_84_cliente;
                       document.getElementById("valorDesconto84").value=childData.horario_84_valor_desc;
                       if(childData.horario_84_valor_rec){
                           document.getElementById("valorFinal84").innerHTML="€"+childData.horario_84_valor_rec;
                       }else{
                           document.getElementById("valorFinal84").innerHTML="€";
                       }
                       if(childData.horario_84_tipo_de_desconto){
                           document.getElementById("porcento84").value=childData.horario_84_tipo_de_desconto;
                       }else{
                           document.getElementById("porcento84").value=0;
                       }
                       document.getElementById("compareceu84").disabled=false;
                       document.getElementById("porcento84").disabled=false;
                       document.getElementById("valorDesconto84").disabled=false;
                       document.getElementById("dataRecebimento84").disabled=false;
                       document.getElementById("pagou84").disabled=false;
                   }else{
                       document.getElementById("btnDel84").style.display="none";
                       document.getElementById("compareceu84").disabled=true;
                       document.getElementById("porcento84").disabled=true;
                       document.getElementById("valorDesconto84").disabled=true;
                       document.getElementById("dataRecebimento84").disabled=true;
                       document.getElementById("pagou84").disabled=true;
                   }
                   if(childData.horario_84_pagou){
                       document.getElementById("porcento84").disabled=true;
                       document.getElementById("valorDesconto84").disabled=true;
                       document.getElementById("dataRecebimento84").disabled=true;
                   }
               }
            });
        });
    }
    
    function trimTable(){
        
        //alert('trimTable()');
        if(duracao==="15 Minutos"){
            //alert('duracao===15 Minutos');
            //alert('horaInicio = '+horaInicio);
            //alert('horaTermino = '+horaTermino);
            for(var i=1; i<85; i++){
                if(i<horaInicio || i>horaTermino-1){
                    document.getElementById("rowId"+i).style.display="none";
                }
            }
        }
        if(duracao==="30 Minutos"){
            //alert('duracao===30 Minutos');
            var x=0;
            for(var i=1; i<85; i++){
                
                if(i<horaInicio || i>horaTermino-1){
                    document.getElementById("rowId"+i).style.display="none";
                }
                if(i>=horaInicio || i<=horaTermino){
                    x++;
                    if(x>1){
                        document.getElementById("rowId"+i).style.display="none";
                        if(x===2){
                            x=0
                        }
                    }
                }
            }
        }
        if(duracao==="45 Minutos"){
            //alert('duracao===30 Minutos');
            var x=0;
            for(var i=1; i<85; i++){
                
                if(i<horaInicio || i>horaTermino-1){
                    document.getElementById("rowId"+i).style.display="none";
                }
                if(i>=horaInicio || i<=horaTermino){
                    x++;
                    if(x>1){
                        document.getElementById("rowId"+i).style.display="none";
                        if(x===3){
                            x=0;
                        }
                    }
                }
            }
        }
        if(duracao==="1 Hora"){
            //alert('duracao===1 Hora');
            var x=0;
            for(var i=1; i<85; i++){
                
                if(i<horaInicio || i>horaTermino-1){
                    document.getElementById("rowId"+i).style.display="none";
                }
                if(i>=horaInicio || i<=horaTermino){
                    x++;
                    if(x>1){
                        document.getElementById("rowId"+i).style.display="none";
                        if(x===4){
                            x=0;
                        }
                    }
                }
            }
        }
        if(duracao==="1 Hora e 30"){
            //alert('duracao===1 Hora e 30');
            var x=0;
            for(var i=1; i<85; i++){
                
                if(i<horaInicio || i>horaTermino-1){
                    document.getElementById("rowId"+i).style.display="none";
                }else{
                    x++;
                    if (x>1){
                        document.getElementById("rowId"+i).style.display="none";
                        if(x>5){
                            x=0;
                        }
                    }
                }
            /*    if(i>=horaInicio || i<=horaTermino){
                    x++;
                    if(x>1){
                        document.getElementById("rowId"+i).style.display="none";
                        if(x===6){
                            x=0
                        }
                    }
                }*/
            }
        }
        if(duracao==="2 Horas"){
            //alert('duracao===2 Horas');
            var x=0;
            for(var i=1; i<85; i++){
                
                if(i<horaInicio || i>horaTermino-1){
                    document.getElementById("rowId"+i).style.display="none";
                }else{
                    x++;
                    if (x>1){
                        document.getElementById("rowId"+i).style.display="none";
                        if(x>7){
                            x=0;
                        }
                    }
                }
               /* if(i>=horaInicio || i<=horaTermino){
                    if(i===horaInicio){
                        document.getElementById("rowId"+i).style.display="initial";
                    }
                    x++;
                    if(x>1){
                        document.getElementById("rowId"+i).style.display="none";
                        if(x===8){
                            x=0
                        }
                    }
                }*/
            }
        }
    }
    
    
    function excluir(i){
        let eventoId = sessionStorage.getItem('eventoId');
        //alert('eventoId = '+eventoId);
        //alert('i = '+i);
        var database = firebase.database();
        //var databaseRef = database.ref('eventos/'+eventoId);
        switch(i){
            case 1:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_1_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_1_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_1_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_1_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_1_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_1_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_1_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_1_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_1_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime1").innerHTML="";
                document.getElementById("btnDel1").style.display="none";
                document.getElementById("valor1").value="";
                document.getElementById("porcento1").value=0;
                document.getElementById("valorDesconto1").value="";
                document.getElementById("valorFinal1").innerHTML="";
                document.getElementById("dataRecebimento1").value="";
                document.getElementById("pagou1").checked=false;
                document.getElementById("compareceu1").checked=false;
            break;
            case 2:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_2_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_2_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_2_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_2_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_2_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_2_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_2_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_2_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_2_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime2").innerHTML="";
                document.getElementById("btnDel2").style.display="none";
                document.getElementById("valor2").value="";
                document.getElementById("porcento2").value=0;
                document.getElementById("valorDesconto2").value="";
                document.getElementById("valorFinal2").innerHTML="";
                document.getElementById("dataRecebimento2").value="";
                document.getElementById("pagou2").checked=false;
                document.getElementById("compareceu2").checked=false;
            break;
            case 3:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_3_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_3_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_3_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_3_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_3_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_3_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_3_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_3_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_3_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime3").innerHTML="";
                document.getElementById("btnDel3").style.display="none";
                document.getElementById("valor3").value="";
                document.getElementById("porcento3").value=0;
                document.getElementById("valorDesconto3").value="";
                document.getElementById("valorFinal3").innerHTML="";
                document.getElementById("dataRecebimento3").value="";
                document.getElementById("pagou3").checked=false;
                document.getElementById("compareceu3").checked=false;
            break;
            case 4:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_4_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_4_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_4_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_4_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_4_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_4_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_4_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_4_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_4_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime4").innerHTML="";
                document.getElementById("btnDel4").style.display="none";
                document.getElementById("valor4").value="";
                document.getElementById("porcento4").value=0;
                document.getElementById("valorDesconto4").value="";
                document.getElementById("valorFinal4").innerHTML="";
                document.getElementById("dataRecebimento4").value="";
                document.getElementById("pagou4").checked=false;
                document.getElementById("compareceu4").checked=false;
            break;
            case 5:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_5_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_5_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_5_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_5_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_5_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_5_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_5_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_5_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_5_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime5").innerHTML="";
                document.getElementById("btnDel5").style.display="none";
                document.getElementById("valor5").value="";
                document.getElementById("porcento5").value=0;
                document.getElementById("valorDesconto5").value="";
                document.getElementById("valorFinal5").innerHTML="";
                document.getElementById("dataRecebimento5").value="";
                document.getElementById("pagou5").checked=false;
                document.getElementById("compareceu5").checked=false;
            break;
            case 6:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_6_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_6_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_6_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_6_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_6_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_6_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_6_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_6_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_6_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime6").innerHTML="";
                document.getElementById("btnDel6").style.display="none";
                document.getElementById("valor6").value="";
                document.getElementById("porcento6").value=0;
                document.getElementById("valorDesconto6").value="";
                document.getElementById("valorFinal6").innerHTML="";
                document.getElementById("dataRecebimento6").value="";
                document.getElementById("pagou6").checked=false;
                document.getElementById("compareceu6").checked=false;
            break;
            case 7:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_7_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_7_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_7_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_7_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_7_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_7_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_7_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_7_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_7_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime7").innerHTML="";
                document.getElementById("btnDel7").style.display="none";
                document.getElementById("valor7").value="";
                document.getElementById("porcento7").value=0;
                document.getElementById("valorDesconto7").value="";
                document.getElementById("valorFinal7").innerHTML="";
                document.getElementById("dataRecebimento7").value="";
                document.getElementById("pagou7").checked=false;
                document.getElementById("compareceu7").checked=false;
            break;
            case 8:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_8_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_8_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_8_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_8_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_8_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_8_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_8_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_8_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_8_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime8").innerHTML="";
                document.getElementById("btnDel8").style.display="none";
                document.getElementById("valor8").value="";
                document.getElementById("porcento8").value=0;
                document.getElementById("valorDesconto8").value="";
                document.getElementById("valorFinal8").innerHTML="";
                document.getElementById("dataRecebimento8").value="";
                document.getElementById("pagou8").checked=false;
                document.getElementById("compareceu8").checked=false;
            break;
            case 9:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_9_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_9_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_9_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_9_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_9_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_9_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_9_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_9_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_9_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime9").innerHTML="";
                document.getElementById("btnDel9").style.display="none";
                document.getElementById("valor9").value="";
                document.getElementById("porcento9").value=0;
                document.getElementById("valorDesconto9").value="";
                document.getElementById("valorFinal9").innerHTML="";
                document.getElementById("dataRecebimento9").value="";
                document.getElementById("pagou9").checked=false;
                document.getElementById("compareceu9").checked=false;
            break;
            case 10:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_10_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_10_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_10_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_10_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_10_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_10_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_10_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_10_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_10_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime10").innerHTML="";
                document.getElementById("btnDel10").style.display="none";
                document.getElementById("valor10").value="";
                document.getElementById("porcento10").value=0;
                document.getElementById("valorDesconto10").value="";
                document.getElementById("valorFinal10").innerHTML="";
                document.getElementById("dataRecebimento10").value="";
                document.getElementById("pagou10").checked=false;
                document.getElementById("compareceu10").checked=false;
            break;
            case 11:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_11_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_11_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_11_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_11_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_11_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_11_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_11_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_11_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_11_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime11").innerHTML="";
                document.getElementById("btnDel11").style.display="none";
                document.getElementById("valor11").value="";
                document.getElementById("porcento11").value=0;
                document.getElementById("valorDesconto11").value="";
                document.getElementById("valorFinal11").innerHTML="";
                document.getElementById("dataRecebimento11").value="";
                document.getElementById("pagou11").checked=false;
                document.getElementById("compareceu11").checked=false;
            break;
            case 12:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_12_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_12_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_12_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_12_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_12_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_12_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_12_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_12_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_12_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime12").innerHTML="";
                document.getElementById("btnDel12").style.display="none";
                document.getElementById("valor12").value="";
                document.getElementById("porcento12").value=0;
                document.getElementById("valorDesconto12").value="";
                document.getElementById("valorFinal12").innerHTML="";
                document.getElementById("dataRecebimento12").value="";
                document.getElementById("pagou12").checked=false;
                document.getElementById("compareceu12").checked=false;
            break;
            case 13:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_13_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_13_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_13_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_13_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_13_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_13_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_13_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_13_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_13_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime13").innerHTML="";
                document.getElementById("btnDel13").style.display="none";
                document.getElementById("valor13").value="";
                document.getElementById("porcento13").value=0;
                document.getElementById("valorDesconto13").value="";
                document.getElementById("valorFinal13").innerHTML="";
                document.getElementById("dataRecebimento13").value="";
                document.getElementById("pagou13").checked=false;
                document.getElementById("compareceu13").checked=false;
            break;
            case 14:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_14_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_14_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_14_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_14_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_14_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_14_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_14_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_14_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_14_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime14").innerHTML="";
                document.getElementById("btnDel14").style.display="none";
                document.getElementById("valor14").value="";
                document.getElementById("porcento14").value=0;
                document.getElementById("valorDesconto14").value="";
                document.getElementById("valorFinal14").innerHTML="";
                document.getElementById("dataRecebimento14").value="";
                document.getElementById("pagou14").checked=false;
                document.getElementById("compareceu14").checked=false;
            break;
            case 15:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_15_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_15_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_15_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_15_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_15_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_15_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_15_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_15_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_15_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime15").innerHTML="";
                document.getElementById("btnDel15").style.display="none";
                document.getElementById("valor15").value="";
                document.getElementById("porcento15").value=0;
                document.getElementById("valorDesconto15").value="";
                document.getElementById("valorFinal15").innerHTML="";
                document.getElementById("dataRecebimento15").value="";
                document.getElementById("pagou15").checked=false;
                document.getElementById("compareceu15").checked=false;
            break;
            case 16:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_16_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_16_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_16_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_16_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_16_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_16_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_16_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_16_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_16_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime16").innerHTML="";
                document.getElementById("btnDel16").style.display="none";
                document.getElementById("valor16").value="";
                document.getElementById("porcento16").value=0;
                document.getElementById("valorDesconto16").value="";
                document.getElementById("valorFinal16").innerHTML="";
                document.getElementById("dataRecebimento16").value="";
                document.getElementById("pagou16").checked=false;
                document.getElementById("compareceu16").checked=false;
            break;
            case 17:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_17_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_17_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_17_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_17_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_17_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_17_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_17_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_17_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_17_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime17").innerHTML="";
                document.getElementById("btnDel17").style.display="none";
                document.getElementById("valor17").value="";
                document.getElementById("porcento17").value=0;
                document.getElementById("valorDesconto17").value="";
                document.getElementById("valorFinal17").innerHTML="";
                document.getElementById("dataRecebimento17").value="";
                document.getElementById("pagou17").checked=false;
                document.getElementById("compareceu17").checked=false;
            break;
            case 18:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_18_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_18_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_18_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_18_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_18_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_18_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_18_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_18_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_18_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime18").innerHTML="";
                document.getElementById("btnDel18").style.display="none";
                document.getElementById("valor18").value="";
                document.getElementById("porcento18").value=0;
                document.getElementById("valorDesconto18").value="";
                document.getElementById("valorFinal18").innerHTML="";
                document.getElementById("dataRecebimento18").value="";
                document.getElementById("pagou18").checked=false;
                document.getElementById("compareceu18").checked=false;
            break;
            case 19:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_19_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_19_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_19_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_19_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_19_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_19_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_19_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_19_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_19_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime19").innerHTML="";
                document.getElementById("btnDel19").style.display="none";
                document.getElementById("valor19").value="";
                document.getElementById("porcento19").value=0;
                document.getElementById("valorDesconto19").value="";
                document.getElementById("valorFinal19").innerHTML="";
                document.getElementById("dataRecebimento19").value="";
                document.getElementById("pagou19").checked=false;
                document.getElementById("compareceu19").checked=false;
            break;
            case 20:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_20_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_20_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_20_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_20_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_20_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_20_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_20_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_20_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_20_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime20").innerHTML="";
                document.getElementById("btnDel20").style.display="none";
                document.getElementById("valor20").value="";
                document.getElementById("porcento20").value=0;
                document.getElementById("valorDesconto20").value="";
                document.getElementById("valorFinal20").innerHTML="";
                document.getElementById("dataRecebimento20").value="";
                document.getElementById("pagou20").checked=false;
                document.getElementById("compareceu20").checked=false;
            break;
            case 21:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_21_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_21_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_21_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_21_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_21_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_21_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_21_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_21_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_21_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime21").innerHTML="";
                document.getElementById("btnDel21").style.display="none";
                document.getElementById("valor21").value="";
                document.getElementById("porcento21").value=0;
                document.getElementById("valorDesconto21").value="";
                document.getElementById("valorFinal21").innerHTML="";
                document.getElementById("dataRecebimento21").value="";
                document.getElementById("pagou21").checked=false;
                document.getElementById("compareceu21").checked=false;
            break;
            case 22:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_22_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_22_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_22_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_22_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_22_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_22_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_22_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_22_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_22_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime22").innerHTML="";
                document.getElementById("btnDel22").style.display="none";
                document.getElementById("valor22").value="";
                document.getElementById("porcento22").value=0;
                document.getElementById("valorDesconto22").value="";
                document.getElementById("valorFinal22").innerHTML="";
                document.getElementById("dataRecebimento22").value="";
                document.getElementById("pagou22").checked=false;
                document.getElementById("compareceu22").checked=false;
            break;
            case 23:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_23_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_23_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_23_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_23_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_23_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_23_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_23_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_23_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_23_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime23").innerHTML="";
                document.getElementById("btnDel23").style.display="none";
                document.getElementById("valor23").value="";
                document.getElementById("porcento23").value=0;
                document.getElementById("valorDesconto23").value="";
                document.getElementById("valorFinal23").innerHTML="";
                document.getElementById("dataRecebimento23").value="";
                document.getElementById("pagou23").checked=false;
                document.getElementById("compareceu23").checked=false;
            break;
            case 24:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_24_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_24_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_24_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_24_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_24_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_24_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_24_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_24_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_24_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime24").innerHTML="";
                document.getElementById("btnDel24").style.display="none";
                document.getElementById("valor24").value="";
                document.getElementById("porcento24").value=0;
                document.getElementById("valorDesconto24").value="";
                document.getElementById("valorFinal24").innerHTML="";
                document.getElementById("dataRecebimento24").value="";
                document.getElementById("pagou24").checked=false;
                document.getElementById("compareceu24").checked=false;
            break;
            case 25:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_25_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_25_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_25_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_25_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_25_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_25_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_25_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_25_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_25_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime25").innerHTML="";
                document.getElementById("btnDel25").style.display="none";
                document.getElementById("valor25").value="";
                document.getElementById("porcento25").value=0;
                document.getElementById("valorDesconto25").value="";
                document.getElementById("valorFinal25").innerHTML="";
                document.getElementById("dataRecebimento25").value="";
                document.getElementById("pagou25").checked=false;
                document.getElementById("compareceu25").checked=false;
            break;
            case 26:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_26_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_26_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_26_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_26_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_26_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_26_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_26_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_26_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_26_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime26").innerHTML="";
                document.getElementById("btnDel26").style.display="none";
                document.getElementById("valor26").value="";
                document.getElementById("porcento26").value=0;
                document.getElementById("valorDesconto26").value="";
                document.getElementById("valorFinal26").innerHTML="";
                document.getElementById("dataRecebimento26").value="";
                document.getElementById("pagou26").checked=false;
                document.getElementById("compareceu26").checked=false;
            break;
            case 27:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_27_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_27_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_27_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_27_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_27_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_27_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_27_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_27_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_27_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime27").innerHTML="";
                document.getElementById("btnDel27").style.display="none";
                document.getElementById("valor27").value="";
                document.getElementById("porcento27").value=0;
                document.getElementById("valorDesconto27").value="";
                document.getElementById("valorFinal27").innerHTML="";
                document.getElementById("dataRecebimento27").value="";
                document.getElementById("pagou27").checked=false;
                document.getElementById("compareceu27").checked=false;
            break;
            case 28:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_28_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_28_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_28_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_28_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_28_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_28_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_28_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_28_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_28_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime28").innerHTML="";
                document.getElementById("btnDel28").style.display="none";
                document.getElementById("valor28").value="";
                document.getElementById("porcento28").value=0;
                document.getElementById("valorDesconto28").value="";
                document.getElementById("valorFinal28").innerHTML="";
                document.getElementById("dataRecebimento28").value="";
                document.getElementById("pagou28").checked=false;
                document.getElementById("compareceu28").checked=false;
            break;
            case 29:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_29_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_29_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_29_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_29_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_29_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_29_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_29_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_29_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_29_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime29").innerHTML="";
                document.getElementById("btnDel29").style.display="none";
                document.getElementById("valor29").value="";
                document.getElementById("porcento29").value=0;
                document.getElementById("valorDesconto29").value="";
                document.getElementById("valorFinal29").innerHTML="";
                document.getElementById("dataRecebimento29").value="";
                document.getElementById("pagou29").checked=false;
                document.getElementById("compareceu29").checked=false;
            break;
            case 30:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_30_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_30_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_30_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_30_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_30_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_30_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_30_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_30_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_30_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime30").innerHTML="";
                document.getElementById("btnDel30").style.display="none";
                document.getElementById("valor30").value="";
                document.getElementById("porcento30").value=0;
                document.getElementById("valorDesconto30").value="";
                document.getElementById("valorFinal30").innerHTML="";
                document.getElementById("dataRecebimento30").value="";
                document.getElementById("pagou30").checked=false;
                document.getElementById("compareceu30").checked=false;
            break;
            case 31:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_31_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_31_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_31_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_31_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_31_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_31_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_31_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_31_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_31_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime31").innerHTML="";
                document.getElementById("btnDel31").style.display="none";
                document.getElementById("valor31").value="";
                document.getElementById("porcento31").value=0;
                document.getElementById("valorDesconto31").value="";
                document.getElementById("valorFinal31").innerHTML="";
                document.getElementById("dataRecebimento31").value="";
                document.getElementById("pagou31").checked=false;
                document.getElementById("compareceu31").checked=false;
            break;
            case 32:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_32_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_32_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_32_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_32_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_32_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_32_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_32_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_32_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_32_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime32").innerHTML="";
                document.getElementById("btnDel32").style.display="none";
                document.getElementById("valor32").value="";
                document.getElementById("porcento32").value=0;
                document.getElementById("valorDesconto32").value="";
                document.getElementById("valorFinal32").innerHTML="";
                document.getElementById("dataRecebimento32").value="";
                document.getElementById("pagou32").checked=false;
                document.getElementById("compareceu32").checked=false;
            break;
            case 33:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_33_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_33_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_33_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_33_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_33_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_33_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_33_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_33_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_33_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime33").innerHTML="";
                document.getElementById("btnDel33").style.display="none";
                document.getElementById("valor33").value="";
                document.getElementById("porcento33").value=0;
                document.getElementById("valorDesconto33").value="";
                document.getElementById("valorFinal33").innerHTML="";
                document.getElementById("dataRecebimento33").value="";
                document.getElementById("pagou33").checked=false;
                document.getElementById("compareceu33").checked=false;
            break;
            case 34:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_34_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_34_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_34_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_34_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_34_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_34_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_34_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_34_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_34_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime34").innerHTML="";
                document.getElementById("btnDel34").style.display="none";
                document.getElementById("valor34").value="";
                document.getElementById("porcento34").value=0;
                document.getElementById("valorDesconto34").value="";
                document.getElementById("valorFinal34").innerHTML="";
                document.getElementById("dataRecebimento34").value="";
                document.getElementById("pagou34").checked=false;
                document.getElementById("compareceu34").checked=false;
            break;
            case 35:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_35_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_35_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_35_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_35_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_35_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_35_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_35_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_35_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_35_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime35").innerHTML="";
                document.getElementById("btnDel35").style.display="none";
                document.getElementById("valor35").value="";
                document.getElementById("porcento35").value=0;
                document.getElementById("valorDesconto35").value="";
                document.getElementById("valorFinal35").innerHTML="";
                document.getElementById("dataRecebimento35").value="";
                document.getElementById("pagou35").checked=false;
                document.getElementById("compareceu35").checked=false;
            break;
            case 36:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_36_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_36_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_36_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_36_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_36_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_36_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_36_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_36_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_36_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime36").innerHTML="";
                document.getElementById("btnDel36").style.display="none";
                document.getElementById("valor36").value="";
                document.getElementById("porcento36").value=0;
                document.getElementById("valorDesconto36").value="";
                document.getElementById("valorFinal36").innerHTML="";
                document.getElementById("dataRecebimento36").value="";
                document.getElementById("pagou36").checked=false;
                document.getElementById("compareceu36").checked=false;
            break;
            case 37:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_37_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_37_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_37_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_37_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_37_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_37_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_37_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_37_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_37_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime37").innerHTML="";
                document.getElementById("btnDel37").style.display="none";
                document.getElementById("valor37").value="";
                document.getElementById("porcento37").value=0;
                document.getElementById("valorDesconto37").value="";
                document.getElementById("valorFinal37").innerHTML="";
                document.getElementById("dataRecebimento37").value="";
                document.getElementById("pagou37").checked=false;
                document.getElementById("compareceu37").checked=false;
            break;
            case 38:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_38_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_38_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_38_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_38_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_38_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_38_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_38_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_38_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_38_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime38").innerHTML="";
                document.getElementById("btnDel38").style.display="none";
                document.getElementById("valor38").value="";
                document.getElementById("porcento38").value=0;
                document.getElementById("valorDesconto38").value="";
                document.getElementById("valorFinal38").innerHTML="";
                document.getElementById("dataRecebimento38").value="";
                document.getElementById("pagou38").checked=false;
                document.getElementById("compareceu38").checked=false;
            break;
            case 39:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_39_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_39_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_39_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_39_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_39_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_39_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_39_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_39_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_39_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime39").innerHTML="";
                document.getElementById("btnDel39").style.display="none";
                document.getElementById("valor39").value="";
                document.getElementById("porcento39").value=0;
                document.getElementById("valorDesconto39").value="";
                document.getElementById("valorFinal39").innerHTML="";
                document.getElementById("dataRecebimento39").value="";
                document.getElementById("pagou39").checked=false;
                document.getElementById("compareceu39").checked=false;
            break;
            case 40:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_40_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_40_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_40_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_40_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_40_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_40_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_40_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_40_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_40_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime40").innerHTML="";
                document.getElementById("btnDel40").style.display="none";
                document.getElementById("valor40").value="";
                document.getElementById("porcento40").value=0;
                document.getElementById("valorDesconto40").value="";
                document.getElementById("valorFinal40").innerHTML="";
                document.getElementById("dataRecebimento40").value="";
                document.getElementById("pagou40").checked=false;
                document.getElementById("compareceu40").checked=false;
            break;
            case 41:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_41_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_41_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_41_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_41_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_41_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_41_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_41_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_41_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_41_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime41").innerHTML="";
                document.getElementById("btnDel41").style.display="none";
                document.getElementById("valor41").value="";
                document.getElementById("porcento41").value=0;
                document.getElementById("valorDesconto41").value="";
                document.getElementById("valorFinal41").innerHTML="";
                document.getElementById("dataRecebimento41").value="";
                document.getElementById("pagou41").checked=false;
                document.getElementById("compareceu41").checked=false;
            break;
            case 42:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_42_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_42_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_42_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_42_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_42_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_42_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_42_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_42_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_42_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime42").innerHTML="";
                document.getElementById("btnDel42").style.display="none";
                document.getElementById("valor42").value="";
                document.getElementById("porcento42").value=0;
                document.getElementById("valorDesconto42").value="";
                document.getElementById("valorFinal42").innerHTML="";
                document.getElementById("dataRecebimento42").value="";
                document.getElementById("pagou42").checked=false;
                document.getElementById("compareceu42").checked=false;
            break;
            case 43:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_43_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_43_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_43_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_43_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_43_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_43_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_43_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_43_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_43_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime43").innerHTML="";
                document.getElementById("btnDel43").style.display="none";
                document.getElementById("valor43").value="";
                document.getElementById("porcento43").value=0;
                document.getElementById("valorDesconto43").value="";
                document.getElementById("valorFinal43").innerHTML="";
                document.getElementById("dataRecebimento43").value="";
                document.getElementById("pagou43").checked=false;
                document.getElementById("compareceu43").checked=false;
            break;
            case 44:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_44_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime44").innerHTML="";
                document.getElementById("btnDel44").style.display="none";
                document.getElementById("valor44").value="";
                document.getElementById("porcento44").value=0;
                document.getElementById("valorDesconto44").value="";
                document.getElementById("valorFinal44").innerHTML="";
                document.getElementById("dataRecebimento44").value="";
                document.getElementById("pagou44").checked=false;
                document.getElementById("compareceu44").checked=false;
            break;
            case 45:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_45_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_45_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_45_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_45_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_45_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_45_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_45_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_45_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_45_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime45").innerHTML="";
                document.getElementById("btnDel45").style.display="none";
                document.getElementById("valor45").value="";
                document.getElementById("porcento45").value=0;
                document.getElementById("valorDesconto45").value="";
                document.getElementById("valorFinal45").innerHTML="";
                document.getElementById("dataRecebimento45").value="";
                document.getElementById("pagou45").checked=false;
                document.getElementById("compareceu45").checked=false;
            break;
            case 46:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_46_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_46_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_46_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_46_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_46_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_46_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_46_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_46_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_46_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime46").innerHTML="";
                document.getElementById("btnDel46").style.display="none";
                document.getElementById("valor46").value="";
                document.getElementById("porcento46").value=0;
                document.getElementById("valorDesconto46").value="";
                document.getElementById("valorFinal46").innerHTML="";
                document.getElementById("dataRecebimento46").value="";
                document.getElementById("pagou46").checked=false;
                document.getElementById("compareceu46").checked=false;
            break;
            case 47:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_47_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_47_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_47_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_47_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_47_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_47_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_47_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_47_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_47_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime47").innerHTML="";
                document.getElementById("btnDel47").style.display="none";
                document.getElementById("valor47").value="";
                document.getElementById("porcento47").value=0;
                document.getElementById("valorDesconto47").value="";
                document.getElementById("valorFinal47").innerHTML="";
                document.getElementById("dataRecebimento47").value="";
                document.getElementById("pagou47").checked=false;
                document.getElementById("compareceu47").checked=false;
            break;
            case 48:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_48_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_48_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_48_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_48_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_48_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_48_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_48_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_48_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_48_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime48").innerHTML="";
                document.getElementById("btnDel48").style.display="none";
                document.getElementById("valor48").value="";
                document.getElementById("porcento48").value=0;
                document.getElementById("valorDesconto48").value="";
                document.getElementById("valorFinal48").innerHTML="";
                document.getElementById("dataRecebimento48").value="";
                document.getElementById("pagou48").checked=false;
                document.getElementById("compareceu48").checked=false;
            break;
            case 49:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_49_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_49_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_49_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_49_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_49_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_49_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_49_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_49_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_49_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime49").innerHTML="";
                document.getElementById("btnDel49").style.display="none";
                document.getElementById("valor49").value="";
                document.getElementById("porcento49").value=0;
                document.getElementById("valorDesconto49").value="";
                document.getElementById("valorFinal49").innerHTML="";
                document.getElementById("dataRecebimento49").value="";
                document.getElementById("pagou49").checked=false;
                document.getElementById("compareceu49").checked=false;
            break;
            case 50:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_50_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_50_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_50_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_50_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_50_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_50_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_50_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_50_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_50_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime50").innerHTML="";
                document.getElementById("btnDel50").style.display="none";
                document.getElementById("valor50").value="";
                document.getElementById("porcento50").value=0;
                document.getElementById("valorDesconto50").value="";
                document.getElementById("valorFinal50").innerHTML="";
                document.getElementById("dataRecebimento50").value="";
                document.getElementById("pagou50").checked=false;
                document.getElementById("compareceu50").checked=false;
            break;
            case 51:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_51_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_51_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_51_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_51_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_51_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_51_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_51_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_51_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_51_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime51").innerHTML="";
                document.getElementById("btnDel51").style.display="none";
                document.getElementById("valor51").value="";
                document.getElementById("porcento51").value=0;
                document.getElementById("valorDesconto51").value="";
                document.getElementById("valorFinal51").innerHTML="";
                document.getElementById("dataRecebimento51").value="";
                document.getElementById("pagou51").checked=false;
                document.getElementById("compareceu51").checked=false;
            break;
            case 52:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_52_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_52_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_52_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_52_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_52_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_52_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_52_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_52_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_52_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime52").innerHTML="";
                document.getElementById("btnDel52").style.display="none";
                document.getElementById("valor52").value="";
                document.getElementById("porcento52").value=0;
                document.getElementById("valorDesconto52").value="";
                document.getElementById("valorFinal52").innerHTML="";
                document.getElementById("dataRecebimento52").value="";
                document.getElementById("pagou52").checked=false;
                document.getElementById("compareceu52").checked=false;
            break;
            case 53:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_53_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_53_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_53_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_53_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_53_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_53_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_53_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_53_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_53_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime53").innerHTML="";
                document.getElementById("btnDel53").style.display="none";
                document.getElementById("valor53").value="";
                document.getElementById("porcento53").value=0;
                document.getElementById("valorDesconto53").value="";
                document.getElementById("valorFinal53").innerHTML="";
                document.getElementById("dataRecebimento53").value="";
                document.getElementById("pagou53").checked=false;
                document.getElementById("compareceu53").checked=false;
            break;
            case 54:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_54_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_54_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_54_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_54_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_54_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_54_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_54_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_54_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_54_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime54").innerHTML="";
                document.getElementById("btnDel54").style.display="none";
                document.getElementById("valor54").value="";
                document.getElementById("porcento54").value=0;
                document.getElementById("valorDesconto54").value="";
                document.getElementById("valorFinal54").innerHTML="";
                document.getElementById("dataRecebimento54").value="";
                document.getElementById("pagou54").checked=false;
                document.getElementById("compareceu54").checked=false;
            break;
            case 55:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_55_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_55_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_55_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_55_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_55_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_55_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_55_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_55_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_55_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime55").innerHTML="";
                document.getElementById("btnDel55").style.display="none";
                document.getElementById("valor55").value="";
                document.getElementById("porcento55").value=0;
                document.getElementById("valorDesconto55").value="";
                document.getElementById("valorFinal55").innerHTML="";
                document.getElementById("dataRecebimento55").value="";
                document.getElementById("pagou55").checked=false;
                document.getElementById("compareceu55").checked=false;
            break;
            case 56:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_56_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_56_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_56_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_56_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_56_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_56_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_56_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_56_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_56_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime56").innerHTML="";
                document.getElementById("btnDel56").style.display="none";
                document.getElementById("valor56").value="";
                document.getElementById("porcento56").value=0;
                document.getElementById("valorDesconto56").value="";
                document.getElementById("valorFinal56").innerHTML="";
                document.getElementById("dataRecebimento56").value="";
                document.getElementById("pagou56").checked=false;
                document.getElementById("compareceu56").checked=false;
            break;
            case 57:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_57_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_57_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_57_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_57_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_57_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_57_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_57_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_57_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_57_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime57").innerHTML="";
                document.getElementById("btnDel57").style.display="none";
                document.getElementById("valor57").value="";
                document.getElementById("porcento57").value=0;
                document.getElementById("valorDesconto57").value="";
                document.getElementById("valorFinal57").innerHTML="";
                document.getElementById("dataRecebimento57").value="";
                document.getElementById("pagou57").checked=false;
                document.getElementById("compareceu75").checked=false;
            break;
            case 58:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_58_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_58_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_58_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_58_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_58_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_58_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_58_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_58_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_58_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime58").innerHTML="";
                document.getElementById("btnDel58").style.display="none";
                document.getElementById("valor58").value="";
                document.getElementById("porcento58").value=0;
                document.getElementById("valorDesconto58").value="";
                document.getElementById("valorFinal58").innerHTML="";
                document.getElementById("dataRecebimento58").value="";
                document.getElementById("pagou58").checked=false;
                document.getElementById("compareceu58").checked=false;
            break;
            case 59:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_59_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_59_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_59_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_59_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_59_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_59_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_59_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_59_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_59_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime59").innerHTML="";
                document.getElementById("btnDel59").style.display="none";
                document.getElementById("valor59").value="";
                document.getElementById("porcento59").value=0;
                document.getElementById("valorDesconto59").value="";
                document.getElementById("valorFinal59").innerHTML="";
                document.getElementById("dataRecebimento59").value="";
                document.getElementById("pagou59").checked=false;
                document.getElementById("compareceu59").checked=false;
            break;
            case 60:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_60_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_60_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_60_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_60_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_60_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_60_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_60_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_60_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_60_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime60").innerHTML="";
                document.getElementById("btnDel60").style.display="none";
                document.getElementById("valor60").value="";
                document.getElementById("porcento60").value=0;
                document.getElementById("valorDesconto60").value="";
                document.getElementById("valorFinal60").innerHTML="";
                document.getElementById("dataRecebimento60").value="";
                document.getElementById("pagou60").checked=false;
                document.getElementById("compareceu60").checked=false;
            break;
            case 61:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_61_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_61_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_61_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_61_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_61_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_61_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_61_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_61_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_61_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime61").innerHTML="";
                document.getElementById("btnDel61").style.display="none";
                document.getElementById("valor61").value="";
                document.getElementById("porcento61").value=0;
                document.getElementById("valorDesconto61").value="";
                document.getElementById("valorFinal61").innerHTML="";
                document.getElementById("dataRecebimento61").value="";
                document.getElementById("pagou61").checked=false;
                document.getElementById("compareceu61").checked=false;
            break;
            case 62:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_62_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_62_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_62_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_62_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_62_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_62_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_62_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_62_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_62_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime62").innerHTML="";
                document.getElementById("btnDel62").style.display="none";
                document.getElementById("valor62").value="";
                document.getElementById("porcento62").value=0;
                document.getElementById("valorDesconto62").value="";
                document.getElementById("valorFinal62").innerHTML="";
                document.getElementById("dataRecebimento62").value="";
                document.getElementById("pagou62").checked=false;
                document.getElementById("compareceu62").checked=false;
            break;
            case 63:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_63_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_63_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_63_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_63_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_63_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_63_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_63_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_63_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_63_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime63").innerHTML="";
                document.getElementById("btnDel63").style.display="none";
                document.getElementById("valor63").value="";
                document.getElementById("porcento63").value=0;
                document.getElementById("valorDesconto63").value="";
                document.getElementById("valorFinal63").innerHTML="";
                document.getElementById("dataRecebimento63").value="";
                document.getElementById("pagou63").checked=false;
                document.getElementById("compareceu63").checked=false;
            break;
            case 64:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_64_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_64_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_64_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_64_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_64_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_64_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_64_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_64_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_64_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime64").innerHTML="";
                document.getElementById("btnDel64").style.display="none";
                document.getElementById("valor64").value="";
                document.getElementById("porcento64").value=0;
                document.getElementById("valorDesconto64").value="";
                document.getElementById("valorFinal64").innerHTML="";
                document.getElementById("dataRecebimento64").value="";
                document.getElementById("pagou64").checked=false;
                document.getElementById("compareceu64").checked=false;
            break;
            case 65:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_65_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_65_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_65_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_65_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_65_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_65_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_65_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_65_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_65_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime65").innerHTML="";
                document.getElementById("btnDel65").style.display="none";
                document.getElementById("valor65").value="";
                document.getElementById("porcento65").value=0;
                document.getElementById("valorDesconto65").value="";
                document.getElementById("valorFinal65").innerHTML="";
                document.getElementById("dataRecebimento65").value="";
                document.getElementById("pagou65").checked=false;
                document.getElementById("compareceu65").checked=false;
            break;
            case 66:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_66_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_66_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_66_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_66_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_66_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_66_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_66_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_66_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_66_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime66").innerHTML="";
                document.getElementById("btnDel66").style.display="none";
                document.getElementById("valor66").value="";
                document.getElementById("porcento66").value=0;
                document.getElementById("valorDesconto66").value="";
                document.getElementById("valorFinal66").innerHTML="";
                document.getElementById("dataRecebimento66").value="";
                document.getElementById("pagou66").checked=false;
                document.getElementById("compareceu66").checked=false;
            break;
            case 67:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_67_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_67_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_67_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_67_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_67_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_67_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_67_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_67_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_67_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime67").innerHTML="";
                document.getElementById("btnDel67").style.display="none";
                document.getElementById("valor67").value="";
                document.getElementById("porcento67").value=0;
                document.getElementById("valorDesconto67").value="";
                document.getElementById("valorFinal67").innerHTML="";
                document.getElementById("dataRecebimento67").value="";
                document.getElementById("pagou67").checked=false;
                document.getElementById("compareceu67").checked=false;
            break;
            case 68:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_68_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_68_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_68_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_68_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_68_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_68_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_68_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_68_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_68_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime68").innerHTML="";
                document.getElementById("btnDel68").style.display="none";
                document.getElementById("valor68").value="";
                document.getElementById("porcento68").value=0;
                document.getElementById("valorDesconto68").value="";
                document.getElementById("valorFinal68").innerHTML="";
                document.getElementById("dataRecebimento68").value="";
                document.getElementById("pagou68").checked=false;
                document.getElementById("compareceu68").checked=false;
            break;
            case 69:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_69_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_69_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_69_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_69_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_69_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_69_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_69_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_69_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_69_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime69").innerHTML="";
                document.getElementById("btnDel69").style.display="none";
                document.getElementById("valor69").value="";
                document.getElementById("porcento69").value=0;
                document.getElementById("valorDesconto69").value="";
                document.getElementById("valorFinal69").innerHTML="";
                document.getElementById("dataRecebimento69").value="";
                document.getElementById("pagou69").checked=false;
                document.getElementById("compareceu69").checked=false;
            break;
            case 70:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_70_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_70_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_70_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_70_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_70_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_70_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_70_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_70_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_70_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime70").innerHTML="";
                document.getElementById("btnDel70").style.display="none";
                document.getElementById("valor70").value="";
                document.getElementById("porcento70").value=0;
                document.getElementById("valorDesconto70").value="";
                document.getElementById("valorFinal70").innerHTML="";
                document.getElementById("dataRecebimento70").value="";
                document.getElementById("pagou70").checked=false;
                document.getElementById("compareceu70").checked=false;
            break;
            case 71:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_71_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_71_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_71_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_71_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_71_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_71_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_71_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_71_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_71_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime71").innerHTML="";
                document.getElementById("btnDel71").style.display="none";
                document.getElementById("valor71").value="";
                document.getElementById("porcento71").value=0;
                document.getElementById("valorDesconto71").value="";
                document.getElementById("valorFinal71").innerHTML="";
                document.getElementById("dataRecebimento71").value="";
                document.getElementById("pagou71").checked=false;
                document.getElementById("compareceu71").checked=false;
            break;
            case 72:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_72_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_72_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_72_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_72_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_72_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_72_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_72_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_72_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_72_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime72").innerHTML="";
                document.getElementById("btnDel72").style.display="none";
                document.getElementById("valor72").value="";
                document.getElementById("porcento72").value=0;
                document.getElementById("valorDesconto72").value="";
                document.getElementById("valorFinal72").innerHTML="";
                document.getElementById("dataRecebimento72").value="";
                document.getElementById("pagou72").checked=false;
                document.getElementById("compareceu72").checked=false;
            break;
            case 73:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_73_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_73_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_73_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_73_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_73_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_73_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_73_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_73_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_73_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime73").innerHTML="";
                document.getElementById("btnDel73").style.display="none";
                document.getElementById("valor73").value="";
                document.getElementById("porcento73").value=0;
                document.getElementById("valorDesconto73").value="";
                document.getElementById("valorFinal73").innerHTML="";
                document.getElementById("dataRecebimento73").value="";
                document.getElementById("pagou73").checked=false;
                document.getElementById("compareceu73").checked=false;
            break;
            case 74:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_74_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_74_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_74_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_74_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_74_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_74_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_74_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_74_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_74_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime74").innerHTML="";
                document.getElementById("btnDel74").style.display="none";
                document.getElementById("valor74").value="";
                document.getElementById("porcento74").value=0;
                document.getElementById("valorDesconto74").value="";
                document.getElementById("valorFinal74").innerHTML="";
                document.getElementById("dataRecebimento74").value="";
                document.getElementById("pagou74").checked=false;
                document.getElementById("compareceu74").checked=false;
            break;
            case 75:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_75_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_75_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_75_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_75_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_75_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_75_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_75_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_75_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_75_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime75").innerHTML="";
                document.getElementById("btnDel75").style.display="none";
                document.getElementById("valor75").value="";
                document.getElementById("porcento75").value=0;
                document.getElementById("valorDesconto75").value="";
                document.getElementById("valorFinal75").innerHTML="";
                document.getElementById("dataRecebimento75").value="";
                document.getElementById("pagou75").checked=false;
                document.getElementById("compareceu75").checked=false;
            break;
            case 76:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_76_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_76_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_76_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_76_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_76_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_76_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_76_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_76_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_76_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime76").innerHTML="";
                document.getElementById("btnDel76").style.display="none";
                document.getElementById("valor76").value="";
                document.getElementById("porcento76").value=0;
                document.getElementById("valorDesconto76").value="";
                document.getElementById("valorFinal76").innerHTML="";
                document.getElementById("dataRecebimento76").value="";
                document.getElementById("pagou76").checked=false;
                document.getElementById("compareceu76").checked=false;
            break;
            case 77:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_77_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_77_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_77_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_77_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_77_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_77_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_77_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_77_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_77_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime77").innerHTML="";
                document.getElementById("btnDel77").style.display="none";
                document.getElementById("valor77").value="";
                document.getElementById("porcento77").value=0;
                document.getElementById("valorDesconto77").value="";
                document.getElementById("valorFinal77").innerHTML="";
                document.getElementById("dataRecebimento77").value="";
                document.getElementById("pagou77").checked=false;
                document.getElementById("compareceu77").checked=false;
            break;
            case 78:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_78_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_78_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_78_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_78_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_78_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_78_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_78_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_78_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_78_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime78").innerHTML="";
                document.getElementById("btnDel78").style.display="none";
                document.getElementById("valor78").value="";
                document.getElementById("porcento78").value=0;
                document.getElementById("valorDesconto78").value="";
                document.getElementById("valorFinal78").innerHTML="";
                document.getElementById("dataRecebimento78").value="";
                document.getElementById("pagou78").checked=false;
                document.getElementById("compareceu78").checked=false;
            break;
            case 79:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_79_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_79_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_79_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_79_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_79_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_79_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_79_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_79_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_79_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime79").innerHTML="";
                document.getElementById("btnDel79").style.display="none";
                document.getElementById("valor79").value="";
                document.getElementById("porcento79").value=0;
                document.getElementById("valorDesconto79").value="";
                document.getElementById("valorFinal79").innerHTML="";
                document.getElementById("dataRecebimento79").value="";
                document.getElementById("pagou79").checked=false;
                document.getElementById("compareceu79").checked=false;
            break;
            case 80:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_80_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_80_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_80_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_80_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_80_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_80_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_80_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_80_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_80_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime80").innerHTML="";
                document.getElementById("btnDel80").style.display="none";
                document.getElementById("valor80").value="";
                document.getElementById("porcento80").value=0;
                document.getElementById("valorDesconto80").value="";
                document.getElementById("valorFinal80").innerHTML="";
                document.getElementById("dataRecebimento80").value="";
                document.getElementById("pagou80").checked=false;
                document.getElementById("compareceu80").checked=false;
            break;
            case 81:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_81_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_81_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_81_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_81_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_81_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_81_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_81_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_81_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_81_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime81").innerHTML="";
                document.getElementById("btnDel81").style.display="none";
                document.getElementById("valor81").value="";
                document.getElementById("porcento81").value=0;
                document.getElementById("valorDesconto81").value="";
                document.getElementById("valorFinal81").innerHTML="";
                document.getElementById("dataRecebimento81").value="";
                document.getElementById("pagou81").checked=false;
                document.getElementById("compareceu81").checked=false;
            break;
            case 82:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_82_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_82_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_82_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_82_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_82_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_82_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_82_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_82_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_82_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime82").innerHTML="";
                document.getElementById("btnDel82").style.display="none";
                document.getElementById("valor82").value="";
                document.getElementById("porcento82").value=0;
                document.getElementById("valorDesconto82").value="";
                document.getElementById("valorFinal82").innerHTML="";
                document.getElementById("dataRecebimento82").value="";
                document.getElementById("pagou82").checked=false;
                document.getElementById("compareceu82").checked=false;
            break;
            case 83:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_83_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_83_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_83_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_83_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_83_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_83_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_83_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_83_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_83_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime83").innerHTML="";
                document.getElementById("btnDel83").style.display="none";
                document.getElementById("valor83").value="";
                document.getElementById("porcento83").value=0;
                document.getElementById("valorDesconto83").value="";
                document.getElementById("valorFinal83").innerHTML="";
                document.getElementById("dataRecebimento83").value="";
                document.getElementById("pagou83").checked=false;
                document.getElementById("compareceu83").checked=false;
            break;
            case 84:
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_84_cliente');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_84_cliente_id');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_84_compareceu');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_84_data_rec');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_84_data_rec_value');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_84_pagou');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_84_tipo_de_desconto');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_84_valor_desc');
                databaseRef.remove();
                var databaseRef = database.ref('eventos/'+eventoId+'/horario_84_valor_rec');
                databaseRef.remove();
                
                document.getElementById("idTime8").innerHTML="";
                document.getElementById("btnDel8").style.display="none";
                document.getElementById("valor8").value="";
                document.getElementById("porcento8").value=0;
                document.getElementById("valorDesconto8").value="";
                document.getElementById("valorFinal8").innerHTML="";
                document.getElementById("dataRecebimento8").value="";
                document.getElementById("pagou8").checked=false;
                document.getElementById("compareceu8").checked=false;
            break;
        }
        //alert('Compromisso Removido');
        buscarAgendamentos();
    }

    function acertarCompareceu(){
        for(var i=1; i<85; i++){
            document.getElementById("compareceu"+i).checked;
            if("compareceu"+i){
                alert("TRUE compareceu"+i+" = "+"compareceu"+i);
            }else{
                alert("False compareceu"+i+" = "+"compareceu"+i);
            }
        }
    }

    function cCompareceu(n){
        let eventoId = sessionStorage.getItem('eventoId');
        var database = firebase.database();

        switch(n){
        case 1:
            if(!compareceu1){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_1_compareceu:true
                });
                compareceu1=true;
                var compareceu = document.getElementById("compareceu1");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_1_compareceu:false
                });
                compareceu1=false;
                var compareceu = document.getElementById("compareceu1");
                compareceu.checked=false;
            }
            break;
        
        case 2:
            if(!compareceu2){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_2_compareceu:true
                });
                compareceu2=true;
                var compareceu = document.getElementById("compareceu2");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_2_compareceu:false
                });
                compareceu2=false;
                var compareceu = document.getElementById("compareceu2");
                compareceu.checked=false;
            }
//            alert("compareceu"+n);
//            alert(compareceu2);
//            alert(compareceu+""+n);
                
            break;
        case 3:
            if(!compareceu3){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_3_compareceu:true
                });
                compareceu3=true;
                var compareceu = document.getElementById("compareceu3");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_3_compareceu:false
                });
                compareceu3=false;
                var compareceu = document.getElementById("compareceu3");
                compareceu.checked=false;
            }
            break;
        case 4:
            if(!compareceu4){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_4_compareceu:true
                });
                compareceu4=true;
                var compareceu = document.getElementById("compareceu4");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_4_compareceu:false
                });
                compareceu4=false;
                var compareceu = document.getElementById("compareceu4");
                compareceu.checked=false;
            }
            break;
        case 5:
            if(!compareceu5){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_5_compareceu:true
                });
                compareceu5=true;
                var compareceu = document.getElementById("compareceu5");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_5_compareceu:false
                });
                compareceu5=false;
                var compareceu = document.getElementById("compareceu5");
                compareceu.checked=false;
            }
            break;
        case 6:
            if(!compareceu6){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_6_compareceu:true
                });
                compareceu6=true;
                var compareceu = document.getElementById("compareceu6");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_6_compareceu:false
                });
                compareceu6=false;
                var compareceu = document.getElementById("compareceu6");
                compareceu.checked=false;
            }
            break;
        case 7:
            if(!compareceu7){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_7_compareceu:true
                });
                compareceu7=true;
                var compareceu = document.getElementById("compareceu7");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_7_compareceu:false
                });
                compareceu7=false;
                var compareceu = document.getElementById("compareceu7");
                compareceu.checked=false;
            }
            break;
        case 8:
            if(!compareceu8){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_8_compareceu:true
                });
                compareceu8=true;
                var compareceu = document.getElementById("compareceu8");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_8_compareceu:false
                });
                compareceu8=false;
                var compareceu = document.getElementById("compareceu8");
                compareceu.checked=false;
            }
            break;
        case 9:
            if(!compareceu9){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_9_compareceu:true
                });
                compareceu9=true;
                var compareceu = document.getElementById("compareceu9");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_9_compareceu:false
                });
                compareceu9=false;
                var compareceu = document.getElementById("compareceu9");
                compareceu.checked=false;
            }
            break;
        case 10:
            if(!compareceu10){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_10_compareceu:true
                });
                compareceu10=true;
                var compareceu = document.getElementById("compareceu10");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_10_compareceu:false
                });
                compareceu10=false;
                var compareceu = document.getElementById("compareceu10");
                compareceu.checked=false;
            }
            break;
        case 11:
            if(!compareceu11){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_11_compareceu:true
                });
                compareceu11=true;
                var compareceu = document.getElementById("compareceu11");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_11_compareceu:false
                });
                compareceu11=false;
                var compareceu = document.getElementById("compareceu11");
                compareceu.checked=false;
            }
            break;
        
        case 12:
            if(!compareceu12){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_12_compareceu:true
                });
                compareceu12=true;
                var compareceu = document.getElementById("compareceu12");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_12_compareceu:false
                });
                compareceu12=false;
                var compareceu = document.getElementById("compareceu12");
                compareceu.checked=false;
            }
//            alert("compareceu"+n);
//            alert(compareceu2);
//            alert(compareceu+""+n);
                
            break;
        case 13:
            if(!compareceu13){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_13_compareceu:true
                });
                compareceu13=true;
                var compareceu = document.getElementById("compareceu13");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_13_compareceu:false
                });
                compareceu13=false;
                var compareceu = document.getElementById("compareceu13");
                compareceu.checked=false;
            }
            break;
        case 14:
            if(!compareceu14){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_14_compareceu:true
                });
                compareceu14=true;
                var compareceu = document.getElementById("compareceu14");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_14_compareceu:false
                });
                compareceu14=false;
                var compareceu = document.getElementById("compareceu14");
                compareceu.checked=false;
            }
            break;
        case 15:
            if(!compareceu15){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_15_compareceu:true
                });
                compareceu15=true;
                var compareceu = document.getElementById("compareceu15");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_15_compareceu:false
                });
                compareceu15=false;
                var compareceu = document.getElementById("compareceu15");
                compareceu.checked=false;
            }
            break;
        case 16:
            if(!compareceu16){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_16_compareceu:true
                });
                compareceu16=true;
                var compareceu = document.getElementById("compareceu16");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_16_compareceu:false
                });
                compareceu16=false;
                var compareceu = document.getElementById("compareceu16");
                compareceu.checked=false;
            }
            break;
        case 17:
            if(!compareceu17){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_17_compareceu:true
                });
                compareceu17=true;
                var compareceu = document.getElementById("compareceu17");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_17_compareceu:false
                });
                compareceu17=false;
                var compareceu = document.getElementById("compareceu17");
                compareceu.checked=false;
            }
            break;
        case 18:
            if(!compareceu18){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_18_compareceu:true
                });
                compareceu18=true;
                var compareceu = document.getElementById("compareceu18");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_18_compareceu:false
                });
                compareceu18=false;
                var compareceu = document.getElementById("compareceu18");
                compareceu.checked=false;
            }
            break;
        case 19:
            if(!compareceu19){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_19_compareceu:true
                });
                compareceu19=true;
                var compareceu = document.getElementById("compareceu19");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_19_compareceu:false
                });
                compareceu19=false;
                var compareceu = document.getElementById("compareceu19");
                compareceu.checked=false;
            }
            break;
        case 20:
            if(!compareceu20){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_20_compareceu:true
                });
                compareceu20=true;
                var compareceu = document.getElementById("compareceu20");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_20_compareceu:false
                });
                compareceu20=false;
                var compareceu = document.getElementById("compareceu20");
                compareceu.checked=false;
            }
            break;
        case 21:
            if(!compareceu21){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_21_compareceu:true
                });
                compareceu21=true;
                var compareceu = document.getElementById("compareceu21");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_21_compareceu:false
                });
                compareceu21=false;
                var compareceu = document.getElementById("compareceu21");
                compareceu.checked=false;
            }
            break;
        
        case 22:
            if(!compareceu22){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_22_compareceu:true
                });
                compareceu22=true;
                var compareceu = document.getElementById("compareceu22");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_22_compareceu:false
                });
                compareceu22=false;
                var compareceu = document.getElementById("compareceu22");
                compareceu.checked=false;
            }
//            alert("compareceu"+n);
//            alert(compareceu2);
//            alert(compareceu+""+n);
                
            break;
        case 23:
            if(!compareceu23){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_23_compareceu:true
                });
                compareceu23=true;
                var compareceu = document.getElementById("compareceu23");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_23_compareceu:false
                });
                compareceu23=false;
                var compareceu = document.getElementById("compareceu23");
                compareceu.checked=false;
            }
            break;
        case 24:
            if(!compareceu24){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_24_compareceu:true
                });
                compareceu24=true;
                var compareceu = document.getElementById("compareceu24");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_24_compareceu:false
                });
                compareceu24=false;
                var compareceu = document.getElementById("compareceu24");
                compareceu.checked=false;
            }
            break;
        case 25:
            if(!compareceu25){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_25_compareceu:true
                });
                compareceu25=true;
                var compareceu = document.getElementById("compareceu25");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_25_compareceu:false
                });
                compareceu25=false;
                var compareceu = document.getElementById("compareceu25");
                compareceu.checked=false;
            }
            break;
        case 26:
            if(!compareceu26){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_26_compareceu:true
                });
                compareceu26=true;
                var compareceu = document.getElementById("compareceu26");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_26_compareceu:false
                });
                compareceu26=false;
                var compareceu = document.getElementById("compareceu26");
                compareceu.checked=false;
            }
            break;
        case 27:
            if(!compareceu27){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_27_compareceu:true
                });
                compareceu27=true;
                var compareceu = document.getElementById("compareceu27");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_27_compareceu:false
                });
                compareceu27=false;
                var compareceu = document.getElementById("compareceu27");
                compareceu.checked=false;
            }
            break;
        case 28:
            if(!compareceu28){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_28_compareceu:true
                });
                compareceu28=true;
                var compareceu = document.getElementById("compareceu28");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_28_compareceu:false
                });
                compareceu28=false;
                var compareceu = document.getElementById("compareceu28");
                compareceu.checked=false;
            }
            break;
        case 29:
            if(!compareceu29){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_29_compareceu:true
                });
                compareceu29=true;
                var compareceu = document.getElementById("compareceu29");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_29_compareceu:false
                });
                compareceu29=false;
                var compareceu = document.getElementById("compareceu29");
                compareceu.checked=false;
            }
            break;
        case 30:
            if(!compareceu30){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_30_compareceu:true
                });
                compareceu30=true;
                var compareceu = document.getElementById("compareceu30");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_30_compareceu:false
                });
                compareceu30=false;
                var compareceu = document.getElementById("compareceu30");
                compareceu.checked=false;
            }
            break;
        case 31:
            if(!compareceu31){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_31_compareceu:true
                });
                compareceu31=true;
                var compareceu = document.getElementById("compareceu31");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_31_compareceu:false
                });
                compareceu31=false;
                var compareceu = document.getElementById("compareceu31");
                compareceu.checked=false;
            }
            break;
        
        case 32:
            if(!compareceu32){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_32_compareceu:true
                });
                compareceu32=true;
                var compareceu = document.getElementById("compareceu32");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_32_compareceu:false
                });
                compareceu32=false;
                var compareceu = document.getElementById("compareceu32");
                compareceu.checked=false;
            }
//            alert("compareceu"+n);
//            alert(compareceu2);
//            alert(compareceu+""+n);
                
            break;
        case 33:
            if(!compareceu33){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_33_compareceu:true
                });
                compareceu33=true;
                var compareceu = document.getElementById("compareceu33");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_33_compareceu:false
                });
                compareceu33=false;
                var compareceu = document.getElementById("compareceu33");
                compareceu.checked=false;
            }
            break;
        case 34:
            if(!compareceu34){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_34_compareceu:true
                });
                compareceu34=true;
                var compareceu = document.getElementById("compareceu34");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_34_compareceu:false
                });
                compareceu34=false;
                var compareceu = document.getElementById("compareceu34");
                compareceu.checked=false;
            }
            break;
        case 35:
            if(!compareceu35){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_35_compareceu:true
                });
                compareceu35=true;
                var compareceu = document.getElementById("compareceu35");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_35_compareceu:false
                });
                compareceu35=false;
                var compareceu = document.getElementById("compareceu35");
                compareceu.checked=false;
            }
            break;
        case 36:
            if(!compareceu36){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_36_compareceu:true
                });
                compareceu36=true;
                var compareceu = document.getElementById("compareceu36");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_36_compareceu:false
                });
                compareceu36=false;
                var compareceu = document.getElementById("compareceu36");
                compareceu.checked=false;
            }
            break;
        case 37:
            if(!compareceu37){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_37_compareceu:true
                });
                compareceu37=true;
                var compareceu = document.getElementById("compareceu37");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_37_compareceu:false
                });
                compareceu37=false;
                var compareceu = document.getElementById("compareceu37");
                compareceu.checked=false;
            }
            break;
        case 38:
            if(!compareceu38){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_38_compareceu:true
                });
                compareceu38=true;
                var compareceu = document.getElementById("compareceu38");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_38_compareceu:false
                });
                compareceu38=false;
                var compareceu = document.getElementById("compareceu38");
                compareceu.checked=false;
            }
            break;
        case 39:
            if(!compareceu39){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_39_compareceu:true
                });
                compareceu39=true;
                var compareceu = document.getElementById("compareceu39");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_39_compareceu:false
                });
                compareceu39=false;
                var compareceu = document.getElementById("compareceu39");
                compareceu.checked=false;
            }
            break;
        case 40:
            if(!compareceu40){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_40_compareceu:true
                });
                compareceu40=true;
                var compareceu = document.getElementById("compareceu40");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_40_compareceu:false
                });
                compareceu40=false;
                var compareceu = document.getElementById("compareceu40");
                compareceu.checked=false;
            }
            break;
        case 41:
            if(!compareceu41){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_41_compareceu:true
                });
                compareceu41=true;
                var compareceu = document.getElementById("compareceu41");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_41_compareceu:false
                });
                compareceu41=false;
                var compareceu = document.getElementById("compareceu41");
                compareceu.checked=false;
            }
            break;
        
        case 42:
            if(!compareceu42){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_42_compareceu:true
                });
                compareceu42=true;
                var compareceu = document.getElementById("compareceu42");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_42_compareceu:false
                });
                compareceu42=false;
                var compareceu = document.getElementById("compareceu42");
                compareceu.checked=false;
            }
//            alert("compareceu"+n);
//            alert(compareceu2);
//            alert(compareceu+""+n);
                
            break;
        case 43:
            if(!compareceu43){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_43_compareceu:true
                });
                compareceu43=true;
                var compareceu = document.getElementById("compareceu43");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_43_compareceu:false
                });
                compareceu43=false;
                var compareceu = document.getElementById("compareceu43");
                compareceu.checked=false;
            }
            break;
        case 44:
            if(!compareceu44){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_44_compareceu:true
                });
                compareceu44=true;
                var compareceu = document.getElementById("compareceu44");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_44_compareceu:false
                });
                compareceu44=false;
                var compareceu = document.getElementById("compareceu44");
                compareceu.checked=false;
            }
            break;
        case 45:
            if(!compareceu45){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_45_compareceu:true
                });
                compareceu45=true;
                var compareceu = document.getElementById("compareceu45");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_45_compareceu:false
                });
                compareceu45=false;
                var compareceu = document.getElementById("compareceu45");
                compareceu.checked=false;
            }
            break;
        case 46:
            if(!compareceu46){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_46_compareceu:true
                });
                compareceu46=true;
                var compareceu = document.getElementById("compareceu46");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_46_compareceu:false
                });
                compareceu46=false;
                var compareceu = document.getElementById("compareceu46");
                compareceu.checked=false;
            }
            break;
        case 47:
            if(!compareceu47){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_47_compareceu:true
                });
                compareceu47=true;
                var compareceu = document.getElementById("compareceu47");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_47_compareceu:false
                });
                compareceu47=false;
                var compareceu = document.getElementById("compareceu47");
                compareceu.checked=false;
            }
            break;
        case 48:
            if(!compareceu48){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_48_compareceu:true
                });
                compareceu48=true;
                var compareceu = document.getElementById("compareceu48");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_48_compareceu:false
                });
                compareceu48=false;
                var compareceu = document.getElementById("compareceu48");
                compareceu.checked=false;
            }
            break;
        case 49:
            if(!compareceu49){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_49_compareceu:true
                });
                compareceu49=true;
                var compareceu = document.getElementById("compareceu49");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_49_compareceu:false
                });
                compareceu49=false;
                var compareceu = document.getElementById("compareceu49");
                compareceu.checked=false;
            }
            break;
        case 50:
            if(!compareceu50){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_50_compareceu:true
                });
                compareceu50=true;
                var compareceu = document.getElementById("compareceu50");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_50_compareceu:false
                });
                compareceu50=false;
                var compareceu = document.getElementById("compareceu50");
                compareceu.checked=false;
            }
            break;
        case 51:
            if(!compareceu51){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_51_compareceu:true
                });
                compareceu51=true;
                var compareceu = document.getElementById("compareceu51");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_51_compareceu:false
                });
                compareceu51=false;
                var compareceu = document.getElementById("compareceu51");
                compareceu.checked=false;
            }
            break;
        
        case 52:
            if(!compareceu52){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_52_compareceu:true
                });
                compareceu52=true;
                var compareceu = document.getElementById("compareceu52");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_52_compareceu:false
                });
                compareceu52=false;
                var compareceu = document.getElementById("compareceu52");
                compareceu.checked=false;
            }
//            alert("compareceu"+n);
//            alert(compareceu2);
//            alert(compareceu+""+n);
                
            break;
        case 53:
            if(!compareceu53){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_53_compareceu:true
                });
                compareceu53=true;
                var compareceu = document.getElementById("compareceu53");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_53_compareceu:false
                });
                compareceu53=false;
                var compareceu = document.getElementById("compareceu53");
                compareceu.checked=false;
            }
            break;
        case 54:
            if(!compareceu54){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_54_compareceu:true
                });
                compareceu54=true;
                var compareceu = document.getElementById("compareceu54");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_54_compareceu:false
                });
                compareceu54=false;
                var compareceu = document.getElementById("compareceu54");
                compareceu.checked=false;
            }
            break;
        case 55:
            if(!compareceu55){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_55_compareceu:true
                });
                compareceu55=true;
                var compareceu = document.getElementById("compareceu55");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_55_compareceu:false
                });
                compareceu55=false;
                var compareceu = document.getElementById("compareceu55");
                compareceu.checked=false;
            }
            break;
        case 56:
            if(!compareceu56){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_56_compareceu:true
                });
                compareceu56=true;
                var compareceu = document.getElementById("compareceu56");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_56_compareceu:false
                });
                compareceu56=false;
                var compareceu = document.getElementById("compareceu56");
                compareceu.checked=false;
            }
            break;
        case 57:
            if(!compareceu57){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_57_compareceu:true
                });
                compareceu57=true;
                var compareceu = document.getElementById("compareceu57");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_57_compareceu:false
                });
                compareceu57=false;
                var compareceu = document.getElementById("compareceu57");
                compareceu.checked=false;
            }
            break;
        case 58:
            if(!compareceu58){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_58_compareceu:true
                });
                compareceu58=true;
                var compareceu = document.getElementById("compareceu58");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_58_compareceu:false
                });
                compareceu58=false;
                var compareceu = document.getElementById("compareceu58");
                compareceu.checked=false;
            }
            break;
        case 59:
            if(!compareceu59){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_59_compareceu:true
                });
                compareceu59=true;
                var compareceu = document.getElementById("compareceu59");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_59_compareceu:false
                });
                compareceu59=false;
                var compareceu = document.getElementById("compareceu59");
                compareceu.checked=false;
            }
            break;
        case 60:
            if(!compareceu60){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_60_compareceu:true
                });
                compareceu60=true;
                var compareceu = document.getElementById("compareceu60");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_60_compareceu:false
                });
                compareceu60=false;
                var compareceu = document.getElementById("compareceu60");
                compareceu.checked=false;
            }
            break;
        case 61:
            if(!compareceu61){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_61_compareceu:true
                });
                compareceu61=true;
                var compareceu = document.getElementById("compareceu61");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_61_compareceu:false
                });
                compareceu61=false;
                var compareceu = document.getElementById("compareceu61");
                compareceu.checked=false;
            }
            break;
        
        case 62:
            if(!compareceu62){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_62_compareceu:true
                });
                compareceu62=true;
                var compareceu = document.getElementById("compareceu62");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_62_compareceu:false
                });
                compareceu62=false;
                var compareceu = document.getElementById("compareceu62");
                compareceu.checked=false;
            }
//            alert("compareceu"+n);
//            alert(compareceu2);
//            alert(compareceu+""+n);
                
            break;
        case 63:
            if(!compareceu63){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_63_compareceu:true
                });
                compareceu63=true;
                var compareceu = document.getElementById("compareceu63");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_63_compareceu:false
                });
                compareceu63=false;
                var compareceu = document.getElementById("compareceu63");
                compareceu.checked=false;
            }
            break;
        case 64:
            if(!compareceu64){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_64_compareceu:true
                });
                compareceu64=true;
                var compareceu = document.getElementById("compareceu64");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_64_compareceu:false
                });
                compareceu64=false;
                var compareceu = document.getElementById("compareceu64");
                compareceu.checked=false;
            }
            break;
        case 65:
            if(!compareceu65){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_65_compareceu:true
                });
                compareceu65=true;
                var compareceu = document.getElementById("compareceu65");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_65_compareceu:false
                });
                compareceu65=false;
                var compareceu = document.getElementById("compareceu65");
                compareceu.checked=false;
            }
            break;
        case 66:
            if(!compareceu66){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_66_compareceu:true
                });
                compareceu66=true;
                var compareceu = document.getElementById("compareceu66");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_66_compareceu:false
                });
                compareceu66=false;
                var compareceu = document.getElementById("compareceu66");
                compareceu.checked=false;
            }
            break;
        case 67:
            if(!compareceu67){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_67_compareceu:true
                });
                compareceu67=true;
                var compareceu = document.getElementById("compareceu67");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_67_compareceu:false
                });
                compareceu67=false;
                var compareceu = document.getElementById("compareceu67");
                compareceu.checked=false;
            }
            break;
        case 68:
            if(!compareceu68){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_68_compareceu:true
                });
                compareceu68=true;
                var compareceu = document.getElementById("compareceu68");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_68_compareceu:false
                });
                compareceu68=false;
                var compareceu = document.getElementById("compareceu68");
                compareceu.checked=false;
            }
            break;
        case 69:
            if(!compareceu69){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_69_compareceu:true
                });
                compareceu69=true;
                var compareceu = document.getElementById("compareceu69");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_69_compareceu:false
                });
                compareceu69=false;
                var compareceu = document.getElementById("compareceu69");
                compareceu.checked=false;
            }
            break;
        case 70:
            if(!compareceu70){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_70_compareceu:true
                });
                compareceu70=true;
                var compareceu = document.getElementById("compareceu70");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_70_compareceu:false
                });
                compareceu70=false;
                var compareceu = document.getElementById("compareceu70");
                compareceu.checked=false;
            }
            break;
        case 71:
            if(!compareceu71){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_71_compareceu:true
                });
                compareceu71=true;
                var compareceu = document.getElementById("compareceu71");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_71_compareceu:false
                });
                compareceu71=false;
                var compareceu = document.getElementById("compareceu71");
                compareceu.checked=false;
            }
            break;
        
        case 72:
            if(!compareceu72){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_72_compareceu:true
                });
                compareceu72=true;
                var compareceu = document.getElementById("compareceu72");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_72_compareceu:false
                });
                compareceu72=false;
                var compareceu = document.getElementById("compareceu72");
                compareceu.checked=false;
            }
//            alert("compareceu"+n);
//            alert(compareceu2);
//            alert(compareceu+""+n);
                
            break;
        case 73:
            if(!compareceu73){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_73_compareceu:true
                });
                compareceu73=true;
                var compareceu = document.getElementById("compareceu73");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_73_compareceu:false
                });
                compareceu73=false;
                var compareceu = document.getElementById("compareceu73");
                compareceu.checked=false;
            }
            break;
        case 74:
            if(!compareceu74){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_74_compareceu:true
                });
                compareceu74=true;
                var compareceu = document.getElementById("compareceu74");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_74_compareceu:false
                });
                compareceu74=false;
                var compareceu = document.getElementById("compareceu74");
                compareceu.checked=false;
            }
            break;
        case 75:
            if(!compareceu75){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_75_compareceu:true
                });
                compareceu75=true;
                var compareceu = document.getElementById("compareceu75");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_75_compareceu:false
                });
                compareceu75=false;
                var compareceu = document.getElementById("compareceu75");
                compareceu.checked=false;
            }
            break;
        case 76:
            if(!compareceu76){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_76_compareceu:true
                });
                compareceu76=true;
                var compareceu = document.getElementById("compareceu76");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_76_compareceu:false
                });
                compareceu76=false;
                var compareceu = document.getElementById("compareceu76");
                compareceu.checked=false;
            }
            break;
        case 77:
            if(!compareceu77){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_77_compareceu:true
                });
                compareceu77=true;
                var compareceu = document.getElementById("compareceu77");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_77_compareceu:false
                });
                compareceu77=false;
                var compareceu = document.getElementById("compareceu77");
                compareceu.checked=false;
            }
            break;
        case 78:
            if(!compareceu78){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_78_compareceu:true
                });
                compareceu78=true;
                var compareceu = document.getElementById("compareceu78");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_78_compareceu:false
                });
                compareceu78=false;
                var compareceu = document.getElementById("compareceu78");
                compareceu.checked=false;
            }
            break;
        case 79:
            if(!compareceu79){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_79_compareceu:true
                });
                compareceu79=true;
                var compareceu = document.getElementById("compareceu79");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_79_compareceu:false
                });
                compareceu79=false;
                var compareceu = document.getElementById("compareceu79");
                compareceu.checked=false;
            }
            break;
        case 80:
            if(!compareceu80){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_80_compareceu:true
                });
                compareceu80=true;
                var compareceu = document.getElementById("compareceu80");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_80_compareceu:false
                });
                compareceu80=false;
                var compareceu = document.getElementById("compareceu80");
                compareceu.checked=false;
            }
            break;
        case 81:
            if(!compareceu81){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_81_compareceu:true
                });
                compareceu81=true;
                var compareceu = document.getElementById("compareceu81");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_81_compareceu:false
                });
                compareceu81=false;
                var compareceu = document.getElementById("compareceu81");
                compareceu.checked=false;
            }
            break;
        
        case 82:
            if(!compareceu82){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_82_compareceu:true
                });
                compareceu82=true;
                var compareceu = document.getElementById("compareceu82");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_82_compareceu:false
                });
                compareceu82=false;
                var compareceu = document.getElementById("compareceu82");
                compareceu.checked=false;
            }
//            alert("compareceu"+n);
//            alert(compareceu2);
//            alert(compareceu+""+n);
                
            break;
        case 83:
            if(!compareceu83){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_83_compareceu:true
                });
                compareceu83=true;
                var compareceu = document.getElementById("compareceu83");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_83_compareceu:false
                });
                compareceu83=false;
                var compareceu = document.getElementById("compareceu83");
                compareceu.checked=false;
            }
            break;
        case 84:
            if(!compareceu84){
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_84_compareceu:true
                });
                compareceu84=true;
                var compareceu = document.getElementById("compareceu84");
                compareceu.checked=true;
            }else{
                var databaseRef = database.ref('eventos/'+eventoId);
                databaseRef.update({
                    horario_84_compareceu:false
                });
                compareceu84=false;
                var compareceu = document.getElementById("compareceu84");
                compareceu.checked=false;
            }
            break;
        
        }
    }

    function carregarDetalhes(n){
        var compareceu = document.getElementById("compareceu"+n);
        var pagou = document.getElementById("pagou"+n);
        var data = document.getElementById("dataRecebimento"+n);
                switch(n){
                    case(1):
                        if(compareceu1){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou1){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec1;
                        break;
                    case(2):
                        if(compareceu2){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou2){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec2;
                        break;
                    case(3):
                        if(compareceu3){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou3){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec3;
                        break;
                    case(4):
                        if(compareceu4){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou4){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec4;
                        break;
                    case(5):
                        if(compareceu5){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou5){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec5;
                        break;
                    case(6):
                        if(compareceu6){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou6){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec6;
                        break;
                    case(7):
                        if(compareceu7){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou7){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec7;
                        break;
                    case(8):
                        if(compareceu8){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou8){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec8;
                        break;
                    case(9):
                        if(compareceu9){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou9){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec9;
                        break;
                    case(10):
                        if(compareceu10){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou10){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec10;
                        break;
                    case(11):
                        if(compareceu11){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou11){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec11;
                        break;
                    case(12):
                        if(compareceu12){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou12){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec12;
                        break;
                    case(13):
                        if(compareceu13){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou13){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec13;
                        break;
                    case(14):
                        if(compareceu14){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou14){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec14;
                        break;
                    case(15):
                        if(compareceu15){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou15){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec15;
                        break;
                    case(16):
                        if(compareceu16){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou16){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec16;
                        break;
                    case(17):
                        if(compareceu17){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou17){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec17;
                        break;
                    case(18):
                        if(compareceu18){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou18){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec18;
                        break;
                    case(19):
                        if(compareceu19){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou19){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec19;
                        break;
                    case(20):
                        if(compareceu20){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou20){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec20;
                        break;
                    case(21):
                        if(compareceu21){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou21){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec21;
                        break;
                    case(22):
                        if(compareceu22){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou22){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec22;
                        break;
                    case(23):
                        if(compareceu23){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou23){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec23;
                        break;
                    case(24):
                        if(compareceu24){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou24){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec24;
                        break;
                    case(25):
                        if(compareceu25){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou25){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec25;
                        break;
                    case(26):
                        if(compareceu26){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou26){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec26;
                        break;
                    case(27):
                        if(compareceu27){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou27){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec27;
                        break;
                    case(28):
                        if(compareceu28){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou28){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec28;
                        break;
                    case(29):
                        if(compareceu29){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou29){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec29;
                        break;
                    case(30):
                        if(compareceu30){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou30){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec30;
                        break;
                    case(31):
                        if(compareceu31){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou31){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec31;
                        break;
                    case(32):
                        if(compareceu32){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou32){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec32;
                        break;
                    case(33):
                        if(compareceu33){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou33){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec33;
                        break;
                    case(34):
                        if(compareceu34){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou34){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec34;
                        break;
                    case(35):
                        if(compareceu35){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou35){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec35;
                        break;
                    case(36):
                        if(compareceu36){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou36){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec36;
                        break;
                    case(37):
                        if(compareceu37){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou37){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec37;
                        break;
                    case(38):
                        if(compareceu38){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou38){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec38;
                        break;
                    case(39):
                        if(compareceu39){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou39){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec39;
                        break;
                    case(40):
                        if(compareceu40){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou40){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec40;
                        break;
                    case(41):
                        if(compareceu41){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou41){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec41;
                        break;
                    case(42):
                        if(compareceu42){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou42){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec42;
                        break;
                    case(43):
                        if(compareceu43){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou43){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec43;
                        break;
                    case(44):
                        if(compareceu44){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou44){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec44;
                        break;
                    case(45):
                        if(compareceu45){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou45){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec45;
                        break;
                    case(46):
                        if(compareceu46){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou46){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec46;
                        break;
                    case(47):
                        if(compareceu47){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou47){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec47;
                        break;
                    case(48):
                        if(compareceu48){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou48){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec48;
                        break;
                    case(49):
                        if(compareceu49){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou49){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec49;
                        break;
                    case(50):
                        if(compareceu50){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou50){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec50;
                        break;
                    case(51):
                        if(compareceu51){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou51){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec51;
                        break;
                    case(52):
                        if(compareceu52){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou52){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec52;
                        break;
                    case(53):
                        if(compareceu53){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou53){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec53;
                        break;
                    case(54):
                        if(compareceu54){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou54){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec54;
                        break;
                    case(55):
                        if(compareceu55){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou55){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec55;
                        break;
                    case(56):
                        if(compareceu56){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou56){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec56;
                        break;
                    case(57):
                        if(compareceu57){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou57){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec57;
                        break;
                    case(58):
                        if(compareceu58){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou58){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec58;
                        break;
                    case(59):
                        if(compareceu59){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou59){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec59;
                        break;
                    case(60):
                        if(compareceu60){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou60){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec60;
                        break;
                    case(61):
                        if(compareceu61){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou61){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec61;
                        break;
                    case(62):
                        if(compareceu62){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou62){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec62;
                        break;
                    case(63):
                        if(compareceu63){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou63){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec63;
                        break;
                    case(64):
                        if(compareceu64){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou64){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec64;
                        break;
                    case(65):
                        if(compareceu65){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou65){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec65;
                        break;
                    case(66):
                        if(compareceu66){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou66){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec66;
                        break;
                    case(67):
                        if(compareceu67){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou67){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec67;
                        break;
                    case(68):
                        if(compareceu68){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou68){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec68;
                        break;
                    case(69):
                        if(compareceu69){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou69){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec69;
                        break;
                    case(70):
                        if(compareceu70){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou70){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec70;
                        break;
                    case(71):
                        if(compareceu71){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou71){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec71;
                        break;
                    case(72):
                        if(compareceu72){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou72){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec72;
                        break;
                    case(73):
                        if(compareceu73){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou73){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec73;
                        break;
                    case(74):
                        if(compareceu74){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou74){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec74;
                        break;
                    case(75):
                        if(compareceu75){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou75){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec75;
                        break;
                    case(76):
                        if(compareceu76){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou76){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec76;
                        break;
                    case(77):
                        if(compareceu77){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou77){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec77;
                        break;
                    case(78):
                        if(compareceu78){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou78){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec78;
                        break;
                    case(79):
                        if(compareceu79){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou79){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec79;
                        break;
                    case(80):
                        if(compareceu80){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou80){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec80;
                        break;
                    case(81):
                        if(compareceu81){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou81){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec81;
                        break;
                    case(82):
                        if(compareceu82){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou82){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec82;
                        break;
                    case(83):
                        if(compareceu83){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou83){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec83;
                        break;
                    case(84):
                        if(compareceu84){
                            compareceu.checked=true;
                        }else{
                            compareceu.checked=false;
                        }
                        if(pagou84){
                            pagou.checked=true;
                        }else{
                            pagou.checked=false;
                        }
                        data.value=dataRec84;
                        break;
                }
    }

    function pagou(n){
        let eventoId = sessionStorage.getItem('eventoId');
        var database = firebase.database();
        
        //var desconto=document.getElementById('valorDesconto'+n).value;
        var porcento = document.getElementById('porcento'+n).value;
        
        var dataRec = document.getElementById('dataRecebimento'+n).value;
        var dataRecValue = new Date(dataRec);
        
        var hoje = new Date();
        var data_ano = hoje.getFullYear();
        var data_mes = hoje.getMonth();
        data_mes++;
        if(data_mes<10){
            data_mes="0"+data_mes;
        }
        var data_dia = hoje.getDate();
        if(data_dia<10){
            data_dia="0"+data_dia;
        }
        var diaDeHoje=data_ano+"-"+data_mes+"-"+data_dia;
        
        if(!dataRec){
            dataRec=diaDeHoje;
            var dataRecValue = new Date();
        }
        
        switch(n){
            case(1):
                if(pagou1){
                    document.getElementById('pagou'+n).checked= false;
                    pagou1=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_1_tipo_de_desconto:0,
                        horario_1_pagou: false,
                        horario_1_valor_desc:"",
                        horario_1_valor_rec:0,
                        horario_1_data_rec:"",
                        horario_1_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou1=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_1_tipo_de_desconto:porcento,
                        horario_1_pagou: true,
                        horario_1_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_1_valor_rec: numvalorFinal,
                        horario_1_data_rec: dataRec,
                        horario_1_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(2):
                if(pagou2){
                    document.getElementById('pagou'+n).checked= false;
                    pagou2=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_2_tipo_de_desconto:0,
                        horario_2_pagou: false,
                        horario_2_valor_desc:"",
                        horario_2_valor_rec:0,
                        horario_2_data_rec:"",
                        horario_2_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('porcento'+n).value=0;
                    document.getElementById('valorFinal'+n).innerHTML="";
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou2=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_2_tipo_de_desconto:porcento,
                        horario_2_pagou: true,
                        horario_2_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_2_valor_rec: numvalorFinal,
                        horario_2_data_rec: dataRec,
                        horario_2_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(3):
                if(pagou3){
                    document.getElementById('pagou'+n).checked= false;
                    pagou3=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_3_tipo_de_desconto:0,
                        horario_3_pagou: false,
                        horario_3_valor_desc:"",
                        horario_3_valor_rec:0,
                        horario_3_data_rec:"",
                        horario_3_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou3=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_3_tipo_de_desconto:porcento,
                        horario_3_pagou: true,
                        horario_3_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_3_valor_rec: numvalorFinal,
                        horario_3_data_rec: dataRec,
                        horario_3_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(4):
                if(pagou4){
                    document.getElementById('pagou'+n).checked= false;
                    pagou4=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_4_tipo_de_desconto:0,
                        horario_4_pagou: false,
                        horario_4_valor_desc:"",
                        horario_4_valor_rec:0,
                        horario_4_data_rec:"",
                        horario_4_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou4=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_4_tipo_de_desconto:porcento,
                        horario_4_pagou: true,
                        horario_4_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_4_valor_rec: numvalorFinal,
                        horario_4_data_rec: dataRec,
                        horario_4_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(5):
                if(pagou5){
                    document.getElementById('pagou'+n).checked= false;
                    pagou5=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_5_tipo_de_desconto:0,
                        horario_5_pagou: false,
                        horario_5_valor_desc:"",
                        horario_5_valor_rec:0,
                        horario_5_data_rec:"",
                        horario_5_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou5=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_5_tipo_de_desconto:porcento,
                        horario_5_pagou: true,
                        horario_5_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_5_valor_rec: numvalorFinal,
                        horario_5_data_rec: dataRec,
                        horario_5_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(6):
                if(pagou6){
                    document.getElementById('pagou'+n).checked= false;
                    pagou6=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_6_tipo_de_desconto:0,
                        horario_6_pagou: false,
                        horario_6_valor_desc:"",
                        horario_6_valor_rec:0,
                        horario_6_data_rec:"",
                        horario_6_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou6=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_6_tipo_de_desconto:porcento,
                        horario_6_pagou: true,
                        horario_6_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_6_valor_rec: numvalorFinal,
                        horario_6_data_rec: dataRec,
                        horario_6_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            case(7):
                if(pagou7){
                    document.getElementById('pagou'+n).checked= false;
                    pagou7=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_7_tipo_de_desconto:0,
                        horario_7_pagou: false,
                        horario_7_valor_desc:"",
                        horario_7_valor_rec:0,
                        horario_7_data_rec:"",
                        horario_7_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou7=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_7_tipo_de_desconto:porcento,
                        horario_7_pagou: true,
                        horario_7_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_7_valor_rec: numvalorFinal,
                        horario_7_data_rec: dataRec,
                        horario_7_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(8):
                if(pagou8){
                    document.getElementById('pagou'+n).checked= false;
                    pagou8=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_8_tipo_de_desconto:0,
                        horario_8_pagou: false,
                        horario_8_valor_desc:"",
                        horario_8_valor_rec:0,
                        horario_8_data_rec:"",
                        horario_8_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou8=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_8_tipo_de_desconto:porcento,
                        horario_8_pagou: true,
                        horario_8_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_8_valor_rec: numvalorFinal,
                        horario_8_data_rec: dataRec,
                        horario_8_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(9):
                if(pagou9){
                    document.getElementById('pagou'+n).checked= false;
                    pagou9=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_9_tipo_de_desconto:0,
                        horario_9_pagou: false,
                        horario_9_valor_desc:"",
                        horario_9_valor_rec:0,
                        horario_9_data_rec:"",
                        horario_9_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou9=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_9_tipo_de_desconto:porcento,
                        horario_9_pagou: true,
                        horario_9_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_9_valor_rec: numvalorFinal,
                        horario_9_data_rec: dataRec,
                        horario_9_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(10):
                if(pagou10){
                    document.getElementById('pagou'+n).checked= false;
                    pagou10=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_10_tipo_de_desconto:0,
                        horario_10_pagou: false,
                        horario_10_valor_desc:"",
                        horario_10_valor_rec:0,
                        horario_10_data_rec:"",
                        horario_10_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou10=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_10_tipo_de_desconto:porcento,
                        horario_10_pagou: true,
                        horario_10_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_10_valor_rec: numvalorFinal,
                        horario_10_data_rec: dataRec,
                        horario_10_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(11):
                if(pagou11){
                    document.getElementById('pagou'+n).checked= false;
                    pagou11=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_11_tipo_de_desconto:0,
                        horario_11_pagou: false,
                        horario_11_valor_desc:"",
                        horario_11_valor_rec:0,
                        horario_11_data_rec:"",
                        horario_11_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou11=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_11_tipo_de_desconto:porcento,
                        horario_11_pagou: true,
                        horario_11_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_11_valor_rec: numvalorFinal,
                        horario_11_data_rec: dataRec,
                        horario_11_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(12):
                if(pagou12){
                    document.getElementById('pagou'+n).checked= false;
                    pagou12=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_12_tipo_de_desconto:0,
                        horario_12_pagou: false,
                        horario_12_valor_desc:"",
                        horario_12_valor_rec:0,
                        horario_12_data_rec:"",
                        horario_12_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou12=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_12_tipo_de_desconto:porcento,
                        horario_12_pagou: true,
                        horario_12_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_12_valor_rec: numvalorFinal,
                        horario_12_data_rec: dataRec,
                        horario_12_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(13):
                if(pagou13){
                    document.getElementById('pagou'+n).checked= false;
                    pagou13=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_13_tipo_de_desconto:0,
                        horario_13_pagou: false,
                        horario_13_valor_desc:"",
                        horario_13_valor_rec:0,
                        horario_13_data_rec:"",
                        horario_13_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou13=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_13_tipo_de_desconto:porcento,
                        horario_13_pagou: true,
                        horario_13_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_13_valor_rec: numvalorFinal,
                        horario_13_data_rec: dataRec,
                        horario_13_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(14):
                if(pagou14){
                    document.getElementById('pagou'+n).checked= false;
                    pagou14=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_14_tipo_de_desconto:0,
                        horario_14_pagou: false,
                        horario_14_valor_desc:"",
                        horario_14_valor_rec:0,
                        horario_14_data_rec:"",
                        horario_14_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou14=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_14_tipo_de_desconto:porcento,
                        horario_14_pagou: true,
                        horario_14_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_14_valor_rec: numvalorFinal,
                        horario_14_data_rec: dataRec,
                        horario_14_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(15):
                if(pagou15){
                    document.getElementById('pagou'+n).checked= false;
                    pagou15=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_15_tipo_de_desconto:0,
                        horario_15_pagou: false,
                        horario_15_valor_desc:"",
                        horario_15_valor_rec:0,
                        horario_15_data_rec:"",
                        horario_15_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou15=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_15_tipo_de_desconto:porcento,
                        horario_15_pagou: true,
                        horario_15_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_15_valor_rec: numvalorFinal,
                        horario_15_data_rec: dataRec,
                        horario_15_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(16):
                if(pagou16){
                    document.getElementById('pagou'+n).checked= false;
                    pagou16=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_16_tipo_de_desconto:0,
                        horario_16_pagou: false,
                        horario_16_valor_desc:"",
                        horario_16_valor_rec:0,
                        horario_16_data_rec:"",
                        horario_16_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou16=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_16_tipo_de_desconto:porcento,
                        horario_16_pagou: true,
                        horario_16_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_16_valor_rec: numvalorFinal,
                        horario_16_data_rec: dataRec,
                        horario_16_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            case(17):
                if(pagou17){
                    document.getElementById('pagou'+n).checked= false;
                    pagou17=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_17_tipo_de_desconto:0,
                        horario_17_pagou: false,
                        horario_17_valor_desc:"",
                        horario_17_valor_rec:0,
                        horario_17_data_rec:"",
                        horario_17_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou17=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_17_tipo_de_desconto:porcento,
                        horario_17_pagou: true,
                        horario_17_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_17_valor_rec: numvalorFinal,
                        horario_17_data_rec: dataRec,
                        horario_17_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(18):
                if(pagou18){
                    document.getElementById('pagou'+n).checked= false;
                    pagou18=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_18_tipo_de_desconto:0,
                        horario_18_pagou: false,
                        horario_18_valor_desc:"",
                        horario_18_valor_rec:0,
                        horario_18_data_rec:"",
                        horario_18_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou18=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_18_tipo_de_desconto:porcento,
                        horario_18_pagou: true,
                        horario_18_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_18_valor_rec: numvalorFinal,
                        horario_18_data_rec: dataRec,
                        horario_18_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(19):
                if(pagou19){
                    document.getElementById('pagou'+n).checked= false;
                    pagou19=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_19_tipo_de_desconto:0,
                        horario_19_pagou: false,
                        horario_19_valor_desc:"",
                        horario_19_valor_rec:0,
                        horario_19_data_rec:"",
                        horario_19_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou19=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_19_tipo_de_desconto:porcento,
                        horario_19_pagou: true,
                        horario_19_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_19_valor_rec: numvalorFinal,
                        horario_19_data_rec: dataRec,
                        horario_19_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(20):
                if(pagou20){
                    document.getElementById('pagou'+n).checked= false;
                    pagou20=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_20_tipo_de_desconto:0,
                        horario_20_pagou: false,
                        horario_20_valor_desc:"",
                        horario_20_valor_rec:0,
                        horario_20_data_rec:"",
                        horario_20_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou20=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_20_tipo_de_desconto:porcento,
                        horario_20_pagou: true,
                        horario_20_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_20_valor_rec: numvalorFinal,
                        horario_20_data_rec: dataRec,
                        horario_20_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(21):
                if(pagou21){
                    document.getElementById('pagou'+n).checked= false;
                    pagou21=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_21_tipo_de_desconto:0,
                        horario_21_pagou: false,
                        horario_21_valor_desc:"",
                        horario_21_valor_rec:0,
                        horario_21_data_rec:"",
                        horario_21_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou21=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_21_tipo_de_desconto:porcento,
                        horario_21_pagou: true,
                        horario_21_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_21_valor_rec: numvalorFinal,
                        horario_21_data_rec: dataRec,
                        horario_21_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(22):
                if(pagou22){
                    document.getElementById('pagou'+n).checked= false;
                    pagou22=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_22_tipo_de_desconto:0,
                        horario_22_pagou: false,
                        horario_22_valor_desc:"",
                        horario_22_valor_rec:0,
                        horario_22_data_rec:"",
                        horario_22_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('porcento'+n).value=0;
                    document.getElementById('valorFinal'+n).innerHTML="";
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou22=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_22_tipo_de_desconto:porcento,
                        horario_22_pagou: true,
                        horario_22_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_22_valor_rec: numvalorFinal,
                        horario_22_data_rec: dataRec,
                        horario_22_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(23):
                if(pagou23){
                    document.getElementById('pagou'+n).checked= false;
                    pagou23=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_23_tipo_de_desconto:0,
                        horario_23_pagou: false,
                        horario_23_valor_desc:"",
                        horario_23_valor_rec:0,
                        horario_23_data_rec:"",
                        horario_23_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou23=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_23_tipo_de_desconto:porcento,
                        horario_23_pagou: true,
                        horario_23_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_23_valor_rec: numvalorFinal,
                        horario_23_data_rec: dataRec,
                        horario_23_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(24):
                if(pagou24){
                    document.getElementById('pagou'+n).checked= false;
                    pagou24=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_24_tipo_de_desconto:0,
                        horario_24_pagou: false,
                        horario_24_valor_desc:"",
                        horario_24_valor_rec:0,
                        horario_24_data_rec:"",
                        horario_24_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou24=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_24_tipo_de_desconto:porcento,
                        horario_24_pagou: true,
                        horario_24_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_24_valor_rec: numvalorFinal,
                        horario_24_data_rec: dataRec,
                        horario_24_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(25):
                if(pagou25){
                    document.getElementById('pagou'+n).checked= false;
                    pagou25=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_25_tipo_de_desconto:0,
                        horario_25_pagou: false,
                        horario_25_valor_desc:"",
                        horario_25_valor_rec:0,
                        horario_25_data_rec:"",
                        horario_25_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    document.getElementById("compareceu"+n).disabled=true;
                    //var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou25=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_25_tipo_de_desconto:porcento,
                        horario_25_pagou: true,
                        horario_25_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_25_valor_rec: numvalorFinal,
                        horario_25_data_rec: dataRec,
                        horario_25_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(26):
                if(pagou26){
                    document.getElementById('pagou'+n).checked= false;
                    pagou26=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_26_tipo_de_desconto:0,
                        horario_26_pagou: false,
                        horario_26_valor_desc:"",
                        horario_26_valor_rec:0,
                        horario_26_data_rec:"",
                        horario_26_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou26=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_26_tipo_de_desconto:porcento,
                        horario_26_pagou: true,
                        horario_26_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_26_valor_rec: numvalorFinal,
                        horario_26_data_rec: dataRec,
                        horario_26_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            case(27):
                if(pagou27){
                    document.getElementById('pagou'+n).checked= false;
                    pagou27=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_27_tipo_de_desconto:0,
                        horario_27_pagou: false,
                        horario_27_valor_desc:"",
                        horario_27_valor_rec:0,
                        horario_27_data_rec:"",
                        horario_27_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou27=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_27_tipo_de_desconto:porcento,
                        horario_27_pagou: true,
                        horario_27_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_27_valor_rec: numvalorFinal,
                        horario_27_data_rec: dataRec,
                        horario_27_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(28):
                if(pagou28){
                    document.getElementById('pagou'+n).checked= false;
                    pagou28=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_28_tipo_de_desconto:0,
                        horario_28_pagou: false,
                        horario_28_valor_desc:"",
                        horario_28_valor_rec:0,
                        horario_28_data_rec:"",
                        horario_28_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou28=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_28_tipo_de_desconto:porcento,
                        horario_28_pagou: true,
                        horario_28_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_28_valor_rec: numvalorFinal,
                        horario_28_data_rec: dataRec,
                        horario_28_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(29):
                if(pagou29){
                    document.getElementById('pagou'+n).checked= false;
                    pagou29=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_29_tipo_de_desconto:0,
                        horario_29_pagou: false,
                        horario_29_valor_desc:"",
                        horario_29_valor_rec:0,
                        horario_29_data_rec:"",
                        horario_29_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou29=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_29_tipo_de_desconto:porcento,
                        horario_29_pagou: true,
                        horario_29_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_29_valor_rec: numvalorFinal,
                        horario_29_data_rec: dataRec,
                        horario_29_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(30):
                if(pagou30){
                    document.getElementById('pagou'+n).checked= false;
                    pagou30=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_30_tipo_de_desconto:0,
                        horario_30_pagou: false,
                        horario_30_valor_desc:"",
                        horario_30_valor_rec:0,
                        horario_30_data_rec:"",
                        horario_30_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou30=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_30_tipo_de_desconto:porcento,
                        horario_30_pagou: true,
                        horario_30_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_30_valor_rec: numvalorFinal,
                        horario_30_data_rec: dataRec,
                        horario_30_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(31):
                if(pagou31){
                    document.getElementById('pagou'+n).checked= false;
                    pagou31=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_31_tipo_de_desconto:0,
                        horario_31_pagou: false,
                        horario_31_valor_desc:"",
                        horario_31_valor_rec:0,
                        horario_31_data_rec:"",
                        horario_31_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);
                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou31=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_31_tipo_de_desconto:porcento,
                        horario_31_pagou: true,
                        horario_31_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_31_valor_rec: numvalorFinal,
                        horario_31_data_rec: dataRec,
                        horario_31_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(32):
                if(pagou32){
                    document.getElementById('pagou'+n).checked= false;
                    pagou32=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_32_tipo_de_desconto:0,
                        horario_32_pagou: false,
                        horario_32_valor_desc:"",
                        horario_32_valor_rec:0,
                        horario_32_data_rec:"",
                        horario_32_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou32=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_32_tipo_de_desconto:porcento,
                        horario_32_pagou: true,
                        horario_32_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_32_valor_rec: numvalorFinal,
                        horario_32_data_rec: dataRec,
                        horario_32_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(33):
                if(pagou33){
                    document.getElementById('pagou'+n).checked= false;
                    pagou33=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_33_tipo_de_desconto:0,
                        horario_33_pagou: false,
                        horario_33_valor_desc:"",
                        horario_33_valor_rec:0,
                        horario_33_data_rec:"",
                        horario_33_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou33=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_33_tipo_de_desconto:porcento,
                        horario_33_pagou: true,
                        horario_33_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_33_valor_rec: numvalorFinal,
                        horario_33_data_rec: dataRec,
                        horario_33_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(34):
                if(pagou34){
                    document.getElementById('pagou'+n).checked= false;
                    pagou34=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_34_tipo_de_desconto:0,
                        horario_34_pagou: false,
                        horario_34_valor_desc:"",
                        horario_34_valor_rec:0,
                        horario_34_data_rec:"",
                        horario_34_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou34=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_34_tipo_de_desconto:porcento,
                        horario_34_pagou: true,
                        horario_34_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_34_valor_rec: numvalorFinal,
                        horario_34_data_rec: dataRec,
                        horario_34_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(35):
                if(pagou35){
                    document.getElementById('pagou'+n).checked= false;
                    pagou35=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_35_tipo_de_desconto:0,
                        horario_35_pagou: false,
                        horario_35_valor_desc:"",
                        horario_35_valor_rec:0,
                        horario_35_data_rec:"",
                        horario_35_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou35=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_35_tipo_de_desconto:porcento,
                        horario_35_pagou: true,
                        horario_35_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_35_valor_rec: numvalorFinal,
                        horario_35_data_rec: dataRec,
                        horario_35_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(36):
                if(pagou36){
                    document.getElementById('pagou'+n).checked= false;
                    pagou36=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_36_tipo_de_desconto:0,
                        horario_36_pagou: false,
                        horario_36_valor_desc:"",
                        horario_36_valor_rec:0,
                        horario_36_data_rec:"",
                        horario_36_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou36=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_36_tipo_de_desconto:porcento,
                        horario_36_pagou: true,
                        horario_36_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_36_valor_rec: numvalorFinal,
                        horario_36_data_rec: dataRec,
                        horario_36_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            case(37):
                if(pagou37){
                    document.getElementById('pagou'+n).checked= false;
                    pagou37=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_37_tipo_de_desconto:0,
                        horario_37_pagou: false,
                        horario_37_valor_desc:"",
                        horario_37_valor_rec:0,
                        horario_37_data_rec:"",
                        horario_37_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou37=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_37_tipo_de_desconto:porcento,
                        horario_37_pagou: true,
                        horario_37_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_37_valor_rec: numvalorFinal,
                        horario_37_data_rec: dataRec,
                        horario_37_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(38):
                if(pagou38){
                    document.getElementById('pagou'+n).checked= false;
                    pagou38=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_38_tipo_de_desconto:0,
                        horario_38_pagou: false,
                        horario_38_valor_desc:"",
                        horario_38_valor_rec:0,
                        horario_38_data_rec:"",
                        horario_38_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou38=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_38_tipo_de_desconto:porcento,
                        horario_38_pagou: true,
                        horario_38_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_38_valor_rec: numvalorFinal,
                        horario_38_data_rec: dataRec,
                        horario_38_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(39):
                if(pagou39){
                    document.getElementById('pagou'+n).checked= false;
                    pagou39=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_39_tipo_de_desconto:0,
                        horario_39_pagou: false,
                        horario_39_valor_desc:"",
                        horario_39_valor_rec:0,
                        horario_39_data_rec:"",
                        horario_39_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou39=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_39_tipo_de_desconto:porcento,
                        horario_39_pagou: true,
                        horario_39_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_39_valor_rec: numvalorFinal,
                        horario_39_data_rec: dataRec,
                        horario_39_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(40):
                if(pagou40){
                    document.getElementById('pagou'+n).checked= false;
                    pagou40=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_40_tipo_de_desconto:0,
                        horario_40_pagou: false,
                        horario_40_valor_desc:"",
                        horario_40_valor_rec:0,
                        horario_40_data_rec:"",
                        horario_40_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou40=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_40_tipo_de_desconto:porcento,
                        horario_40_pagou: true,
                        horario_40_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_40_valor_rec: numvalorFinal,
                        horario_40_data_rec: dataRec,
                        horario_40_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(41):
                if(pagou41){
                    document.getElementById('pagou'+n).checked= false;
                    pagou41=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_41_tipo_de_desconto:0,
                        horario_41_pagou: false,
                        horario_41_valor_desc:"",
                        horario_41_valor_rec:0,
                        horario_41_data_rec:"",
                        horario_41_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou41=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_41_tipo_de_desconto:porcento,
                        horario_41_pagou: true,
                        horario_41_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_41_valor_rec: numvalorFinal,
                        horario_41_data_rec: dataRec,
                        horario_41_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(42):
                if(pagou42){
                    document.getElementById('pagou'+n).checked= false;
                    pagou42=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_42_tipo_de_desconto:0,
                        horario_42_pagou: false,
                        horario_42_valor_desc:"",
                        horario_42_valor_rec:0,
                        horario_42_data_rec:"",
                        horario_42_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou42=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_42_tipo_de_desconto:porcento,
                        horario_42_pagou: true,
                        horario_42_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_42_valor_rec: numvalorFinal,
                        horario_42_data_rec: dataRec,
                        horario_42_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(43):
                if(pagou43){
                    document.getElementById('pagou'+n).checked= false;
                    pagou43=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_43_tipo_de_desconto:0,
                        horario_43_pagou: false,
                        horario_43_valor_desc:"",
                        horario_43_valor_rec:0,
                        horario_43_data_rec:"",
                        horario_43_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou43=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_43_tipo_de_desconto:porcento,
                        horario_43_pagou: true,
                        horario_43_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_43_valor_rec: numvalorFinal,
                        horario_43_data_rec: dataRec,
                        horario_43_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(44):
                if(pagou44){
                    document.getElementById('pagou'+n).checked= false;
                    pagou44=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_44_tipo_de_desconto:0,
                        horario_44_pagou: false,
                        horario_44_valor_desc:"",
                        horario_44_valor_rec:0,
                        horario_44_data_rec:"",
                        horario_44_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou44=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_44_tipo_de_desconto:porcento,
                        horario_44_pagou: true,
                        horario_44_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_44_valor_rec: numvalorFinal,
                        horario_44_data_rec: dataRec,
                        horario_44_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(45):
                if(pagou45){
                    document.getElementById('pagou'+n).checked= false;
                    pagou45=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_45_tipo_de_desconto:0,
                        horario_45_pagou: false,
                        horario_45_valor_desc:"",
                        horario_45_valor_rec:0,
                        horario_45_data_rec:"",
                        horario_45_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou45=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_45_tipo_de_desconto:porcento,
                        horario_45_pagou: true,
                        horario_45_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_45_valor_rec: numvalorFinal,
                        horario_45_data_rec: dataRec,
                        horario_45_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(46):
                if(pagou46){
                    document.getElementById('pagou'+n).checked= false;
                    pagou46=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_46_tipo_de_desconto:0,
                        horario_46_pagou: false,
                        horario_46_valor_desc:"",
                        horario_46_valor_rec:0,
                        horario_46_data_rec:"",
                        horario_46_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou46=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_46_tipo_de_desconto:porcento,
                        horario_46_pagou: true,
                        horario_46_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_46_valor_rec: numvalorFinal,
                        horario_46_data_rec: dataRec,
                        horario_46_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            case(47):
                if(pagou47){
                    document.getElementById('pagou'+n).checked= false;
                    pagou47=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_47_tipo_de_desconto:0,
                        horario_47_pagou: false,
                        horario_47_valor_desc:"",
                        horario_47_valor_rec:0,
                        horario_47_data_rec:"",
                        horario_47_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou47=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_47_tipo_de_desconto:porcento,
                        horario_47_pagou: true,
                        horario_47_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_47_valor_rec: numvalorFinal,
                        horario_47_data_rec: dataRec,
                        horario_47_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(48):
                if(pagou48){
                    document.getElementById('pagou'+n).checked= false;
                    pagou48=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_48_tipo_de_desconto:0,
                        horario_48_pagou: false,
                        horario_48_valor_desc:"",
                        horario_48_valor_rec:0,
                        horario_48_data_rec:"",
                        horario_48_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou48=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_48_tipo_de_desconto:porcento,
                        horario_48_pagou: true,
                        horario_48_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_48_valor_rec: numvalorFinal,
                        horario_48_data_rec: dataRec,
                        horario_48_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(49):
                if(pagou49){
                    document.getElementById('pagou'+n).checked= false;
                    pagou49=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_49_tipo_de_desconto:0,
                        horario_49_pagou: false,
                        horario_49_valor_desc:"",
                        horario_49_valor_rec:0,
                        horario_49_data_rec:"",
                        horario_49_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou49=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_49_tipo_de_desconto:porcento,
                        horario_49_pagou: true,
                        horario_49_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_49_valor_rec: numvalorFinal,
                        horario_49_data_rec: dataRec,
                        horario_49_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(50):
                if(pagou50){
                    document.getElementById('pagou'+n).checked= false;
                    pagou50=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_50_tipo_de_desconto:0,
                        horario_50_pagou: false,
                        horario_50_valor_desc:"",
                        horario_50_valor_rec:0,
                        horario_50_data_rec:"",
                        horario_50_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou50=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_50_tipo_de_desconto:porcento,
                        horario_50_pagou: true,
                        horario_50_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_50_valor_rec: numvalorFinal,
                        horario_50_data_rec: dataRec,
                        horario_50_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(51):
                if(pagou51){
                    document.getElementById('pagou'+n).checked= false;
                    pagou51=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_51_tipo_de_desconto:0,
                        horario_51_pagou: false,
                        horario_51_valor_desc:"",
                        horario_51_valor_rec:0,
                        horario_51_data_rec:"",
                        horario_51_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou51=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_51_tipo_de_desconto:porcento,
                        horario_51_pagou: true,
                        horario_51_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_51_valor_rec: numvalorFinal,
                        horario_51_data_rec: dataRec,
                        horario_51_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(52):
                if(pagou52){
                    document.getElementById('pagou'+n).checked= false;
                    pagou52=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_52_tipo_de_desconto:0,
                        horario_52_pagou: false,
                        horario_52_valor_desc:"",
                        horario_52_valor_rec:0,
                        horario_52_data_rec:"",
                        horario_52_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou52=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_52_tipo_de_desconto:porcento,
                        horario_52_pagou: true,
                        horario_52_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_52_valor_rec: numvalorFinal,
                        horario_52_data_rec: dataRec,
                        horario_52_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(53):
                if(pagou53){
                    document.getElementById('pagou'+n).checked= false;
                    pagou53=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_53_tipo_de_desconto:0,
                        horario_53_pagou: false,
                        horario_53_valor_desc:"",
                        horario_53_valor_rec:0,
                        horario_53_data_rec:"",
                        horario_53_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou53=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_53_tipo_de_desconto:porcento,
                        horario_53_pagou: true,
                        horario_53_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_53_valor_rec: numvalorFinal,
                        horario_53_data_rec: dataRec,
                        horario_53_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(54):
                if(pagou54){
                    document.getElementById('pagou'+n).checked= false;
                    pagou54=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_54_tipo_de_desconto:0,
                        horario_54_pagou: false,
                        horario_54_valor_desc:"",
                        horario_54_valor_rec:0,
                        horario_54_data_rec:"",
                        horario_54_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou54=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_54_tipo_de_desconto:porcento,
                        horario_54_pagou: true,
                        horario_54_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_54_valor_rec: numvalorFinal,
                        horario_54_data_rec: dataRec,
                        horario_54_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(55):
                if(pagou55){
                    document.getElementById('pagou'+n).checked= false;
                    pagou55=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_55_tipo_de_desconto:0,
                        horario_55_pagou: false,
                        horario_55_valor_desc:"",
                        horario_55_valor_rec:0,
                        horario_55_data_rec:"",
                        horario_55_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou55=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_55_tipo_de_desconto:porcento,
                        horario_55_pagou: true,
                        horario_55_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_55_valor_rec: numvalorFinal,
                        horario_55_data_rec: dataRec,
                        horario_55_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(56):
                if(pagou56){
                    document.getElementById('pagou'+n).checked= false;
                    pagou56=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_56_tipo_de_desconto:0,
                        horario_56_pagou: false,
                        horario_56_valor_desc:"",
                        horario_56_valor_rec:0,
                        horario_56_data_rec:"",
                        horario_56_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou56=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_56_tipo_de_desconto:porcento,
                        horario_56_pagou: true,
                        horario_56_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_56_valor_rec: numvalorFinal,
                        horario_56_data_rec: dataRec,
                        horario_56_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            case(57):
                if(pagou57){
                    document.getElementById('pagou'+n).checked= false;
                    pagou57=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_57_tipo_de_desconto:0,
                        horario_57_pagou: false,
                        horario_57_valor_desc:"",
                        horario_57_valor_rec:0,
                        horario_57_data_rec:"",
                        horario_57_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou57=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_57_tipo_de_desconto:porcento,
                        horario_57_pagou: true,
                        horario_57_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_57_valor_rec: numvalorFinal,
                        horario_57_data_rec: dataRec,
                        horario_57_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(58):
                if(pagou58){
                    document.getElementById('pagou'+n).checked= false;
                    pagou58=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_58_tipo_de_desconto:0,
                        horario_58_pagou: false,
                        horario_58_valor_desc:"",
                        horario_58_valor_rec:0,
                        horario_58_data_rec:"",
                        horario_58_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou58=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_58_tipo_de_desconto:porcento,
                        horario_58_pagou: true,
                        horario_58_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_58_valor_rec: numvalorFinal,
                        horario_58_data_rec: dataRec,
                        horario_58_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(59):
                if(pagou59){
                    document.getElementById('pagou'+n).checked= false;
                    pagou59=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_59_tipo_de_desconto:0,
                        horario_59_pagou: false,
                        horario_59_valor_desc:"",
                        horario_59_valor_rec:0,
                        horario_59_data_rec:"",
                        horario_59_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou59=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_59_tipo_de_desconto:porcento,
                        horario_59_pagou: true,
                        horario_59_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_59_valor_rec: numvalorFinal,
                        horario_59_data_rec: dataRec,
                        horario_59_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(60):
                if(pagou60){
                    document.getElementById('pagou'+n).checked= false;
                    pagou60=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_60_tipo_de_desconto:0,
                        horario_60_pagou: false,
                        horario_60_valor_desc:"",
                        horario_60_valor_rec:0,
                        horario_60_data_rec:"",
                        horario_60_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou60=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_60_tipo_de_desconto:porcento,
                        horario_60_pagou: true,
                        horario_60_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_60_valor_rec: numvalorFinal,
                        horario_60_data_rec: dataRec,
                        horario_60_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(61):
                if(pagou61){
                    document.getElementById('pagou'+n).checked= false;
                    pagou61=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_61_tipo_de_desconto:0,
                        horario_61_pagou: false,
                        horario_61_valor_desc:"",
                        horario_61_valor_rec:0,
                        horario_61_data_rec:"",
                        horario_61_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou61=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_61_tipo_de_desconto:porcento,
                        horario_61_pagou: true,
                        horario_61_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_61_valor_rec: numvalorFinal,
                        horario_61_data_rec: dataRec,
                        horario_61_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(62):
                if(pagou62){
                    document.getElementById('pagou'+n).checked= false;
                    pagou62=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_62_tipo_de_desconto:0,
                        horario_62_pagou: false,
                        horario_62_valor_desc:"",
                        horario_62_valor_rec:0,
                        horario_62_data_rec:"",
                        horario_62_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou62=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_62_tipo_de_desconto:porcento,
                        horario_62_pagou: true,
                        horario_62_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_62_valor_rec: numvalorFinal,
                        horario_62_data_rec: dataRec,
                        horario_62_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(63):
                if(pagou63){
                    document.getElementById('pagou'+n).checked= false;
                    pagou63=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_63_tipo_de_desconto:0,
                        horario_63_pagou: false,
                        horario_63_valor_desc:"",
                        horario_63_valor_rec:0,
                        horario_63_data_rec:"",
                        horario_63_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou63=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_63_tipo_de_desconto:porcento,
                        horario_63_pagou: true,
                        horario_63_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_63_valor_rec: numvalorFinal,
                        horario_63_data_rec: dataRec,
                        horario_63_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(64):
                if(pagou64){
                    document.getElementById('pagou'+n).checked= false;
                    pagou64=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_64_tipo_de_desconto:0,
                        horario_64_pagou: false,
                        horario_64_valor_desc:"",
                        horario_64_valor_rec:0,
                        horario_64_data_rec:"",
                        horario_64_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou64=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_64_tipo_de_desconto:porcento,
                        horario_64_pagou: true,
                        horario_64_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_64_valor_rec: numvalorFinal,
                        horario_64_data_rec: dataRec,
                        horario_64_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(65):
                if(pagou65){
                    document.getElementById('pagou'+n).checked= false;
                    pagou65=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_65_tipo_de_desconto:0,
                        horario_65_pagou: false,
                        horario_65_valor_desc:"",
                        horario_65_valor_rec:0,
                        horario_65_data_rec:"",
                        horario_65_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou65=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_65_tipo_de_desconto:porcento,
                        horario_65_pagou: true,
                        horario_65_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_65_valor_rec: numvalorFinal,
                        horario_65_data_rec: dataRec,
                        horario_65_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(66):
                if(pagou66){
                    document.getElementById('pagou'+n).checked= false;
                    pagou66=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_66_tipo_de_desconto:0,
                        horario_66_pagou: false,
                        horario_66_valor_desc:"",
                        horario_66_valor_rec:0,
                        horario_66_data_rec:"",
                        horario_66_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou66=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_66_tipo_de_desconto:porcento,
                        horario_66_pagou: true,
                        horario_66_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_66_valor_rec: numvalorFinal,
                        horario_66_data_rec: dataRec,
                        horario_66_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            case(67):
                if(pagou67){
                    document.getElementById('pagou'+n).checked= false;
                    pagou67=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_67_tipo_de_desconto:0,
                        horario_67_pagou: false,
                        horario_67_valor_desc:"",
                        horario_67_valor_rec:0,
                        horario_67_data_rec:"",
                        horario_67_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou67=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_67_tipo_de_desconto:porcento,
                        horario_67_pagou: true,
                        horario_67_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_67_valor_rec: numvalorFinal,
                        horario_67_data_rec: dataRec,
                        horario_67_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(68):
                if(pagou68){
                    document.getElementById('pagou'+n).checked= false;
                    pagou68=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_68_tipo_de_desconto:0,
                        horario_68_pagou: false,
                        horario_68_valor_desc:"",
                        horario_68_valor_rec:0,
                        horario_68_data_rec:"",
                        horario_68_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou68=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_68_tipo_de_desconto:porcento,
                        horario_68_pagou: true,
                        horario_68_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_68_valor_rec: numvalorFinal,
                        horario_68_data_rec: dataRec,
                        horario_68_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(69):
                if(pagou69){
                    document.getElementById('pagou'+n).checked= false;
                    pagou69=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_69_tipo_de_desconto:0,
                        horario_69_pagou: false,
                        horario_69_valor_desc:"",
                        horario_69_valor_rec:0,
                        horario_69_data_rec:"",
                        horario_69_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou69=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_69_tipo_de_desconto:porcento,
                        horario_69_pagou: true,
                        horario_69_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_69_valor_rec: numvalorFinal,
                        horario_69_data_rec: dataRec,
                        horario_69_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(70):
                if(pagou70){
                    document.getElementById('pagou'+n).checked= false;
                    pagou70=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_70_tipo_de_desconto:0,
                        horario_70_pagou: false,
                        horario_70_valor_desc:"",
                        horario_70_valor_rec:0,
                        horario_70_data_rec:"",
                        horario_70_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou70=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_70_tipo_de_desconto:porcento,
                        horario_70_pagou: true,
                        horario_70_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_70_valor_rec: numvalorFinal,
                        horario_70_data_rec: dataRec,
                        horario_70_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(71):
                if(pagou71){
                    document.getElementById('pagou'+n).checked= false;
                    pagou71=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_71_tipo_de_desconto:0,
                        horario_71_pagou: false,
                        horario_71_valor_desc:"",
                        horario_71_valor_rec:0,
                        horario_71_data_rec:"",
                        horario_71_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou71=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_71_tipo_de_desconto:porcento,
                        horario_71_pagou: true,
                        horario_71_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_71_valor_rec: numvalorFinal,
                        horario_71_data_rec: dataRec,
                        horario_71_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(72):
                if(pagou72){
                    document.getElementById('pagou'+n).checked= false;
                    pagou72=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_72_tipo_de_desconto:0,
                        horario_72_pagou: false,
                        horario_72_valor_desc:"",
                        horario_72_valor_rec:0,
                        horario_72_data_rec:"",
                        horario_72_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou72=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_72_tipo_de_desconto:porcento,
                        horario_72_pagou: true,
                        horario_72_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_72_valor_rec: numvalorFinal,
                        horario_72_data_rec: dataRec,
                        horario_72_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(73):
                if(pagou73){
                    document.getElementById('pagou'+n).checked= false;
                    pagou73=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_73_tipo_de_desconto:0,
                        horario_73_pagou: false,
                        horario_73_valor_desc:"",
                        horario_73_valor_rec:0,
                        horario_73_data_rec:"",
                        horario_73_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou73=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_73_tipo_de_desconto:porcento,
                        horario_73_pagou: true,
                        horario_73_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_73_valor_rec: numvalorFinal,
                        horario_73_data_rec: dataRec,
                        horario_73_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(74):
                if(pagou74){
                    document.getElementById('pagou'+n).checked= false;
                    pagou74=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_74_tipo_de_desconto:0,
                        horario_74_pagou: false,
                        horario_74_valor_desc:"",
                        horario_74_valor_rec:0,
                        horario_74_data_rec:"",
                        horario_74_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou74=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_74_tipo_de_desconto:porcento,
                        horario_74_pagou: true,
                        horario_74_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_74_valor_rec: numvalorFinal,
                        horario_74_data_rec: dataRec,
                        horario_74_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(75):
                if(pagou75){
                    document.getElementById('pagou'+n).checked= false;
                    pagou75=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_75_tipo_de_desconto:0,
                        horario_75_pagou: false,
                        horario_75_valor_desc:"",
                        horario_75_valor_rec:0,
                        horario_75_data_rec:"",
                        horario_75_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou75=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_75_tipo_de_desconto:porcento,
                        horario_75_pagou: true,
                        horario_75_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_75_valor_rec: numvalorFinal,
                        horario_75_data_rec: dataRec,
                        horario_75_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(76):
                if(pagou76){
                    document.getElementById('pagou'+n).checked= false;
                    pagou76=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_76_tipo_de_desconto:0,
                        horario_76_pagou: false,
                        horario_76_valor_desc:"",
                        horario_76_valor_rec:0,
                        horario_76_data_rec:"",
                        horario_76_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou76=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_76_tipo_de_desconto:porcento,
                        horario_76_pagou: true,
                        horario_76_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_76_valor_rec: numvalorFinal,
                        horario_76_data_rec: dataRec,
                        horario_76_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            case(77):
                if(pagou77){
                    document.getElementById('pagou'+n).checked= false;
                    pagou77=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_77_tipo_de_desconto:0,
                        horario_77_pagou: false,
                        horario_77_valor_desc:"",
                        horario_77_valor_rec:0,
                        horario_77_data_rec:"",
                        horario_77_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou77=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_77_tipo_de_desconto:porcento,
                        horario_77_pagou: true,
                        horario_77_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_77_valor_rec: numvalorFinal,
                        horario_77_data_rec: dataRec,
                        horario_77_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(78):
                if(pagou78){
                    document.getElementById('pagou'+n).checked= false;
                    pagou78=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_78_tipo_de_desconto:0,
                        horario_78_pagou: false,
                        horario_78_valor_desc:"",
                        horario_78_valor_rec:0,
                        horario_78_data_rec:"",
                        horario_78_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou78=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_78_tipo_de_desconto:porcento,
                        horario_78_pagou: true,
                        horario_78_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_78_valor_rec: numvalorFinal,
                        horario_78_data_rec: dataRec,
                        horario_78_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(79):
                if(pagou79){
                    document.getElementById('pagou'+n).checked= false;
                    pagou79=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_79_tipo_de_desconto:0,
                        horario_79_pagou: false,
                        horario_79_valor_desc:"",
                        horario_79_valor_rec:0,
                        horario_79_data_rec:"",
                        horario_79_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou79=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_79_tipo_de_desconto:porcento,
                        horario_79_pagou: true,
                        horario_79_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_79_valor_rec: numvalorFinal,
                        horario_79_data_rec: dataRec,
                        horario_79_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(80):
                if(pagou80){
                    document.getElementById('pagou'+n).checked= false;
                    pagou80=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_80_tipo_de_desconto:0,
                        horario_80_pagou: false,
                        horario_80_valor_desc:"",
                        horario_80_valor_rec:0,
                        horario_80_data_rec:"",
                        horario_80_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou80=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_80_tipo_de_desconto:porcento,
                        horario_80_pagou: true,
                        horario_80_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_80_valor_rec: numvalorFinal,
                        horario_80_data_rec: dataRec,
                        horario_80_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(81):
                if(pagou81){
                    document.getElementById('pagou'+n).checked= false;
                    pagou81=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_81_tipo_de_desconto:0,
                        horario_81_pagou: false,
                        horario_81_valor_desc:"",
                        horario_81_valor_rec:0,
                        horario_81_data_rec:"",
                        horario_81_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou81=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_81_tipo_de_desconto:porcento,
                        horario_81_pagou: true,
                        horario_81_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_81_valor_rec: numvalorFinal,
                        horario_81_data_rec: dataRec,
                        horario_81_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(82):
                if(pagou82){
                    document.getElementById('pagou'+n).checked= false;
                    pagou82=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_82_tipo_de_desconto:0,
                        horario_82_pagou: false,
                        horario_82_valor_desc:"",
                        horario_82_valor_rec:0,
                        horario_82_data_rec:"",
                        horario_82_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou82=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_82_tipo_de_desconto:porcento,
                        horario_82_pagou: true,
                        horario_82_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_82_valor_rec: numvalorFinal,
                        horario_82_data_rec: dataRec,
                        horario_82_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(83):
                if(pagou83){
                    document.getElementById('pagou'+n).checked= false;
                    pagou83=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_83_tipo_de_desconto:0,
                        horario_83_pagou: false,
                        horario_83_valor_desc:"",
                        horario_83_valor_rec:0,
                        horario_83_data_rec:"",
                        horario_83_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou83=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_83_tipo_de_desconto:porcento,
                        horario_83_pagou: true,
                        horario_83_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_83_valor_rec: numvalorFinal,
                        horario_83_data_rec: dataRec,
                        horario_83_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
            
            case(84):
                if(pagou84){
                    document.getElementById('pagou'+n).checked= false;
                    pagou84=false;
                    dataRec="";
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_84_tipo_de_desconto:0,
                        horario_84_pagou: false,
                        horario_84_valor_desc:"",
                        horario_84_valor_rec:0,
                        horario_84_data_rec:"",
                        horario_84_data_rec_value:""
                    });
                    document.getElementById("compareceu"+n).disabled=false;
                    document.getElementById('dataRecebimento'+n).value = "";
                    document.getElementById('dataRecebimento'+n).disabled=false;
                    document.getElementById('valorDesconto'+n).value="";
                    document.getElementById('valorDesconto'+n).disabled=false;
                    document.getElementById('porcento'+n).disabled=false;
                    document.getElementById('valorFinal'+n).innerHTML="";
                    document.getElementById('porcento'+n).value=0;
                }else{
                    //document.getElementById("compareceu"+n).disabled=true;
                    var porcento = document.getElementById('porcento'+n).value;
                    document.getElementById('dataRecebimento'+n).disabled=true;
                    document.getElementById('valorDesconto'+n).disabled=true;
                    document.getElementById('porcento'+n).disabled=true;
                    var valor = document.getElementById("valor"+n).innerHTML;
                    var stringValor = valor.substring(1);
                    var numvalor = Number(stringValor);

                    var valorRecebido = document.getElementById('valorFinal'+n).innerHTML;
                    var valorFinal = valorRecebido.substring(1);
                    var numvalorFinal = Number(valorFinal);

                    var valorDesconto = document.getElementById('valorDesconto'+n).value;
                    var valorDescontoDecimal = Number(valorDesconto);

                    if(porcento==="0"){
                        numvalorFinal=numvalor-valorDesconto;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    if(porcento==="1"){
                        numvalorFinal=numvalor-(numvalor*valorDesconto)/100;
                        numvalorFinal = numvalorFinal.toFixed(2);
                    }
                    document.getElementById('valorDesconto'+n).value=valorDescontoDecimal.toFixed(2);
                    document.getElementById('pagou'+n).checked= true;
                    pagou84=true;
                    var databaseRef = database.ref('eventos/'+eventoId);
                    databaseRef.update({
                        horario_84_tipo_de_desconto:porcento,
                        horario_84_pagou: true,
                        horario_84_valor_desc: valorDescontoDecimal.toFixed(2),
                        horario_84_valor_rec: numvalorFinal,
                        horario_84_data_rec: dataRec,
                        horario_84_data_rec_value: dataRecValue
                    });
                    document.getElementById('dataRecebimento'+n).value = dataRec;
                    document.getElementById('valorFinal'+n).innerHTML = "€"+numvalorFinal;
                }
            break;
        }
    }
    
    function acertarNumero(n){
      var valor = document.getElementById("valor"+n).innerHTML;
      var stringValor = valor.substring(1);
      var numvalor = Number(stringValor);
      
      var desconto = document.getElementById('valorDesconto'+n).value;
      desconto = Number(desconto);
      var descontoDecimal = desconto.toFixed(2);
      document.getElementById('valorDesconto'+n).value=descontoDecimal;
      
      var valorFinal = document.getElementById('valorFinal'+n).innerHTML;
      var stringValorFinal = valorFinal.substring(1);
      var numvalorFinal = Number(stringValorFinal);
      
      var porcento = document.getElementById('porcento'+n).value;
      
      if(desconto>numvalor){
          if(porcento==="0"){
            alert("O desconto não pode ser maior do que o valor do serviço...");
            document.getElementById('valorDesconto'+n).value="";
          }
      }else{
          if(porcento==="0"){
            var valorComDesconto=numvalor-desconto;
            valorComDesconto=Number(valorComDesconto).toFixed(2);
            document.getElementById('valorFinal'+n).innerHTML="€"+valorComDesconto;
          }
      }
      if(porcento==="1"){
            var percentual=(numvalor-(numvalor*desconto)/100);
            percentual=Number(percentual).toFixed(2);
            document.getElementById('valorFinal'+n).innerHTML="€"+percentual;
      }
    }
    
    function acertarNumeroSelect(n){
        document.getElementById('valorDesconto'+n).value="";
        document.getElementById('valorFinal'+n).innerHTML="€";
        
        document.getElementById('valorDesconto'+n).focus();
    }