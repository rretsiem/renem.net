function getCommentText(t,e,a,n){if("link"==e&&n.data.name)return'<a class="u-url name p-name" href="'+a+'">'+n.data.name+"</a>";if(t)return t;var i=new URL(a).hostname;return"like"==e?"twitter.com"==i?"favorited this.":"facebook.com"==i?"likes this.":"plus.google.com"==i?"+1ed this.":"liked this.":"repost"==e?"twitter.com"==i?"retweeted this.":"reposted this.":e+"ed it"}function displayMentions(t){t&&t.links&&t.links.forEach(function(t){var e=t.data.published?new Date(t.data.published):new Date(t.verified_date),a='<li class="comment p-comment h-entry" id="li-comment-'+t.id+'">           <article id="comment-'+t.id+'" class="webmention-mention">             <div class="comment-meta commentmetadata webmention-author">               <div class="vcard h-card p-author">               <span class="webmention-author"><img alt="" src="'+t.data.author.photo+'" srcset="'+t.data.author.photo+' 2x" class="u-photo avatar avatar-48 photo avatar-default u-photo avatar-semantic-linkbacks" height="48" width="48" scale="0"></span>                 <cite class="fn"><a href="'+t.data.author.url+'" rel="external nofollow" class="u-url url">'+t.data.author.name+'</a></cite>                 <a href="'+t.target+"#comment-"+t.id+'" title="'+e.toLocaleTimeString()+'">                   <time class="dt-published" datetime="'+t.data.published+'">'+e.toLocaleDateString()+'</time>                 </a>               </div>             </div>             <div class="comment-content">               <div class="e-content p-name p-summary">                 <p>'+getCommentText(t.data.content,t.activity.type,t.data.url,t)+'                <cite><a class="u-url" href="'+t.data.url+'" rel="nofollow">via '+new URL(t.data.url).hostname+"</a></cite></p>               </div>             </div>           </article>         </li>";document.getElementById("mentionList").insertAdjacentHTML("afterbegin",a),document.getElementById("mentionContainer").style.visibility="visible"})}!function(){var t,e=document.createElement("script"),a=document.getElementsByTagName("script")[0];t=!(!(t=!!document.querySelectorAll&&document.querySelectorAll("link[rel~=canonical]"))||!t[0])&&t[0].href,e.type="text/javascript",e.defer=!0,e.src="https://webmention.io/api/mentions?jsonp=displayMentions&target="+encodeURIComponent(t),a.parentNode.insertBefore(e,a)}();