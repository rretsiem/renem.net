const request = require('request');

exports.handler = function(event, context, callback) {
  var e = JSON.parse(event.body);

  console.log("HubURL: " + e.payload.url);

  const { SUPERFEEDR_USERNAME: user } = process.env;

console.log('Netlify Env: ' + user);
  if (e.payload.context == "production") {
    console.log('[superfeedr] preparing to ping ' + user  + '.superfeedr.com');
    request.post('http://'+ user +'.superfeedr.com/?hub.mode=publish&hub.url=' + e.payload.url + '/*',
    function(error, response, body){
      if (!error && response.statusCode == 204) {
        console.log("[superfeedr] ping successful");
        callback(null, {statusCode: 204});
      } else {
        console.log("[superfeedr] ping failed:", error);
        callback(error, {statusCode: response.statusCode});
      }
    });
  } else {
    console.log('[deploy-succeeded] running in a non production environment');
  }
}
