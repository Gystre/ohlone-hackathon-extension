$(document).ready(function () {
    $("#name").text("yeah nice");
    chrome.extension.sendMessage({ loaded: true }, function (response) {
        // not getting the response from background.js?
        console.log(response);
    });
});
