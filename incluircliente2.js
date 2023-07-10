function cadastrarCliente(){
        var email = document.getElementById("cli_email").value;
        var password = document.getElementById("cli_senha").value;
        var nome = document.getElementById("cli_nome").value;
        var tel = document.getElementById("cli_tel").value;
        
        console.log("email ="+ email);
        console.log("password = "+password);
        console.log("nome = "+nome);
        console.log("nome = "+tel);
        //console.log("tsexo = "+sexo);
          // Sign in with email and pass.
          // [START createwithemail]

          firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
          });
          alert("Usuário"+nome+" criado com sucesso");
          resetarDados();
    }
    
    
function resetarDados(){
        document.getElementById("cli_email").value="";
        document.getElementById("cli_senha").value="";
        document.getElementById("cli_nome").value="";
        document.getElementById("cli_tel").value="";
        document.getElementById("cli_masculino").checked=false;
        document.getElementById("cli_feminino").checked=false;
        //redirecionarPagina();
    }
    
    
var sexo="";
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
