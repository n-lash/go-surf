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

        //prevArrow: '<button type="button" class="slick-prev"><img src="./img/icons/arrow-left.svg" alt="Arrow left"></button>',
        //nextArrow: '<button type="button" class="slick-next"><img src="./img/icons/arrow-right.svg" alt="Arrow right"></button>',

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
    });

    $('.travel-slider').slick({
        infinite: true,
        arrows: true,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        prevArrow: '<img class="slider-arrow  slider-arrow--left" src="./img/icons/arrow-left.svg" alt="Arrow left">',
        nextArrow: '<img class="slider-arrow  slider-arrow--right" src="./img/icons/arrow-right.svg" alt="Arrow right">',
    });

    $('.sleep-slider').slick({
        infinite: true,
        arrows: true,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        prevArrow: '<img class="slider-arrow  slider-arrow--left" src="./img/icons/arrow-left.svg" alt="Arrow left">',
        nextArrow: '<img class="slider-arrow  slider-arrow--right" src="./img/icons/arrow-right.svg" alt="Arrow right">',
    });

    $('.shop-slider').slick({
        infinite: true,
        arrows: true,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        prevArrow: '<img class="slider-arrow  slider-arrow--left" src="./img/icons/arrow-left.svg" alt="Arrow left">',
        nextArrow: '<img class="slider-arrow  slider-arrow--right" src="./img/icons/arrow-right.svg" alt="Arrow right">',
    });

});

