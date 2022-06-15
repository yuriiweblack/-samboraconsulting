$(function(){

 $(".menu a, .go-up, .footer__logo").on("click", function(event){
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top}, 1500);
    })

    $('.button__btn, .menu a').on('click', function(){
        $('.header_top-inner').toggleClass('header_top-inner--active');
    });

});