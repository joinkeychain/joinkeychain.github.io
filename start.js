
// jQuery.noConflict();
// (function($) {
//   $(function() {

//   });
// })(jQuery);

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
