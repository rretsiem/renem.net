/* eslint-env browser */
'use strict';

if (navigator.serviceWorker && !navigator.serviceWorker.controller) {
  navigator.serviceWorker.register('/serviceworker.js');
}
