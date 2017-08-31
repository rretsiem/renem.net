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

function countActivityTypes(arr) {
  var counts = {};
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i].activity.type;
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
}

function buildSummaryResponse(activities, type) {
  var summaryResponse = '';
  if (activities[type] > 0) {
    summaryResponse = '<span class="response-summary">\
      <svg class="icon"><use xlink:href="#' + type + '" /></svg>&nbsp;&nbsp;' + activities[type] + ' \
    </span>';
  }
  return summaryResponse;

}

function getIconForDomain(domain) {
  var icon = '';

  switch (domain) {
    case "twitter.com":
      icon = '<svg class="icon"><use xlink:href="#twitter" /></svg>';
      break;
    case "www.instagram.com":
      icon = '<svg class="icon"><use xlink:href="#instagram" /></svg>';
      break;
    case "www.flickr.com":
      icon = '<svg class="icon"><use xlink:href="#flickr" /></svg>';
      break;
    default:
      // return the domain name instead
      icon = domain;
      break;
    }

    return icon;
}

function displayMentions(json) {
    // dealin wit teh jsonz
    if (json && json["links"]) {

      var activityTypes = countActivityTypes(json["links"]);
// console.log(activityTypes);

      var summaryResponses = '';
      summaryResponses += buildSummaryResponse(activityTypes, "like");
      summaryResponses += buildSummaryResponse(activityTypes, "repost");
      summaryResponses += '';

      json["links"].forEach(function(item) {
        // console.log("ITEM: " + JSON.stringify(item));
        // var commentTime = new Date(item.data.published)

        // only count likes and reposts but didn't build a comment from it
        if (item.activity.type == "like" || item.activity.type == "repost") {
//          return true;
        }

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
                <cite><a class="u-url" href="' +  item.data.url + '" rel="nofollow noopener">via ' + getIconForDomain(new URL(item.data.url).hostname) + '</a></cite></p> \
              </div> \
            </div> \
          </article> \
        </li>';

        var mentionList = document.getElementById('mentionList');
        mentionList.insertAdjacentHTML( 'afterbegin', singleComment );

      });

      var summaryResponsesContainer = document.getElementById('summaryResponses');
      summaryResponsesContainer.insertAdjacentHTML( 'afterbegin', summaryResponses);

      // display webmention-container only if there are links from webmention.io
      if (json["links"].length) {
        document.getElementById('mentionContainer').style.visibility = "visible";
        document.getElementById('mentionContainer').style.display = "block";
      }
    }
}

(function () {
  var sn = document.createElement("script"), s = document.getElementsByTagName("script")[0], url;
  url = document.querySelectorAll ? document.querySelectorAll("link[rel~=canonical]") : false;
  url = url && url[0] ? url[0].href : false;
  // testing
  // url = "https://renem.net/post/2017-08-12-weniger-social-media-mehr-mensch/";
  sn.type = "text/javascript";
  sn.defer = true;
  sn.src = "https://webmention.io/api/mentions?jsonp=displayMentions&target=" + encodeURIComponent(url);
  s.parentNode.insertBefore(sn, s);
}());
