var minute, second = 0;
//newTask is not used yet
var newTask, paused = false;
var task, countdown;

//On Start click
$("#play-btn").click(function(){
    task = $("#task").val();
    if (paused == true) {
        minute = $("#timerMinutes").text();
        second = $("#timerSeconds").text();
    } else if (paused == false) {
        minute = $("#minutes").val();
        second = $("#seconds").val();
    }
    //Using a variable with setInterval in order to use the clearInterval method
    countdown = setInterval
        (function() 
            {
                if (second == 0 && minute != 0) {
                    minute --;
                    second = 60;
                };
                second --;
                //toString is converting minute and seconds into string, in order to allow the padStart method to be used.
                //padStart method allows us to have a 00:00 display instead of a 0:0. It works like this :
                //padStart(number of element in string to attain, 'character to display')
                $("#timerMinutes").html(minute.toString().padStart(2, '0'));
                $("#timerSeconds").html(second.toString().padStart(2, '0'));
                if (minute == 0 & second == 0) {
                    clearInterval(countdown);
                    $("#listField").append('<li>'+task+'</li>');
                }
            }
        , 1000)
    }
);

$("#pause-btn").click(function(){
    paused = true;
    clearInterval(countdown);
});


$("#stop-btn").click(function(){
    clearInterval(countdown);
    minute = $("#timerMinutes").html("00");
    second = $("#timerSeconds").html("00");
});

//Changer méthode de stockage task