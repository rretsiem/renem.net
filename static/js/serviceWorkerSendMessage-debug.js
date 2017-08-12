/*
 sends a ping, if serviceWorker is registered
*/
function sendMessage(message) {
  return new Promise(function(resolve, reject) {
    if (navigator.serviceWorker.controller) {
      var messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = function (event) {
        if (event.data.error) {
          reject(event.data.error);
        } else {
          resolve(event.data);
        }
      };
      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    } else {
      reject("This page isn't currently controlled by a service worker. Please reload and try again.");
    }
  });
}
