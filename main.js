var minute, second = 0; 

//On Start click
$("#play-btn").click(function(){
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
                }
            }
        , 1000)
    }
);