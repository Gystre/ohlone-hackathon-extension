window.addEventListener("load", function () {
    const url = window.location.href;

    chrome.runtime.sendMessage({
        url,
    });
});
