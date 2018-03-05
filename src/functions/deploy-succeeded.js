const request = require('request');

exports.handler = function(event, context, callback) {
  var e = JSON.parse(event.body);

  const { SUPERFEEDR_USERNAME: user } = process.env;

console.log('Netlify Env: ' + user);
  if (e.payload.context == "production") {
    console.log('[superfeedr] preparing to ping ' + user  + '.superfeedr.com');
    request.post({
      url: 'http://'+ user +'.superfeedr.com/',
      method: 'POST',
      json: {hub.mode: 'publish', hub.url: 'https://renem.net/index.xml'}
    }, function(error, response, body){
      console.log('Post response status: ' + response.statusCode);
    });
  } else {
    console.log('[deploy-succeeded] running in a non production environment');
  }
}
