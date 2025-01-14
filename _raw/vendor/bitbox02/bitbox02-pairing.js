const Browser = require("webextension-polyfill");

window.addEventListener('load', event => {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('code').textContent = urlParams.get('code');
});


function handleMessage(message, sender, sendResponse) {
    if (message.type === 'bitbox02' && message.action === 'popup-close') {
        window.close();
    }
}
Browser.runtime.onMessage.addListener(handleMessage);
