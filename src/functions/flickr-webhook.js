/* Webhook from IFTTT when new Flickr photo with tag #blog
  create github file and post
*/
const githubapi = require('github'),
  async = require('async'),
  https = require('https');

exports.handler = function(event, context, callback) {
  const { caption, url, image, key } = JSON.parse(event.body);
  const { IG_GIT_USER: user, IG_GIT_TOKEN: token, IG_GIT_REPO: repo, IG_SECRET_KEY } = process.env;

  if (key !== IG_SECRET_KEY) return callback(null, { statusCode: 401, body: 'Incorrect key supplied' });
  if (!image || !caption || !url) return callback(null, { statusCode: 400, body: 'Params not supplied' });

  const time = Date.now();
  const date = new Date();
  const github = new githubapi({ version: '3.0.0' });
  github.authenticate({
    type: 'token',
    username: user,
    token
  });

  async.waterfall([
    function scrape_image_from_flickr(calbback) {
      console.log("Flickr url: " + url);
      console.log("Flickr image: " + image);
      console.log("Flickr title: " + caption);

      // const imageURL = 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s1080x1080/e15/' + imageSplit[imageSplit.length - 1];
      let imageData = '';
      https.get(image, (resp) => {
        resp.setEncoding('base64');
        resp.on('data', (data) => { imageData += data});
        resp.on('end', () => callback(null, imageData));
      }).on('error', (e) => new Error(`Error scraping image: ${e.message}`));

    },

    function upload_image_blob(image, callback) {
      github.gitdata.createBlob({
        owner: user,
        repo: repo,
        content: image,
        encoding: 'base64'
      }, function(err, data) {
        if (err) return new Error(err);
        callback(null, data.data.sha);
      });
    },


    function get_branch_reference(image, callback){
      github.gitdata.getReference({
        owner: user,
        user: user,
        repo: repo,
        ref: 'heads/master'
      }, function(err, data){
        if (err) return new Error(err);

        callback(null, { image: image, commit: data.data.object.sha});
      });
    },

    // Create a tree ready to commit
    function create_tree(result, callback){
      const content = `---
title: Flickr - ${date.toString()}
categories:
- photo
- flickr
date: ${date.toISOString().slice(0,-14)}
images:
- /images/flickr/${time}.jpg
originalURL: ${url}
syndication:
- ${url}
---

{{< picture src="/images/flickr/${time}" type="jpg" alt="" caption="${caption}" >}}

<!--more-->

`;
      const files = [{
        path: `static/images/flickr/${time}.jpg`,
        mode: '100644',
        type: 'blob',
        sha: result.image
      }, {
        path: `content/photos/${time}.md`,
        mode: '100644',
        type: 'blob',
        content: content
      }];

      github.gitdata.createTree({
        owner: user,
        user: user,
        repo: repo,
        tree: files,
        base_tree: result.commit
      }, function(err, data){
        if (err) return new Error(err);

        result.tree = data.data.sha;
        callback(null, result);
      });
    },


    function commit_the_files(result, callback){
      github.gitdata.createCommit({
        owner: user,
        user: user,
        repo: repo,
        message: `New Flickr image: ${date.toString()}`,
        tree: result.tree,
        parents: [result.commit]
      }, function(err, data){
        if (err) return new Error(err);

        result.new = data.data.sha;
        callback(null, result);
      });
    }//,

/*
    function update_git_reference(result, callback){
      github.gitdata.updateReference({
        owner: user,
        user: user,
        repo: repo,
        ref: 'heads/master',
        sha: result.new,
        force: true
      }, function(err, data){
        if (err) return new Error(err);

        callback(null);
      });
    }
*/
  ], function (err, result) {
    if (err) return callback(null, { statusCode: 400, body: err.message });
    else return callback(null, { statusCode: 200, body: 'Image imported' });
  });

};
