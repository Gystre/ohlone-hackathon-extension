$(document).ready(function () {
    let bg = chrome.extension.getBackgroundPage();
    const data = bg.getCurrentSite();
    $("#name").text(data.name);

    if (data.eupediaScore != "") {
        $("#eupediaScore").text("Eupedia: " + data.eupediaScore);
    } else {
        $("#eupediaScore").text("No eupedia score available");
    }

    $("#goodOnYouScore").text("Good on you: " + data.goodOnYouScore);

    if (data.reason.length > 0) {
        var set = "";
        data.reason.map((r) => {
            set += "<li>" + r + "</li>";
        });
        $("#reason").html(set);
    }
});
