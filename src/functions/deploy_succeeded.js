const request = require('request');

exports.handler = function(event, context, callback) {
  var e = JSON.parse(event.body);

  const { SUPERFEEDR_USERNAME: user } = process.env;

console.log('Netlify Env: ' + user);
  if (e.payload.context == "production") {
    console.log('[superfeedr] preparing to ping $SUPERFEEDR_USERNAME.superfeedr.com');
  } else {
    console.log('[deploy_succeeded] running in a non production environment');
  }
}
