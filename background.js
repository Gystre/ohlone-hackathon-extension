// load data
const url = chrome.runtime.getURL("data.json");
var data = null;
fetch(url)
    .then((response) => response.json())
    .then((json) => (data = json));

// contains the data on the site we are visiting
var currentSite = null;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.url) {
        // see if we're in supported page
        const url = message.url;
        for (var key in data) {
            if (url.includes(key)) {
                currentSite = data[key];
            }
        }
    }
});

function getCurrentSite() {
    return currentSite;
}
