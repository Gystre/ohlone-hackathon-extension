const url = chrome.runtime.getURL("data.json");
window.addEventListener("load", function () {
    const url = window.location.href;
    chrome.runtime.sendMessage({
        url,
    });
});
