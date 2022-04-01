$(function (){
    $('input[name=phone]').mask('+7 (999) 999-99-99');
    $('.scroll-down-btn').on('click', function(e) {
      e.preventDefault(); // Запрещаем переход по ссылке
      var target= $(this).attr('href'), // Берем значение из ссылки как цель id="second-screen"
            destination= $(target).offset().top; // Ищем верхнюю координату у нашей цели

      $('body,html').animate({scrollTop: destination}, 500); // Плавно проматываем до цели
    });
    $('header .nav-link').on('click', function(e) {
      e.preventDefault(); // Запрещаем переход по ссылке
      var target= $(this).attr('href'), // Берем значение из ссылки как цель id="second-screen"
            destination= $(target).offset().top; // Ищем верхнюю координату у нашей цели

      $('body,html').animate({scrollTop: destination}, 500); // Плавно проматываем до цели
    });

    $('.main-slide').owlCarousel({
        loop:true,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:0,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<img src="images/arrow-left.png">','<img src="images/arrow-left.png">'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
                margin:0,
            },
            1000:{
                items:1,
                margin:0,
            }
        }
    });


    $('.menu-mob, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.top-left').toggleClass('active');
    });

    
    

});

