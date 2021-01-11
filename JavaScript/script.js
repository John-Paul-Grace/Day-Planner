// jQuery ready method
$(document).ready(function() {

    // This checks whether the local storage has the proper values and adds them if not
    if(!localStorage.getItem("Hour9Text")) {

        localStorage.setItem("Hour9Text", "");
        localStorage.setItem("Hour10Text", "");
        localStorage.setItem("Hour11Text", "");
        localStorage.setItem("Hour12Text", "");
        localStorage.setItem("Hour13Text", "");
        localStorage.setItem("Hour14Text", "");
        localStorage.setItem("Hour15Text", "");
        localStorage.setItem("Hour16Text", "");
        localStorage.setItem("Hour17Text", "");
    }

    var currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDay);    

    for (var i = 9; i < 18; i++) {

        var textArea = $("#hour" + i);
        var currentTime = moment().hour();

        var storedText = localStorage.getItem("Hour" + i + "Text");
        textArea.text(storedText);

        if (currentTime > i) {
            textArea.addClass("past");
        }
        else if (currentTime < i) {
            textArea.addClass("future");
        }
        else {
            textArea.addClass("present");
        }
    }

    $(".container").on("click", ".saveBtn", function() {

        var hour = this.dataset.hour;
        var text = $("#hour" + hour).val();
        var storageName = "Hour" + hour + "Text";

        localStorage.setItem(storageName, text);
    })

});