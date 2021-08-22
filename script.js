
//created variable date to capture time; humanReadable to format it; and clockEl
// to reference the html
const clockEl = document.getElementById('currentDay')

//this function will display the date and time and update it each second.
function updateTime () {
    const date = moment();
    const humanReadable = date.format('dddd, MMMM Do, YYYY, hh:mm:ssA')
    clockEl.textContent = humanReadable;
}
setInterval(updateTime, 1000); 
updateTime();

//scheduler functions

//When you click the save button, it logs the time and text

$(".saveBtn").on("click", function(){
    console.log(this);
    var text = $(this).siblings(".project").val();
    var time = $(this).parent(). attr("id");
    localStorage.setItem(time, text);
})

$("#hour7 .project").val(localStorage.getItem("hour7"));
$("#hour8 .project").val(localStorage.getItem("hour8"));
$("#hour9 .project").val(localStorage.getItem("hour9"));
$("#hour10 .project").val(localStorage.getItem("hour10"));
$("#hour11 .project").val(localStorage.getItem("hour11"));
$("#hour12 .project").val(localStorage.getItem("hour12"));
$("#hour13 .project").val(localStorage.getItem("hour13"));
$("#hour14 .project").val(localStorage.getItem("hour14"));
$("#hour15 .project").val(localStorage.getItem("hour15"));
$("#hour16 .project").val(localStorage.getItem("hour16"));
$("#hour17 .project").val(localStorage.getItem("hour17"));
$("#hour18 .project").val(localStorage.getItem("hour18"));
$("#hour19 .project").val(localStorage.getItem("hour19"));

//Hour tracker to determine past, present and future

function hourTracker() {
    var currentHour = moment().hour();

    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour)

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).addClass("future");
            $(this).removeClass("present");
        }
    })
}

hourTracker();