jQuery(document).ready(function ($) {

    //slider
    $('#single-slider').slick({
        dots: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('#slider-wrapper .arrows'),
        autoplay: true,
        autoplaySpeed: 3000
    });

    //slide in product
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });


    const slickNav = $('.slider-nav');

    slickNav.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    centerPadding: '5px',
                }
            },
        ]
    });

    if (slickNav.length) {
        $('.slick-prev').click(function () {
            slickNav.slick('slickPrev');
        })

        $('.slick-next').click(function () {
            slickNav.slick('slickNext');
        })
    }

    $('.show-map').on('click', function () {
        $(this).next().slideToggle();
    })

    $('.hide-map-btn').on('click', function () {
        $(this).closest('.addresses-item').find('.map-wrap').slideUp();
    })

    /**
     * РњРµРЅСЋ РґР»СЏ РјРѕР±РёР»СЊРЅРѕРіРѕ
     */
    $('.btn-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active').next().slideToggle()
    })

    /* **** YANDEX MAP **** */
    var myMap;
    var myMap2;

    // Waiting for the API to load and DOM to be ready.
    ymaps.ready(init);


});

function init() {
    /**
     * Creating an instance of the map and binding it to the container
     * with the specified ID ("map").
     */
    myMap = new ymaps.Map('yamap', {
        /**
         * When initializing the map, you must specify
         * its center and the zoom factor.
         */
        center: [44.87911047025013, 41.22338122478162], // Moscow
        zoom: 18
    }, {
        // searchControlProvider: 'yandex#search'
        searchControlProvider: ''
    });
    myMap.geoObjects.add(new ymaps.Placemark([44.87911047025013, 41.22338122478162], {
        iconCaption: 'РџРёС‚РѕРјРЅРёРє Р‘РѕРіР°С‚РѕРІР° - РћСЃРЅРѕРІРЅРѕР№ РїРёС‚РѕРјРЅРёРє',
        balloonContent: 'Р¤РђР” "РљР°РІРєР°Р·" 178-Р№ РєРј, РїРѕРІРѕСЂРѕС‚ РЅР° РџРµСЂРІРѕРјР°Р№СЃРєРёР№'
    }, {
        //preset: 'islands#redGovernmentIcon'

        iconLayout: 'default#image',
        // РџСѓС‚СЊ РґРѕ РЅР°С€РµР№ РєР°СЂС‚РёРЅРєРё
        iconImageHref: '/img/logo_yandex.png',
        // Р Р°Р·РјРµСЂ РїРѕ С€РёСЂРёРЅРµ Рё РІС‹СЃРѕС‚Рµ
        iconImageSize: [150, 62],
        // РЎРјРµС‰РµРЅРёРµ Р»РµРІРѕРіРѕ РІРµСЂС…РЅРµРіРѕ СѓРіР»Р° РёРєРѕРЅРєРё РѕС‚РЅРѕСЃРёС‚РµР»СЊРЅРѕ
        // РµС‘ В«РЅРѕР¶РєРёВ» (С‚РѕС‡РєРё РїСЂРёРІСЏР·РєРё).
        iconImageOffset: [-130, -70]

    }));

    myMap.controls.remove('searchControl')
    myMap.behaviors.disable('scrollZoom');
    // console.log($( window ).width());
    if ($(window).width() < 1000) {
        myMap.behaviors.disable('drag');
    }

    //myMap.behaviors.disable('multiTouch');

    myMap2 = new ymaps.Map('yamap2', {
        /**
         * When initializing the map, you must specify
         * its center and the zoom factor.
         */
        center: [44.92853174919991, 41.1238763357669], // Moscow
        zoom: 18
    }, {
        // searchControlProvider: 'yandex#search'
        searchControlProvider: ''
    });
    myMap2.geoObjects.add(new ymaps.Placemark([44.92853174919991, 41.1238763357669], {
        iconCaption: 'РџРёС‚РѕРјРЅРёРє Р‘РѕРіР°С‚РѕРІР° - РўРѕСЂРіРѕРІР°СЏ РїР»РѕС‰Р°РґРєР°',
        balloonContent: 'Р¤РђР” "РљР°РІРєР°Р·" 168-Р№ РєРј, РђСЂРјР°РІРёСЂ, Рї.Р—Р°РІРµС‚РЅС‹Р№'
    }, {
        //preset: 'islands#redGovernmentIcon'

        iconLayout: 'default#image',
        // РџСѓС‚СЊ РґРѕ РЅР°С€РµР№ РєР°СЂС‚РёРЅРєРё
        iconImageHref: '/img/logo_yandex2.png',
        // Р Р°Р·РјРµСЂ РїРѕ С€РёСЂРёРЅРµ Рё РІС‹СЃРѕС‚Рµ
        iconImageSize: [150, 60],
        // РЎРјРµС‰РµРЅРёРµ Р»РµРІРѕРіРѕ РІРµСЂС…РЅРµРіРѕ СѓРіР»Р° РёРєРѕРЅРєРё РѕС‚РЅРѕСЃРёС‚РµР»СЊРЅРѕ
        // РµС‘ В«РЅРѕР¶РєРёВ» (С‚РѕС‡РєРё РїСЂРёРІСЏР·РєРё).
        iconImageOffset: [-30, -60]

    }));

    myMap2.controls.remove('searchControl')
    myMap2.behaviors.disable('scrollZoom');
    // console.log($( window ).width());
    if ($(window).width() < 1000) {
        myMap2.behaviors.disable('drag');
    }

    //myMap.behaviors.disable('multiTouch');


}

/* **** /YANDEX MAP **** */
//# sourceMappingURL=common.js.map