alert('java');

function findProfissional(){
            var input_name = document.getElementById('input_name').value;
            var flag='0';

            var prof_id = document.getElementById('idprof_id');
            var prof_nome = document.getElementById('idprof_nome');
            var prof_email = document.getElementById('idprof_email');
            var prof_end = document.getElementById('idprof_end');
            var prof_nif = document.getElementById('idprof_nif');
            var prof_tel = document.getElementById('idprof_tel');

            var ref = firebase.database().ref('profissional/');
            ref.once('value', function(snapshot){
                snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                //alert('input_name = '+ input_name + ' e childData.nome_prof = '+childData.nome_prof);
                if (input_name==childData.nome_prof){
                    flag ='1';
                    //alert('flag = '+ flag);
                    prof_id.value = childKey;
                    prof_nome.value = childData.nome_prof;
                    prof_email.value = childData.prof_email;
                    prof_end.value = childData.prof_end;
                    prof_nif.value = childData.prof_nif;
                    prof_tel.value = childData.prof_tel;
                }
                //alert('childKey = '+childKey);

                });
                if (flag=='0'){
                alert('Profissional não encontrado');
                document.getElementById('idprof_id').value = "";
                document.getElementById('idprof_nome').value = "";
                document.getElementById('idprof_email').value = "";
                document.getElementById('idprof_end').value = "";
                document.getElementById('idprof_nif').value = "";
                document.getElementById('idprof_tel').value = "";
            }
            });

        }
 
        function hide(){
                document.getElementById('text').hidden=true;
            }
            function show(){
                document.getElementById('text').hidden=false;
        }
       
        function findEspecialidade(){
            //alert('Especialidade');
            var input_name = document.getElementById('input_espec_name').value;
            var flag2='0';

            var espec_id = document.getElementById('idespec_id');
            var espec_nome = document.getElementById('idespec_nome');
            var ref = firebase.database().ref('especialidades/');

            ref.once('value', function(snapshot){
                snapshot.forEach(function (childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();


                //alert('input_name = '+ input_name + ' e childData.espec_name = '+childData.espec_name);
                if (input_name===childData.espec_name){
                    flag2 ='1';
                    //alert('flag = '+ flag);
                    espec_id.value = childKey;
                    espec_nome.value = childData.espec_name;
                    populateTable(childKey,childData.espec_name);
                }
                //alert('childKey = '+childKey);

                });
                if (flag2=='0'){
                alert('Especialidade não encontrado');
                document.getElementById('idespec_id').value = "";
                document.getElementById('idespec_nome').value = "";
            }
            });
        }
        function populateTable(especid,especnome){
            //this.espec_id = especid;
            var table = document.getElementById("tbl_espec_list");
            //var ref = firebase.database().ref('especialidades/');
            var ref = firebase.database().ref('especialidades/').child(especid);

            var rowIndex = 1;

            ref.once('value', function(snapshot){
                snapshot.forEach(function (childSnapshot){
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    if(childData.prof_id){
                        var row = table.insertRow(rowIndex);
                        var cellId = row.insertCell(0);
                        var cellName = row.insertCell(1);
                        var cellProfId = row.insertCell(2);
                        var cellProfNome = row.insertCell(3);
                        //if(!cellName=='undefined'){
                        //cellId.appendChild(document.createTextNode(childKey));
                        cellId.appendChild(document.createTextNode(especid));
                        cellName.appendChild(document.createTextNode(especnome));
                        cellProfId.appendChild(document.createTextNode(childData.prof_id));
                        cellProfNome.appendChild(document.createTextNode(childData.prof_name));
                        rowIndex = rowIndex + 1;
                    }
                });
            });

            //alert('populateTable');
        }

