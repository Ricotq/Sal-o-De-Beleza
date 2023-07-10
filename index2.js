
window.onload = function() {
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var emailVerified = user.emailVerified;
          if (!emailVerified) {
              localStorage.setItem('emailVerificado','0');
              localStorage.setItem('cadastrado','0');
          }else {
          
          }
          //alert('SignIN');
          //window.location="cadastrarcliente.html";
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [START_EXCLUDE]
          // --- USER NAO ENCONTRADO ---
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        // [END_EXCLUDE]
      });
    
    
    //alert('index on load');
    var flag=0;
    //alert("localStorage.getItem('emailVerificado') = "+localStorage.getItem('emailVerificado'));
    if(localStorage.getItem('emailVerificado')==="1"){
    }else{
    
        //alert("localStorage.getItem('emailVerificado') = "+localStorage.getItem('emailVerificado'));
        //alert('e-mail não verificado');
        flag=1;
        window.location="autentication.html";
    }
    
    if(flag===0){
        //alert('flag = '+flag);
        //alert("localStorage.getItem('cadastrado') ="+localStorage.getItem('cadastrado'));
        if(localStorage.getItem('cadastrado')==="1"){
        }else{
            //alert('usuario nao cadastrado');
            //window.location="cadastrarcliente.html";
        }
    }
    checarSigninStatus();
    userInfo();
};
    

function userInfo() {
        //alert('userInfo()');
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var emailVerified = user.emailVerified;
          var uid = user.uid;
          
          var ref = firebase.database().ref('users/');
          ref.once('value', function(snapshot){
          snapshot.forEach(function (childSnapshot){
            var childKey = childSnapshot.key;
            if(childKey === uid){
                //alert('childKey ='+childKey+' e uid = '+uid);
            }
            var childData = childSnapshot.val();
            var nome=childData.user_name;
            //alert('nome = '+nome);
            sessionStorage.setItem('nome_usuario',nome);
            sessionStorage.setItem('id_usuario',uid);
            
            });
        
        });
          
          // [START_EXCLUDE]
          
        } 
        // [START_EXCLUDE silent]
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
}
function checarSigninStatus(){
    //alert("checarSigninStatus()");
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
        } else {
          alert('Usuário precisa fazer o LogIn.');
          window.location="autentication.html";
        }
    });
}

function fazerLogOut(){
    firebase.auth().signOut();
}
