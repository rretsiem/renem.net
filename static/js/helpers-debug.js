function subToMe(event) {
  var subToMeButton = document.getElementById('subToMeLink');
  var z=document.createElement('script');
  document.subtomeBtn=this;
  z.src='https://www.subtome.com/load.js';
  document.body.appendChild(z);
  event.preventDefault();
  // return false;
}


// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('subToMeLink').addEventListener('click', subToMe);
  // main();
});

// function() {
//   document.getElementById("subToMeLink").addEventListener('click', subToMe(this););
// }();

// (function(btn){var z=document.createElement('script');document.subtomeBtn=btn;z.src='https://www.subtome.com/load.js';document.body.appendChild(z);})(this);return false;
