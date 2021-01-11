// jQuery ready method
$(document).ready(function() {

    // This checks whether the local storage has the proper values and adds them if not
    /* This only checks for the "Hour9Text". If "Hour9Text" was there, but a different
       value was gone, then an hour would occur upon trying to pull from storage.
       There are a couple of ways that I could fix this. First, I could put all of the
       values into a single array. I would need to alter the gets and sets in other parts
       of the code to be compatible with this. Second, I could just check for each item
       individually. This would be pretty poor looking code, but it would patch the error
       and allow me to avoid JSON. */
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

    // These lines get the current day and put it into the "currentDay" element
    var currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDay);    

    // A for-loop that pulls from text from local storage and highlights the time blocks
    for (var i = 9; i < 18; i++) {

        // Gets the appropriate textarea as a jQuery object
        var textArea = $("#hour" + i);

        // Gets text from local storage and sets it into the textarea
        var storedText = localStorage.getItem("Hour" + i + "Text");
        textArea.text(storedText);

        // Gets the current time
        var currentTime = moment().hour();

        // If-statements that highlight the textareas with the past, present, and future classes
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

    // This is a click listener attached to the container that delegates to the save button
    $(".container").on("click", ".saveBtn", function() {

        // This gets the data-hour attribute from the save button
        var hour = this.dataset.hour;

        // This grabs the text from the corresponding textarea
        var text = $("#hour" + hour).val();

        // This concatenates the local storage value's name
        var storageName = "Hour" + hour + "Text";

        // This sets the local storage value to the text of the corresponding textarea
        localStorage.setItem(storageName, text);
    })
});