$( document ).ready(function() {
    console.log( "ready!" );
    $('#myCarousel').carousel();
//     $(".fadeIn").css({opacity: 0, visibility: "visible"}).animate({opacity: 1.0}, 5000);
    
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.container').each( function(i){
    
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
    
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
    
                $(this).animate({'opacity':'1'},500);
    
            }
    
        });
});





    //fade in with scroll??
    //Show/Hide Text on email confirmation in form
    //Store email addresses of subscribers
    //

    //})
    // $(window).scroll( function(){
    //
    //     /* Check the location of each desired element */
    //     $('container').each( function(i){
    //
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
    //
    //         /* If the object is completely visible in the window, fade it in */
    //         if( bottom_of_window > bottom_of_object ){
    //
    //             $(this).animate({'opacity':'1'},500);
    //
    //         }
    //
    //     });
