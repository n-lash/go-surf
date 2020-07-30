$(document).ready(function(){

    $('.slider').slick({
        infinite: true,
        arrows: true,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        prevArrow: '<img class="slider-arrow  slider-arrow--left" src="./img/icons/arrow-left.svg" alt="Arrow left">',
        nextArrow: '<img class="slider-arrow  slider-arrow--right" src="./img/icons/arrow-right.svg" alt="Arrow right">',
        asNavFor: '.slider-dots',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.slider',
        infinite: false,
    });

    $('.surf-map').slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        infinite: false,
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<img class="slider-arrow  slider-arrow--left" src="./img/icons/arrow-left.svg" alt="Arrow left">',
        nextArrow: '<img class="slider-arrow  slider-arrow--right" src="./img/icons/arrow-right.svg" alt="Arrow right">',
        asNavFor: '.surf-map',
        responsive: [
            {
              breakpoint: 1151,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
              }
            },
            {
              breakpoint: 951,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 681,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
              }
            },
            {
                breakpoint: 481,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                // centerMode: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.travel-slider, .sleep-slider, .shop-slider').slick({
        infinite: true,
        arrows: true,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        prevArrow: '<img class="slider-arrow  slider-arrow--left" src="./img/icons/arrow-left.svg" alt="Arrow left">',
        nextArrow: '<img class="slider-arrow  slider-arrow--right" src="./img/icons/arrow-right.svg" alt="Arrow right">',
    });

    // $('.sleep-slider').slick({
    //     infinite: true,
    //     arrows: true,
    //     fade: true,
    //     speed: 500,
    //     cssEase: 'linear',
    //     prevArrow: '<img class="slider-arrow  slider-arrow--left" src="./img/icons/arrow-left.svg" alt="Arrow left">',
    //     nextArrow: '<img class="slider-arrow  slider-arrow--right" src="./img/icons/arrow-right.svg" alt="Arrow right">',
    // });

    // $('.shop-slider').slick({
    //     infinite: true,
    //     arrows: true,
    //     fade: true,
    //     speed: 500,
    //     cssEase: 'linear',
    //     prevArrow: '<img class="slider-arrow  slider-arrow--left" src="./img/icons/arrow-left.svg" alt="Arrow left">',
    //     nextArrow: '<img class="slider-arrow  slider-arrow--right" src="./img/icons/arrow-right.svg" alt="Arrow right">',
    // });

    $('.shop-slider__img-circle').on('click', function() {
        $(this).toggleClass('active')
    });
});

AOS.init();

const accHead = document.getElementsByClassName('surf-accordion__head');

if (accHead.length) {
    for (let i = 0; i < accHead.length; i++) {
        accHead[i].addEventListener('click', function() {
            this.classList.toggle('current');

            const accBody = this.nextElementSibling;
            if (accBody.style.display === 'block') {
                accBody.style.display = 'none';
            } else {
                accBody.style.display = 'block';
            }
        });
    }
}





    //prevArrow: '<button type="button" class="slick-prev"><img src="./img/icons/arrow-left.svg" alt="Arrow left"></button>',
    //nextArrow: '<button type="button" class="slick-next"><img src="./img/icons/arrow-right.svg" alt="Arrow right"></button>',
