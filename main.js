$( document ).ready(function() {
    console.log( "ready!" );
    $("#slides").slidesjs({
        width: 940,
        height: 528
});


    // Carousel Begins
    $('#myCarousel').carousel();
    $(".fadeIn").css({opacity: 0, visibility: "visible"}).animate({opacity: 1.0}, 1000);
    $(window).scroll( function(){
      // Carousel Ends
      // Slider begins
      // $('.bxslider').bxSlider();
      // Slider Ends
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

    // LightBox SlideShow Begins

  $(".slideshow-img:gt(0)").hide();

  setInterval(function() {
  $('.slideshow-img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
    },  3000);



});
