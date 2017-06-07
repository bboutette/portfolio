$( document ).ready(function() {
    console.log( "ready!" );

    // Carousel Begins
    $('#myCarousel').carousel(500);
    // fade in on dom hit
    $(".fadeIn").css({opacity: 0, visibility: "visible"}).animate({opacity: 1.0}, 1000);
    // fade in on scroll to top of container
    $(window).scroll( function(){
      // Carousel Ends

      // FadeIn Begins
        /* Check the location of each desired element */
        $('.container').each( function(i){

            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > top_of_object ){

                $(this).animate({'opacity':'1'},1500);

            }

        });

    });
    // FadeIn Ends


});
