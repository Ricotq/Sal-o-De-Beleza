    /**
     * Handles the sign in button press.
     */
    var flag=0;
    window.onload = function() {
      initApp();
    };
    
    function toggleSignIn() {
        //alert('SignIN');
//      if (firebase.auth().currentUser) {
//        // [START signout]
//        firebase.auth().signOut();
//        // [END signout]
//      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          //document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
        //document.getElementById('quickstart-sign-in').disabled = true;
        
        iniciar();
      }
      
      function iniciar(){
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              var emailVerified = user.emailVerified;
              if (emailVerified) {
                  window.location="index.html";
              }else{
                  if(flag===0){
                      alert('O E-mail ainda não foi verificado...');
                      flag=1;
                  }
                  
              }
            } 
          });
      }
      
    /**
     * Handles the sign up button press.
     */
    function handleSignUp() {
        //alert('SignUP');
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
          alert('A senha é muito fraca.');
        } else {
          alert(errorMessage);
          return;
        }
        console.log(error);
        return;
        // [END_EXCLUDE]
      });
      checarSendEmailVerification();
      // [END createwithemail]
    }
    
    function checarSendEmailVerification(){
        firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var emailVerified = user.emailVerified;
          if (!emailVerified) {
              sendEmailVerification();
          }
        } 
      });
    }
    
    /**
     * Sends an email verification to the user.
     */
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
    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    function initApp() {
        //alert('autentication initApp');
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          //window.location="index.html";
        } else {
          // User is signed out.
          // [START_EXCLUDE]
          // --- USER NAO ENCONTRADO ---
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          document.getElementById('quickstart-sign-in').textContent = 'Sign In';
          document.getElementById('quickstart-account-details').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
      document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
      //document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
      document.getElementById('quickstart-password-reset').addEventListener('click', sendEmailVerification, false);
    }
    

