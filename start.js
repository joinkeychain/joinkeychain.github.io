
jQuery.noConflict();
(function($) {
  $(function() {
    var data = { type: "FROM_URL", text: "Hello from the webpage!" };
    window.postMessage(data, "*");

      // The ID of the extension we want to talk to.
      var editorExtensionId = "abcdefghijklmnoabcdefhijklmnoabc";

      // Make a simple request:
      chrome.runtime.sendMessage(editorExtensionId, {openUrlInEditor: url},
        function(response) {
          if (response.success) {
            console.log('succ');
          }
        }
      );
  });
})(jQuery);
