// Register our service-worker
if (navigator.serviceWorker) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/serviceworker.js', {
            scope: '/'
        });
        if (navigator.serviceWorker.controller) {
            // navigator.serviceWorker.controller.postMessage({'command': 'trimCaches'});
        }
    });
}
//
