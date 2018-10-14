if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function (params) {
                 console.log('Service worker registered');
                 
             })
}