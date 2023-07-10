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
                localStorage.setItem('cadastrado','1'); 
                //alert("localStorage.getItem('cadastrado') ="+localStorage.getItem('cadastrado'));
                //alert("Informação do usuário "+nome+" registrada com sucesso");
                //window.location="index.html";
                
                resetarDados();
              
              
          }
          //alert('SignIN');
          //window.location="index2.html";
          // [END_EXCLUDE]
        } else {
            
            alert("Cliente deve ser cadastrado ...");
            window.location="autentication.html";
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
        
        
//function redirecionarPagina(){
//    window.location="clientes.html";
//}

/*window.onload = function() {
      initApp();
    };
    
    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
    //    document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE]
         // document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
         // document.getElementById('quickstart-sign-in').textContent = 'Sair';
    //      document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          if (!emailVerified) {
    //        document.getElementById('quickstart-verify-email').disabled = false;
            alert('o e-mail deve ser verificado');
            //sendEmailVerification();
            
            }else {
              //alert('E-mail verificado com sucesso');
              //window.location="autentication.html";
             }
          //alert('SignIN');
          //window.location="index2.html";
          // [END_EXCLUDE]
          } else {
          // User is signed out.
          // [START_EXCLUDE]
          // --- USER NAO ENCONTRADO ---
          alert('Usuário não está logado ...');
          window.location="autentication.html";
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
}*/

function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email de Verificação Enviado!');
        localStorage.setItem('emailVerificado','1');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }
    
function sendPasswordReset() {
      var email = document.getElementById('email').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Email de Atualização de Senha Enviado!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }

/*function logOut(){
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        window.location="autentication";
        // [END signout]
      }
}*/

function iniciarIndex(){
    window.location="index.html";
}
