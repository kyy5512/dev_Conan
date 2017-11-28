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

$(function() {
  // Handler for .ready() called.
   $(".owl-carousel").owlCarousel({
        items: 3,
   });

});