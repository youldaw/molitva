$(function (){
    // $('input[name=phone]').mask('+7 (999) 999-99-99'); q

    $('.mini-slider').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:24,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:6,
        navText: ['<span><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10.5 10.5L1 20" stroke="white" stroke-width="2"/></svg></span>','<span><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10.5 10.5L1 20" stroke="white" stroke-width="2"/></svg></span>'],
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:4,
            },
            1000:{
                items:5,
            }
        }
    });

    $('.second-slider').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:20,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:2,
        navText: ['<span><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10.5 10.5L1 20" stroke="white" stroke-width="2"/></svg></span>','<span><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10.5 10.5L1 20" stroke="white" stroke-width="2"/></svg></span>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:2,
            }
        }
    });

    $(".chapel-gallery").owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:16,
        nav: false,
        dots:true,
        autoWidth: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items: 3
            }
        }
        
    });


    $('.menu-mob, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.top-left').toggleClass('active');
    });

    $('.search-opener').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active');
        $('.searchbox').addClass('active');
    });
    $(document).mouseup(function (e){
        var div = $(".searchbox, .search-opener");
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
            div.removeClass('active');
        }
    });
    

});

