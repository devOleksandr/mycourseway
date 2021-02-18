$( document ).ready(function() {
    // move to anchor
    $("body").on('click', '[href*="#"]', function(e){
        let fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });

});

<!-- Initialize Swiper -->
let swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
