var fs = require('fs');
var path = require('path');
var glob = require("glob");

var Promise = require('promise');
var htmlparser = require("htmlparser2");

// var Cacheman = require('cacheman');
var CachemanFile = require('cacheman-file');
var cache = new CachemanFile('.cache');

// options is optional
var globOptions = {
  // matchBase:false
  ttl: '15y'
};


var date = new Date();

glob("../public/post/[0-9][0-9][0-9][0-9]*/index.html", function (er, files) {

  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  files.forEach(file => {

    var postTitle = file.split("/")[3];

    // console.log("SPLIT: " + postTitle);

    cache.get(file, function (error, value) {

      if (error) {
        throw error;
      } else {
        if (!value) {
          // console.log("No value found for file " + file);
        } else {
          // console.log("VAL: " + JSON.stringify(value)); //-> {foo:"bar"}
        }
      }

    });
    // cache.del(file, function (error) {
    //   if (error) throw error;
    //   console.log(file + " deleted...");
    // });

    // set the value
    // cache.set(file, { name: postTitle, date:  date.getTime(), hasEndpoints: false, sent: false}, function (error) {
    //   if (error) throw error;
    //
    //   // cache.del(file, function (error) {
    //   //   if (error) throw error;
    //   //   console.log(file + " deleted...");
    //   // });
    // });
    //
    // console.log(file);
  });
})

function findEndpoints(file) {

}

// fs.readdir("../public/post", (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// })
