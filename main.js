$(".arrow").on('click', function(){
    if($(this).hasClass('next'))
    {
       var $nextEl = $('.acive').next();
       $(".active").removeClass("active");
       $nextEl.addClass("active");
    }
})