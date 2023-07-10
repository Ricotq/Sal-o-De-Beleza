
window.onload = function() {
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var emailVerified = user.emailVerified;
            if (!emailVerified) {
                localStorage.setItem('emailVerificado','0');
                localStorage.setItem('cadastrado','0');
            }
            //alert('SignIN');
            //window.location="cadastrarcliente.html";
            // [END_EXCLUDE]
        }else {
               window.location="autentication.html";
        }
        // [START_EXCLUDE silent]
        // [END_EXCLUDE]
      });
  };

function fazerLogOut(){
    firebase.auth().signOut();
}
