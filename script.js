var currentDay = $('#currentDay');
var today = moment();
var textboxes = $('.textarea');
var saveBtn = $('.saveButton');
var input = document.getElementsByClassName('input');
var hour = document.getElementsByClassName('hour');
console.log(textboxes);

//function that prints the date and time in the currentDay element on the html 
function updateTime() {
    
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
//called update to run
updateTime();
//runs update() every second
setInterval(updateTime, 1000);

function colorCode() {

    for (let i = 0; i < textboxes.length; i++) {
        const input = textboxes[i];

        if (input.dataset.hour < today.format('H')) {
            input.classList.add('past')
        }
        else if (input.dataset.hour == today.format('H')) {
            input.classList.add('present')
        }
        else if (input.dataset.hour > today.format('H')) {
            input.classList.add('future')
        }
        
    }
}
//calls function colorCode()
colorCode();
//set and interval to run the function 'colorCode()' every 60secs
setInterval(colorCode, 60 * 1000);


saveBtn.addEventListener('click', function (event) {
    event.preventDefault();


    for (let i = 0; i < input.length; i++) {
        const textbox = input[i];

        if(textbox.value !== ""){
                
              var toDO =  localStorage.setItem("todo", input.value);
            input.text(localStorage.getItem(input));
            }
            
        }   
    })
