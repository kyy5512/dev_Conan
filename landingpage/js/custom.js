/*===============================================
           WOW
=================================================*/
$(function() {
  // Handler for .ready() called.
    new WOW().init();

});

/*================================================
           Maginific Popup
http://dimsemenov.com/plugins/magnific-popup/documentation.html
===================================================*/
$(function() {
  // Handler for .ready() called.
    $('#work').magnificPopup({
        delegate: 'a', //child items selectior, by clicking on it popup will open
        type: 'image' ,
        gallery:{
            enabled: true
        }
        // other option
       })

});

/*$('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', //the selector for gallery item
        type: 'image',
        gallery: {
            enabled:true
        }
    });
});*/

/*================================================
    Owl Carousel
     http://owlcarousel2.github.io/OwlCarousel2/
===================================================*/

$(function(){
   $("#team-members").owlCarousel({
        items: 3,
        autoplay:true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true

    });
});


/*================================================
    testimonials
===================================================*/

$(function(){
   $("#clients-list").owlCarousel({
        items: 4,
        autoplay:true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true

    });
});

/*================================================
                counterup
    http://github.com/ciromattia/jquery.counterup
===================================================*/
$(function(){
   $('.counter').counterUp({
    delay: 10,
    time: 2000,
    });
});