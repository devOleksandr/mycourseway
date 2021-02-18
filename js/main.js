$( document ).ready(function() {
    // move to anchor
    $("body").on('click', '[href*="#"]', function(e){
        let fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });

});

//mobile menu
$('.mobile-nav__btn').click(function () {
    $('.mobile-menu').toggleClass('active');
});
$('.mobile-menu__link').click(function () {
    $('.mobile-menu').removeClass('active');
});


<!-- Initialize Swiper -->
let swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320:{
            slidesPerView: 1,

        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4,
        }
    }
});
