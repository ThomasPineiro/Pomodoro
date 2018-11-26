var minute, second = 0;
var newTask = False;

//On Start click
$("#play-btn").click(function(){
    task = $("#tache").val();
    minute = $("#minutes").val();
    second = $("#seconds").val();
    //Using a variable with setInterval in order to use the clearInterval method
    countdown = setInterval
        (function() 
            {
                if (second == 0) {
                    minute --;
                    second = 60;
                };
                second --;
                //toString is converting minute and seconds into string, in order to allow the padStart method to be used.
                //padStart method allows us to have a 00:00 display instead of a 0:0. It works like this :
                //padStart(number of element in string to attain, 'character to display')
                $("#countdown").html('<p>'+minute.toString().padStart(2, '0')+':'+second.toString().padStart(2, '0')+'</p>');
                if (minute == 0 & second == 0) {
                    clearInterval(countdown);
                    //A remplacer par append si possible pour garder toute les taches
                    $("#listField").html('<ul>'+task+'</ul>');
                }
            }
        , 1000)
    }
);