var sexo="";
function cadastrarCliente(){
        
        var nome = document.getElementById("cli_nome").value;
        var tel = document.getElementById("cli_tel").value;
        
        
        //console.log("tsexo = "+sexo);
          // Sign in with email and pass.
          // [START createwithemail]


        firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
          var email = user.email;
          var emailVerified = user.emailVerified;
          var uid = user.uid;
          if (!emailVerified) {
            alert('o e-mail deve ser verificado');
            window.location="index.html";
            
          }else {
              console.log("email ="+ email);
              console.log("uid = "+uid);
              console.log("nome = "+nome);
              console.log("tel = "+tel);
              
              var sexo = document.getElementsByName("tsexo");
              if(sexo[0].checked){
                 sexo="M";
                }else if (sexo[1].checked){
                sexo="F";
                }
              console.log("sexo = "+sexo);
              
              var database = firebase.database();
		
		var fruitRef = database.ref('users');
		var adicionarRef = firebase.database().ref('users/'+uid);
		adicionarRef.update({
			user_id: uid,
			user_name: nome,
			user_email: email,
			user_tel: tel,
                          user_sexo: sexo
		});

                alert("Informação do usuário "+nome+" registrada com sucesso");
                resetarDados();
              
              //window.location="incluircliente.html";
          }
          //alert('SignIN');
          //window.location="index2.html";
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [START_EXCLUDE]
          // --- USER NAO ENCONTRADO ---
          //document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          //document.getElementById('quickstart-sign-in').textContent = 'Entrar';
          //document.getElementById('quickstart-account-details').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
    });


          
    }
    
    
function resetarDados(){
        //document.getElementById("cli_email").value="";
        //document.getElementById("cli_senha").value="";
        document.getElementById("cli_nome").value="";
        document.getElementById("cli_tel").value="";
        document.getElementById("cli_masculino").checked=false;
        document.getElementById("cli_feminino").checked=false;
        //redirecionarPagina();
    }
    
    

function valorRadio(){
            var sexo = document.getElementsByName("tsexo");
            if(sexo[0].checked){
                sexo="M";
            }else if (sexo[1].checked){
                sexo="F";
            }
            console.log("sexo = "+sexo);
        }
        
        
function redirecionarPagina(){
    window.location="clientes.html";
}
