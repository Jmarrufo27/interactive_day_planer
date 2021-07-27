var currentDay = document.getElementById('currentDay');
var today = moment();
var textboxes = document.getElementsByClassName('textarea');
var saveBtn = document.querySelectorAll('saveButton');
console.log(textboxes);

//function that prints the date and time in the currentDay element on the html 
function updateTime() {
    
    currentDay.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
//called update to run
updateTime();
//runs update() every second
setInterval(updateTime, 1000);


