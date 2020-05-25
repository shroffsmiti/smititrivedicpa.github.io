(function ($) {

    "use strict";
  
      // PRE LOADER
      $(window).load(function(){
        $('.preloader').fadeOut(1000); // set duration in brackets    
        

        // set the nav as per page loaded
        var url = window.location;
        $('.nav.navbar-nav li').removeClass('active');
        $('.nav.navbar-nav a[href="'+ url +'"]').parent().addClass('active');
        $('.nav.navbar-nav a').filter(function() {
             return this.href == url;
        }).parent().addClass('active');
      });
  
  
      // MENU
      $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
        
        //set nav active
        $('.nav.navbar-nav li').removeClass('active');
        $(this).addClass('active');
      });
  
      $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
              $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
      });

      // HOME SLIDER & COURSES & CLIENTS
      $('.home-slider').owlCarousel({
        animateOut: 'fadeOut',
        items:1,
        loop:true,
        dots:false,
        autoplayHoverPause: false,
        autoplay: true,
        smartSpeed: 1000,
      }) 
  
  })(jQuery);
  