var currentDay = $('#currentDay');
var today = moment();
var textboxes = $('.textarea');
var saveBtn = $('.saveBtn');
var hour = $('.hour');
var data = {hour9: '', hour10: '', hour11: '', hour12: '', hour13: '', hour14: '', hour15: '', hour16: ''};


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


saveBtn.on('click', function (event) {
    event.preventDefault();

    var clickedBtn = $(this);
    console.log(clickedBtn);

    var timeInput = clickedBtn.parent().children('.textarea');

    console.log(timeInput);
    
    var time = timeInput.attr('data-hour');
    var key = 'hour' + time
    data[key] = timeInput.val();
    
    localStorage.setItem( key, data[key]);

   console.log(timeInput.val())
    // $(window).on('ready', function (event) {
    //     event.preventDefault();
    //     timeInput.val(localStorage.getItem(key))
    // }
    
    
     
})
