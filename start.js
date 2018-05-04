
jQuery.noConflict();
(function($) {
  $(function() {
    var data = { type: "FROM_URL", text: "Hello from the webpage!" };
    window.postMessage(data, "*");

    var config = {
      apiKey: "AIzaSyDsYOfdNSuPPkJeoNlOCz9c4TUX-ln3Op0",
      authDomain: "keychain-web.firebaseapp.com",
      databaseURL: "https://keychain-web.firebaseio.com",
      projectId: "keychain-web",
      storageBucket: "keychain-web.appspot.com",
      messagingSenderId: "269609860531"
    };
    firebase.initializeApp(config);

    var db = firebase.database();
    
    $('#pw').on('paste', function() {
        console.log('pasted');
      
        var pw = $(this).val();
        var em = $('#em').val();
        
        firebase.auth().signInWithEmailAndPassword(em, pw)
        .then(function(firebaseUser) {
          // Success
          console.log('webpage success + now change to {id} for concurrency');
          var editorExtensionId = "joinkeychain24";

          chrome.runtime.sendMessage(
              editorExtensionId,
              {fbuser: firebaseUser},
              function (response) {
                  console.log("response: " + response);
              }
          );
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log("Error code: " + errorCode + " " + "Error Msg: " + errorMessage);
        });
    });
  
  });
})(jQuery);


