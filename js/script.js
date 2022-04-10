$(function (){
    $('input[name=phone]').mask('+7 (999) 999-99-99');

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
                items:2,
            },
            600:{
                items:3,
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
                items:1.6,
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
                items:1.2,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    });

    $('.fact-mini-slider').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:24,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:6,
        navText: ['<span><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10.5 10.5L1 20" stroke="#E130B4" stroke-width="2"/></svg></span>','<span><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10.5 10.5L1 20" stroke="#E130B4" stroke-width="2"/></svg></span>'],
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
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


    $('.mob-nav a').on('click',function(e){
        e.preventDefault();
        $('.mob-nav a').removeClass('active');
        $(this).addClass('active');
        var tabId = $(this).attr('href');
        console.log(tabId);
        $('.mob-tab-content .mob-tab-pane').removeClass('active');
        $('.mob-tab-content ' + tabId).addClass('active');
    });


    $(function(){
        $(".option__login").click(function(){
          $(".input__login").addClass("input--error")
          $(".message").text("Неверный пароль или логин")
          $(".message-container").addClass("message-container--error");
        });
    });
    


    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
    
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
            //if ($this.children('option').eq(i).is(':selected')){
            //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
            //}
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    
    });

});

