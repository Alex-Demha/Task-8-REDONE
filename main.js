var interval;
var timer;
timer = function()
{interval = setInterval(function(){
    $('.next').click();}
    , 6000);
}
timer();

$(".arrow").on('click', function(){
    
    if($(this).hasClass('next'))
    {
        clearInterval(interval);
        timer();
        const $El = $(".active");
        const $activeMark = $(".markActive");
        if ($El.hasClass("text3")) {
            $('.text1').addClass("active").addClass('showNext').removeClass("showPrev");
            $('.mark1').addClass("markActive");
            $El.removeClass("active").removeClass("showNext").removeClass("showPrev");
            $('.mark3').removeClass('markActive');
        }
        else{
            $('.active').next().addClass('active').addClass('showNext').removeClass('showPrev');
            $('.markActive').next().addClass('markActive')
            $El.removeClass('active').removeClass("showNext").removeClass("showNext");
            $activeMark.removeClass('markActive')
        }
    }

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