
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

