// making a timed function that scrolls through the sliders every 8 seconds automatically (auto scroll)
var interval;
var timer;
timer = function()
{interval = setInterval(function(){
    $('.next').click();}
    , 8000);
}
timer();

$(".arrow").on('click', function(){
    
    //checking if its the right(next) or left(prev) arrow
    if($(this).hasClass('next'))
    {
        //when an arrow is cliked the timer for auto scroll is reset.
        clearInterval(interval);
        timer();

        //making variables for the currently active slide and its marker
        const $El = $(".active");
        const $activeMark = $(".markActive");

        //checking if the user on the last slide, pressing next-arrow would take him back to the first slide
        if ($El.hasClass("text3")) {
            $('.text1').addClass("active").addClass('showNext').removeClass("showPrev");
            $('.mark1').addClass("markActive");
            $El.removeClass("active").removeClass("showNext").removeClass("showPrev");
            $('.mark3').removeClass('markActive');
        }

        //taking the user to the next slide
        else{
            //adding and removing classes to the apropriate slides and markers.
            $('.active').next().addClass('active').addClass('showNext').removeClass('showPrev');
            $('.markActive').next().addClass('markActive')
            $El.removeClass('active').removeClass("showNext").removeClass("showNext");
            $activeMark.removeClass('markActive')
        }
    }


    //same as above but in reverse. next is prev
    if($(this).hasClass('prev'))
    {
        clearInterval(interval);
        timer();
        const $El = $(".active");
        const $activeMark = $(".markActive");
        if ($El.hasClass("text1")) {
            $('.text3').addClass("active").addClass('showPrev').removeClass("showNext");
            $('.mark3').addClass('markActive');
            $El.removeClass("active").removeClass("showNext").removeClass("showPrev");
            $('.mark1').removeClass('markActive');
        }
        else{
            $('.active').prev().addClass('active').addClass('showPrev').removeClass("showNext");
            $('.markActive').prev().addClass("markActive");
            $El.removeClass('active').removeClass("showNext").removeClass("showPrev");
            $activeMark.removeClass('markActive');
        }
    };
});




    
    




var $btn = $(".navButton");
$btn.on("click", function(){
    $("nav").toggleClass("reveal");
    $(".navButton").toggleClass("close");
    $("nav").toggleClass("overlay")
});