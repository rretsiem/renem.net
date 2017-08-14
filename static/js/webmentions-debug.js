function getCommentText(content, type, url, item) {

    if (type == "link" && item.data.name) {
      return '<a class="u-url name p-name" href="' +  url + '">' + item.data.name + '</a>';
    } else if (content) {
      return content;
    }

    var commentContent = "";
    var hostname = new URL(url).hostname;

    if (type == "like") {
      if (hostname == "twitter.com") {
        commentContent = "favorited this."
      } else if (hostname == "facebook.com") {
        commentContent = "likes this.";
      } else if (hostname == "plus.google.com") {
        commentContent = "+1ed this.";
      } else {
        commentContent = "liked this.";
      }
    } else if (type == "repost") {
      if (hostname == "twitter.com") {
        commentContent = "retweeted this.";
      } else {
        commentContent = "reposted this.";
      }
    } else {
      commentContent = type + 'ed it';
    }

    return commentContent;
}

function displayMentions(json) {
    // dealin wit teh jsonz
    if (json && json["links"]) {

      json["links"].forEach(function(item) {
        // console.log("ITEM: " + JSON.stringify(item));
        // var commentTime = new Date(item.data.published)
        var commentTime = (item.data.published) ? new Date(item.data.published) : new Date(item.verified_date);

        var singleComment = '<li class="comment p-comment h-entry" id="li-comment-' + item.id + '"> \
          <article id="comment-' + item.id + '" class="webmention-mention"> \
            <div class="comment-meta commentmetadata webmention-author"> \
              <div class="vcard h-card p-author"> \
              <span class="webmention-author"><img alt="" src="' + item.data.author.photo + '" srcset="' + item.data.author.photo + ' 2x" class="u-photo avatar avatar-48 photo avatar-default u-photo avatar-semantic-linkbacks" height="48" width="48" scale="0"></span> \
                <cite class="fn"><a href="' + item.data.author.url + '" rel="external nofollow" class="u-url url">' + item.data.author.name + '</a></cite> \
                <a href="' + item.target + '#comment-' + item.id + '" title="' + commentTime.toLocaleTimeString() + '"> \
                  <time class="dt-published" datetime="' +  item.data.published + '">' + commentTime.toLocaleDateString() + '</time> \
                </a> \
              </div> \
            </div> \
            <div class="comment-content"> \
              <div class="e-content p-name p-summary"> \
                <p>' + getCommentText(item.data.content, item.activity.type, item.data.url, item) + '\
                <cite><a class="u-url" href="' +  item.data.url + '" rel="nofollow">via ' + new URL(item.data.url).hostname + '</a></cite></p> \
              </div> \
            </div> \
          </article> \
        </li>';

        var mentionList = document.getElementById('mentionList');
        mentionList.insertAdjacentHTML( 'afterbegin', singleComment );
      });
      document.getElementById('mentionContainer').style.visibility = "visible";
      document.getElementById('mentionContainer').style.display = "block";
    }
}

(function () {
  var sn = document.createElement("script"), s = document.getElementsByTagName("script")[0], url;
  url = document.querySelectorAll ? document.querySelectorAll("link[rel~=canonical]") : false;
  url = url && url[0] ? url[0].href : false;
  sn.type = "text/javascript";
  sn.defer = true;
  sn.src = "https://webmention.io/api/mentions?jsonp=displayMentions&target=" + encodeURIComponent(url);
  s.parentNode.insertBefore(sn, s);
}());
