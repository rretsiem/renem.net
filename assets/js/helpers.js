// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
/*
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('subToMeLink').addEventListener('click', subToMe);
  // main();
});
*/
window.addEventListener("load", function() {
	var shareButtons = document.querySelectorAll('div.icon-link');
    for (var shareButton of shareButtons) {
        shareButton.addEventListener("click", function(event) {
            event.preventDefault();
            var shareUrl = event.target.getAttribute('url') || '';
            var shareTitle = event.target.getAttribute('title') || '';
            if (navigator.share) {
                navigator.share({
                    url: shareUrl,
                    title: shareTitle,
                    text: shareTitle
                }).then(function() {
                    console.log("share successful!");
                }, function(error) {
                    console.error("error in sharing", error);
                });
            // } else {
            //     var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=520,height=420';
            //     var twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareTitle) + '&url=' + encodeURIComponent(shareUrl) + '&via=renem.net';
            //     window.open(twitterUrl, 'intent', windowOptions);
            }
        });
    }
});
